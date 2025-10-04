:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/basics/bridge-client-config.rst

Bridge Client Configuration
===========================
A config file is generated in the registration step of the Bridge Client node install process and saved as e.g phntm_bridge.yaml.
Here's the full list of configurable options:

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        id_robot: %ID_ROBOT% # robot's ID
        key: %SECRET_KEY% # robot's secrey key
        name: 'Unnamed Robot' # the name to show in the UI

        maintainer_email: 'robot.master@domain.com' # your e-mail for service announcements
        consent_map: True # display this robot and its connected operators' approximate location in our community map at https://map.phntm.io

        ## The Bridge Server instance to connect to
        bridge_server_address: https://us-ca.bridge.phntm.io

        ## Socket.io config
        sio_path: /robot/socket.io/ # must end with /
        sio_port: 1337
        sio_ssl_verify: True
        sio_connection_retry_sec: 5.0
        sio_debug: False # verbose Socket.io debug logging
        sio_verbose: False # prints out received and sent messages, too

        ## File Receiver
        file_upload_port: 1336

        ## WebRTC config
        ## This config is loaded from the Brige Server but can be extended or overriden
        use_cloud_ice_config: True # server config ignored if False
        ice_servers: # custom ICE servers (will be added to server's list if use_cloud_ice_config==True)
         - 'turn:ca.turn.phntm.io:3478'
         - 'turn:ca.turn.phntm.io:3479'
        ice_username: 'robo' # STUN/TURN credentials, robot's ID is used if empty
        ice_secret: 'pass' # STUN/TURN password, robot's KEY is used if empty
        enable_ice_udp_mux: True # multiple WebRTC peer connections can be multiplexed over a single UDP port
        enable_ice_tcp: False # in addition to the default UDP candidates, the library will also attempt to establish peer-to-peer connections over TCP if UDP is unavailable or blocked by network restrictions
        disable_fingerprint_verification: False

        log_sdp: True # verbose WebRTC debug
        webrtc_debug: True # debug webrtc logging
        webrtc_verbose: False
        log_heartbeat: True # debug heartbeat
        log_message_every_sec: 10.0f

        ## Introspection
        discovery_period_sec: 3.0 # <0 introspection is disabled
        stop_discovery_after_sec: 10.0 # <0 run forever (default)

        ## Extra ROS packages to install on container run
        ## (See Custom message & Service types)
        extra_packages:
         - /ros2_ws/src/vision_msgs # path to a custom package source directory (inside the container)
         - /ros2_ws/src/astra_camera_msgs
         - some_other_package # binary package name to be installed with apt-get (this will be translated ros-%DISTRO%-some-other-package)

        ## Pop-up info dialog shown on UI load (like the one in the Demos)
        description_header: "Popup dialog's header"
        description: "Popup dialog's body, some HTML is ok"

        ## Blink LEDs via GPIO on network activity
        ## (See Status LEDs)
        conn_led_gpio_chip: /dev/gpiochip0
        conn_led_pin: 23
        data_led_pin: 24
        ## ... or blink LEDs via ROS topics (producing std_msgs/msg/Bool):
        conn_led_topic: /some/led_topic_1
        data_led_topic: /some/led_topic_2

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
        collapse_unhandled_services: True # the UI will collapse services with unsupported message types
        service_timeout_sec: 20.0 # timeout for service reply
        service_calls_verbose: False

        # Blacklisting
        blacklist_topics: [] # blacklist topics from discovery (msg types or full topic ids)
        blacklist_services: [] # blacklist services from discovery (msg types or full service ids)
        blacklist_msg_types: [] # blacklist IDL definitions from discovery and upload (msg types)

        low_fps_default: 25 # low fps warning default for all topics

        file_chunks_topic: /file_chunks # receiving extracted file chunks from Agent nodes on this topic

        ## Custom topic config example (see more below)
        /robot_description:
          reliability: RELIABLE 
          durability: TRANSIENT_LOCAL
          lifespan_sec: -1.0 # Infinity
          low_fps: 30 # low fps warning warning
        /battery:
          min_voltage: 9.0 # empty voltage
          max_voltage: 12.6 # full voltage

Topic Subscription QoS Options
------------------------------
Each topic subscription can be configured separately in the phntm_bridge.yaml file.
Common cofiguration includes the ROS QoS subcriber options, e.g:

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_topic:
          reliability: BEST_EFFORT # SYSTEM_DEFAULT, RELIABLE, BEST_EFFORT (default)
          durability: VOLATILE # SYSTEM_DEFAULT, TRANSIENT_LOCAL, VOLATILE (default)
          history_depth: 10
          lifespan_sec: -1.0 # -1.0 = Infinity (default)


.. _topic-specific-options:

Some configuraton options are further specific to the topic's message type:

.. _camera-info-config:

sensor_msgs/msg/CameraInfo
--------------------------
Used by :ref:`3D Scene View <3d-scene-view-widget>`

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

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

    /**:
      ros__parameters:

        /some_battery_topic:
          min_voltage: 9.0 # battery empty voltage
          max_voltage: 12.6 # battery full voltage

.. _detection-2d-array-config:

vision_msgs/msg/Detection2DArray
--------------------------------
Used by :ref:`Video <video-widget>` overlay 

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_2d_detection_topic:
          input_width: 416 # detection input frame width
          input_height: 416 # detection input frame height
          label_map: [ 'person', 'woman', 'man', 'camera', 'TV' ] # class label map

.. _detection-3d-array-config:

vision_msgs/msg/Detection3DArray
--------------------------------
Used by :ref:`3D Scene View <3d-scene-view-widget>`, models are extracted from the robot's running Docker containers and cached on the server using the :doc:`File Extraction functionality </file-extraction>`.

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_3d_detection_topic:
          label_map: [ 'person', 'woman', 'man', 'camera', 'TV' ] # class label map
          model_map: # must be in the same order as the label_map
            - package://path_to_model/person_model.stl scale=[1.0,1.0,1.0] # stl model with scale set
            - file://path_to_model/woman_model.dae color=#00ff00 
            - none # no model, use oriented bounding box
            - file://path_to_model/camera_model.dae scale=[2.0,2.0,2.0] color=red # collada model with scale and color set
            - file://path_to_model/tv_model.stl
          use_model_materials: True # whether to use model's own materials (default), or just a color (magenta by default)

.. _video-config:

ffmpeg_image_transport_msgs/msg/FFMPEGPacket
--------------------------------------------

Configuration for streaming of encoded H.264 frames.
See :doc:`Video & Image topics </video-and-image-topics>` for more on Image topics processing.

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        # QoS defaults for all encoded video topics
        video_topics_default_depth: 10
        video_topics_default_reliability: RELIABLIE
        video_topics_default_durability: VOLATILE
        video_topics_default_lifespan_sec: -1.0

        /some_encoded_video_topic:
          debug_num_frames: 1 # will debug this many frames (inspects NAL units)
          debug_verbose: False # will debug every frame
          create_node: True # create a special ROS node for this topic

.. _image-config:

sensor_msgs/msg/Image
---------------------
Configuration for processing of Image message containing uncompressed pixel buffers and depth frames.
Supported depth image types are '16UC1', 'mono16', and '32FC1'.
The colormap parameter is an integer value from the `cv2.COLORMAP <https://docs.opencv.org/4.x/d3/d50/group__imgproc__colormap.html#enum-members>`_ enum and is only used to stylize the non-RGB frame encodings.
See :doc:`Video & Image topics </video-and-image-topics>` for more on Image topics processing.

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        # default encoder configuration for all Image topics
        encoder_default_hw_device: sw # sw, cuda, vaapi
        encoder_default_thread_count: 2
        encoder_default_gop_size: 30 # key frame every N frames
        encoder_default_bit_rate: 5000000 # 610 KB/s

        # QoS defaults for all Image topics
        image_topics_default_depth: 1
        image_topics_default_reliability: BEST_EFFORT
        image_topics_default_durability: VOLATILE
        image_topics_default_lifespan_sec: -1.0

        /some_image_topic:
          debug_num_frames: 1 # will debug this many frames (inspects NAL units)
          debug_verbose: False # will debug every frame
          create_node: True # create a special ROS node for this topic
          encoder_hw_device: sw # sw, cuda, vaapi
          encoder_thread_count: 2
          encoder_gop_size: 30 # key frame every N frames
          encoder_bit_rate: 5000000 # 610 KB/s

        /some_depth_image_topic:
          max_sensor_value: 4000.0 # depth max distance from the sensor in mm
          colormap: 13 # cv2.COLORMAP, e.g. 13 = cv2.COLORMAP_MAGMA

.. _compresses-image-config:

sensor_msgs/msg/CompressedImage
-------------------------------
Configuration for processing of compressed Image message containing PNG or JPEG frames.
See :doc:`Video & Image topics </video-and-image-topics>` for more on Image topics processing.

.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        # default encoder configuration for all Image topics
        encoder_default_hw_device: sw # sw, cuda, vaapi
        encoder_default_thread_count: 2
        encoder_default_gop_size: 30 # key frame every N frames
        encoder_default_bit_rate: 5000000 # 610 KB/s

        # QoS defaults for all Image topics
        image_topics_default_depth: 1
        image_topics_default_reliability: BEST_EFFORT
        image_topics_default_durability: VOLATILE
        image_topics_default_lifespan_sec: -1.0

        /some_compressed_image_topic:
          debug_num_frames: 1 # will debug this many frames (inspects NAL units)
          debug_verbose: False # will debug every frame
          create_node: True # create a special ROS node for this topic
          encoder_hw_device: sw # sw, cuda, vaapi
          encoder_thread_count: 2
          encoder_gop_size: 30 # key frame every N frames
          encoder_bit_rate: 5000000 # 610 KB/s