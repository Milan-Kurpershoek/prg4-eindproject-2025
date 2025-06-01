import { Actor, Sprite, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor {

    sprite;

    //Snippet
    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Beach,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        });
        this.anchor = Vector.Zero;
        this.graphics.use(this.sprite);
        this.z = -10;
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.x += .05 * delta;
    }

}   