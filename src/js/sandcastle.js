import { Vector } from "excalibur";
import { Plane } from "./plane";
import { Resources } from "./resources";

export class Sandcastle extends Plane {
    constructor() {
        super({ width: Resources.Sandcastle.width, height: Resources.Sandcastle.height });
        this.graphics.use(Resources.Sandcastle.toSprite());
        this.pos = new Vector(1500, Math.random() * 100 + 400);
        this.scale = new Vector(0.1, 0.1);
        this.z = -5;
    }

    resetObstaclePositionBackToTheRight() {
        this.pos = new Vector(1500, Math.random() * 220 + 480);
    }
}