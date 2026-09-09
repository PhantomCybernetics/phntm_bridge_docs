.. code-block:: yaml
   :caption: phntm_bridge.yaml or phntm_agent.yaml 

    /**:
      ros__parameters:

        id_robot: '%ID_ROBOT%' # robot's ID generated during registration
        key: '%SECRET_KEY%' # robot's secret key generated during registration
        bridge_server_address: 'https://us-ca.bridge.phntm.io' # if resent in the Agent's config, Agent is considered having internet access (can upload files)
        file_uploader_port: 1336 # Bridge Server's File Receiver port to upload files to (Agent) and clear cache (Client)

        file_extraction_request_topic: '/file_extraction_requests' # Bridge Client sends requests here, Agents listen
        file_extraction_result_topic: '/file_extraction_results' # Brdige Agents send their results here, Client listens
        file_extraction_chunks_topic: '/file_extractor_chunks' # Agent without network access produces file chunks to this topic, Agent with access reads and uploads
        file_extraction_enabled: True # Agent only - wheather file extraction is enabled
        