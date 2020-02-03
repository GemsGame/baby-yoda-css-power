import Model from "../mvc/Model";
import View from "./View";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    eventListener() {
        window.document.addEventListener("click", (e) => {
            if(e.target.id === "hit50") {
            
            }
            if(e.target.id === "startGame") {
                this.model.game.gameStatus = true;
                this.model.animation.player = 'stand';
                this.model.animation.monster = 'stand';
                this.view.update(this.model);
            }
            if(e.target.id === "flask") {
                 this.model.animation.monster = 'attack';
                 this.model.player.health += 1;
                 this.view.update(this.model);
            }
            if(e.target.id === "tea") {
                this.model.questions.qNumber += 1;
                /* this.model.animation.tea = "stand";
                this.model.animation.monster = 'stand';
                this.model.sound.tea = 'play';
                this.model.player.health += 5; 
                this.view.update(this.model);

                setTimeout(() => {
                    this.model.animation.tea = "not display";
                    this.model.sound.tea = 'stop';
                    this.view.update(this.model);
                },2000); */

                this.view.update(this.model);
           }
        });   
            window.document.addEventListener("input", (e) => {
                if(e.target.id === "name") {
                    this.model.player.name = e.target.value;
                    this.view.update(this.model);
                }  
      
            })
    }
}

export default Controller;
