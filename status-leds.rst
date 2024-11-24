Status LEDs
===============

If configured, the Bridge node will use two system LEDs to quickly communicate the state of connection and system activity.
LEDs can be controlled either via `libgpiod <https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/about/>`_ (installed with the Docker container), or by
ROS std_msgs/msg/Bool topics.

See :doc:`Bridge configuration </basics/bridge-config>` for config options.

Connection LED
--------------
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

Data LED
--------
.. list-table::
   :widths: 5 20 75

   * - .. raw:: html

          <span class="data-led short-flash"></span>

     - Short flash
     - Message was sent to a peer via WebRTC
