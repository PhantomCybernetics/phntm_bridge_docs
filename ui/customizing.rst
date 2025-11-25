:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui/custom-widgets.rst

Customizing the User Interface
==============================

There are several ways to extend or customize the :doc:`web User Interface </ui/overview>` by loading custom JavaScript modules
and CSS files into it. This is configured in the robot's ``phntm_bridge.yaml`` config file. None of the following techniques require
you to to host any part of the Phantom Bridge cloud infrastructure besides your own extension sources.

.. code-block:: yaml
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        ui_custom_includes_js: 
          - https://localhost:1234/custom-input-driver.js
          - https://www.some-server.com/custom-service-slider-widget.js
        ui_custom_includes_css:
          - https://www.some-server.com/example.css

.. Note:: In the example above, we are injecting CSS and JS files both from the localhost as well as a public web hosting.
          Localhost can be indeed used for development puposes, keep in mind that all your extensions need to be available on the internet.
          Included file that fails to load will likely break the UI, or cause unexpected behavior.

In the `Bridge UI Extras repository <https://github.com/PhantomCybernetics/bridge_ui_extras>`_, you will find all examples mentioned below
and a lighweight Node.js server that can serve your extensions with the proper `CORS policy <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS>`_
and SSL certificate, both required for security reasons by all modern browsers.

Customizing of the Bridge Interface can be split into the following categories:


Customizing CSS
---------------

With custom CSS, you can override the default look, change colors, and load 2D graphics as needed. 
A mechanism for pre-loading of custom images from your CSS files is included, use it to load graphics ahead of use to provide a smooth
user experience. See examples in `css-example <https://github.com/PhantomCybernetics/bridge_ui_extras/tree/main/examples/css-example>`_, 
the `demo-tweaks.css <https://github.com/PhantomCybernetics/bridge_ui_extras/blob/main/examples/css-example/demo-tweaks.css>`_ file
in fact cointains modifications made for :doc:`the live demos </demos>`.

.. _custom-input-drivers:

Custom Input Drivers
--------------------

On top of the built-in Input Drivers that can generate `Twist`, `TwistStamped` and `Joy` messages, you can also easily
create a custom drivers that map user's keyboard, gamepad or touchscreen input to any other ROS message types.

See more under :ref:`User Input & Teleoperation <implementing-custom-input-drivers>`.


Custom Service Menu Widgets
---------------------------

Any ROS service can be called with a pre-defined payload using the built-in UI functionality.
You can also easily create a completely bespoke interface elements to be displayed in the Services
menu and associated with your ROS services.

See more under :ref:`Implementing Custom Service Widgets <implementing-custom-service-widgets>`.


Single-type Panel Widgets
-------------------------

The UI comes with :doc:`several built-in widgets </ui-widgets/index>` for visualizing ROS topics based on their type.
You can make your own custom panel widgets by extending the :doc:`SingleTypePanelWidgetBase </ui-api-docs/SingleTypePanelWidgetBase>` class.
You can use either 2D graphics or create a custom 3D scene.

There is a simple example widget :doc:`displaying Bool messages </ui-widgets/bool-example>` available in the
`Extras repo <https://github.com/PhantomCybernetics/bridge_ui_extras/tree/main/examples/custom-bool-panel-widget>`_
and in our :doc:`live demos </demos>`.


Composite Panel Widgets
-----------------------

Composite widgets offer the possibility to mesh together different topic types in order to present them jointly either in 2D or 3D.
A showcase of this would be the :doc:`World Model 3D </ui-widgets/world-model-3d>` widget, or a much simpler example which :doc:`creates a map of Wi-Fi signal strength </ui-widgets/wifi-map-example>`
in combination with robot's odometry. 

For a composite panel widget, you will need to extend the :doc:`CompositePanelWidgetBase </ui-api-docs/CompositePanelWidgetBase>` class.


2D Video Overlays
-----------------

The built-in :doc:`Video </ui-widgets/video>` widget allows to create custom data overlays to display information over the video frames.
In the :doc:`live demos </demos>`, you can see this work with `vision_msgs/msg/Detection2DArray` messages. There is one other example built-in displaying
`TwistStamped` messages as a visualisation of the input keys.

In order to create a new video overlay plugin, extend the :doc:`VideoPluginBase </ui-api-docs/VideoPluginBase>` class.


World Model 3D Plugins
----------------------

In a simlar fashion, the :doc:`World Model 3D </ui-widgets/world-model-3d/>` widget can also be extended to show custom data in 3D. One example of that would be
the virtual battery LEDs shown on the robot in our :doc:`demos </demos>`. The widget can already combine several data types and show
them on the URDF model animated with TF messages. You can add any other data visualisation or interactive element and map these to the
correct reference frames on the URDF model.

To create a custom plugin for the World Model 3D, extend the :doc:`WorldModel3DPluginBase </ui-api-docs/WorldModel3DPluginBase>` class.


Notes
-----

The public :doc:`User Interface API </ui-api-docs/index>` allows to add extra items to the panel's menu, create functional buttons in the title bar, open dialogs
or store and load custom panel variables. You can read custom config parameters passed from the robot's ``phntm_bridge.yaml`` file both for the whole UI and for
specific topics or services. You can also call ROS services programatically and write data into your topics via fast UDP Data Channels.

`jQuery <https://jquery.com>`_, `D3.js <https://d3js.org>`_, `CanvasJS Charts <https://canvasjs.com>`_ and `Three.js <https://threejs.org>`_ are all
available to your extensions out of the box and used by the :doc:`built-in widgets </ui-widgets/index>`. If you need some inspiration, take a look at how these are implemented.

You can load custom graphics from the internet as well as :doc:`3D models and other sources from the robot </file-extraction>`.

Browse the `Bridge UI Extras repository <https://github.com/PhantomCybernetics/bridge_ui_extras>`_ for example code and to see how your files need to be hosted.
Feel free to `have a look <https://github.com/PhantomCybernetics/phntm_bridge_ui/tree/main/static/widgets>`_ at how the built-in widgets are
implemented and use the API.

If you create some useful extensions worth sharing with others, consider letting us know.