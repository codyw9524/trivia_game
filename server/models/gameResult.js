const mongoose = require('mongoose');

const GameResultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    totalAnswers: {
        type: Number,
        min: [5, 'Please answer all questions'] 
    },
    correctAnswers: {
        type: Number
    }
}, { timestamps: true });

mongoose.model('GameResult', GameResultSchema);
