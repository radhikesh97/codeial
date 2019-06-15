module.exports.profile = function(req,res){
    return res.render('user',{
        title: 'Profile'
    });
    //return res.end('<h1>Profile!!</h1>');
};

module.exports.sign_up = function(req,res){
    return res.render('sign_up',{
        title: 'Codeial | Sign Up'
    })
};

module.exports.sign_in = function(req,res){
    return res.render('sign_in',{
        title: 'Codeial | Sign In'
    })
};