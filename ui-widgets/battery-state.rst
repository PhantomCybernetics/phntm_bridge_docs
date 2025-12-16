:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui-widgets/battery-state.rst

Battery State
=============

.. image:: https://d13exqa8fa735g.cloudfront.net/widget-battery.gif
    :class: widget-battery

Declared in `battery.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/widgets/battery.js>`_

This panel displays robot's battery voltage from ``sensor_msgs/msg/BatteryState`` topics as a graph.
At some point, `it will display current, too <https://github.com/PhantomCybernetics/phntm_bridge_ui/issues/3>`_


.. rubric:: Configuration options

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_battery_topic:
          min_voltage: 9.0 # battery empty voltage
          max_voltage: 12.6 # battery full voltage