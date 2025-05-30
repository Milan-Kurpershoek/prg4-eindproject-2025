import { Actor, Color, Font, Label, Vector } from "excalibur";


export class Ui extends Actor {

    labelPlayerOne

    playerOne

    constructor(seagull) {
        super({})
        this.playerOne = seagull
    }

    onInitialize(engine) {
        this.labelPlayerOne = new Label({
            text: 'People pooped on: 0',
            pos: new Vector(10, 10),
            font: new Font({
                size: 35,
                family: 'Ink Free',
                color: Color.Black
            })
        })
        this.addChild(this.labelPlayerOne)
    }

    updateScore() {
        this.labelPlayerOne.text = `People pooped on: ${this.playerOne.score}`

    }
}