:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui-api-docs/MultiTopicSource.rst

MultiTopicSource
================

Declared in `multitopic.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/widgets/inc/multitopic.js/>`_

This class creates a multi-topic data source used by :doc:`composite panel widgets </ui-api-docs/CompositePanelWidgetBase>`.
It also adds its UI to the :doc:`panel </ui-api-docs/Panel>` menu and handles user interactions.


.. rubric:: Events

.. list-table::
   :widths: 25 20 55
   :class: api-ref-events

   * - **change**
     - *String[]* topics
     - Trigerred on topics change


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** :doc:`CompositePanelWidgetBase <CompositePanelWidgetBase>` widget **)**
     - 
   * - | **add(** *String* msg_type, *String* label, *String|null* default_topic,
       | *Number* max_num, *Callback* cb_data, *Callback* cb_removed **)**
     - Add slots for max_num topics (-1=unlimited) of type msg_type
   * - **getSources()** : *String[]*
     - Returns all currently selected topics
   * - **hasType(** *String* msg_type **)** : *Bool*
     - Returns true if at least one topic of msg_type is selected
   * - **hasSources()** : *Bool*
     - Returns true if any source topics are selected
   * - **loadAssignedTopicsFromPanelVars()**
     - Loads selected topics from widget's panel vars, call after adding sources (saving handled internally)
   * - **off(** *String* event, *Callback* callback **)**
     - Unregister event handler
   * - **on(** *String* event, *Callback* callback **)**
     - Register event handler, see Events above
   * - **topicSubscribed(** *String* topic **)** : *Bool*
     - Returns true if the topic is selected
   

.. rubric:: Example

.. code-block:: javascript
   :caption: multitopic-example.js
   
   export class SomeWidget extends CompositePanelWidgetBase {

        constructor (panel, widget_css_class) {

            // ...

            this.sources = new MultiTopicSource(this);

            this.sources.on("change", (topics) => this.onSourcesChange(topics));

            this.sources.add(
                "tf2_msgs/msg/TFMessage",
                "Static transforms source",
                "/tf_static", // default topic
                2, // max 2 of this type
                (topic, tf) => {
                    that.onTFData(topic, msg); // onData
                },
                 (topic) => {
                    // onSourceRemoved
                }
            );
            this.sources.add(
                "std_msgs/msg/BoolMessage",
                "Bool source",
                null, // no default topic
                -1, // no limit
                (topic, tf) => { 
                    that.onBoolData(topic, msg); // onData
                },
                (topic) => {
                    // onSourceRemoved
                }
            );
            
            this.sources.loadAssignedTopicsFromPanelVars();  // call when all sources are added

            this.onSourcesChange(this.sources.getSources());

            // ...
        }

        onSourcesChange(source_topics) {
            console.log('Panel sources changed: ', source_topics);
        }

        setupMenu(menu_els) { // CompositePanelWidgetBase does this in setupMenu()
            this.sources.setupMenu(menu_els); // adds its ui to the panel menu
        }

        onTFData(topic, msg) {
            console.log('Got TF data from ' + topic + ': ', msg);
        }

         onBoolData(topic, msg) {
            console.log('Got Bool data from ' + topic + ': ', msg);
        }
        
        onClose() { // CompositePanelWidgetBase does this in onClose()
            this.sources.close(); // cleanup
        }
   }