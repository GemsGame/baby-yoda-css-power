class Sound { 
    constructor() {

    this._music = '';
  
    }


    set music (value) {
        this._music = value; 
    }
    
    get music () {
        return this._music;
    }

}


export default Sound;