module.exports.profile = function(req,res){
    return res.render('user',{
        title: 'Profile'
    });
    //return res.end('<h1>Profile!!</h1>');
};