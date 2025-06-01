import { Actor, Color, Font, Label, Vector } from "excalibur";

export class Ui extends Actor {

    #labelPlayer;
    #player;

    constructor(seagull) {
        super({});
        this.#player = seagull;
    }

    onInitialize(engine) {
        this.#labelPlayer = new Label({
            text: 'People pooped on: 0',
            pos: new Vector(10, 10),
            font: new Font({
                size: 35,
                family: 'Ink Free',
                color: Color.Black
            })
        });
        this.addChild(this.#labelPlayer);
    }

    updateScore() {
        this.#labelPlayer.text = `People pooped on: ${this.#player.score}`;
    }
}