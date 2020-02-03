class Sprite { //https://www.cat-in-web.ru/sprite-animation-on-canvas/
    constructor(options) {
        this.ctx = options.ctx;
        this.image = options.image;
        this.rowsCount = 0;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.rowsNumber  = options.rowsNumber || 1;
        this.columnsNumber = options.columnsNumber - 1 || 1;
        this.width = options.width;
        this.height = options.height;
        this.positionX = options.positionX;
        this.positionY = options.positionY;
        this.animation = options.animation;
        this.start();
    }

    update() {
        this.tickCount++;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.rowsNumber - 1) {  // 5 <5 
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
                this.rowsCount++;

                if(this.rowsCount >= this.columnsNumber) {
                    this.rowsCount = 0;
                }
               
            }
        }
       
    }
    
    render() {
        if(this.animation === "not display") {
            this.ctx.clearRect( this.positionX, this.positionY, this.width /  this.rowsNumber, this.height /   this.columnsNumber);
        }

        if(this.animation === "stand") {
            this.ctx.clearRect( this.positionX, this.positionY, this.width /  this.rowsNumber, this.height /   this.columnsNumber);
            this.ctx.drawImage(
                this.image,
                this.frameIndex * this.width /  this.rowsNumber, // x смещение
                this.rowsCount  * this.height /   this.columnsNumber, //y смещение ... 0 * 289 / 3 * 1
                this.width /   this.rowsNumber,
                this.height /  this.columnsNumber,
                this.positionX,
                this.positionY,
                this.width /   this.rowsNumber,
                this.height /   this.columnsNumber,
        
            )

        }

        if(this.animation === "attack") {
            
                let randX = Math.random() * 15;
                let randY = Math.random() * 15;
                
                this.ctx.clearRect( this.positionX + randX, this.positionY + randY, this.width /  this.rowsNumber, this.height /   this.columnsNumber);
                this.ctx.drawImage(
                    this.image,
                    this.frameIndex * this.width /  this.rowsNumber, // x смещение
                    this.rowsCount  * this.height /   this.columnsNumber, //y смещение ... 0 * 289 / 3 * 1
                    this.width /   this.rowsNumber,
                    this.height /  this.columnsNumber,
                    this.positionX + randX,
                    this.positionY + randY,
                    this.width /   this.rowsNumber,
                    this.height /   this.columnsNumber,
            
                )
                setTimeout(() => {
                    this.animation = "stand"
                     
                 },2000)
        } 
    

    }

    start() {
        let loop = () => {
            this.render();
            this.update();
          
            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }
}

export default Sprite;