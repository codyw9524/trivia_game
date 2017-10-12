const mongoose = require('mongoose');
const random = require('mongoose-random');

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Question must be at least 15 characters.'],
        minlength: [15, 'Question must be at least 15 characters.']
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

QuestionSchema.plugin(random, { path: 'r' });

mongoose.model('Question', QuestionSchema);
