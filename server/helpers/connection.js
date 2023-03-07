const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected on : ${con.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = connectDB;
