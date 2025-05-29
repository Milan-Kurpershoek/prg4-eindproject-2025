import { Vector } from "excalibur";
import { Surfer } from "./surfer"
import { Resources } from "./resources";

export class People extends Surfer {
    constructor() {
        super({ width: Resources.People.width, height: Resources.People.height })
        this.graphics.use(Resources.People.toSprite())
        this.pos = new Vector(1500, Math.random() * 100 + 550);
    }

    resetEnemiePositionBackToTheRight(e) {
        this.pos = new Vector(1500, Math.random() * 100 + 550);
    }
}