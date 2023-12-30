mecanumRobotV2.stelleServo(0)
let LichtAn = 22
let Vorwärts = 70
let Rückwärs = 21
let RechtsDrehen = 67
let LinksDrehen = 68
let LichtAus = 25
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
    if (irRemote.returnIrButton() == Vorwärts) {
        mecanumRobotV2.motorenVorwärts(MaximaleGeschwindigkeit)
    } else if (irRemote.returnIrButton() == LinksDrehen) {
        mecanumRobotV2.linksDrehen(MaximaleGeschwindigkeit)
    } else if (irRemote.returnIrButton() == RechtsDrehen) {
        mecanumRobotV2.rechtsDrehen(MaximaleGeschwindigkeit)
    } else if (irRemote.returnIrButton() == Rückwärs) {
        mecanumRobotV2.motorenRückwärts(MaximaleGeschwindigkeit)
    } else if (irRemote.returnIrButton() == LichtAn) {
    	
    } else if (irRemote.returnIrButton() == LichtAus) {
    	
    } else {
        mecanumRobotV2.motorenAnhalten()
    }
})
