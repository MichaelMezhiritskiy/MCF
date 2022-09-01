const MFCuser = require('./userModel');


const userController = {

    createUser(req, res, next) {
        console.log('made it to createUser: ', req.body);
        MFCuser.create({ username: req.body.username, password: req.body.password, favorites: []}, (err, user) => {
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
        console.log('made it to verify login: ', req.query);
        MFCuser.findOne({ username: req.query.username, password: req.query.password}, (err, user) => {
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
        console.log('in add crypto middleware', req.body);
        MFCuser.findOneAndUpdate({ username: req.body.username }, { favorites: req.body.favorites }, (err, user) =>  {
            console.log('inside the find one and update');
        if (err) {
            console.log(err);
            return next({
                log: 'error in add crypto middleware',
                status: 400,
                message: { err: 'error in add crypto middleware' }
            });
        };
        res.locals.user = user;
        return next();
        });
    },

    getFavorites(req, res, next) {
        console.log('inside get favorites', req.query);
        MFCuser.findOne({ username: req.query.username }, 'favorites', (err, user) => {
            console.log('made it inside: ', user);
            if (err) {
                return next({
                    log: 'error in get favorites middleware',
                    status: 400,
                    message: { err: 'error in add crypto middleware'}
                });
            };
            res.locals.userFavorites = user;
            return next();
        });
    }
    
    

}

module.exports = userController;

/*
    return next({
        log: '',
        status: 400,
        message: { err: '' }
    });
                */