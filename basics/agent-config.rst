Agent configuration
===================

The Bridge Agent is a lightweight node that performs system monitoring, Docker container control, and various related tasks.
Typically, it's run in the same container as the Bridge, but can be also installed separately and run in multiple instances in case of a distributed system (hence the separatae configuration).

Here's an example config file, e.g. ~/phntm_agent.yaml with all possible configuration options.

.. code-block::
   :caption: phntm_agent.yaml

    /**:
      ros__parameters:
        host_name: 'pi5' # lower case, must be a valid ROS id or ''
        refresh_period_sec: 0.5
        docker: True # monitor containers
        docker_topic: '/docker_info'
        docker_control: True # allow start/stop/restart of a container
        system_info: True # monitor system stats
        system_info_topic: '/system_info_pi5' # writes output here
        disk_volume_paths: [ '/', '/dev/shm' ] # volumes to monitor, must be accessible from the container
        iw_interface: 'wlan0' # wi-fi interface to monitor, disabled if ''
        iw_monitor_topic: '/iw_status' # writes output here
        iw_control: True # enable wi-fi scanning, must be also enabled in Bridge UI config
        iw_roaming: False # enable wi-fi roaming, must be also enabled in Bridge UI config

Distributed systems
-------------------

On distributed systems (robots utilizing more than one compute board), you would typically run only one
instance of the Phantom Bridge, while launching a standalone Agent for every other compute node.
Assuming the Bridge and various Agents can discover each other via the ROS DDS (and use the same ROS_DOMAIN_ID),
this enables system resources monitoring and Docker container control across all parts of your distributed machine.

An example service in compose.yaml for a standalone Agent can look like this:

.. code-block::
   :caption: compose.yaml

    services:
      phntm_agent:
        image: phntm/bridge:humble
        container_name: phntm-agent
        hostname: phntm-agent.local
        restart: unless-stopped
        privileged: true
        network_mode: host
        # cpuset: '0' # consider limitting to 1 cpu core
        volumes:
          - /var/run:/host_run # docker control needs this
          - ~/phntm_agent_params.yaml:/ros2_ws/phntm_agent_params.yaml # config goes here
        command:
          ros2 launch phntm_bridge agent_launch.py # this only launches the Agent