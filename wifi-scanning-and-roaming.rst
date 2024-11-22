Wi-Fi scanning & Roaming
========================

Wpa Supplicant needs to be installed on the host system and mounted via /host_run

Phntm Bridge enables wireless network scanning and automatic switching to a different AP within the same network (same SSID, different BSSID) known as roaming. This is very useful when your robot needs to navigate a vast area covered by multiple APs of the same network.

In order to perform the scan, the wireless radio typically has to momentatily pause transmission, so you can expect brief interruption of video and data straming. Internally, Phntm Agent uses iwlib to perform these oprations.

Scanning and roaming only works with certain wireless hardware chipsets and sometimes even different driver versions can cause issues. On some systems, switching between different AP frequencies (say from 5 GHz to 2.4 GHz) can cause problems.

In case of a failure, your machine might need rebooting or to be manually connected to the desired AP again. The best way to switch back to your original access point is using nmcli from the command line:

.. code-block::
    
    nmcli d wifi # performs a fresh scan
    nmcli d wifi connect %YOUR_AP_BSSID% # switch to the desired BSSID
