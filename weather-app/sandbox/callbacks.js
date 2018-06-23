// function definition
var getUser = (id, name, callback) => {
    // es6 shortcut
    var user = {
        id,
        name
    };
    callback(user);   
};


//  (user) => { console.log(user) } is the callback for getUser
getUser(55, 'dayna', (user) => {
    console.log(user);
}); 