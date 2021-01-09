basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 50) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        basic.showIcon(IconNames.Heart)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
        basic.showIcon(IconNames.Yes)
    }
})
