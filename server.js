const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
app.get("/interest", (req,res)=>{
    const amt=parseInt(req.query.amt)
    const rate=parseInt(req.query.rate)
    const time=parseInt(req.query.time)
    const interest=(amt*rate*time)/100
    res.send({
        interest:parseInt(interest)
    })
})
app.listen(3000)