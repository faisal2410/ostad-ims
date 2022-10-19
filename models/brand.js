const mongoose = require("mongoose");


const brandSchema=mongoose.Schema({
    

},{timestamps:true,versionKey:false}
);

module.exports=mongoose.model("Brand",brandSchema);