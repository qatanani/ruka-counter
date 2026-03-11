let was90 = 0
let neigungen = 0
let raka = 0
let is90 = 0
is90 = 0
basic.showLeds(`
    . . . . .
    # # # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 800 || input.acceleration(Dimension.Y) > 800 || (input.acceleration(Dimension.X) < -800 || input.acceleration(Dimension.Y) < -800)) {
        if (was90 == 0) {
            is90 = 1
        }
    } else {
        if (was90 == 1) {
            is90 = 0
        }
    }
    if (was90 == 0 && is90 == 1) {
        neigungen = neigungen + 1
        raka = neigungen / 3
    }
    if (neigungen % 3 == 0) {
        if (is90 == 0) {
            basic.showNumber(raka)
        } else {
            led.plot(4, 4)
            led.plot(4, 3)
            led.plot(4, 2)
        }
    } else if (neigungen % 3 == 1) {
        led.plot(4, 4)
    } else if (neigungen % 3 == 2) {
        led.plot(4, 4)
        led.plot(4, 3)
    }
    was90 = is90
})
