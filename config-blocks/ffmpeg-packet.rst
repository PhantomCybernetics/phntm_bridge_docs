.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_encoded_video_topic:
          debug_num_frames: 1 # will debug this many frames (inspects NAL units)
          debug_verbose: False # will debug every frame
          create_node: True # create a special ROS node for this topic