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
        this.eatSound = new Audio();
        this.flaskSound = new Audio();
        this.attackSound = new Audio();
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
      
                document.querySelector(".menu").style.display = 'none';
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

                this.setPlayer(view.animation.player);
                this.setMonster(view.animation.monster);
                this.settea(view.animation.tea);
                this.mainMusic.play();
            }
            if (view.game.gameStatus === false) {
                document.querySelector(".spells").style.display = "none";
                document.querySelector(".hp").style.display = "none";
                this.mainMusic.pause();
                this.setPlayer('not display');
                this.setMonster('not display');
                document.querySelector(".end").style.display = 'block';
                
            }
          

        }
      
         console.log(view);

        if (view.sound.music === "heal") {
            this.teaSound.play();
        }
        if (view.sound.music === "eat") {
            this.eatSound.play();
        }

        if (view.sound.music === "flask") {
            this.flaskSound.play();
        }
        if (view.sound.music === "attack") {
            this.attackSound.play();
        }
        if (view.questions.open === true && view.questions.qNumber < questions.length) {
            document.querySelector(".questions div").innerHTML = "";
            document.querySelector(".questions h3").innerHTML = "";

            document.querySelector(".questions").style.display = "grid";
            document.querySelector(".questions h3").innerHTML = questions[view.questions.qNumber].вопрос;

            for (let i = 0; i < questions[view.questions.qNumber].ответ.length; i++) {
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "answ");
                input.setAttribute("value", questions[view.questions.qNumber].ответ[i][0]);
                input.setAttribute("id", i);

                let q = document.querySelector(".questions div");
                q.append(input);
                let text = document.createTextNode(questions[view.questions.qNumber].ответ[i][0]);
                input.after(text);
            }

        } 

        if(view.questions.open === false) {
            document.querySelector(".questions").style.display = "none";
        }
    }

    preload() {
        this.playerLayer.src = "./src/assets/sprites/babaYoda.png";
        this.monsterImg.src = "./src/assets/sprites/resize-frog.png"
        this.mainMusic.src = "./src/assets/sounds/The Mandalorian.mp3";
        this.magicPoisonImg.src = "./src/assets/sprites/geizer.png";
        this.teaImg.src = "./src/assets/sprites/heal.png";
        this.teaSound.src = "./src/assets/sounds/heal.mp3";
        this.eatSound.src = "./src/assets/sounds/eat.mp3";
        this.flaskSound.src = "./src/assets/sounds/mana.mp3";
        this.attackSound.src = "./src/assets/sounds/attack.mp3";
    }

    settea(value) {

        this.tea = new Sprite(
            {
                ctx: this.ctx,
                image: this.teaImg,
                width: 960,
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
                width: 1680,
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




}


export default View;
