:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/status-leds.rst

Status LEDs
===========

If configured, the Bridge Client node will use two hardware LEDs on the Robot to quickly communicate the state of connection and system activity.
LEDs can be controlled either via `libgpiod <https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/about/>`_ (installed with the Docker container), or by
ROS ``std_msgs/msg/Bool`` topics.


.. rubric:: Connection LED

.. list-table::
   :widths: 5 20 75

   * - .. raw:: html

          <span class="conn-led off"></span>

     - Off
     - Bridge not running
   * - .. raw:: html

          <span class="conn-led flashing-fast"></span>

     - Flashing
     - Trying to connect to Cloud Bridge
   * - .. raw:: html

          <span class="conn-led on"></span>

     - On
     - Connected to Cloud Bridge


.. rubric:: Data LED

.. list-table::
   :widths: 5 20 75

   * - .. raw:: html

          <span class="data-led short-flash"></span>

     - Short flash

     - Message was sent to a peer via WebRTC


.. rubric:: Configuration options

.. include:: config-blocks/leds.rst
