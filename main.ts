let index = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 1024; index++) {
        pins.analogWritePin(AnalogPin.P0, index)
        basic.pause(2)
    }
    index = 0
    pins.analogWritePin(AnalogPin.P0, index)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 1024; index++) {
        pins.analogWritePin(AnalogPin.P1, index)
        basic.pause(2)
    }
    index = 0
    pins.analogWritePin(AnalogPin.P1, index)
})
