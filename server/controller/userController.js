// @desc Auth user/set token
// @route POST api/users/auth
// @access public


function authUser(){
    res.status(200).json({messsage : 'Auth User'})
}

export {authUser} ;