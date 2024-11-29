## Docker Compose Configuration

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

## ROS Services

## ROS Params

## Introspection

## File extraction

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
