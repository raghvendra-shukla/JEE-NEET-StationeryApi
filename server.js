const express=require("express");
const cors=require("cors");
const port=process.env.PORT || 3000;
const app=express();
const {sagar}=require("./sagar");
const {bhopal}=require("./bhopal");
const {jabalpur}=require("./jabalpur");
const {indore}=require("./indore");

app.set("view engine","ejs");
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/api/stationery/sagar",(req,res)=>{
    res.json(sagar);
})

app.get("/api/stationery/bhopal",(req,res)=>{
    res.json(bhopal);
})

app.get("/api/stationery/indore",(req,res)=>{
    res.json(indore);
})

app.get("/api/stationery/jabalpur",(req,res)=>{
    res.json(jabalpur);
})

app.listen(port,()=>{
    console.log(`server is litsen on port ${port}`);
});