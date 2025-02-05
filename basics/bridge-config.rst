:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/basics/bridge-config.rst

Bridge Configuration
=========================
A config file is generated in the registration step of the Bridge node install process and saved as e.g phntm_bridge.yaml.
Here's the full list of configurable options:

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:
        id_robot: %ID_ROBOT% # robot's ID
        key: %SECRET_KEY% # robot's secrey key
        name: 'Unnamed Robot' # the name to show in the UI
        maintainer_email: 'robot.master@domain.com' # your e-mail for service announcements

        ## The Cloud Bridge instance to connect to
        cloud_bridge_address: https://bridge.phntm.io

        ## Socket.io config
        sio_path: /robot/socket.io
        sio_port: 1337
        sio_ssl_verify: True
        sio_connection_retry_sec: 5.0

        ## File Receiver
        file_upload_port: 1336,

        ## WebRTC config
        ## This config is loaded from the Cloud Brige but can be extended or overriden
        use_cloud_ice_config: True # cloud config ignored if False
        ice_servers: # custom ICE servers (will be added to Cloud Bridge's list if use_cloud_ice_config==True)
         - 'turn:ca.turn.phntm.io:3478'
         - 'turn:ca.turn.phntm.io:3479'
        ice_username: 'robo' # STUN/TURN credentials, robot's ID is used if ''
        ice_secret: 'pass' # STUN/TURN password

        log_sdp: True # verbose WebRTC debug
        log_heartbeat: True # debug heartbeat

        ## Introspection
        discovery_period_sec: 3.0 # < 0 introspection OFF
        stop_discovery_after_sec: 10.0 # < 0 run forever

        ## Extra packages to install on the 1st container run
        ## (See Custom message & Service types)
        extra_packages:
         - /ros2_ws/src/vision_msgs
         - /ros2_ws/src/astra_camera_msgs
         - some_other_package

        ## Blink LEDs via GPIO on network activity
        ## (See Status LEDs)
        conn_led_gpio_chip: /dev/gpiochip0
        conn_led_pin: 23
        data_led_pin: 24
        ## ... or blink LEDs via ROS topics (producing std_msgs/msg/Bool):
        conn_led_topic: /some/led_topic_1
        data_led_topic: /some/led_topic_2

        ## Custom topic configs (see more below)
        /robot_description:
          reliability: 1 # Reliable
          durability: 1 # Transient local
          lifespan_sec: -1 # Infinity
        /battery:
          min_voltage: 9.0 # empty voltage
          max_voltage: 12.6 # full voltage

        ui_battery_topic: /battery # battery to show in the UI, '' to disable

        ui_wifi_monitor_topic: '/iw_status' # WiFi monitor topic to show in the UI (produced by the Agent)
        ui_enable_wifi_scan: True # must be also enabled in Agent config
        ui_enable_wifi_roam: False # must be also enabled in Agent config

        ui_docker_control: True # Docker control via Agent
        docker_monitor_topic: /docker_info # produced by the Agent

        ## User input config (see User input & Teleoperation)
        input_drivers: [ 'Twist', 'Joy' ] # enabled input drivers, use [ '' ] to disable user input entirely
        input_defaults: /ros2_ws/phntm_input_config.json # path to input defaults config file as mapped inside the container
        custom_input_drivers: [] # custom drivers to load, see Implementing custom drivers

        ## Services input config (see Services)
        service_defaults: /ros2_ws/phntm_services_config.json # path to services defaults config file as mapped inside the container
        custom_service_widgets: [] # custom widgets to load, see Implementing custom widgets
        service_widgets: [] # custom widgets service mapping, see Implementing custom widgets


Topic Subscription Options
--------------------------
Each topic subscription can be configured separately in the phntm_bridge.yaml file.
Common cofiguration includes the ROS QOS subcriber options, e.g:

.. code-block::
   :caption: phntm_bridge.yaml

    /some_topic:
      reliability: 2 # 0 = System default, 1 = Reliable, 2 = Best effort (default)
      durability: 2 # 0 = System default, 1 = Transient local, 2 = Volatile (default)
      lifespan_sec: -1 # -1 = Infinity (default)

.. _topic-specific-options:

Some configuraton options are further specific to the topic's message type:

.. _camera-info-config:

sensor_msgs/msg/CameraInfo
--------------------------
Used by :ref:`3D Scene View <3d-scene-view-widget>`

.. code-block::
   :caption: phntm_bridge.yaml

    /some_camera/camera_info_topic:
      frustum_color: 'cyan' # color name or hex (e.g. '#00ff00')
      frustum_near: 0.01 
      frustum_far: 1.0 
      force_frame_id: 'camera_color' # force frame_id in URDF model (in the UI)

.. _battery-state-config:

sensor_msgs/msg/BatteryState
----------------------------
Used by :ref:`Battery State <battery-state-widget>`

.. code-block::
   :caption: phntm_bridge.yaml

    /some_battery_topic:
      min_voltage: 9.0 # battery empty voltage
      max_voltage: 12.6 # battery full voltage

.. _detection-array-config:

vision_msgs/msg/Detection2DArray, Detection3DArray
--------------------------------------------------
Used by :ref:`Video <video-widget>` overlay and :ref:`3D Scene View <3d-scene-view-widget>`

.. code-block::
   :caption: phntm_bridge.yaml

    /some_detection_topic:
      input_width: 416 # detection input frame width
      input_height: 416 # detection input frame height
      label_map: [ 'person', 'woman', 'man', 'camera', 'TV' ] # class label map

.. _image-config:

sensor_msgs/msg/Image
---------------------
Configuration is only needed for processing of Image message containing depth frames.
Supported depth image types are '16UC1', 'mono16', and '32FC1'.
The colormap parameter is an integer value from the `cv2.COLORMAP <https://docs.opencv.org/4.x/d3/d50/group__imgproc__colormap.html#enum-members>`_ enum and is only used to stylize the non-RGB frame encodings.
See :doc:`Video & Image topics </video-and-image-topics>` for more on Image topics processing.

.. code-block::
   :caption: phntm_bridge.yaml

    /some_depth_image_topic:
      max_sensor_value: 4000.0 # depth max distance from the sensor in mm
      colormap: 13 # cv2.COLORMAP, e.g. 13 = cv2.COLORMAP_MAGMA