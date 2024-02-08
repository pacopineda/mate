//% weight=100 color=#008B00 icon="\uf136" block="Mate"
//% groups=['micro:bit(v2)']
namespace Mate {
    export class Packeta {
        public mye: string;
        public myparam: number;
    }

    export enum Motors {
        //% blockId="left motor" block="Izquierda"
        M1 = 0,
        //% blockId="right motor" block="Derecha"
        M2 = 1,
        //% blockId="all motor" block="Ambos"
        All = 2
    }

    export enum Dir {
        //% blockId="CW" block="Avanzar"
        CW = 0,
        //% blockId="CCW" block="Retroceder"
        CCW = 1
    }

    /**
      * Set the direction and speed of Mate motor.
      */

    //% weight=90
    //% blockId=motor_MotorRun_mat block="Pinmotor|%index|sentido|%Dir|velocidad|%speed"
    //% speed.min=0 speed.max=255 speed.
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function motorRun(index: Motors, direction: Dir, speed: number): void {
    let lento
    let rapido
    let speed1
    let speed2
    let spin
    let spin2
        if(speed <= 50 ){
             lento = 50;
             rapido = 83;
        }
        if (speed > 50 && speed <= 70){
             lento = 60;
             rapido = 93;
        }
    if (speed > 70 && speed <= 90){
             lento = 80;
             rapido = 115;
        }
    if (speed > 90 && speed <= 110){
             lento = 100;
             rapido = 131;
        }
    if (speed > 110 && speed <= 130){
             lento = 120;
             rapido = 146;
        }
    if (speed > 130 && speed <= 150){
             lento = 140;
             rapido = 161;
        }
    if (speed > 150 && speed <= 170){
             lento = 160;
             rapido = 176;
        }
    if (speed > 170 && speed <= 190){
             lento = 180;
             rapido = 198;
        }
    if (speed > 190 && speed <= 210){
             lento = 200;
             rapido = 213;
        }
    if (speed > 210 && speed <= 230){
             lento = 210;
             rapido = 224;
        }
    if (speed > 230 && speed <= 255){
             lento = 255;
             rapido = 261;
        }

        if (direction == 0 && index == 0){
             speed1 = lento;
             spin = (speed1 * 90) / 1000 + 90;
            pins.servoWritePin(AnalogPin.P0, spin);
        }
        if (direction == 1 && index == 0) {
              speed1 = rapido;
              spin = 87 - (speed1 * 90) / 1000;
            pins.servoWritePin(AnalogPin.P0, spin);
        }
        if (direction == 0 && index == 1) {
             speed2 = rapido;
             spin2 = 87 - (speed2 * 90) / 1000;
            pins.servoWritePin(AnalogPin.P8, spin2)
        }
        if (direction == 1 && index == 1) {
             speed2 = lento;
             spin2 = (speed2 * 90) / 1000 + 90;
            pins.servoWritePin(AnalogPin.P8, spin2)
        }
        if (direction == 0 && index == 2) {
             speed1 = lento;
             speed2 = rapido;
             spin = (speed1 * 90) / 1000 + 90;
             spin2 = 87 - (speed2 * 90) / 1000;
            pins.servoWritePin(AnalogPin.P0, spin);
            pins.servoWritePin(AnalogPin.P8, spin2);
        }
        if (direction == 1 && index == 2) {
             speed1 = rapido;
             speed2 = lento;
             spin = 87 - (speed1 * 90) / 1000;
             spin2 = (speed2 * 90) / 1000 + 90;
            pins.servoWritePin(AnalogPin.P0, spin);
            pins.servoWritePin(AnalogPin.P8, spin2);
        }
    }

    /**
     * Stop the Mate motor.
     */

    //% weight=20
    //% blockId=motor_motorStop_mat block="Pinmotor |%motors stop"
    //% motors.fieldEditor="gridpicker" motors.fieldOptions.columns=2 
    export function motorStop(motors: Motors): void {
        if (motors == 0) {
            pins.digitalWritePin(DigitalPin.P0, 0);
        }
        if (motors == 1) {
            pins.digitalWritePin(DigitalPin.P8, 0);
        }

        if (motors == 2) {
            pins.digitalWritePin(DigitalPin.P0, 0);
            pins.digitalWritePin(DigitalPin.P8, 0);
        }

    }

}// Añade tu código aquí

