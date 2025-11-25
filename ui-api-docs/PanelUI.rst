PanelUI
=======

Declared in `panel-ui.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/panel-ui.js/>`_

This class represents the panel window manager handling UI panels, notifications, and similar parts 
of the user interaction. Under the hood, it creates all the menus and dialogs, and allows users to call ROS
services or control Docker containers.


.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **battery_topic**
     - *String*
     - The battery topic specified in the robot's YAML
   * - **docker_control_enabled**
     - *Bool*
     - User can start/stop/restart Docker containers if *true*
   * - **docker_monitor_topic**
     - *String*
     - The Docker monitor topic specified in the robot's YAML
   * - **is_sleeping**
     - *Bool*
     - True when the window is sleeping after 2 mins of being in the background
   * - **is_visible**
     - *Bool*
     - True when the window is visible and has focus
   * - **panels**
     - { 'id_src': :doc:`Panel </ui-api-docs/Panel/>` }
     - Reference to all active panels
   * - **run_in_background**
     - *Bool*
     - When *false* (default), disconnects after 2 mins of being in the background or when the computer goes to sleep 
   * - **wifi_topic**
     - *String*
     - The wifi topic specified in the robot's YAML
   
   
.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - | **confirmDialog(** *String* label, *String* css_class,
       | *String* confirm_label, *Callback* confirm_cb, *String* cancel_label, *Callback* cancel_cb **)**
     - Creates a modal dialog that asks for user's confirmation
   * - **isTouchDevice()** : *Bool*
     - Returns *true* on mobile devices with a touchscreen
   * - | **makePanelFromConfig(** *String* id_source, *Number* w, *Number* h,
       | *Number* x = null, *Number* y = null, *Object* panel_vars = {} **)**
     - | Creates a new panel for *id_source* (topic or composite widget id)
       | w/h/x/y are in panel grid rows/cols, x/y = *null* means auto placement.
   * - | **serviceButtonElementCall(** *String* service, *MsgType* value,
       | *jQuery* btn_el, *Bool* show_reply = null **)**
     - | Performs a service call linked to a button (UI element). Working state and error
       | will be signalled by adding 'working' and 'btn_err' classes to the *btn_el*.
       | When *show_reply* = null, notification is shown only on error or other reply data.
   * - **showNotification(** *String* msg_html, *String* css_class, *String* detail_html = null **)**
     - | Displays a fading notification message with optional detail.
       | Use *css_class='error'* for errors.
   * - **showPageError(** *String* msg_html **)**
     - Displays a static red stripe with error message in the top of the window
   * - | **topicSelectorDialog(** *String* msg_type, *String[]* \| *null* exclude_topics,
       | *Callback* on_select_cb, *Callback* on_cancel_cb = null, *jQuery* align_with_el = null **)**
     - | Displays a modal dialog for selecting a single topic of a specific msg_type
       | Used by :doc:`MultiTopicSource <MultiTopicSource>`

