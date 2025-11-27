:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui-widgets/log.rst

Log
===

.. image:: ../img/widget-log.gif
    :class: widget-log

Declared in `log.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/widgets/log.js>`_

Displays system logs such as ``/rosout`` for ``rcl_interfaces/msg/Log`` topics.
Output is colorized by message log level.

Make sure your topic is subscribed to as reliable in order to receive all messages.

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /rosout:
          reliability: RELIABLE
          durability: TRANSIENT_LOCAL
          history_depth: 1000
          lifespan_sec: -1.0 # infinity

