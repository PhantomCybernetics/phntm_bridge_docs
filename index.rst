.. Phantom Bridge documentation master file, created by
   sphinx-quickstart on Wed Nov 20 14:36:59 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/index.rst

Phantom Bridge Documentation
============================

Phantom Bridge is a fast WebRTC ROS2 Bridge written in C++
for real-time ROS2 data visualization and video streaming, teleoperation, human-robot interaction,
and both local and remote robot monitoring.

The Bridge comes with :doc:`Docker Container control </ui/docker-control>` for the host machine, :doc:`system load </ui-widgets/system-info>`
and :doc:`Wi-Fi monitoring </wifi-scanning-and-roaming>`, and highly customizable :doc:`Web Interface </ui/overview>` for both desktop and mobile touchscreen devices.

This suite is indended to be a modern replacement for RViz, in many cases going beyong what is
typically consideted a ROS visualization tool, in order to make robotics development with ROS2 easier.
The UI is :doc:`customizable with JavaScrip & CSS plugins </ui/customizing>`, various configuration options make it suitable
both as a universal development tool and a customer-facing product.

Features
========
- Connects P2P or via a TURN server when P2P link is not possible
- ~5-10ms RTT on local network, 20ms+ RTT remote teleoperation via a TURN server (provided)
- ROS2 topic and service discovery
- Fast streamimg of binary ROS2 messages (both in a out)
- Fast H.264 video streaming, ROS2 Image and CompressedImage topics streamed as H.264 video (hw or sw-encodeded frames)
- Docker container discovery and control
- Reliable ROS2 Service calls via Socket.io
- ROS2 Parameneters discovery, read and write at runtime
- Keyboard, Gamepad and Touch interface user input mapped into ROS2 messages
- Extra ROS2 Packages can be easily included for custom message type support
- Robot's Wi-Fi signal monitoring, network scanning & roaming (requires wpa_supplicant)
- File retreival from any running Docker container and host fs (such as URDF models)
- System load, Disk space, and Docker stats monitoring
- Standalone lightweight Bridge Agent for monitoring and management of various parts of a distributed system
- Multiple peers can connect to the same machine at a very low extra CPU cost
- Works with rosbag and simulators such as Gazebo, Isaac Sim or Webots
- Fully open-source under the MIT license; you can host any part of this system
- User interface customizable with JavaScript & CSS plug-ins
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
   status-leds

   ui/customizing
   ui-api-docs/index

   security-and-privacy
   
   availability-zones
   self-hosted
   roadmap-and-contributing
   