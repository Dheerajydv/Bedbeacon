import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/hello", (_, res) => {
  res.send("Hello Dheeraj");
});
app.listen(port, () => {
  console.log(`this was done by anshumasalkfsn running on port: ${port}`);
});


