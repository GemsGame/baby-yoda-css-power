import Model from "../mvc/Model";
import View from "./View";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    eventListener() {
        window.document.addEventListener("click", (e) => {
            if (e.target.id === "hit50") {

            }
            if (e.target.id === "startGame") {
                this.model.game.gameStatus = true;
                this.model.animation.player = 'stand';
                this.model.animation.monster = 'stand';
                this.view.update(this.model);
            }
            if (e.target.id === "flask") {
                this.model.questions.open = true;
                this.model.animation.player = 'stand';
                this.model.animation.monster = 'stand';
                this.model.player.activeMagic = "flask";
                this.model.sound.music = "flask";
                this.view.update(this.model);
            }
            if (e.target.id === "tea") {
                this.model.questions.open = true;
                this.model.animation.monster = 'stand';
                this.model.animation.player = 'stand';
                this.model.player.activeMagic = "tea";
                this.model.sound.music = "eat";
                this.view.update(this.model);
            }

             

            if (e.target.id === "setAnswer") {
                this.model.questions.qNumber += 1;
                let answer = this.model.questions.checkAnswer();


                if (answer === true && this.model.player.activeMagic === "tea") {
                    this.model.questions.open = false;
                    this.model.player.health += 10;
                    this.model.animation.tea = "stand";
                    this.model.animation.monster = 'stand';
                    this.model.sound.music = "heal";
                    this.view.update(this.model);

                    setTimeout(() => {
                        this.model.animation.tea = "not display";
                        this.view.update(this.model);
                    }, 2000);
                }
                if (answer === true && this.model.player.activeMagic === "flask") {
                    this.model.questions.open = false;
                    this.model.animation.monster = 'attack';
                    this.model.sound.music = "attack";
                    this.model.monster.health -= 5;
                    this.view.update(this.model);

                    setTimeout(() => {
                        this.model.animation.tea = "not display";
                        this.view.update(this.model);
                    }, 2000);
                }

                if (answer === false) {
                    this.model.questions.open = false;
                    this.model.animation.player = 'attack';
                    this.model.sound.music = "attack";
                    this.model.player.health -= 20;
                    this.view.update(this.model);
                }

                  if(this.model.player.health <= 0 ) {
                      this.model.game.gameStatus = false;
                      this.model.player.health = 100;
                      this.model.monster.health = 100;
                      this.model.questions.qNumber = 0;
                      this.view.update(this.model);
                      
                  }

                  if(this.model.monster.health <= 0) {
                    this.model.game.gameStatus = false;
                    this.model.player.health = 100;
                    this.model.monster.health = 100;
                    this.model.questions.qNumber = 0;
                    this.view.update(this.model);
                }

                if(this.model.monster.health <= 0) {
                    this.model.game.gameStatus = false;
                    this.model.player.health = 100;
                    this.model.monster.health = 100;
                    this.model.questions.qNumber = 0;
                    this.view.update(this.model);
                    this.model.animation.tea = "not display";
                }

                if(this.model.questions.qNumber >= this.model.questions.qMaxCount) {
                    this.model.game.gameStatus = false;
                    this.model.player.health = 100;
                    this.model.monster.health = 100;
                    this.model.questions.qNumber = 0;
                    this.view.update(this.model);
                    this.model.animation.tea = "not display";
                }
            }
        });
        window.document.addEventListener("input", (e) => {
            if (e.target.id === "name") {
                this.model.player.name = e.target.value;
                this.view.update(this.model);
            }
            if (e.target.name === "answ") {
                this.model.questions.idAnswer = e.target.id;

            }
        })
    }
}

export default Controller;
