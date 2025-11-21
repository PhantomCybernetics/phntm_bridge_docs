:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui/custom-widgets.rst

Customizing the User Interface
==============================

There are several ways to extend or customize the :doc:`web User Interface </ui/overview>` by loading custom JavaScript modules
and CSS files into it. This is done from the robot's `phntm_bridge.yaml` config file. None of the following requires you to to host
any part of the Phantom Bridge cloud infrastructure, only your extension sources.

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
and a lighweight Node.js server that can serve your extensions with proper `CORS policy <https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS>`_
and SSL certificate, both required for proper functioning with modern browsers.

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
create a custom drivers that map user's keyboard, gamepad or touch screen input to any other ROS message types.

See more under :ref:`User Input & Teleoperation <implementing-custom-input-drivers>`.


Service Service Menu Widgets
----------------------------

Any ROS service can be called with a pre-defined payload using the built-in UI functionality.
You can also easily create a completely bespoke interface elements to be displayed in the Services
menu and associated with your ROS services.

See more under :ref:`Implementing Custom Service Widgets <implementing-custom-service-widgets>`.


Single-type Panel Widgets
-------------------------



Composite Panel Widgets
-----------------------



Ways to customize:
 * Panel widgets for specific topic message type
 * Composite panel widget 
 * Overlay for the Video panel widget
 * Overlay for the World Model 3D widget

Mention:
 * topic v. composite widget (+ multisource)
 * base classes DescriptionTF, Zoomable3dTiles
 * extend any existing class
 * add menu items / panel buttons
 * url params
 * consider a PR

Available libraries:
Three.js, D3.js, CanvasJS Charts, jQuery

How to:
 * use panel vars
 * create Three Renderer
 * create CanvasJS Chart
 * Video/WorldModel overlay
 * declare and read custom topic/service and global params (client.getTopicConfig() getServiceConfig(), getConfigParam()) explain the '.' notation

