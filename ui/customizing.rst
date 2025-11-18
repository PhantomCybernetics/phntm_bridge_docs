:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui/custom-widgets.rst

Customizing the User Interface
==============================

TODO

Ways to customize:
 * Custom CSS
 * Input plugins
 * Service menu widgets
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
 * preload graphics in CSS
 * use panel vars
 * create Three Renderer
 * create CanvasJS Chart
 * Video/WorldModel overlay
 * declare and read custom topic/service and global params (client.getTopicConfig() getServiceConfig(), getConfigParam()) explain the '.' notation

