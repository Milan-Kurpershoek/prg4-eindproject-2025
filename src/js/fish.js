import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Seagull } from "./seagull";


export class Fish extends Actor {
    constructor(seagull) {
        super({ width: Resources.Fish.width, height: Resources.Fish.height });
        this.graphics.use(Resources.Fish.toSprite());
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
        this.scale = new Vector(0.2, 0.2);
        this.z = -5;
        this.seagull = seagull;
    }

    onInitialize(engine) {
        this.on("collisionstart", (event) => this.#handleCollisionOfFish(event));

        this.on("exitviewport", (e) => this.#resetFishPositionBackToTheRight(e));
    }

    #handleCollisionOfFish(event) {
        if (event.other.owner instanceof Seagull) {
            this.seagull.health += 389;
            if (this.seagull.health === 1945) {
                this.seagull.health -= 389;
            } else {
                this.scene.engine.feather.increaseAmountOfFeathers();
                this.#resetPositionWhenAmoutOfFeathersIncreases();
            }
        }
    }

    #resetFishPositionBackToTheRight(e) {
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);
    }

    #resetPositionWhenAmoutOfFeathersIncreases() {
        this.pos = new Vector(1500, Math.random() * 200 + 300);
        this.vel = new Vector(Math.random() * -25 - 35, 0);

    }
}