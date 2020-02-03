import Sprite from "../modules/Sprite";
import questions from "../data/questions";

class View {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.append(this.canvas);
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.ctx = this.canvas.getContext('2d');

 
        this.mainMusic = new Audio();
        this.playerLayer = new Image();
        this.monsterImg = new Image();
        this.magicPoisonImg = new Image();
        this.teaImg = new Image();
        this.teaSound = new Audio();
        this.playerY = window.innerHeight - 500;
        this.playerX = 50;
        this.playerTick = 0;

        this.magicPoisonSprite;
        this.monsterSprite;
        this.tea;
        this.preload();


    }

    update(view) {

        if (view.game) {
            if (view.game.gameStatus === true) {
                let menu = document.querySelector(".menu");
                if (menu) {
                    menu.remove();
                    this.setMonster(view.animation.player);
                }
                let hpPlayer = view.player.health * 3;
                let hpMonster = view.monster.health * 3;
                document.querySelector(".spells").style.display = "block";
                document.querySelector(".hp").style.display = "block";
                document.querySelector(".player .hpline").style = 'background-color:#ff6161; width:' + hpPlayer + 'px; border-radius: 4px;';
                document.querySelector(".player .hpline p").style = 'border:0px; margin:0px; text-align:center; color:white;';
                document.querySelector(".player .hpline p").innerHTML = view.player.health;
                document.querySelector(".monster .hpline").style = 'background-color:#ff6161; width:' + hpMonster + 'px; border-radius: 4px;';
                document.querySelector(".monster .hpline p").style = 'border:0px; margin:0px; text-align:center; color:white;';
                document.querySelector(".monster .hpline p").innerHTML = view.monster.health;
                document.querySelector(".player .name p").style = 'border:0px; margin:5px; text-align:center; color:white;';
                document.querySelector(".player .name p").innerHTML = view.player.name;
                document.querySelector(".monster .name p").style = 'border:0px; margin:5px; text-align:center; color:white;';
                document.querySelector(".monster .name p").innerHTML = view.monster.name;
             
            }

        }
            this.setPlayer(view.animation.monster);
            this.settea(view.animation.tea);
        
            console.log(view);
            if(view.sound.tea === "play") {
                this.teaSound.play();
            }

            if(view.questions.qNumber > 0) {
                document.querySelector(".questions").style.display = "block";
                document.querySelector(".questions h3").innerHTML = questions[0].вопрос;

            for(let i = 0; i < questions[0].ответ.length; i++) {
                //document.querySelector(".questions p").innerHTML = `<input type="radio">${questions[0].ответ[i]}`;
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
             
                let q = document.querySelector(".questions div");
                q.append(input);

                let p = document.createElement("div");
                let text = document.createTextNode(questions[0].ответ[i]);
                //p.innerHTML = questions[0].ответ[i];
                input.after(text);
            }
           
            }
    }

    preload() {
        this.playerLayer.src = "./src/assets/sprites/babaYoda.png";
        this.monsterImg.src = "./src/assets/sprites/resize-frog.png"
        this.mainMusic.src = "./src/assets/sounds/The Mandalorian.mp3";
        this.magicPoisonImg.src = "./src/assets/sprites/geizer.png";
        this.teaImg.src = "./src/assets/sprites/heal.png";
        this.teaSound.src = "./src/assets/sounds/heal.mp3";
    }
     
    settea(value) {
     
        this.tea = new Sprite(
            {
                ctx: this.ctx,
                image:  this.teaImg,
                width:960,
                height: 1152,
                rowsNumber: 5,
                columnsNumber: 7,
                ticksPerFrame: 4,
                positionY: 80,
                positionX: 140,
                animation: value
               
            }
        );
  
 

    }

    setPlayer(value) {

        this.playerSprite = new Sprite(
            {
                ctx: this.ctx,
                image: this.playerLayer,
                width:1680,
                height: 420,
                rowsNumber: 4,
                columnsNumber: 1,
                ticksPerFrame: 25,
                positionY: 250,
                positionX: 20,
                animation: value
               
            }
        );

    }

    setMonster(value) {

        this.monsterSprite = new Sprite(
            {
                ctx: this.ctx,
                image: this.magicPoisonImg,
                width: 960,
                height: 1152,
                rowsNumber: 5,
                columnsNumber: 7,
                ticksPerFrame: 4,
                positionY: window.innerHeight - 200,
                positionX: window.innerWidth - 400,
                animation: value
            }
        );


    }


    playMusicMain() {
        this.mainMusic.play();
    }

}


export default View;
