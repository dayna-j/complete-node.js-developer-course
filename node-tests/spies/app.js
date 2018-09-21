const db = require('./db');

// we will be testing handleSignup and everything handleSignup does
module.exports.handleSignup = (email, password) => {
    
    // check if email exists
    // save user to database
    db.saveUser({
        email: email,
        password: password
    });
    // send the welcome email
};