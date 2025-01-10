:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/availability-zones.rst

Availability Zones
==================

At the time of writing, Phantom cloud infrastructure is hosted at a single datacenter in Northern California.
Thanks to the :doc:`WebRTC architecture </basics/architecture>`, this should not be as much of a problem in many cases, especially when using over local network.
However, ping times can get too long for practical use, depending on where you are.

When teleoperating a remote machine via TURN server, geographical distance plays a much more important role in overall latency.
Service response times and UI download speed will certainly benefit from being hosted closer to your physical location.

Our aim is to provide a geographically well distributed service, and we'll be launching more regional instances depending on
user demand and feedback. Please get in touch either by :email:`e-mail <human@phntm.io>` or by `opening an issue on GitHub <https://github.com/PhantomCybernetics/cloud_bridge/issues>`_ to
discuss this further.