import { Actor, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Feather extends Actor {
    constructor(seagull) {
        super({})
        this.scale = new Vector(0.1, 0.1)
        this.pos = new Vector(10, 50)
        this.seagull = seagull
    }
    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Feather,
            sourceView: { x: 0, y: 0, width: 1556, height: 575 },
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

    decreaseAmountOfFeathers() {
        console.log('Ouch')
        console.log(this.seagull.health)
        this.sprite.sourceView.width = this.seagull.health;
        this.sprite.destSize.width = this.seagull.health;

        this.chechForGameOver()

    }

    increaseAmountOfFeathers() {
        console.log('Yippie')
        console.log(this.seagull.health)
        this.sprite.sourceView.width = this.seagull.health;
        this.sprite.destSize.width = this.seagull.health;
    }

    chechForGameOver() {
        if (this.seagull.health === 0) {
            this.scene.engine.gameOver()
        }
    }
} 