:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/basics/bridge-client-config.rst

Configuration
=============
A YAML configuration file is generated in the registration step of the Bridge Client install process. In this documentation we refer to it as ``phntm_bridge.yaml``,
it needs to be mapped into the Client's container as ``/ros2_ws/phntm_bridge_params.yaml``. The initial file comes with your secret credentials and a few common options pre-configured.
Here's the full reference of all the configurable options.


Basics
------
.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        id_robot: '%ID_ROBOT%' # robot's ID generated during registration
        key: '%SECRET_KEY%' # robot's secret key generated during registration
        name: 'Unnamed Robot' # the name to show in the UI

        maintainer_email: 'robot.master@domain.com' # your e-mail for service announcements

        bridge_server_address: https://us-ca.bridge.phntm.io # the Bridge Server instance to connect to

The ``bridge_server_address`` parameter is initially set to the closest available Phantom Bridge Server from the robot's location.
It can be changed as needed, for instance when the robot moves, see :doc:`Availability Zones </availability-zones>` for more servers.


UI Customization
----------------
.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        battery_topic: /battery # battery to show in the UI, '' to disable

        wifi_monitor_topic: '/iw_status' # WiFi monitor topic to show in the UI (produced by the Agent)
        enable_wifi_scan: True # must be also enabled in Agent config
        enable_wifi_roam: False # must be also enabled in Agent config

        docker_monitor_topic: '/docker_info' # produced by the Agent
        enable_docker_control: True # Docker control via Agent

        low_fps_default: 25 # low fps warning default for all topics

        peer_limit: 10 # limits the numbers of users that can connect to the robot at the same time (DDOS protection)

        about_dialog_header: "Popup dialog's header" # pop-up dialog shown on UI load (like the one in the Demos)
        about_dialog: "Popup dialog's body, <b>some HTML is ok.</b>" # you can customize this HTML with ui_custom_includes_css


Individual UI Widget Options
----------------------------

Many UI panel widgets define and expect custom configuration parameteres in the YAML file. 
See :doc:`Built-in Widgets </ui-widgets/index>` for full reference.


Introspection & Blacklisting
----------------------------
These settings affect how topics, nodes and services are discovered.

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        discovery_period_sec: 3.0 # <0 introspection is disabled
        stop_discovery_after_sec: 10.0 # <0 run forever (default)

        blacklist_topics: [] # blacklist topics from discovery (msg types or full topic ids)
        blacklist_services: [] # blacklist services from discovery (msg types or full service ids)
        blacklist_msg_types: [] # blacklist IDL definitions from discovery and upload (msg types)


Topic Subscription QoS
----------------------
Subscription QoS can be configured individually for every topic.
When QoS is set to be ``RELIABLE``, extra effort is taken to make sure at least the latest message in the topic is always delivered.
``BEST_EFFORT`` + ``VOLATILE`` are the default and recommended options for most topics, however, ``/rosout``, ``/robot_description`` and ``/tf_static`` topics are strongly recommented
to be configured as ``RELIABLE`` + ``TRANSIENT_LOCAL`` to ensure delivery of all their messages. 

Low FPS / Hz warning threshold can be also set individually for every topic, the default value is set by ``low_fps_default``.

Note that ``Image``, ``CompressedImage`` and ``Video`` topics have different QoS defaults, more about this in :doc:`Video Processing </video-and-image-topics>`.

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_topic:
          reliability: BEST_EFFORT # SYSTEM_DEFAULT, RELIABLE, BEST_EFFORT (default)
          durability: VOLATILE # SYSTEM_DEFAULT, TRANSIENT_LOCAL, VOLATILE (default)
          history_depth: 10
          lifespan_sec: -1.0 # -1.0 = Infinity (default)
          low_fps: 10 # specify threshold for unhealthy FPS warning

        # QoS defaults for all Image/CompressedImage topics
        image_topics_default_reliability: BEST_EFFORT
        image_topics_default_durability: VOLATILE
        image_topics_default_depth: 1
        image_topics_default_lifespan_sec: -1.0

        # QoS defaults for all encoded Video topics
        video_topics_default_reliability: RELIABLIE
        video_topics_default_durability: VOLATILE
        video_topics_default_depth: 10
        video_topics_default_lifespan_sec: -1.0


Extra ROS Packages to Install
-----------------------------
Custom packages can be installed to enable support for any topic or service types, see :doc:`Custom message & Service types </basics/custom-message-types>` for more details.

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        extra_packages:
         - /ros2_ws/src/vision_msgs # path to a custom package source directory (inside the container)
         - /ros2_ws/src/astra_camera_msgs
         - some-other-package # binary package name to be installed with apt-get (this will be translated ros-%DISTRO%-some-other-package)


User Input
----------
See :doc:`User input & Teleoperation </ui/user-input-and-teleoperation>`

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        input_drivers: [ 'TwistInputDriver', 'JoyInputDriver', 'CustomDriverClass' ] # enabled input driver classes, remove to disable user input entirely, custom driver classed must be loaded via ui_custom_includes_js
        input_defaults: /ros2_ws/phntm_input_config.json # path to input defaults JSON file (as mapped inside the container)


ROS Service Controls
--------------------
See :doc:`ROS Services </ui/ros-services>`

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        service_defaults: /ros2_ws/phntm_services_config.json # path to service defaults JSON file (inside the container)

        collapse_unhandled_services: True # the UI will collapse services with unsupported message types
        collapse_services: # list of service IDs and/or types to be collapsed in the UI
          - rcl_interfaces/srv/DescribeParameters
          - rcl_interfaces/srv/GetParameterTypes
          - type_description_interfaces/srv/GetTypeDescription
        
        default_service_timeout_sec: 20.0 # default timeout for service replies 

        # custom service menu widget mapping
        /some_node/some_service:
          menu_widget: ServiceInput_ClassName # widget class to use, must be indluded via ui_custom_includes_js
          custom_widget_param_1: 0.5 # custom attributes for the widget class follow
          custom_widget_param_2: 'This is a string param'
          custom_widget_param_3: False
          custom_widget_getter_service: /some_node/some_other_service


Video Encoding & Streaming
--------------------------
See :doc:`Video Processing </video-and-image-topics>` for configuration params.

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        encoder_default_hw_device: sw # sw, cuda, vaapi
        encoder_default_thread_count: 2
        encoder_default_gop_size: 30 # key frame every N frames
        encoder_default_bit_rate: 5000000 # 610 KB/s

        /some_image_topic:
            encoder_hw_device: '' # 'cuda', 'vaapi' or 'sw'
            TODO full list

        /some_depth_image_topic:
            max_sensor_value: 4000.0 # depth max distance/sensor value for normalizing
            colormap: 13 # cv2.COLORMAP, e.g. 13 = cv2.COLORMAP_MAGMA


Custom UI JS/CSS Includes
-------------------------
See UI more here

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        ui_custom_includes_js: 
          - https://localhost:1234/custom-input-driver.js
          - https://www.some-server.com/custom-service-slider-widget.js
        ui_custom_includes_css:
          - https://www.some-server.com/example.css


Hardware LEDs
-------------
See :doc:`Status LEDs </status-leds>` for more.

.. include:: ../config-blocks/leds.rst


Socket.io Configuration
-----------------------
.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        sio_path: /robot/socket.io/ # must end with /
        sio_port: 1337
        sio_ssl_verify: True
        sio_connection_retry_sec: 5.0
        sio_debug: False # verbose Socket.io debug logging
        sio_verbose: False # prints out received and sent messages, too


WebRTC Configuration
--------------------
This config is received from the Brige Server but can be extended or overriden for use with custom ICE/TURN servers.

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        use_cloud_ice_config: True # server config ignored if False
        ice_servers: # custom ICE servers (will be added to server's list if use_cloud_ice_config==True)
         - 'turn:ca.turn.phntm.io:3478'
         - 'turn:ca.turn.phntm.io:3479'
        ice_username: 'robo' # STUN/TURN credentials, robot's ID is used if empty
        ice_secret: 'pass' # STUN/TURN password, robot's KEY is used if empty
        enable_ice_udp_mux: True # multiple WebRTC peer connections can be multiplexed over a single UDP port
        enable_ice_tcp: False # in addition to the default UDP candidates, the library will also attempt to establish peer-to-peer connections over TCP if UDP is unavailable or blocked by network restrictions
        disable_fingerprint_verification: False


File Extraction
---------------
See file extraction for more

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        file_upload_port: 1336 # Bridge Server port to upload files to (File Receiver)
        file_chunks_topic: /file_chunks # receiving extracted file chunks from Agent nodes on this topic


Logs and Debugging
------------------
.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        log_sdp: True # verbose WebRTC debug
        webrtc_debug: True # debug webrtc logging
        webrtc_verbose: False
        log_heartbeat: True # debug heartbeat
        log_message_every_sec: 10.0f
        service_calls_verbose: False


Agent Configuration
-------------------
The Bridge Agent is a lightweight node that performs system monitoring, Docker container control, file extraction, and various related tasks.
Typically, it runs in the same container as the Bridge Client and can share the same config file (mapped into the container's ``/ros2_ws/phntm_agent_params.yaml``).
In case of a distributed system, it can be also installed separately and run in multiple instances. The Agent only expects the following options in the 
config file:

.. code-block:: yaml
   :caption: phntm_bridge.yaml or phnrm_agent.yaml

    /**
      ros__parameters:

        host_name: 'pi5' # lower case, must be a valid ROS id or ''
        agent_update_period_sec: 0.5

        docker_monitor_topic: '/docker_info' # '' to disable
        enable_docker_control: True # allow start/stop/restart of a container

        system_info_topic: '/system_info_pi5' # writes output here, '' to disable
        disk_volume_paths: [ '/', '/dev/shm' ] # volumes to monitor, must be accessible from the container, [ '/' ] default

        wifi_interface: 'wlan0' # wi-fi interface to monitor, disabled if ''
        wifi_monitor_topic: '/iw_status' # Agent writes output here, Client reads here
        enable_wifi_scan: True # enable wi-fi scanning (Agent and Client)
        enable_wifi_roam: False # enable wi-fi roaming (Agent and Client)
