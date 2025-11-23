.. code-block:: yaml
   :caption: phntm_bridge.yaml or phntm_agent.yaml 

    /**:
      ros__parameters:

        file_upload_port: 1336 # Bridge Server's File Receiver port to upload files to (only the Bridge Client needs this)
        file_chunks_topic: /file_chunks # Agent produces file chunks to this topic, Bridge Client receives