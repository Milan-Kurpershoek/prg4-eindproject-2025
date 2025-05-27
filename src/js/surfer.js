import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Surfer extends Actor {
    constructor() {
        super({ width: Resources.Surfer.width, height: Resources.Surfer.height })
        this.graphics.use(Resources.Surfer.toSprite())
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
        this.scale = new Vector(0.2, 0.2)
    }

    // onInitialize(engine) {
    //     this.on("collisionstart", (event) => this.enemieHitD(event));
    // }

    // handleCollision(event) {
    //     if (event.other.owner instanceof Seagull) {
    //         console.log('Bird down')
    //         this.scene.engine.gameOver()
    //     }
    // }
}