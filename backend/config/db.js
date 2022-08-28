//Connection file to mongo db
import mongoose from "mongoose";
import colors from "colors";
//require('dotenv').config({path: './config/config.env'})
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI="mongodb+srv://yuvraj10:yuvraj10@cluster0.pboi3eh.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

export default connectDB;
