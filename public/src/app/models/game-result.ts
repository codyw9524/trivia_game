export class GameResult {
    _id: string;
    correctAnswers: number;
    totalAnswers: number;
    totalQuestions: number;
    user: any;
    createdAt: any;
    updatedAt: any;

    constructor(correct: number, totalAnswers: number, totalQuestions: number, user: string) {
        this.correctAnswers = correct;
        this.totalAnswers = totalAnswers;
        this.totalQuestions = totalQuestions;
        this.user = user;
    }
}
