:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui/docker-control.rst

Docker Control
==============

.. image:: https://d13exqa8fa735g.cloudfront.net/ui-docker-control.png
    :align: right
    :class: ui-docker-control

Phantom Bridge offers tools for remote Docker container monitoring and control that allow to ``start``, ``stop`` or ``restart`` any discovered container.
Your containers are autodetected, but must be set up and configured beforehand on the machine. Using `Docker Compose <https://docs.docker.com/compose/>`_ for this is highly recommended.

This feature allows for various configurations of your machine to co-exist and be selected at runtime, depending on the situation.
For instance, you can have a container responsible for autonomous navigation and tele-operate your machine manually when it's stopped.

Docker control actions can be accesed from the menu, but also mapped to keyboard, gamepad or touchscreen buttons by calling the ``docker_command`` service of the Phantom Agent node.
You can find :doc:`more about configuring user input here. </ui/user-input-and-teleoperation>`

.. rubric:: Configuration

It is possible to enable monitoring (CPU, number of processes, etc) while also disallowing Docker container control.
Both parameters shown below are expected by the Bridge Client as well as the Agent.

.. code-block:: yaml
   :caption: phntm_bridge.yaml or phnrm_agent.yaml

    /**:
      ros__parameters:

        docker_monitor_topic: '/docker_info' # '' to disable monitoring
        enable_docker_control: True # allow start/stop/restart of a container
