let MaximaleGeschwindigkeit = 70
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
music.play(music.stringPlayable("C5 A G F G A B C5 ", 120), music.PlaybackMode.UntilDone)
irRemote.connectInfrared(DigitalPin.P0)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            . # # # .
            `)
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 160, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    } else {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (irRemote.returnIrButton() == 70) {
        mecanumRobotV2.MotorenVorwärts(MaximaleGeschwindigkeit)
    } else if ((0 as any) == (68 as any)) {
        mecanumRobotV2.LinksDrehen(MaximaleGeschwindigkeit)
    } else if (irRemote.returnIrButton() == 67) {
        mecanumRobotV2.RechtsDrehen(MaximaleGeschwindigkeit)
    } else if (irRemote.returnIrButton() == 21) {
        mecanumRobotV2.MotorenRückwärts(MaximaleGeschwindigkeit)
    } else {
        mecanumRobotV2.MotorenAnhalten()
    }
})
