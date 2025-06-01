import '../css/style.css';
import { Actor, Engine, Vector, DisplayMode } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Background } from './background.js';
import { Seagull } from './seagull.js';
import { Plane } from './plane.js';
import { Kite } from './kite.js';
import { Sandcastle } from './sandcastle.js';
import { Surfer } from './surfer.js';
import { People } from './people.js';
import { Ui } from './ui.js';
import { Feather } from './feather.js';
import { Fish } from './fish.js';
import { Drone } from './drone.js';

export class Game extends Engine {

    background;
    seagull;
    plane;
    kite;
    sandcastle;
    surfer;
    people;
    ui;
    feather;
    fish;
    drone;

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            pixelArt: true,
            displayMode: DisplayMode.FitScreen
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.background = new Background;
        this.add(this.background);

        this.seagull = new Seagull;
        this.add(this.seagull);

        this.plane = new Plane;
        this.add(this.plane);

        for (let i = 0; i < 3; i++) {
            this.kite = new Kite
            this.add(this.kite);
        }

        this.sandcastle = new Sandcastle;
        this.add(this.sandcastle);

        this.surfer = new Surfer(this.seagull);
        this.add(this.surfer);

        this.people = new People;
        this.add(this.people);

        this.ui = new Ui(this.seagull);
        this.add(this.ui);

        this.feather = new Feather(this.seagull);
        this.add(this.feather);

        this.fish = new Fish(this.seagull);
        this.add(this.fish);

        this.drone = new Drone;
        this.add(this.drone);
    }

    gameOver() {
        for (let actor of this.currentScene.actors) {
            actor.kill();
        }
        this.startGame();
    }
}

new Game();
