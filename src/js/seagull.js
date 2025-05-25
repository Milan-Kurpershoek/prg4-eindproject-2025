import { Actor, clamp, Keys, Vector } from "excalibur"
import { Resources } from "./resources"

export class Seagull extends Actor {

    constructor() {
        super({ width: Resources.Seagull.width, height: Resources.Seagull.height })

        this.graphics.use(Resources.Seagull.toSprite())
        this.pos = new Vector(0, 0)
        this.vel = new Vector(0, 0)
        this.scale = new Vector(0.1, 0.1)

    }

    //Snippet
    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0

        if (engine.input.keyboard.isHeld(Keys.Up) || engine.input.keyboard.isHeld(Keys.W)) {
            yspeed = -200;
        }
        if (engine.input.keyboard.isHeld(Keys.Down) || engine.input.keyboard.isHeld(Keys.S)) {
            yspeed = 200;
        }
        if (engine.input.keyboard.isHeld(Keys.Left) || engine.input.keyboard.isHeld(Keys.A)) {
            xspeed = -200;
        }
        if (engine.input.keyboard.isHeld(Keys.Right) || engine.input.keyboard.isHeld(Keys.D)) {
            xspeed = 200;
        }
        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x < 0)
        this.pos.x = clamp(this.pos.x, this.width / 2, engine.drawWidth - this.width / 2);
        this.pos.y = clamp(this.pos.y, this.width / 2, engine.drawHeight - this.height / 2);
    }
}   