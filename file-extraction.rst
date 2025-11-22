:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/file-extraction.rst

File Extraction
===============

It is very useful to be able to locate and extract files from running Docker containers on a ROS machine.
These can be for instance URDF mesh files (STL, DAE) and textures, or models of objects detected by computer vision.
The :doc:`World Model 3D </ui-widgets/world-model-3d>` utilizes this feature extensively.

Files are uploaded to the Bridge Server, cached and served from there on subsequent requests to save on robot's networking bandwidth.
In order to invalidate this cache, call the ``phntm_bridge/clear_cloud_file_cache`` service (availale in the Services menu in the Web UI).

Notes
"""""

- Only ``package://`` or ``file://`` URLs are supported
- When locating a file via ``package://``, it is important for the Docker container containing the package to have the ``ROS_WS`` environmental variable set
  as we need to source the ROS environment from ``$ROS_WS/install/setup.bash`` during the file search. The search operation attempts to source ``~/.bashrc`` too,
  so you can alternatively source your ROS environment there (which we recommend as a good practice anyway).
- Thanks to the standalone Bridge Agent design, it is possible to extract files from all parts of a distributed system.
  One Agent instance needs to be installed on every component.

How it works
""""""""""""

.. image:: ./img/file-extraction.svg
    :class: file-extraction
 