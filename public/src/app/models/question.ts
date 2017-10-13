import { Answer } from './answer';

export class Question {
    _id: string;
    updatedAt: string;
    createdAt: string;
    question: string;
    user: any;
    answers: object[] = [];
    r: any;

    constructor(fromAPI = false) {
        if (fromAPI === false) {
            let i = 3;
            let bool = true;
            while (i--) {
                if (i < 2) {
                    bool = false;
                }
                this.answers.push(new Answer(bool));
            }
        }
    }
}
