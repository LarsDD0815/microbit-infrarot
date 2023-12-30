mecanumRobotV2.stelleServo(0)
let Vorwärts = 70
let Rückwärs = 21
let RechtsDrehen = 67
let LinksDrehen = 68
let LichtAn = 22
let LichtAus = 25
let MaximaleGeschwindigkeit = 70
let Drehgeschwindigkeit = 30
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
irRemote.connectInfrared(DigitalPin.P0)
basic.forever(function () {
    if (irRemote.returnIrButton() == Vorwärts) {
        if (mecanumRobotV2.aktuelleEntfernungInZentimetern() > 30) {
            mecanumRobotV2.motorenVorwärts(MaximaleGeschwindigkeit)
        } else {
            mecanumRobotV2.motorenAnhalten()
        }
    } else if (irRemote.returnIrButton() == LinksDrehen) {
        mecanumRobotV2.linksDrehen(Drehgeschwindigkeit)
    } else if (irRemote.returnIrButton() == RechtsDrehen) {
        mecanumRobotV2.rechtsDrehen(Drehgeschwindigkeit)
    } else if (irRemote.returnIrButton() == Rückwärs) {
        mecanumRobotV2.motorenRückwärts(MaximaleGeschwindigkeit)
    } else if (irRemote.returnIrButton() == LichtAn) {
    	
    } else if (irRemote.returnIrButton() == LichtAus) {
    	
    } else {
        mecanumRobotV2.motorenAnhalten()
    }
})
