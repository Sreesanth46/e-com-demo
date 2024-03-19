import app from './app.js';
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

const port = process.env.PORT || 9080;
const MONGO_DB_URL = process.env.MONGO_DB_URL || ""

mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.log("Error connecting to Mongo DB", err)
})
