
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27023/tchannel",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connected to Team DB");
    }
})