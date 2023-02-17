
const express=require('express');

const router= express.Router();

const bodyParser = require('body-parser');

const fs=require('fs');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/',(req,res,next)=>{
    fs.readFile('message.txt',(err,data)=>{
        if(err){
            data="no chat exist"
        }else{
            console.log(data);
            
        }
    })
    res.send('<form action="/" method="POST" onsubmit="document.getElementById(`username`).value=localStorage.getItem(`username`)"><input type="text" id="message" name="message"><input type="" id="username" name="sender"><button type="submit">Send</button></form>');
})

router.post('/',(req,res,next)=>{
    
    fs.appendFile('message.text',`${req.body.sender}: ${req.body.message}`,(err)=>{
        if(err){
            console.log(err);
        }  
    })
    res.redirect('/');
})

module.exports=router;