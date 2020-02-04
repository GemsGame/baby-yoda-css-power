import questions from "../data/questions";

class Questions {
    constructor() {
        this._qNumber = 0;
        this._open = false;
        this._idAnswer;
    }

    get qNumber () {
        return this._qNumber;
    }

    set qNumber (value) {
        this._qNumber = value;
    }

    
    get open () {
        return this._open;
    }

    set open (value) {
        this._open  = value;
    }

    set idAnswer (value) {
        this._idAnswer = value;
    }
    
    get idAnswer () {
        return this._idAnswer;
    }

  checkAnswer () {
  
       const answer =  questions[this._qNumber - 1].ответ[this._idAnswer][1][0];
       return answer;
    
    }
}

export default Questions;