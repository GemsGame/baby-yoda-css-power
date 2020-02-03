class Animation { 
    constructor() {
    this._player = '';
    this._monster = '';
    this._tea = '';
     
    }

    set player (value) {
        this._player = value; 
    }
    
    get player () {
        return this._player;
    }

    
    set tea (value) {
        this._tea = value; 
    }
    
    get tea () {
        return this._tea;
    }
}


export default Animation;