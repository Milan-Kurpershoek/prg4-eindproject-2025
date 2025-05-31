import { Color, EmitterType, ParticleEmitter, Vector } from "excalibur";

export class Explosion extends ParticleEmitter {
    constructor() {
        console.log('KABOOM')
        //Snippit//Ai
        super({
            radius: 30,
            emitterType: EmitterType.Circle,
            emitRate: 150,
            isEmitting: true,
            particle: {
                life: 800,
                opacity: 0.6,
                fade: true,
                beginColor: Color.DarkGray,
                endColor: Color.White,
                minSize: 8,
                maxSize: 16,
                minSpeed: 120,
                maxSpeed: 250,
                minAngle: 0,
                maxAngle: Math.PI * 2,
            }
        });
    }
}