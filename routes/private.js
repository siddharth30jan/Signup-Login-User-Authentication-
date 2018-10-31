const route=require('express').Router()

route.get('/',(req,res)=>{
    if(req.user){
        return res.send("Only visible to loggedin Users.")
    }
    else{
        res.redirect('/login')
    }
})

exports=module.exports=route