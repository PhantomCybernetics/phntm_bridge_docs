:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui-api-docs/ServiceInputBase.rst

ServiceInputBase
================

Declared in `service-input-base.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/input/service-input-base.js/>`_

Extend this class to implement a custom service input widget as outlined in the code snippet below.
A working example - :ref:`slider menu element <implementing-custom-service-widgets>` - can be found `in the Extras 
repository <https://github.com/PhantomCybernetics/bridge_ui_extras/tree/main/examples/custom-slider-service-widget/>`_
and also :doc:`live in our demos </demos/>`. 


.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **client**
     - :doc:`BrowserClient </ui-api-docs/BrowserClient/>`
     - Reference to Browser client
   * - **id_service**
     - *String*
     - ID service


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** *String* id_service, :doc:`BrowserClient </ui-api-docs/BrowserClient/>` client **)**
     - 
   * - **getCurrentValue(** *Callback* done_cb, *Callback* err_cb **)**
     - Handle loading of the current value, i.e. via a getter service call, call done_cb() or err_cb() when done
   * - **makeElements(** *jQuery* target_el **)** 
     - Create your DOM elements here and append them to the target_el
   * - **onValueChanged(** *SrvMsgType* msg **)**
     - Trigerred when another peer updates the service, override to update the UI
   * - **updateDisplay(** *Any* value, *Bool* is_error = false **)**
     - Update created DOM elements with value
   


.. rubric:: Example

.. code-block:: javascript
   :caption: custom-service-input.js

   import { ServiceInputBase } from 'https://bridge.phntm.io/static/input/service-input-base.js'

   export class ServiceInput_ExampleSlider extends ServiceInputBase {

        constructor(id_service, client) {
            super(id_service, client);

            this.config = this.client.getServiceConfig(id_service);  // read service config passed from YAML

            // do some init here
        }

        // get curren value via a getter service
        getCurrentValue(done_cb, err_cb) {
            if (!this.config.value_read_service) {
                err_cb("Getter service not provided for "+this.id_service + " widget");
                return;
            }
            let that = this;
            let timeout_sec = this.config.timeout_sec ? this.config.timeout_sec : 2.0; // timeout for the service call reply
            this.client.serviceCall(this.config.value_read_service, null, true, timeout_sec, (reply) => { // call w no payload & silent
                console.warn("Service widget for " + that.id_service + ' current value:', reply);
                if (reply.data !== undefined) {
                    done_cb(reply.data);
                } else {
                    err_cb("Getter service  "+this.config.value_read_service+" reply missing 'data' attribute");
                }
            });
        }

        makeElements(target_el) {
            // init your DOM here
        }

        updateDisplay(value, is_error=false) {
            // update DOM with value
        }

        onValueChanged(msg) {
            this.updateDisplay(msg.data); // update the UI
        }
   }