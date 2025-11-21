:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/basics/custom-message-types.rst

Custom Message & Service Types
==============================

The Bridge Client node looks for IDL files containing messsage type definitions for every discovered ROS topic and service.
These files are uploaded to the Bridge Server, parsed, and then pushed into the Web UI as JSON definitions.
This enables binary messages to be serialized and deserialized on each end regardless of ROS version.

Various basic message and service types are installed with the Bridge Client node. In order to handle any message or service type,
it is necessary to make custom definitoins available inside the Bridge Client's Docker container.

This is done using the ``extra_packages`` configuration option in the ``phntm_bridge.yaml`` config file.
This list contains either a ROS project folder (mapped inside the Docker container(,
or a ROS2 package name to be installed with apt-get (for `"ros-distro-some-package"` use only `"some-package"`).

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

         extra_packages:
         - /ros2_ws/src/vision_msgs # ROS project folder to be compiled
         - /ros2_ws/src/astra_camera_msgs
         - some-other-package # package to be installed wit apt-get

Don't forget live package folders need to be mapped inside the container using the ``volumes`` attribute in ``compose.yaml``.
You need to reference the package root folder (i.e. where the `package.xml` file is located):

.. code-block:: yaml
   :caption: compose.yaml

    services:
      phntm_bridge:

         volumes:
           - ~/vision_msgs/vision_msgs:/ros2_ws/src/vision_msgs
           - ~/ros2_astra_camera/astra_camera_msgs:/ros2_ws/src/astra_camera_msgs

On every launch, the Bridge Client checks the list of extra packages and processes new ones. 
After any change, the node restarts, then proceeds with normal operation.

.. Note:: In case you're launching the Bridge Client node manually inside the container (dev mode),
          you'll need to ``source /ros2_ws/install/setup.bash`` to make the newly installed packages visible
          to the ROS environment. This happens automatically when the whole Docker container restarts.

To force a re-build or re-install of a particular package, you can edit (or delete) ``/ros2_ws/phntm_checked_packages.yaml``
inside the Bridge Client container.