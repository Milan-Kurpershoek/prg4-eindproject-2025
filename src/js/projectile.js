import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Surfer } from "./surfer";
import { Plane } from "./plane";
import { Fish } from "./fish";

export class Projectile extends Actor {
    constructor(x, y, seagull) {
        super({ radius: Resources.Projectile.width / 2 })
        this.pos = new Vector(x, y)
        this.vel = new Vector(0, 300)
        this.scale = new Vector(0.2, 0.2)
        // this.score = score
        this.seagull = seagull
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Projectile.toSprite())

        this.on("collisionstart", (event) => this.enemieHit(event));
        this.events.on("exitviewport", () => this.kill())
    }

    enemieHit(event) {
        if (event.other.owner instanceof Surfer) {
            this.seagull.score++
            this.scene.engine.ui.updateScore()
            event.other.owner.resetEnemiePositionBackToTheRight(event);
            this.kill()
        } if (event.other.owner instanceof Plane) {
            this.kill()
        } if (event.other.owner instanceof Fish) {
            this.kill()
        }

    }
} 