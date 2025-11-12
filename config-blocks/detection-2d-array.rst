.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_2d_detection_topic:
          input_width: 416 # detection input frame width
          input_height: 416 # detection input frame height
          label_map: [ 'person', 'woman', 'man', 'camera', 'TV' ] # class label map
          color_map: [ 'red', '#00ff00', 'blue', '', 'magenta' ]