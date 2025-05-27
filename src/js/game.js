import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Seagull } from './seagull.js'
import { Plane } from './plane.js'
import { Kite } from './kite.js'
import { Sandcastle } from './sandcastle.js'
import { Surfer } from './surfer.js'
import { People } from './people.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            pixelArt: true,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const background = new Background
        this.add(background)

        const seagull = new Seagull
        this.add(seagull)

        const plane = new Plane
        this.add(plane)

        for (let i = 0; i < 3; i++) {
            this.add(new Kite());
        }

        const sandcastle = new Sandcastle
        this.add(sandcastle)

        const surfer = new Surfer
        this.add(surfer)

        const people = new People
        this.add(people)
    }

    gameOver() {
        for (let actor of this.currentScene.actors) {
            actor.kill()
        }
        this.startGame()
    }
}

new Game();
