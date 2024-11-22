# Architecture and Motivation

## Install

## Release notes

# Architecture & WebRTC basics

# Video
- detection overlay (NN config)

## Hardware-encoded video

[Raspberry Pi Camera modules](https://www.raspberrypi.com/products/#cameras-and-displays) are automatically discovered out of the box and can stream very fast H264 video at high resolution with a very small CPU overhead. This is achieved utilizing hw-encoding capabilities on the VideoCore and Picam2 library included in the Docker image.
picam_ros package (add CameraInfo)

[OAK Cameras](https://shop.luxonis.com/collections/oak-cameras-1): TODO!

## ROS sensor_msgs/msg/Image

Standard ROS image topics can be subscribed to and streamed as WebRTC video. these will be software encoded and streamed as H.264. The ROS message contains a raw OpenCV frame, which needs to be encoded and packetized. At this moment the following frame encodings are impelemnted: rgb8 for RGB, 16UC1 and 32FC1 for depth.

Software encoding requires significantly more CPU time compared to GPU-based video encoding and can lead to increased latency and power consumption. Despite being offloaded to a dedicated process[^1]. On Pi 4B, camera streaming 640x480 @ 30 FPS only achieves about 5-10 FPS transmission. With delay between frames this long, every frame is encoded as a keyframe.

[^1] The process encoding image frames is in fact shared with all read subscriptions, including non-image ROS topics, in order ro isolate fast hw-encoded video streaming and inbound control data streams from potentially slower data.

## Depth processing

ROS Image messages containing depth data can be processed and colorized for better visibility. As mentioned above, 16UC1 and 32FC1 frame encoginds are supported at this point.

### Tested cameras
Picams (w picam_ros2)
Astra
Oak (note about the Oak ROS package issues)

## Docker Compose Configuration

## Wifi Scanning & Roaming

## Custom Message Types

## Configuring the Bridge
- topic overrides
- logging

## Configuring the Agent

## Distributed Systems

## User Interface
- desktop interface 
- graph menu 
    - qos compatinility
    - node params
- config file
- input mapping & config
    - input profiles
    - custom input drivers
    
- widget types
    - battery
    - range
    - laser
    - log
    - video (+ overlays)
    - imu
    - system load (+ disk space)
    - everythig 3d (+ overlays)
- touch interface

## Custom UI widgets
- message type widgets
- compound custom widgets (2d/3d)
- description tf
- zoomable 3d tiles
- multitopic
- linking external library

## User Input
- custom drivers

## ROS Services

## ROS Params

## Docker control

## Introslection

## File extraction

## Status LEDs

## Standalone browser-client.js
    designed to be a self contained minimal API reference for Phntm Bridge

## Updating the Bridge

## Cloud Bridge
- What does Cloud Bridge log
- Hosting your own
- TURN Server

# Performance 
- consider limiting / dedicating certain CPU cores to various processes in compose.yaml

# Debugging
- logs (mout log dir to contrainer)
    ```yaml
        environment:
        - ROS_LOG_DIR=/ros2_ws/phntm_bridge_logs
    ```
- force TURN with ?force_turn=1
- mount live repo to container in dev mode

## Roadmap & Contributing
- Compressed CostMap streaming
- Compressed PointCloud streaming
- State machine UI
- UI schemes & toggle
- Self-hosted custom UI widgets
- Audio in/out streaming
- User & robot management UI, Auth/Login, Robot peer limits
- Variable bitrate for video (?)
- Generic USB camera support (?!)
