export class Answer {
    _id: string;
    updatedAt: string;
    createdAt: string;
    answer: string;
    correct: boolean;

    constructor(correct: boolean, answer: string = '') {
        this.answer = answer;
        this.correct = correct;
    }
}
