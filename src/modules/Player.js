class Player {
    constructor() {
        this._name = 'name';
        this._health = 100;
        this._activeMagic = "";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get health() {
        return this._health;
    }
    set health(value) {
        this._health = value;
    }

    get activeMagic() {
        return this._activeMagic;
    }
    set activeMagic(value) {
        this._activeMagic = value;
    }

}


export default Player;