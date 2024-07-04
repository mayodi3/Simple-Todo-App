import { app } from "./index.js";
import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();
const PORT = process.env.PORT;
const URI = process.env.URI;

export default async function connectToDBAndServer() {
  await connect(URI);
  console.log("Connected to MongoDB...");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
}
