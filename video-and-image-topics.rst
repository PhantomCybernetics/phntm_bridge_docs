:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/video-and-image-topics.rst

Video & Image Topics Transmission
=================================

Phantom Bridge transmits all video as H.264 via WebRTC media streams. ROS `Image` and `CompressedImage` messages are also converted into H.264,
this includes depth frames and compressed image frames. 





Hardware-encoded H.264 Video
----------------------------
Having video streams encoded into H.264 by a hardware accelerator or GPU is preferable as it doesn't come at extra CPU cost.
In this scenario, the Bridge Client simply packetizes received `FFMPEGPacket <https://github.com/ros-misc-utilities/ffmpeg_image_transport_msgs/blob/master/msg/FFMPEGPacket.msg>`_ messages
and transports them via a WebRTC media stream.

The Bridge Client can also perform transcoding of Image/Compressed messages into H.264 using either the CPU (expensive), Nvidia or AMD GPU. 
There are several camera models on the market that can produce hardware-encoded H.264 frames (such as `OAK cameras by Luxonis <https://www.luxonis.com>`_).
If you're using Raspberry Pi with CSI cameras, consider our `picam_ros2 package <https://github.com/PhantomCybernetics/picam_ros2>`_ which utilizes hardware encoder when available, or performs CPU encoding with low latency.

.. list-table::
   :widths: 50 33 33
   :header-rows: 1

   * - Hardware
     - Support
     - Provider

   * - Raspberry Pi 5
     - Software video encoding
     - Bridge Client
     
   * - 
     - 
     - `picam_ros2 <https://github.com/PhantomCybernetics/picam_ros2>`_
    
   * - Raspberry Pi 4B / Compute Module 4
     - Hardware video encoding (BCM2711)
     - `picam_ros2 <https://github.com/PhantomCybernetics/picam_ros2>`_
    
   * -
     - Software video encoding
     - Bridge Client

   * - Nvidia GPU
     - Hardware video encoding (CUDA)
     - Bridge Client

   * - AMD GPU
     - Hardware video encoding (VAAPI)
     - Bridge Client

   * - Jetson Orin Nano 
     - Software video encoding
     - Bridge Client

   * - OAK Cameras
     - Hardware video encoding
     - `depthai-ros <https://docs.luxonis.com/software/ros/depthai-ros/>`_

When using the H.264 Encoder of the Bridge Client with a GPU, some software scaling is often necessary to transform raw camera frames into the format supported by the hardware codec.

In case you're running Gazebo for headless simulations (cloud-based), consider adopting our `customized version of Gazebo Harmonic <https://github.com/PhantomCybernetics/simbot_gz>`_. In our setup,
the CameraSensor avoids using the ros_gz_bridge and publishes H.264 hw-encoded frames (as well as raw Image frames) directly into a ROS topic for low latency and maximum performance.

.. image:: ./img/video-encoding.svg
    :class: video-encoding

ROS Image Messages
------------------
All ROS sensor_msgs/msg/Image messages will be transcoded into H.264 and packetized before transmission.
This may have an impact on your evengy consumtion and cut down on system recources. In general the latency difference is quite low where
CPU is not the main constraint, for instance Raspberry PI 5 performs quite well.

Several optimizations are implemented to keep the latency as low as possible, even with software frame encoding. However, performance will vastly depend on your hardware setup and utilization of resources.
Consider dedicating at least one CPU core to video encoding.

At this point, the following frame encoding types are supported: **rgb8** and **bgr8** (for RGB), **16UC1**, **mono16** and **32FC1** (for depth frames).

Depth Processing
----------------
ROS Image messages containing depth frames will be processed and colorized for better visibility.
As mentioned above, 16UC1, mono16 and 32FC1 frame encoginds are supported at this point.

See :doc:`Bridge configuration </basics/bridge-config>` for config options.

Compressed Image Topics
-----------------------
ROS sensor_msgs/msg/CompressedImage mesages (JPEG or PNG frames) are also supported and will be transcoded
into H.264 and streamed as video.

Ogg/Theora Video
----------------
Although some cameras offer Ogg/Theora output, this format is not supported by Phantom Brige as the WebRTC standard does not include it and most web browser implemenations `are depricated anyway <https://caniuse.com/ogv>`_.