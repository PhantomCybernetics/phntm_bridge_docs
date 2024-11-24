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
and customizable Web Interface for both desktop and touch devices.

This Bridge is indended to be a modern replacement for RViz, in some cases going beyong what is
typically consideted a ROS visualization tool in order to make robotics development easier.

Features
========
- ROS2 Topic and Service discovery
- Fast streamimg of binary ROS2 messages (both in a out)
- Fast H.264 video streaming (hw or sw-encodeded frames)
- Software encoded ROS2 Image messages streamed as H.264 video (at CPU cost)
- Docker container discovery and control
- Reliable ROS2 Service calls
- ROS2 Parameneters runtime discovery ,read and write
- User input mapping to ROS control messages (keyboard, gamepad, touch)
- Extra ROS2 packages can be easily included for custom message type support
- Robot's Wi-Fi signal monitoring, scan & roaming (requires wpa_supplicant)
- File retreival from any running Docker container and host fs (such as URDF models)
- System load and Docker stats monitoring
- Standalone lightweight Bridge Agent for monitoring and management of various parts of a distributed system
- Connects P2P or via a TURN server when P2P link is not possible
- Multiple peers can connect to the same machine at a very low extra CPU cost
- ~5-10ms RTT on local network, 50ms+ RTT remote operation via a TURN server
- Works with rosbag and sims such as Gazebo or Webots

.. toctree::
   :maxdepth: 3
   :hidden: 
   :caption: Contents:

   basics/architecture
   basics/install
   basics/bridge-config
   basics/agent-config
   basics/docker
   basics/custom-message-types.rst
   
   ui/overview
   ui/user-input
   ui/touch-ui
   ui/custom-widgets

   video-and-image-topics
   wifi-scanning-and-roaming
   status-leds
   
   performance
   ai
   debugging
   self-hosted
   roadmap-and-contributing
   