
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27089/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } )
  .then ( () => console.log("done"))
  .catch ((err) => console.Console.log(err));
