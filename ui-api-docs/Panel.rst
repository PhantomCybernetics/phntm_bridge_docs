:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui-api-docs/Panel.rst

Panel
=====

Declared in `panel.js <https://github.com/PhantomCybernetics/phntm_bridge_ui/blob/main/static/panel.js/>`_

This class represents a single panel of the :doc:`user interfce <PanelUI>` and handles its user interface elements and user interactions.
Panel consists of the main widget area, can display raw message source, handles the menu, title bar, and optional extra buttons.
It also offers a mechanism to store and load custom variables used by the widgets.


.. rubric:: Instance Attributes

.. list-table::
   :widths: 25 20 55
   :class: api-ref-instance-attributes

   * - **display_widget**
     - | :doc:`CompositePanelWidgetBase <CompositePanelWidgetBase>` \| 
       | :doc:`SingleTypePanelWidgetBase <SingleTypePanelWidgetBase>` \| *null*
     - Reference to the panel's widget
   * - **fps_visible**
     - *Bool*
     - True when FPS label is visible
   * - **id_stream**
     - *String* \| *null*
     - ID of the media stream used by the panel
   * - **id_source**
     - *String*
     - Topic or :doc:`composite widget <CompositePanelWidgetBase>` ID
   * - **maximized**
     - *Bool*
     - True when panel is maximized
   * - **n**
     - *Number*
     - Panel number, useful for adressing panel's DOM elements (changes between page loads)
   * - **paused**
     - *Bool*
     - True when panel is paused - no updates should be performed
   * - **src_visible**
     - *Bool*
     - True when raw message source is visible
   * - **ui**
     - :doc:`PanelUI <PanelUI>`
     - Reference to Panel UI
   * - **widget_height**
     - *Number*
     - Height available to the widget in pixels
   * - **widget_width**
     - *Number*
     - Width available to the widget in pixels
   

.. rubric:: Methods

.. list-table::
   :widths: 45 55
   :class: api-ref-methods

   * - **getPanelVarAsBool(** *String* var_name, *Bool* default_value **)** : *Bool*
     - Get panel variable as a boolean
   * - **getPanelVarAsFloat(** *String* var_name, *Number* default_value **)** : *Number*
     - Get panel variable as a float
   * - **getPanelVarAsFloatArray(** *String* var_name, *Number[]* default_value **)** : *Number[]*
     - Get panel variable as an array of floats
   * - **getPanelVarAsInt(** *String* var_name, *Number* default_value **)** : *Number*
     - Get panel variable as a integer
   * - **getPanelVarAsString(** *String* var_name, *String* default_value **)** : *String*
     - Get panel variable as a string
   * - **getPanelVarAsStringArray(** *String* var_name, *String[]* default_value **)** : *String[]*
     - Get panel variable as an array of strings
   * - **getPanelVarAsVector3(** *String* var_name, *THREE.Vector3* default_value **)** : *THREE.Vector3*
     - Get panel variable as a vector3
   * - **getPanelVars()** : *{ 'var_name': Any }*
     - Return all defined panel vars for this panel
   * - **pauseToggle()**
     - Toggles the panel's paused state
   * - **storePanelVarAsBool(** *String* var_name, *Bool* value **)**
     - Store panel variable as a boolean
   * - **storePanelVarAsFloat(** *String* var_name, *Number* value, *Number* precision = 3 **)**
     - Store panel variable as a float, only *precision* decimal points are kept
   * - **storePanelVarAsFloatArray(** *String* var_name, *Number[]* value, *Number* precision = 3 **)**
     - Store panel variable as an array of floats, only *precision* decimal points are kept
   * - **storePanelVarAsInt(** *String* var_name, *Number* value **)**
     - Store panel variable as a integer
   * - **storePanelVarAsString(** *String* var_name, *String* value **)**
     - Store panel variable as a string
   * - **storePanelVarAsStringArray(** *String* var_name, *String[]* value **)**
     - Store panel variable as an array of strings
   * - **storePanelVarAsVector3(** *String* var_name, *THREE.Vector3* value, *Number* precision = 3 **)**
     - Store panel variable as a vector3, only *precision* decimal points are kept
   * - **updateFps(** *Bool* count_frame = true **)**
     - Call this to manually update FPS count of the panel; used by :doc:`composite widgets <CompositePanelWidgetBase>`
   * - **updateMenu()**
     - Call this to explicitly rebuild the panel's menu
