music.play(music.stringPlayable("C5 A G F G A B C5 ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
irRemote.connectInfrared(DigitalPin.P0)
basic.forever(function () {
    if (irRemote.returnIrButton() == 70) {
        mecanumRobotV2.MotorenVorwärts(20)
    } else if (irRemote.returnIrButton() == 68) {
        mecanumRobotV2.LinksDrehen(18)
    } else if (irRemote.returnIrButton() == 67) {
        mecanumRobotV2.RechtsDrehen(18)
    } else if (irRemote.returnIrButton() == 21) {
        mecanumRobotV2.MotorenRückwärts(20)
    } else {
        mecanumRobotV2.MotorenAnhalten()
    }
})
