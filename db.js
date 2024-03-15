const mongoose = require("mongoose");
// const URI='mongodb://localhost:27017/Login_Page';
const URI =
  "mongodb+srv://divyansh2004ind:Ramuktimus6$@cluster0.fiebqfz.mongodb.net/?retryWrites=true&w=majority";

const connectToDb = () => {
  let Connected = mongoose.connect(URI);
  Connected.then(console.log("Connected to database"));
  Connected.catch("Error");
};

module.exports = connectToDb;
