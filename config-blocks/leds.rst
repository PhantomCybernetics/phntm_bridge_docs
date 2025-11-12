.. code-block::
   :caption: phntm_bridge.yaml

    /**:
      ros__parameters:

        conn_led_gpio_chip: /dev/gpiochip0
        conn_led_pin: 23
        data_led_pin: 24
        ## ... or blink LEDs via ROS topics (producing std_msgs/msg/Bool):
        conn_led_topic: /some/led_topic_1
        data_led_topic: /some/led_topic_2