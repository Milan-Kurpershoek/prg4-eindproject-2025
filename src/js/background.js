import { Actor, Vector } from "excalibur"
import { Resources } from "./resources"


export class Background extends Actor {

    constructor() {
        super()

        const sprite = Resources.Beach.toSprite()
        sprite.width = 1280
        sprite.height = 720
        this.graphics.use(sprite)
        this.pos = new Vector(640, 360)
    }
}