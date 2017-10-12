const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, 'Answer cannot be blank.']
    },
    correct: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

mongoose.model('Answer', AnswerSchema);
