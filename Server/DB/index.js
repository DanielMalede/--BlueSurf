import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO =process.env.MONGO_URL;
const port = process.env.PORT;
const connection = mongoose
  .connect(MONGO)
  .then(() => {
    console.log(`Connected to MongoDB, port: ${port}`);
  })
  .catch((err) => {
    console.log(`${err}: Could not connect to MongoDB!`);
  });

export default connection;
