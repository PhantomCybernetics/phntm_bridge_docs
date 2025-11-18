VideoPuginBase
==============

Declared in `video-plugin-base.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/widgets/video/video-plugin-base.js/>`_

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
     - :doc:`BridgeClient </ui-api-docs/BridgeClient/>`
     - Reference to Bridge client
   * - **overlays**
     - *{ 'topic': custom_topic_data }*
     - Custom overlay data by topic
   * - **panel**
     - :doc:`Panel </ui-api-docs/Panel/>`
     - Reference to widget panel
   * - **ui**
     - :doc:`PanelUI </ui-api-docs/PanelUI/>`
     - Reference to the UI
   * - **video**
     - *VideoWidget*
     - Reference to Video widget


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** *VideoWidget* video **)**
     - 
   * - **addTopic(** *String* topic **)**
     - Add topic to this plugin, called when the user selects a new topic as overlay input
   * - **clearAllTopics(** **)**
     - Clear all topics.
   * - **clearTopic(** *String* topic **)** 
     - Clear one topic and all its visuals
   * - **clearVisuals(** *String* topic **)**
     - Remove all visuals for the topic here
   * - **onTopicData(** *String* topic, *MsgType* msg **)** 
     - Called when data for the topic is received
   * - **onResize(** **)**
     - Called on panel/window resize
   * - **setupMenu(** *jQuery* menu_els **)**
     - Setup menu items by adding new lines into the provided menu_els container


Extend this class to implement a custom plugin for the Video widget as outlined in the example below.
A working example - overlay displaying TwistStamped messages as input keys over a video panel - can be found `in the Extras 
repository <https://github.com/PhantomCybernetics/bridge_ui_extras/tree/main/examples/custom-video-cmd-vel-overlay/>`_
and also :doc:`live in our demos </demos/>`. 


.. code-block:: javascript
   :caption: custom-plugin.js

   import { VideoPuginBase } from "https://bridge.phntm.io/static/widgets/video/video-plugin-base.js";
    
   export class CustomVideoWidget_CmdVel extends VideoPuginBase {
        static SOURCE_TOPIC_TYPE = 'some_msgs/msg/TopicMsgType';
        static SOURCE_DESCRIPTION = 'Source description';   
        static SOURCE_DEFAULT_TOPIC = null;
        static SOURCE_MAX_NUM = 1;

        constructor(video) {
            super(video);
        }

        addTopic(topic) {
            super.addTopic(topic);
            // handle topic add
        }

        setupMenu(menu_els) {
            // add custom menu items to menu_els (jQuery List)
        }

        onResize() {
            // handle resize
        }

        onTopicData(topic, msg) {
             // process received topic data
        }

        clearVisuals(topic) {
            // clear all topic visuals
        }

        clearTopic(topic) {
            // handle your own topic cleanup
            super.clearTopic(topic);
        }
   }