Docker control
==============

Phantom Bridge offers tools for remote Docker container control, that is to ``start``, ``stop`` or ``restart`` any discovered container.
Your containers are autodetected, but must be set up and configured beforehand on the machine. Using `Docker Compose <https://docs.docker.com/compose/>`_ is highly recommended.

This allows for various configurations of your machine to co-exist and be selected at runtime, depending on the situation.
For instance, you can have a container responsible for autonomous navigation and tele-operate your machine manually when it's stopped.

Docker control actions can be accesed from the menu, but also mapped to keyboard, gamepad or touchscreen buttons by calling the ``docker_command`` service of the Phantom Agent node.
You can find :doc:`more about configuring user input here. </ui/user-input-and-teleoperation>`