import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Seagull } from "./seagull";

export class Plane extends Actor {
    constructor() {
        super({ width: Resources.Plane.width, height: Resources.Plane.height });
        this.graphics.use(Resources.Plane.toSprite());
        this.pos = new Vector(1500, Math.random() * 370 + 70);
        this.vel = new Vector(Math.random() * -50 - 100, 0);
        this.scale = new Vector(0.3, 0.3);
    }

    onInitialize(engine) {
        this.on("collisionstart", (event) => this.#handleCollisionOfPlane(event));
        this.on("exitviewport", (e) => this.resetObstaclePositionBackToTheRight(e));
    }

    resetObstaclePositionBackToTheRight(e) {
        this.pos = new Vector(1500, Math.random() * 400 + 70);
        this.vel = new Vector(Math.random() * -50 - 100, 0);
    }

    #handleCollisionOfPlane(event) {
        if (event.other.owner instanceof Seagull) {
            console.log('Bird down');
            this.scene.engine.gameOver();
        }
    }
}

