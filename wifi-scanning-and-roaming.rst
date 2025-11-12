:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/wifi-scanning-and-roaming.rst

Wi-Fi Scanning & Roaming
========================

The Bridge Agent node facilitates wireless network scanning and automatic connection switching between different APs in the same wireless network (same SSID, different BSSID)
also known as roaming. This is very useful when a robot needs to navigate a vast area covered by multiple APs of the same network.

.. Note:: `Wpa_supplicant <https://w1.fi/wpa_supplicant/>`_ needs to be installed on the host system. The Bridge Agent accesses it via /host_run, which is the host machine's /var/run directory mapped into the Docker contaier in your compose.yaml file. `Network Manager <https://www.networkmanager.dev/>`_ is also assumed to be installed on the host machine.

The scan or roam commands can be initiated from the Web UI, either one needs to be enabled both in the Agent's and Client's config.
You can also invoke both by calling the ``iw_scan`` service of the Agent node.

In order to perform the scan, the wireless radio typically has to momentatily pause transmission, so you can expect a brief interruption of video and data streaming.
Internally, Phntm Agent uses iwlib to perform these operations.

Scanning and roaming only works with certain wireless hardware chipsets and sometimes even different driver versions can cause issues.
On some systems, switching between different AP frequencies (e.g. from 5 GHz to 2.4 GHz) can sometimes cause problems.

The roam command automatically selects the AP in the current network with the best signal. If the currently conneced AP has the strongest signal, no roaming is performed.

.. rubric:: Recovery from a failure

.. Danger:: In case of a roaming failure, your machine might end up offline, need rebooting or to be manually connected to the desired AP again. Make sure you have local console access before attemting this for the first time on untested configurations.

.. code-block::
   :caption: $ bash
    
    # The best way to switch back to your original access point is using nmcli from the command line:

    nmcli d wifi # performs a fresh scan
    sudo nmcli d wifi connect %YOUR_AP_BSSID% # switch to the desired BSSID


.. rubric:: Configuration options

.. code-block::
   :caption: phntm_bridge.yaml or phnrm_agent.yaml

    /**
      ros__parameters:

        wifi_interface: 'wlan0' # wi-fi interface to monitor on Agent, disabled if ''
        wifi_monitor_topic: '/iw_status' # Agent writes output here, Client reads here
        enable_wifi_scan: True # enable wi-fi scanning (Agent and Client)
        enable_wifi_roam: False # enable wi-fi roaming (Agent and Client)