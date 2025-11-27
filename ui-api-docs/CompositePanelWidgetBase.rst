:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui-api-docs/CompositePanelWidgetBase.rst

CompositePanelWidgetBase
========================

Declared in `composite-widget-base.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/widgets/inc/composite-widget-base.js/>`_

Extend this class to implement a custom multi-topic composite widget as outlined in the code snippet below.
A working example - :doc:`Wi-Fi signal strength map</ui-widgets/wifi-map-example/>` - can be found `in the Extras 
repository <https://github.com/PhantomCybernetics/bridge_ui_extras/tree/main/examples/custom-wifi-map-panel-widget/>`_
and also :doc:`live in our demos </demos/>`. 


.. rubric:: Static Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-static-attributes

   * - static **DEFAULT_HEIGHT**
     - *Number*
     - Default panel width in GridScale rows
   * - static **DEFAULT_WIDTH**
     - *Number*
     - Default panel width in GridScale columns
   * - static **LABEL**
     - *String* (required)
     - Text to display as widget's name


.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **autoresize_renderer**
     - *Bool*
     - If true, resize renderer attached to this widget automatically
   * - **client**
     - :doc:`BrowserClient </ui-api-docs/BrowserClient/>`
     - Reference to Browser client
   * - **panel**
     - :doc:`Panel </ui-api-docs/Panel/>`
     - Reference to widget panel
   * - **sources**
     - :doc:`MultiTopicSource <MultiTopicSource>`
     - Topic sources
   * - **ui**
     - :doc:`PanelUI </ui-api-docs/PanelUI/>`
     - Reference to the UI
   * - **widget_el**
     - *jQuery*
     - Reference to the widget's DOM element


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** :doc:`Panel </ui-api-docs/Panel/>` panel, *String* widget_css_class **)**
     - 
   * - **getFpsString()** : *String*
     - Returns string to be displayed in the FPS label
   * - **onClose()**
     - Called when the panel is closed
   * - **onPaused()**
     - Called when the panel is paused
   * - **onResize()**
     - Called on panel/window resize
   * - **onUnpaused()**
     - Called when the panel is unpaused
   * - **setupMenu(** *jQuery* menu_els **)**
     - Setup menu items by adding new lines into the provided menu_els container
   

.. rubric:: Example

.. code-block:: javascript
   :caption: custom-composite-widget.js

   import { CompositePanelWidgetBase } from 'https://bridge.phntm.io/static/widgets/inc/composite-widget-base.js'

   export class CustomSingleTypePanelWidget extends SingleTypePanelWidgetBase {

        static LABEL = 'Widget Label';
        
        constructor(panel) {
            super(panel, 'my-widget-class'); // gets added to the panel

            this.sources.add(
                "some_msgs/msg/SomeMsgType",	
                "Source description",
                null, // default topic
                1, // limit to 1
                (topic, msg) => this.onSomeData(topic, msg),
            );
            this.sources.add(
                "some_msgs/msg/SomeOtherMsgType",	
                "Source description",
                null, // default topic
                1, // limit to 1
                (topic, msg) => this.onSomeOtherData(topic, msg),
            );

            this.sources.loadAssignedTopicsFromPanelVars(); // init sources

            // set up DOM or Three.js Renderer+Scene here
        }

        setupMenu(menu_els) {
            this.sources.setupMenu(menu_els); // set up menu for the sources
            // add custom menu items to menu_els (jQuery List)
        }

        onSomeData (topic, msg) {
            // handle topic data
        }

        onSomeOtherData (topic, msg) {
            // handle other topic data
        }

        onResize() {
            // handle resize
        }

        onClose() {
            // clean up
             super.onClose();
        }
   }