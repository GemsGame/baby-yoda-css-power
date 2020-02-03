class Questions {
    constructor() {
        this._qNumber = 0;
      
    }

    get qNumber () {
        return this._qNumber;
    }

    set qNumber (value) {
        this._qNumber = value;
    }
}

export default Questions;