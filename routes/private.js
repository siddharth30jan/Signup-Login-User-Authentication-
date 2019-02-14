const route=require('express').Router()

route.get('/',(req,res)=>{
    if(req.user){
        return res.send(`Only visible to loggedin Users.  <a href="/logout">LOGOUT</a>`)
    }
    else{
        res.redirect('/login')
    }
})

exports=module.exports=route
