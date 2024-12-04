Bridge configuration
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

        ## Socket.io config
        sio_address: https://bridge.phntm.io
        sio_path: /robot/socket.io
        sio_port: 1337
        sio_ssl_verify: True
        sio_connection_retry_sec: 5.0

        ## WebRTC config
        ice_servers:
         - 'turn:turn.phntm.io:3478'
         - 'turn:turn.phntm.io:3479'
        ice_username: 'robo' # TURN server auth (this will change at some point)
        ice_credential: 'pass'
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


Topic subscription options
--------------------------
Each topic subscription can be configured separately in the phntm_bridge.yaml file.
Common cofiguration includes the ROS QOS subcriber options, e.g:

.. code-block::
   :caption: phntm_bridge.yaml

    /some_topic:
      reliability: 2 # 0 = System default, 1 = Reliable, 2 = Best effort (default)
      durability: 2 # 0 = System default, 1 = Transient local, 2 = Volatile (default)
      lifespan_sec: -1 # -1 = Infinity (default)


Some configuraton options are further specific to the topic's message type:

sensor_msgs/msg/CameraInfo
--------------------------
.. code-block::
   :caption: phntm_bridge.yaml

    /some_camera/camera_info_topic:
      frustum_color: 'cyan' # color name or hex (e.g. '#00ff00')
      frustum_near: 0.01 
      frustum_far: 1.0 
      force_frame_id: 'camera_color' # force frame_id in URDF model (in the UI)

sensor_msgs/msg/BatteryState
----------------------------
.. code-block::
   :caption: phntm_bridge.yaml

    /some_battery_topic:
      min_voltage: 9.0 # battery empty voltage
      max_voltage: 12.6 # battery full voltage

vision_msgs/msg/Detection2DArray, Detection3DArray
------------------------------------------------------------------
.. code-block::
   :caption: phntm_bridge.yaml

    /some_detection_topic:
      input_width: 416 # detection input frame width
      input_height: 416 # detection input frame height
      label_map: [ 'person', 'woman', 'man', 'camera', 'TV' ] # class label map

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