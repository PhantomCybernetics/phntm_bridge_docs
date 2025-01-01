.. Phantom Bridge documentation master file, created by
   sphinx-quickstart on Wed Nov 20 14:36:59 2024.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Phantom Bridge Documentation
============================

Phantom Bridge is a fast WebRTC and Socket.io ROS2 Bridge written in Python
for real-time ROS data visualization and video streaming, teleoperation, human-robot interaction,
and both local and remote robot monitoring.

It comes with Docker Container control for the host machine, system load and Wi-Fi monitoring,
and customizable Web Interface for both desktop and mobile touchscreen devices.

This Bridge is indended to be a modern replacement for RViz, in some cases going beyong what is
typically consideted a ROS visualization tool, in order to make robotics development with ROS2 easier.

Features
========
- Connects P2P or via a TURN server when P2P link is not possible
- ~5-10ms RTT on local network, 50ms+ RTT remote teleoperation via a TURN server
- ROS2 topic and service discovery
- Fast streamimg of binary ROS2 messages (both in a out)
- Fast H.264 video streaming (hw or sw-encodeded frames)
- Software encoded ROS2 Image messages streamed as H.264 video (at CPU cost)
- Docker container discovery and control
- Reliable ROS2 service calls
- ROS2 parameneters runtime discovery, read and write
- User input mapping to ROS control messages (keyboard, gamepad, touch interface)
- Extra ROS2 packages can be easily included for custom message type support
- Robot's Wi-Fi signal monitoring, scan & roaming (requires wpa_supplicant)
- File retreival from any running Docker container and host fs (such as URDF models)
- System load and Docker stats monitoring
- Standalone lightweight Bridge Agent for monitoring and management of various parts of a distributed system
- Multiple peers can connect to the same machine at a very low extra CPU cost
- Works with rosbag and sims such as Gazebo or Webots
- Fully open-source under the MIT license
- Customizable by self-hosted plug-ins
- No need for an X server running on the robot, nor any wired connections

.. toctree::
   :maxdepth: 2
   :hidden: 
   :caption: Contents:

   basics/architecture
   basics/install
   basics/bridge-config
   basics/agent-config
   
   ui/overview
   ui/built-in-widgets
   ui/custom-widgets
   ui/user-input-and-teleoperation
   ui/ros-services
   ui/runtime-ros-parameters
   ui/docker-control
   ui/touchscreen-interface

   basics/custom-message-types.rst
   video-and-image-topics
   wifi-scanning-and-roaming
   status-leds

   cloud-robotics
   security-and-privacy
   
   availability-zones
   self-hosted
   roadmap-and-contributing
   