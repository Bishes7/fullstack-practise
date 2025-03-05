import express from "express";
import cors from "cors";

import userRouter from "./src/userRouter.js";

import dbConnect from "./src/dbCOnnect.js";
dbConnect();

const app = express();

const PORT = 8000;

// Static Serving
import path from "path";

const __dirname = path.resolve();

// using middleware to connect to the dist folder
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Using the middleware to change into the json format
app.use(express.json());
app.use(cors());

app.use("/api/v1/tasks", userRouter);
// Use the listen method

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
