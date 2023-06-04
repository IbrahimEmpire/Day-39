const fs = require("fs")
const express = require("express")

const PORT = 3700
const app = express()



app.get("/",(req, res)=>{
    res.send("Welcome to TimeStamp Creation")
})






app.get("/time", (req, res)=>{
    const time=new Date().toISOString().replace(/T/, ",Time-->").replace(/:/,'-').replace(/\..+/, '')
    const TimeStamp = `Date-->${time}`
    
    fs.writeFileSync(`./TimeStamp/date-time.txt`, TimeStamp,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("all pass")
        }
    })

    res.status(200).send("Date and Time Created On TimeStamp Folder")
})





app.listen(PORT, ()=>console.log("app is on"))

