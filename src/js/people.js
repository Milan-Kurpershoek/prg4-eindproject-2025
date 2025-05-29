import { Vector } from "excalibur";
import { Surfer } from "./surfer"
import { Resources } from "./resources";

export class People extends Surfer {
    constructor() {
        super({ width: Resources.People.width, height: Resources.People.height })
        this.graphics.use(Resources.People.toSprite())
        this.pos = new Vector(1500, Math.random() * 100 + 550);
    }

    onPreUpdate(engine) {
        const distance = Vector.distance(this.seagull.pos, this.pos)
        if (distance < 200) {
            const direction = this.seagull.pos.sub(this.pos).normalize();
            // const speed = 60;
            this.vel = direction.negate().scale(50)
        }
    }

    resetEnemiePositionBackToTheRight(e) {
        this.pos = new Vector(1500, Math.random() * 100 + 550);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
    }
}