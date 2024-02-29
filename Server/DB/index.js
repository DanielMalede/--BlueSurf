import mongoose from "mongoose";

const MONGO =
  "mongodb+srv://SurfBlue:PLgtCE33JTzF67GT@cluster0.s4bdsjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
