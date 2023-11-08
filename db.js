import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`);
  } catch (error) {
    console.log(`Errro in Mongodb`);
  }
};

export default connectDB;