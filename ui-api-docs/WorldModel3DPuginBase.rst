WorldModel3DPuginBase
=====================

Declared in `world-model-plugin-base.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/widgets/world-model-3d/world-model-plugin-base.js/>`_

Extend this class to implement a custom plugin for the World Model 3D widget as outlined in the code snippet below.
A working example - :ref:`overlay displaying Battery messages as virtual LEDs on the robot <implementing-custom-world-model-3d-overlays>` - can be found `in the Extras 
repository <https://github.com/PhantomCybernetics/bridge_ui_extras/tree/main/examples/custom-world-model-battery-plugin/>`_
and also :doc:`live in our demos </demos/>`.


.. rubric:: Static Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-static-attributes

   * - static **SOURCE_DEFAULT_TOPIC**
     - *String | Null*
     - Default topic to select or null (default)
   * - static **SOURCE_DESCRIPTION**
     - *String* (required)
     - Source description to show in the overlay selector
   * - static **SOURCE_MAX_NUM**
     - *Number*
     - The maximum number of topics this plugin can handle, -1=unlimited (default)
   * - static **SOURCE_TOPIC_TYPE**
     - *String* (required)
     - Source topic message type
   

.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **client**
     - :doc:`BrowserClient </ui-api-docs/BrowserClient/>`
     - Reference to Browser client
   * - **overlays**
     - *{ 'topic': custom_topic_data }*
     - Custom overlay data by topic
   * - **panel**
     - :doc:`Panel </ui-api-docs/Panel/>`
     - Reference to widget panel
   * - **ui**
     - :doc:`PanelUI </ui-api-docs/PanelUI/>`
     - Reference to the UI
   * - **world_model**
     - *WorldModel3DWidget*
     - Reference to World Model 3D widget


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** *WorldModel3DWidget* world_model **)**
     - 
   * - **addTopic(** *String* topic **)**
     - Add topic to this plugin, called when the user selects a new topic as overlay input
   * - **clearAllTopics(** **)**
     - Clear all topics.
   * - **clearTopic(** *String* topic **)** 
     - Clear one topic and all its visuals
   * - **clearVisuals(** *String* topic **)**
     - Remove all visuals for the topic here
   * - **onModelRemoved(** **)**
     - Called when robot's URDF model is removed of updated   
   * - **onTopicData(** *String* topic, *MsgType* msg **)** 
     - Called when data for the topic is received
   * - **onRender(** **)**
     - Called from the widget's rendering loop
   * - **onResize(** **)**
     - Called on panel/window resize
   * - **setupMenu(** *jQuery* menu_els **)**
     - Setup menu items by adding new lines into the provided menu_els container


.. rubric:: Methods

.. code-block:: javascript
   :caption: custom-world-model-3d-plugin.js
   
   import { WorldModel3DPuginBase } from 'https://bridge.phntm.io/static/widgets/world-model-3d/world-model-plugin-base.js'

   export class CustomWorldModel3DPlugin extends WorldModel3DPuginBase {

        static SOURCE_TOPIC_TYPE = 'some_msgs/msg/TopicMsgType'; // set your message type
        static SOURCE_DESCRIPTION = 'Source description'; // show in the overlay selection
        static SOURCE_DEFAULT_TOPIC = null; // default topic id to select or null
        static SOURCE_MAX_NUM = -1; // number of allowed topics, -1=unlimited

        constructor(world_model) {
            super(world_model);
        }

        addTopic(topic) {
            super.addTopic(topic);
            // handle topic add
        }

        setupMenu(menu_els) {
            // add custom menu items to menu_els (jQuery List)
        }

        onTopicData(topic, msg) {
            // process received topic data
        }

        onRender() {
            // called from the widget's rendering loop
        }

        clearVisuals(topic) {
            // clear all topic visuals
        }

        clearTopic(topic) {
            // handle your own topic cleanup
            super.clearTopic(topic);
        }
    }