import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Seagull } from "./seagull";

export class Surfer extends Actor {
    constructor() {
        super({ width: Resources.Surfer.width, height: Resources.Surfer.height })
        this.graphics.use(Resources.Surfer.toSprite())
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
        this.scale = new Vector(0.2, 0.2)
        this.z = -5;
    }

    onInitialize(engine) {
        //ai//
        this.seagull = engine.currentScene.actors.find(actor => actor instanceof Seagull);
        //ai//
        this.on("collisionstart", (event) => this.handleCollision(event));

        this.on("exitviewport", (e) => this.resetEnemiePositionBackToTheRight(e))
    }

    //Move towards
    // onPreUpdate(engine) {
    //     const direction = this.seagull.pos.sub(this.pos).normalize();
    //     const speed = 60;
    //     this.vel = direction.scale(speed);
    // }
    //Move towards

    //Move away
    // onPreUpdate(engine) {
    //     const distance = Vector.distance(this.seagull.pos, this.pos)
    //     if (distance < 200) {
    //         const direction = this.seagull.pos.sub(this.pos).normalize();
    //         // const speed = 60;
    //         this.vel = direction.negate().scale(50)
    //     }
    // }
    //Move away


    handleCollision(event) {
        if (event.other.owner instanceof Seagull) {
            console.log('Bird down')
            this.scene.engine.gameOver()
        }
    }

    resetEnemiePositionBackToTheRight(e) {
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
    }

}