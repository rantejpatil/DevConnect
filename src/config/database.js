const mongoose = require("mongoose");

const connectDB = async () => {   
    await mongoose.connect("mongodb+srv://rantej:cGP2Inu07qOQ3wRt@devork.7vlyxku.mongodb.net/devork")
};

module.exports = connectDB;

