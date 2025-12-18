:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/availability-zones.rst

Availability Zones
==================

The Phantom Bridge cloud infrastructure is hosted at various locations around the world to minimize lag and speed up downloads.
When using over a local network, P2P connection is preferably established and geographical distance to servers plays a very small role.
When teleoperating a remote machine or connecting via a TURN server, physical distance is much more important.

Below is the list of currenlty available locations. The closest one to your robot is automatically selected on machine registration,
and can be also changed later. TURN servers are selected automatically.

.. list-table::
   :widths: 25 25 25 25

   * - Location
     - Bridge Server
     - TURN Servers
     - Ping
   * - California, USA
     - **us-ca.bridge.phntm.io**
     - us-ca.turn.phntm.io     
     - .. raw:: html

          <span class="server-conn-test" data-url="https://us-ca.bridge.phntm.io"><span class="icon"></span></span>
   * - Ohio, USA
     - **us-oh.bridge.phntm.io**
     - us-oh.turn.phntm.io
     - .. raw:: html

          <span class="server-conn-test" data-url="https://us-oh.bridge.phntm.io"><span class="icon"></span></span>

.. raw:: html

  <p><span class="gray-note">The displayed ping times are to the Bidge Server and indicative only, the actual RTT between peers and robots is usually much shorter.</span></p>

   <script type="text/javascript">
    $(document).ready(() => {
      $('.server-conn-test').each(function(index) {
        let url = $(this).data('url');
        console.log('Checking ping to '+ url);
        fetchWithTiming(url, $(this));
      });
    });
   </script>

To change which Bridge Server your ROS machine connects to, simply edit the ``bridge_server_address`` parameter in your `phntm_bridge.yaml` config file, then restart the Bridge Client node and reload the Web UI.

.. code-block:: yaml
   :caption: phntm_bridge.yaml  

    /**:
      ros__parameters:

        bridge_server_address: https://us-ca.bridge.phntm.io # the Bridge Server instance to connect to

Our aim is to provide a geographically well distributed service, we will be launching more regional instances and TURN servers depending on
user demand and feedback. Please get in touch either by :email:`e-mail <human@phntm.io>` or by `opening an issue on GitHub <https://github.com/PhantomCybernetics/phntm_bridge_server/issues>`_ to
discuss this further.