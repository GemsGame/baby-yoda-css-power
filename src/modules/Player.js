class Player {
    constructor() {
        this._name = 'name';
        this._health = 100;
        this._damage = 5;
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
    get damage() {
        return this._damage;
    }
    set damage(value) {
        this._damage = value;
    }
}


export default Player;