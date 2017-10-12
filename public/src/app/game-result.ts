export class GameResult {
    _id: string;
    correctAnswers: number;
    totalAnswers: number;
    user: any;
    createdAt: any;
    updatedAt: any;

    constructor(correct: number, total: number, user: string) {
        this.correctAnswers = correct;
        this.totalAnswers = total;
        this.user = user;
    }
}
