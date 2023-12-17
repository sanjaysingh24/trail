import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app = express();
const port = 5000;
mongoose.connect("mongodb+srv://sanjubora84:sanjubaba84@userdata.ka4wxlc.mongodb.net/userdata?retryWrites=true&w=majority")
app.get("/",(req,res)=>{
res.send("hello sir");
}
)

app.listen(port,(req,res)=>{
    console.log(`listening on ${port}`);
})