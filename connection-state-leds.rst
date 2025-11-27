:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/connection-state-leds.rst

Connection State LEDs
=====================

If configured, the Bridge Client node will use two hardware LEDs on the robot to quickly communicate the state of connection and system activity.
LEDs can be controlled diretly via `libgpiod <https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/about/>`_ (installed with the Docker container).
Alternatively, the Bridge Client can produce ``std_msgs/msg/Bool`` topics to allow some other process to control the LEDs.


.. rubric:: Connection LED

.. list-table::
   :widths: 5 20 75

   * - .. raw:: html

          <span class="conn-led off"></span>

     - Off
     - Bridge Client not running
   * - .. raw:: html

          <span class="conn-led flashing-fast"></span>

     - Flashing
     - Trying to connect to Bridge Server
   * - .. raw:: html

          <span class="conn-led on"></span>

     - On
     - Connected to Bridge Server


.. rubric:: Data LED

.. list-table::
   :widths: 5 20 75

   * - .. raw:: html

          <span class="data-led short-flash"></span>

     - Short flash

     - Message was sent to or received from a peer


.. rubric:: Configuration Options

.. include:: config-blocks/leds.rst
