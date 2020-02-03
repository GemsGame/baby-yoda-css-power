import Player from "../modules/Player";
import Game from "../modules/Game";
import Animation from "../modules/Animation";
import Sound from "../modules/Sound";
import Questions from "../modules/Questions";
class Model {
  constructor() {
    this.player = new Player();
    this.monster = new Player();
    this.game = new Game();
    this.animation = new Animation();
    this.sound = new Sound();
    this.questions = new Questions ();
  }
}

export default Model;