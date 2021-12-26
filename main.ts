let sensordifference = 0
let rightsensor = 0
let leftsensor = 0
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
let headlights = moveMotorZIP.range(0, 2)
let rearlights = moveMotorZIP.range(2, 2)
basic.forever(function () {
    rearlights.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    headlights.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
    leftsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
    rightsensor = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
    sensordifference = Math.abs(leftsensor - rightsensor)
    if (sensordifference > 10) {
        if (leftsensor > rightsensor) {
            Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 5)
        } else {
            Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 5)
        }
    } else {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 10)
    }
})
