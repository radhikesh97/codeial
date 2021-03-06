const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user',{
        title: 'Profile'
    });
    //return res.end('<h1>Profile!!</h1>');
}

module.exports.sign_up = function(req,res){
    return res.render('sign_up',{
        title: 'Codeial | Sign Up'
    })
}

module.exports.sign_in = function(req,res){
    return res.render('sign_in',{
        title: 'Codeial | Sign In'
    })
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({
        email: req.body.email
    },function(err,user){
        if(err){
            console.log("Error in signing up");
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("Error in signing up");
                    return;
                }
                return res.redirect('/users/sign-in');
            })
        }
        else{
            res.redirect('back');
        }
    })

}

module.exports.createSession = function(req,res){

}
