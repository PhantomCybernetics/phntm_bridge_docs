:github_url: https://github.com/PhantomCybernetics/phntm_bridge_docs/edit/main/ui/touchscreen-interface.rst

Touchscreen Interface
=====================

The Web UI is optimized for touchscreen devices, automatically detects phones and tablets and 
adjusts for better ergonomy. The main menu with nodes, topics, services etc becomes a hamburger `≡` menu in the top left.

Virtual gamepad with two axes is provided and can be mapped to custom control messages same way you would map any physical controller.

You can also add :ref:`custom buttons <custom-touchscreen-buttons>` that appear only when touchscreen is used. In the `Input Manager`,
you'll see two placement options for custom buttons: top buttons are displayed all the time (when there's enough space) while bottom buttons
are only shown with the virtual gamepad.

.. raw:: html

   <div class="touch-video-wrapper">
    <video width="100%" height="auto" autoplay loop class="ui-touch">
        <source src="/bridge/video/tablet-screen.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
   </div>

Touchscreen-specific gestures
-----------------------------

* To resize or move a panel, ``tap and hold its title bar (the label) for 2 seconds``, until the panel turns green
* To maximize any panel into fullscreen, ``double tap on its content``, then double tap on it again to exit fullscreen mode

Fullscreen mode
---------------

* On Android, to switch the whole UI to fullscreen, click the ``[ ]`` icon in the `≡` hamburger menu
* On iOS, only Safari is able to switch to fullscreen at the time of writing, use the ``Hide Toolbar`` option (neither mobile Opera nor Chrome offers fullscreen capability on iOS)