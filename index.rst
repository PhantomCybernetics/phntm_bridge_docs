:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/index.rst

Phantom Bridge Documentation
============================

Phantom Bridge is a fast WebRTC ROS2 Bridge written in C++ for real-time ROS2 data visualization
and video streaming, teleoperation, human-robot interaction, and both local and remote robot monitoring.

The Bridge comes with :doc:`Docker container control </ui/docker-control>` for the host machine, :doc:`system load </ui-widgets/system-info>`
:doc:`Wi-Fi monitoring </wifi-scanning-and-roaming>`, and highly customizable :doc:`Web Interface </ui/overview>` for both desktop and mobile touchscreen devices.

This suite is indended to be a modern replacement for RViz, in many cases going beyong what is
typically consideted a ROS visualization tool, in order to make robotics development easier.
The UI is :doc:`customizable with JavaScript & CSS plugins </ui/customizing>`, various configuration options make it suitable
both as a universal development tool and a customer-facing product.

Features
========
- Connects P2P or via a TURN server when P2P link is not possible
- ~5-10ms RTT on local network, 20ms+ RTT remote teleoperation via a TURN server
- ROS topic and service discovery
- Fast streamimg of binary ROS messages (both in a out)
- Fast H.264 video streaming, ROS `Image` and `CompressedImage` topics streamed as H.264 video (hw or sw-encodeded frames)
- Docker container :doc:`discovery and control </ui/docker-control>`
- Reliable :doc:`ROS service calls </ui/ros-services>`
- :doc:`ROS parameneters </ui/runtime-ros-parameters>` discovery, read and write at runtime
- :doc:`Keyboard, gamepad and touch interface </ui/user-input-and-teleoperation>` user input mapped into ROS messages
- Extra ROS packages can be easily included for :doc:`custom message type support </basics/custom-message-types>`
- Robot's :doc:`Wi-Fi signal monitoring </wifi-scanning-and-roaming>`, network scanning & roaming
- :doc:`File retreival </file-extraction>` from any running Docker container and host fs (such as URDF models)
- :doc:`System load, disk space </ui-widgets/system-info>`, and :doc:`Docker stats </ui/docker-control>` monitoring
- Standalone lightweight Bridge Agent for monitoring and management of various parts of a distributed system
- Multiple peers can connect to the same machine at a very low extra CPU cost
- Works with `rosbag` and simulators such as `Gazebo`, `Isaac Sim` or `Webots`
- Fully open-source under the MIT license; you can host any part of this system
- User interface :doc:`customizable </ui/customizing>` with JavaScript & CSS plug-ins
- No need for an X server running on your robot, nor for any wired connections

.. toctree::
   :maxdepth: 2
   :hidden: 
   :caption: Contents:

   basics/architecture
   demos
   basics/install
   basics/configuration
   
   ui/overview
   ui-widgets/index
   ui/user-input-and-teleoperation
   ui/ros-services
   ui/runtime-ros-parameters
   ui/docker-control
   ui/touchscreen-interface

   basics/custom-message-types.rst
   video-and-image-topics
   file-extraction
   wifi-scanning-and-roaming
   connection-state-leds

   ui/customizing
   ui-api-docs/index

   security-and-privacy
   
   availability-zones
   self-hosted
   roadmap-debugging-contributing
   