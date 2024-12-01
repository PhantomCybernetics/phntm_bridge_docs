Video & Image topics
======================

Phantom Bridge transmits all video as H.264 via WebRTC media streams. ROS Image messages are also converted into H.264,
this includes depth frames and compressed image frames. 

Hardware-encoded H.264 video
----------------------------
Purely from teleoperation or remote monitoring point of view, having video streams encoded into H.264 by a hardware accelerator or GPU is preferable as it
doesn't come at extra CPU cost. In this scenario, the Bridge node simply packetizes received `FFMPEGPacket <https://github.com/ros-misc-utilities/ffmpeg_image_transport_msgs/blob/master/msg/FFMPEGPacket.msg>`_ messages
and sends them via the media stream.

For instance, Raspberry Pi 4, Compute Module 4, or Raspberry Pi Zero 2 W all come with a H.264 hardware encoder that can be used with all compatible Pi Camera modules.
Raspberry Pi 5 does not have a hardware video encoder, video streams needs to be encoded on the CPU. In both cases, you may want to use our `picam_ros2 package <https://github.com/PhantomCybernetics/picam_ros2>`_ to ROSify your Pi Cameras.

Similarly, `OAK cameras <https://shop.luxonis.com/collections/oak-cameras-1>`_ by Luxonis offer hardware encoded H.264 video and their `ROS package <https://docs.luxonis.com/software/ros/depthai-ros/>`_ supports FFMPEGPacket output of the box.

ROS Image messages
------------------
All ROS sensor_msgs/msg/Image messages will be transcoded into H.264 on the CPU and packetized before transmission.
This may have an impact on your evengy consumtion and cut down on system recources. In general the latency difference is quite low where
CPU is not the main constraint, for instance Raspberry PI 5 performs quite well.

Several optimizations are implemented to keep the latency as low as possible, even with software frame encoding. However, performance will vastly depend on your hardware setup and utilization of resources.
Consider dedicating at least one CPU core to video encoding.

At this point, the following frame encoding types are supported: **rgb8** and **bgr8** (for RGB), **16UC1**, **mono16** and **32FC1** (for depth frames).

Depth processing
----------------
ROS Image messages containing depth frames will be processed and colorized for better visibility.
As mentioned above, 16UC1, mono16 and 32FC1 frame encoginds are supported at this point.

See :doc:`Bridge configuration </basics/bridge-config>` for config options.

Compressed Image topics
-----------------------
ROS sensor_msgs/msg/CompressedImage mesages (JPEG or PNG frames) are also supported and will be transcoded
into H.264 and streamed as video.

Ogg/Theora video
----------------
Although some cameras offer Ogg/Theora output, this format is not supported by Phantom Brige as the WebRTC standard does not include it and most web browser implemenations `are depricated anyway <https://caniuse.com/ogv>`_.