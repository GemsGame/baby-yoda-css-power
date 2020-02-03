class Sound { 
    constructor() {
    this._tea = '';
     
    }
    set tea (value) {
        this._tea = value; 
    }
    
    get tea () {
        return this._tea;
    }
}


export default Sound;