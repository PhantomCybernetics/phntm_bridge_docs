.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_image_topic:
          debug_num_frames: 1 # will debug this many frames (inspects NAL units)
          debug_verbose: False # will debug every frame
          create_node: True # create a dedicated ROS node for this topic
          encoder_hw_device: sw # sw, cuda, vaapi
          encoder_thread_count: 2
          encoder_gop_size: 30 # key frame every N frames
          encoder_bit_rate: 5000000 # 610 KB/s

        /some_depth_image_topic:
          max_sensor_value: 4000.0 # depth max distance from the sensor in mm
          colormap: 13 # cv2.COLORMAP, e.g. 13 = cv2.COLORMAP_MAGMA