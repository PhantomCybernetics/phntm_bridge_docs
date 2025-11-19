BrowserClient
=============

Declared in `browser-client.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/browser-client.js/>`_

This class is responsible for establishing WebRTC connection to the Robot, Socket.io connection to the Bridge Server, subscribing to topics, handling message calls, and so on.


.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **discovered_nodes**
     - *{ 'id_node': { NodeInfo } }*
     - Discovered nodes, publishers, subscribers and services
   * - **discovered_services**
     - *{ 'id_service': { ServiceInfo } }*
     - Discovered services and their message types
   * - **discovered_topics**
     - *{ 'id_topic': { TopicInfo } }*
     - Discovered topics and their message types
   * - **id_robot**
     - *String*
     - Robot ID
   * - **input_manager**
     - *InputManager*
     - Reference to Input Manager
   * - **media_streams**
     - *{ 'id_stream': MediaStream }*
     - Open inbound media streams
   * - **pc**
     - *PeerConnection*
     - WebRTC peer connection object
   * - **session**
     - *String*
     - Session ID
   * - **socket**
     - *Socket.io*
     - Socket.io connection object
   * - **supported_msg_types**
     - *InterfaceDefinition[]*
     - All received message type definitions
   * - **topic_streams**
     - *{ 'id_topic': id_stream }*
     - Open inbound data channels
   * - **ui**
     - :doc:`PanelUI </ui-api-docs/PanelUI/>`
     - Reference to Panel UI
   

.. rubric:: Events

.. list-table::
   :widths: 25 20 55
   :class: api-ref-events

   * - **defs_updated**
     -
     - Discovered interface definitons changed
   * - **docker**
     - *{ 'host': DockerInfo }*
     - Discovered Docker containers changed
   * - **error**
     - *Number* error, *String* message
     - Received error from the robot
   * - **media_stream**
     - *String* id_topic, MediaStream stream
     - Media stream opened for topic
   * - **nodes**
     - *{ 'id_node': NodeInfo }*
     - Detected nodes changed
   * - **peer_connected**
     -
     - WebRTC connection established
   * - **peer_connection_changed**
     -
     - WebRTC connection changed
   * - **peer_disconnected**
     -
     - WebRTC connection closed
   * - **peer_service_call_broadcast**
     - *{ service: String, msg: MsgType }*
     - Some other peer called a service, this is the reply (used for UI syncing)
   * - **peer_stats**
     - *WebRTCStats* stats
     - Peer connection stats generated
   * - **robot_peers**
     - *{ num_connected: Number, num_waiting: Number }*
     - Received robot peer info
   * - **services**
     - *{ 'id_service': ServiceInfo }*
     - Discovered services changed
   * - **socket_connect**
     - 
     - Socket.io connected to the Bridge Server
   * - **socket_disconnect**
     -
     - Socket.io Bridge Server connection lost
   * - **topics**
     - *{ 'id_topic': TopicInfo }*
     - Discovered topics changed
   * - **update**
     -
     - Received robot's state data or conneciton state changed (UI should update)


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** *BridgeClientOptions* opts **)**
     - 
   * - **connect(** **)**
     - Connect to the Bridge Server
   * - **disconnect(** **)**
     - Disconnect from the Bridge Server
   * - **getBridgeFileUrl(** *String* url **)** : *String*
     - Get file URL for file extraction from the robot
   * - **getConfigParam(** *String* key **)** : *Any*
     - Returns config param from the YAML file
   * - **getPeerConnectionInfo()** : *String[]*
     - Returns WebRTC connection type and IP of the robot used
   * - **getServiceConfig(** *String* service **)** : *Object*
     - Returns config params for the service (from the YAML file)
   * - **getTopicConfig(** *String* topic **)** : *Object*
     - Returns config params for the topic (from the YAML file)
   * - **off(** *String* event, *Callback* cb **)**
     - Unregister callback from an event (see the list above)
   * - **offServiceConfig(** *String* service, *Callback* cb **)**
     - Unregisters callback from being called when service config updates
   * - **offTopicConfig(** *String* topic, *Callback* cb **)**
     - Unregisters callback from being called when topic config updates
   * - **offTopicData(** *String* topic, *Callback* cb **)**
     - Unsubscribe from topic messages
   * - **offUIConfig(** *Callback* cb **)**
     - Unregisters callback from being called when UI config updates
   * - **on(** *String* event, *Callback* cb **)**
     - Register a callback to be called on event (see the list above)
   * - **once(** *String* event, *Callback* cb **)**
     - Register a callback to be called once on event (see the list above)
   * - **onServiceConfig(** *String* service, *Callback* cb **)**
     - Registers a callback to be called when service config updates
   * - **onTopicConfig(** *String* topic, *Callback* cb **)**
     - Registers a callback to be called when topic config updates
   * - **onTopicData(** *String* topic, *Callback* cb **)**
     - Subscribe to topic messages
   * - **onUIConfig(** *Callback* cb **)**
     - Registers a callback to be called when UI config updates
   * - | **openWriteChannel(** *String* topic, *String* msg_type,
       | *Object* err_out = null **)** : Bool
     - Opens write data channel for a topic, returns false on error and message err_out.message
   * - | **serviceCall(** *String* service, *MsgType* data,
       | *Bool* silent_req, *Number* timeout_sec, *Callback* cb **)**
     - | Performs a ROS service call, reply received via callback
   * - **writeTopicData(** *String* topic, *MsgType* data **)** : *Bool*
     - | Writes message into it a data channel opened with openWriteChannel().
       | Returns false on failure.