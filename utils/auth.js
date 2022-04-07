const withAuth = (req, res, next) => { // This is middleware for express
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
