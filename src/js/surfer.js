import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Seagull } from "./seagull";

export class Surfer extends Actor {
    constructor(seagull) {
        super({ width: Resources.Surfer.width, height: Resources.Surfer.height });
        this.graphics.use(Resources.Surfer.toSprite());
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
        this.scale = new Vector(0.2, 0.2);
        this.z = -5;
        this.seagull = seagull;
    }

    onInitialize(engine) {
        //ai//
        this.seagull = engine.currentScene.actors.find(actor => actor instanceof Seagull);
        //ai//
        this.on("collisionstart", (event) => this.#handleCollisionOfSurfer(event));

        this.on("exitviewport", (e) => this.resetEnemyPositionBackToTheRight(e));
    }

    #handleCollisionOfSurfer(event) {
        if (event.other.owner instanceof Seagull) {
            this.seagull.health -= 389;
            this.scene.engine.feather.decreaseAmountOfFeathers();
        }
    }

    resetEnemyPositionBackToTheRight(e) {
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
    }

}