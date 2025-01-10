:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/cloud-robotics.rst

Cloud Robotics & AI
===================

On top of using Phantom Bridge for teleoperation and system monitoring by a human,
AI and Expert Systems can be used to control an autonomous machine from the cloud.
Thanks to fast networking and various bandwidth optimizations,
you can offload compute-intense vision and decision making tasks from the edge device
and significantly lower CPU/GPU demands and power requirements of the robot itself.
All this has a major impact on the cost of the necessary hardware where reliable conectivity
is not an issue.

This is an active subject of our R&D, more readily made features will be announced when ready.
If you'd like to dive into this area yourself, the best place to start might be
`browser-client.js <https://github.com/PhantomCybernetics/bridge_ui/blob/main/static/browser-client.js>`_ 
in the Bridge UI package. It is conceived as a (more-or-less) self contained API reference for the Phantom Bridge,
and can be adapted into a server-side ROS connector implemented either in Node.js or Python.

Get in touch via :email:`e-mail <human@phntm.io>` or `GitHub <https://github.com/PhantomCybernetics>`_
if you feel like discussing this topic further or collaborating in this area.