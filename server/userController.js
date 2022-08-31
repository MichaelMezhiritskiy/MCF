const MFCuser = require('./userModel');


const userController = {

    createUser(req, res, next) {
        console.log('made it to createUser: ', req.body);
        MFCuser.create([{ username: req.body.username, password: req.body.password}], (err, user) => {
            console.log('we are inside the create function');
            if (err) {
                return next({
                    log: 'error in create user middleware',
                    status: 400,
                    message: { err: 'error in create user middleware' }
                });
            };
            res.locals.user = user;
            console.log('made it past the error in create user: ', user);
            return next();
        })
    },

    verifyLogin(req, res, next) {
        console.log('made it to verify login');
        MFCuser.findOne({ username: req.body.username, password: req.body.password}, (err, user) => {
            console.log('made it inside the find one: ', user);
            if (err) {
                return next({
                    log: 'error in verify login middleware',
                    status: 400,
                    message: { err: 'error in verify login middleware' }
                });
            };
            res.locals.user = user;
            console.log('made it past the error in verify login: ', user);
            return next();
        })
    },

    addCrypto(req, res, next) {
        MFCuser.findOneAndUpdate({ username: req.params.username}, { }, (req, res) =>  {
        if (err) {
            return next({
                log: 'error in verify login middleware',
                status: 400,
                message: { err: 'error in verify login middleware' }
            });
    }});
    },
    
    deleteCrypto(req, res, next) {
        MFCuser.findOneAndDelete({ username: req.params.username }, { }, (req, res) => {
            if (err) {
                return next({
                    log: 'error in verify login middleware',
                    status: 400,
                    message: { err: 'error in verify login middleware' }
                });
            }
        });

    },

}

module.exports = userController;

/*
    return next({
        log: '',
        status: 400,
        message: { err: '' }
    });
                */