import { Vector, Color } from "excalibur";
import { Plane } from "./plane";
import { Resources } from "./resources";

export class Kite extends Plane {

    constructor() {
        super({ width: Resources.Kite.width, height: Resources.Kite.height })

        this.scale = new Vector(0.1, 0.1)

        //ai
        const randomColor = Color.fromRGB(
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        )

        const sprite = Resources.Kite.toSprite()
        sprite.tint = randomColor
        this.graphics.use(sprite)
        //ai

        //resetPositionBackToTheRight()
        //

    }
}

