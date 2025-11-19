InputDriverBase
===============

Declared in `input-driver-base.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/input/input-driver-base.js/>`_

Extend this class to implement a custom input driver as outlined in the code snippet below.
A working example - :ref:`driver generating Bool messages <implementing-custom-input-drivers>` - can be found `in the Extras 
repository <https://github.com/PhantomCybernetics/bridge_ui_extras/blob/main/examples/input-drivers/example-bool-input-driver.js/>`_
and also :doc:`live in our demos </demos/>`. 


.. rubric:: Static Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-static-attributes

   * - static **LABEL**
     - *String* (required)
     - Driver label displayed in the Input Manager


.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **client**
     - :doc:`BrowserClient </ui-api-docs/BrowserClient/>`
     - Reference to Browser client
   * - **input_manager**
     - *InputManager*
     - Reference to the Input Manager
   * - **output**
     - *MsgType*
     - Last generated output
   * - **output_topic**
     - *String*
     - Topic to output to


.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **constructor(** *InputManager* input_manager **)**
     - 
   * - **generate()** : *MsgType*
     - Generate and return output message based on axes and button states
   * - **getAxes()** : *{ 'axis_id': 'Axis name' }*
     - Retrn a map of axes that can be mapped in the Input Manager
   * - **getButtons()** : *{ 'btn_id': 'Btn name' }*
     - Retrn a map of buttons that can be mapped in the Input Manager
   * - **getConfig()** : *Any*
     - Retrn a custom config (ony when some extra data needs to be saved)
   * - **setConfig(** *Any* cfg **)**
     - Apply the loaded config data


.. rubric:: Example

.. code-block:: javascript
   :caption: custom-input-driver.js

   import { InputDriverBase } from 'https://bridge.phntm.io/static/input/input-driver-base.js'

   export class ExampleBoolInputDriver extends InputDriverBase {

        // human readable driver name
        static LABEL = "Example Bool Driver";

        // the message type to generate must be available to the Bridge node
        // (see https://docs.phntm.io/bridge/basics/custom-message-types.html)
        msg_type = 'std_msgs/msg/Bool';

        num_axes = 5; // number of mappable axes to create
        num_buttons = 5; // number of mappable buttons to create

        // create named axes to allow mapping input to
        getAxes() { 
            let axes = {};
            for (let i = 0; i < this.num_axes; i++) {
                axes[`axis.${i}`] = 'Test: Axis '+i
            }
            return axes;
        }

        // create named buttons to allow mapping input to
        getButtons() { 
            let buttons = {};
            for (let i = 0; i < this.num_buttons; i++) {
                buttons[`btn.${i}`] = 'Test: Button '+i
            }
            return buttons;
        }

        // generate output message from the current state of all axes and buttons
        // in this simple example, we only return True if something is pressed
        generate() {
            let something_pressed = false;

            for (let i = 0; i < this.num_axes; i++) {
                let id_axis = `axis.${i}`;
                if (this.axes_output[id_axis])
                    something_pressed = true;
            }

            for (let i = 0; i < this.num_buttons; i++) {
                let id_btn = `btn.${i}`;
                if (this.buttons_output[id_btn])
                    something_pressed = true;
            }

            // output message
            let msg = {
                data: something_pressed
            }

            return msg;
        }
   }