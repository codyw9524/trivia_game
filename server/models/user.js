const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank']
    },
    password: {
        type: String,
        required: [true, 'Email cannot be blank']
    }
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    if (this.isNew) {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
    }
    next();
});

UserSchema.methods.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema);