const mongoose = require('mongoose');
const User = mongoose.model('User');

class UsersController {
    create(req, res){
        User.create(req.body, (err, user) => {
            if (err) {
                return res.json(err);
            }
            req.session.user_id = user._id;
            return res.json(user);
        });
    }

    authenticate(req, res){
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err) {
                return res.json(err);
            }
            if(user && user.authenticate(req.body.password)) {
                req.session.user_id = user._id;
                return res.json(user);
            }
            else {
                return res.json({
                    errors: {
                        user: {
                            message: 'Invalid credentials'
                        }
                    }
                })
            }
        });
    }

    index(req, res) {
        User.find({}, (err, users) => {
            if(err) {
                return res.json(err);
            }
            return res.json(users);
        });
    }
    
    show(req, res) {
        User.findById(req.params.id, (err, user) => {
            if(err) {
                return res.json(err);
            }
            return res.json(user);
        });
    }

    update(req, res) {
        User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true },
            (err, user) => {
                if(err) {
                    return res.json(err);
                }
                return res.json(user);
            }
        );
    }

    session(req, res) {
        if(req.session.user_id) {
            User.findById(req.session.user_id, (err, user) => {
                if(err) {
                    return res.json(err);
                }
                return res.json(user);
            });
        } else {
            return res.json({ status: false });
        }
    }

    logout(req, res) {
        delete req.session.user_id;
        return res.json({ status: true });
    }
}

module.exports = new UsersController();
