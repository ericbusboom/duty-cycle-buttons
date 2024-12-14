def on_forever():
    for index in range(5):
        pins.analog_write_pin(AnalogPin.P0, index)
        basic.pause(10)
basic.forever(on_forever)
