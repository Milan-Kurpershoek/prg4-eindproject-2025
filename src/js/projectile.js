import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Surfer } from "./surfer";

export class Projectile extends Actor {
    constructor(x, y) {
        super({ radius: Resources.Projectile.width / 2 })
        this.pos = new Vector(x, y)
        this.vel = new Vector(0, 300)
        this.scale = new Vector(0.2, 0.2)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Projectile.toSprite())

        this.on("collisionstart", (event) => this.enemieHit(event));
    }

    enemieHit(event) {
        if (event.other.owner instanceof Surfer) {
            event.other.owner.resetEnemiePositionBackToTheRight(event);
            // this.kill()
        }
    }
}