import { clamp, Keys, Vector } from "excalibur";
import { Resources } from "./resources";
import { Surfer } from "./surfer";

export class Drone extends Surfer {
    constructor() {
        super({ width: Resources.Drone.width, height: Resources.Drone.height })
        this.graphics.use(Resources.Drone.toSprite())
        this.pos = new Vector(1280, 360)
        this.z = 5;
    }

    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0

        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -150;
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 150;
        }
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -150;
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 150;
        }
        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x > 0)
        this.pos.x = clamp(this.pos.x, this.width / 2, engine.drawWidth - this.width / 2);
        this.pos.y = clamp(this.pos.y, this.width / 2, engine.drawHeight - this.height / 2);
    }
}