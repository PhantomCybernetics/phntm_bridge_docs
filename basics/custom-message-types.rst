Custom message & Service types
------------------------------

The Bridge node looks for IDL files containing messsage type definition for every discovered ROS topic and service.
These files are uploaded to the Cloud Bridge, parsed, and then pushed into the Web UI as JSON.
This enables binary messages to be serialized and deserialized on each end regardless of ROS version.

Various basic message and service types are installed with the Bridge node. In order to handle any message or service type,
it is necessary to install these definitoins inside the Bridge node's docker container.
This is done using the extra_packages configuration option in the phntm_bridge.yaml.

.. code-block::
   :caption: phntm_bridge.yaml

    extra_packages:
     - /ros2_ws/src/vision_msgs
     - /ros2_ws/src/astra_camera_msgs
     - some_other_package

This list contains either a package folder mounted into the Docker container,
or a ROS2 package name to be installed via apt-get (for "ros-distro-some-package" only use "some_package")

Don't forget live package folders need to be mounted inside the container using the volumes attribute in compose.yaml.
You need to reference the package root (i.e. where the package.xml file is):

.. code-block::
   :caption: compose.yaml

    volumes:
      - ~/vision_msgs/vision_msgs:/ros2_ws/src/vision_msgs
      - ~/ros2_astra_camera/astra_camera_msgs:/ros2_ws/src/astra_camera_msgs

On the first run of the container, the system checks the list of directories to compile and packages to install with apt-get.
After this step, the node restarts and proceeds with normal operation.

After editing the package list, to force the check and/or re-build, remove and re-create the Bridge container with:

.. code-block::

    docker stop phntm-bridge
    docker rm phntm-bridge
    docker compose up phntm-bridge

You can also force this check on every start of the container with an enviromental variable in the compose.yaml:

.. code-block::
   :caption: compose.yaml

    environment:
      - "FORCE_FIRST_RUN_CHECKS=True" # this will force first run package checks on every start
