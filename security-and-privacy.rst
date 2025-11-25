:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/security-and-privacy.rst

Security & Privacy
==================

All communication between the ROS machine and the peers (Web UI) takes place over encrypted channels.

The Bridge Server only stores basic metadata about the robots for the purposes of improving the service.

No telemetry data, video or images are ever stored nor analyzed on any part of the infrastructure hosted by `Phantom Cybernetics <https://www.phantomcybernetics.com>`_.

The :doc:`files extracted </file-extraction>` from a ROS machine are cached on the Bridge Server until the cache is invalidated.

Access to your robot is public to anyone with the unique URL of your robot's UI, don't share it on the internet!
Re-register your machine in case you need to invalidate teh URL. There will be an option to make access fully private and
precisely control who can do what with your robots, this will be a feature of a paid service.
You will always be able to use the hosted service free of charge in this "public" way. 

The maintainer's email is only used for service and feature announcements. We don't sell your personal data to anyone.

The source code is provided under the MIT license "as is" without any waranty or liability.