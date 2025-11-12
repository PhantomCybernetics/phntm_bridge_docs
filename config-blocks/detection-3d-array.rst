.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        /some_3d_detection_topic:
          label_map: [ 'person', 'woman', 'man', 'camera', 'TV' ] # class label map
          color_map: [ 'red', '#00ff00', 'blue', '', 'magenta' ]
          model_map: # must be in the same order as the label_map
            - package://path_to_model/person_model.stl scale=[1.0,1.0,1.0] # stl model with scale set
            - file://path_to_model/woman_model.dae
            - none # no model, use oriented bounding box
            - file://path_to_model/camera_model.dae scale=[2.0,2.0,2.0] # collada model with scale set
            - cylinder scale=[1.0,2.0,1.0] # primitive with scale set, supported primitives are box, cylinder and sphere
          use_model_materials: True # whether to use model's own materials (default), or just a color (magenta by default)