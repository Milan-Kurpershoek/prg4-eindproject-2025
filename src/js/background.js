import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from "./resources"


export class Background extends Actor {

    // constructor() {
    //     super()

    //     const sprite = Resources.Beach.toSprite()
    //     sprite.width = 1280
    //     sprite.height = 720
    //     this.graphics.use(sprite)
    //     this.pos = new Vector(640, 360)
    // }

    //Snippet

    #sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Beach,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.x += .05 * delta;
    }

}   