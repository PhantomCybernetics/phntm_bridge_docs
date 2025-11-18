SingleTypePanelWidgetBase
=========================

Declared in `single-type-widget-base.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/widgets/inc/single-type-widget-base.js/>`_

.. rubric:: Static Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-static-attributes

   * - static **DEFAULT_WIDTH**
     - *Number*
     - Default panel width in GridScale columns
   * - static **DEFAULT_HEIGHT**
     - *Number*
     - Default panel width in GridScale rows
   * - static **HANDLED_MSG_TYPES**
     - *String[]* (required)
     - Topic message types to associate this widget with


.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **autoresize_renderer**
     - *Bool*
     - If true, resize renderer attached to this widget automatically
   * - **client**
     - :doc:`BridgeClient </ui-api-docs/BridgeClient/>`
     - Reference to Bridge client
   * - **panel**
     - :doc:`Panel </ui-api-docs/Panel/>`
     - Reference to widget panel
   * - **ui**
     - :doc:`PanelUI </ui-api-docs/PanelUI/>`
     - Reference to the UI
   * - **topic**
     - *String*
     - Topic name
   * - **widget_el**
     - *jQuery*
     - Reference to the widget's DOM element


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** :doc:`Panel </ui-api-docs/Panel/>` panel, *String* topic, *String* widget_css_class **)**
     - 
   * - **onData(** *MsgType* msg **)** 
     - Called when data for the topic is received
   * - **onResize(** **)**
     - Called on panel/window resize
   * - **setupMenu(** *jQuery* menu_els **)**
     - Setup menu items by adding new lines into the provided menu_els container
   * - **onPaused(** **)**
     - Called when the panel is paused
   * - **onUnpaused(** **)**
     - Called when the panel is unpaused
   * - *String* **getFpsString(** **)**
     - Returns string to be displayed in the FPS label
   * - **onClose(** **)**
     - Called when the panel is closed

Extend this class to implement a custom single-type topic widget as outlined in the example below.
A working example - panel displaying Bool message - can be found `in the Extras 
repository <https://github.com/PhantomCybernetics/bridge_ui_extras/tree/main/examples/custom-bool-panel-widget/>`_
and also :doc:`live in our demos </demos/>`. 

.. code-block:: javascript
   :caption: custom-plugin.js

   import { SingleTypePanelWidgetBase } from 'https://bridge.phntm.io/static/widgets/inc/single-type-widget-base.js'

   export class CustomSingleTypePanelWidget extends SingleTypePanelWidgetBase {

        static HANDLED_MSG_TYPES = [ 'some_msgs/msg/TopicMsgType' ]; // associate with these types
        
        constructor(panel, topic) {
            super(panel, topic, 'my-widget-class'); // gets added to the panel
            // set up DOM or Three.js Renderer+Scene here
        }

        setupMenu(menu_els) {
            // add custom menu items to menu_els (jQuery List)
        }

        onData(msg) {
            // do something with the received data
        }

        onResize() {
            // handle resize
        }

        onClose() {
            // clean up
        }
   }
