Services
========

The Bridge node autodetects all available ROS services of all discovered ROS nodes,
and the Web UI then provides various tools to call them with custom data payloads.
Service calls can be even mapped to keyboard keys, gamepad and touch UI buttons.

The most basic service types (e.g. `std_srvs/srv/Empty`, `std_srvs/srv/Trigger` or `std_srvs/srv/SetBool`) come with pre-defined interface out of the box to make calling them as simple as possible.
For any services that take more complex input data, we first need to define the payload.

Configuring service buttons
---------------------------
In the Services dropdown menu, you will see the `{}` symbol next to each service name, clicking it opens an input editor. 
The editor allows to define custom data to call the service with, and to save such calls as UI buttons.
All defined buttons are displayed next to the service name in the dropdown menu.

.. figure:: ../img/user-input-service-buttons.png
    :align: center
    :class: user-input-services

The above example shows a very simple input structure, but the data can get much more complex.
The editor uses autodetected service type to provide as much guidance and input validation as possible. 
You can also test-call the service at any moment to check your input produces the desires outcome.

Similarly to :doc:`input mapping configuration </ui/user-input>`, when you click `Save` in the service input editor, all configured buttons and asociated data will be stored only locally in your web browser. 
To make this setup available as the default configuration to other users and/or devices you use to interact with the robot, you need to export these as JSON, save to a .json file and add it to your robot's config in phntm_bridge.yaml:

.. code-block::
   :caption: phntm_bridge.yaml

    service_defaults: /ros2_ws/phntm_services_config.json # path to config file as mapped inside the container

These service button definitions are then used as the defaults for all devices and users accessing the robot’s Bridge Web UI.
At any point, these defaults can be overridden by the local browser’s settings, which always take priority.

.. Note:: Modified service buttons are always saved and applied to the current web browser only. Changes need to be saved to your robot’s `phntm_services_config.json` file in order to be applied to other peers or devices you may want to control the robot with. Deleting the configuration in a web browser will reset it to the robot’s defaults on the next Web UI page load.

Implementing custom service UI widgets (TODO!)
----------------------------------------------
On top of the above mentioned options, you may want to create a completely custom controls for a ROS service. 
The best way to do that would be to create a custom service widget, which is then used in the services dropdown menu in a similar fashion to the buttons.



TODO