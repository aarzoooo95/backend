const express = require('express');
const app=express();
const PORT = process.env.PORT||3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server is running!");
});

app.post("/signup",(req,res)=>{
    const{username,email,password,dob}=req.body;
    if(!username || username.trim()===''){
        res.status(400).json({error:"username not found"});
    }
    if(!email || email.trim()===''){
        res.status(400).json({error:"name not found"});
    }
    if(!password || password.length<8 || password.length>16){
        res.status(400).json({error:"password not found"});
    }
    res.status(201).json({
        message:"signed up successfully",
        user:{username,
        email,
        dob}
    

});
});

app.listen(PORT,()=>{
    console.log(`Server is running on${PORT}`)
}
);



