Runtime ROS Parameters
======================

.. image:: ../img/ui-ros-params.png
    :align: right
    :class: ui-ros-params

In the :ref:`Graph View <graph-view>`, the icon next to a ROS Node's name opens the Parameter Inspector, as shown here.

This dialog allows to inspect and modify any ROS Parameters declared by the Node. Parameters marked as ``read_only`` can not be edited.
Input is validated according to parameter's type, ``description`` and ``additional_constraints`` are displayed as text hints.

In order for all this to work, the Node needs to offer services of type ``rcl_interfaces/srv/ListParameters``, ``rcl_interfaces/srv/DescribeParameters``, ``rcl_interfaces/srv/GetParameters`` and ``rcl_interfaces/srv/SetParameters``.

You also need to spin the Node to process these service requests.