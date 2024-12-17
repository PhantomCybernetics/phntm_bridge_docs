Roadmap & Contributing
======================

If you're curious about the planned features and overall development roadmap, see the open issues on GitHub:

- `Bridge UI <https://github.com/PhantomCybernetics/bridge_ui/issues>`_ for UI related improvements and new features
- `Phantom Bridge <https://github.com/PhantomCybernetics/phntm_bridge/issues>`_ for the Bridge node related features and capabilities
- `Cloud Briudge <https://github.com/PhantomCybernetics/cloud_bridge/issues>`_ for cloud related topics

Feel free to open a new issue if you don't see what you'd like implemented. It also helps if you let us
know what features you care about the most by leaving comments or reacting to issues.

If you'd like to contribute or get otherwise involved, get in touch via `GitHub <https://github.com/PhantomCybernetics>`_ or
:email:`e-mail <human@phntm.io>`, pull requets are also highly appreciated.

Here are some quality-of-life tips for debugging and working with the Phantom Bridge node source code:

Log files
---------
To write Bridge node logs to files, you can configure the `ROS_LOG_DIR` environment variable in the compose.yaml file, as seen below.
For log persistence across container lifecycles, specify an output directory that's external to the container.

.. code-block::
   :caption: compose.yaml

    services:
      phntm_bridge:
        container_name: phntm-bridge
        environment:
         - ROS_LOG_DIR=/ros2_ws/phntm_bridge_logs
        volumes:
          ~/phntm_bridge_logs:/ros2_ws/phntm_bridge_logs

Dev mode
--------

To streamline development with frequently changing code, you can mount a live repository into the Docker container, overwriting the `/ros2_ws/src/phntm_bridge` directory.
This approach eliminates the need for constant image rebuilds, as illustrated in the example below.

You may also prefer to not launch the Bridge node automatically on the container start, but rather start it manually from
the container's interactive shell.

.. code-block::
   :caption: compose.yaml

    services:
      phntm_bridge:
        container_name: phntm-bridge
        volumes:
          - ~/phntm_bridge:/ros2_ws/src/phntm_bridge # override with live repo
        command:
          /bin/sh -c "while sleep 1000; do :; done" # don't launch on container start

Then you can launch the process manually like so:

.. code-block::

    docker compose up phntm_bridge -d # launch the modified container (detached)
    docker exec -it phntm-bridge bash # get interactive shell inside the container
    ros2 launch phntm_bridge bridge_agent_launch.py # launches Bridge & Agent nodes, Ctrl-C kills both

Note that when launched manually like this, on the first run inside the container the Bridge node performs
:doc:`first run checks </basics/custom-message-types>` and then exists. This is normal behavior but since
the container doesn't restart afterwards, you'll need to launch the node again by hand. Before you do so,
make sure to source the environment to get access to any custom packages that may have just been installed
with ``source /ros2_ws/install/setup.bash`` (in normal mode, the whole container restarts and fresh
environment is sourced automatically).