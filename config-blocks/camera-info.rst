.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_camera/camera_info_topic:
          frustum_color: 'cyan' # color name or hex (e.g. '#00ff00')
          frustum_near: 0.01 
          frustum_far: 1.0
          force_frame_id: 'camera_optical_frame' # force frame_id in URDF model (in the UI)