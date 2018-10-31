const route=require('express').Router()

route.get('/',(req,res)=>{
    res.send("Public vi")
})

exports=module.exports=route