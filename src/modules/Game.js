class Game {
    constructor() {
        this._status = false;
    }

set gameStatus (value) {
   this._status = value;
}

get gameStatus () {
    return this._status;
}
}

export default Game;