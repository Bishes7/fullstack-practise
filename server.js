import express from "express";

import userRouter from "./src/userRouter.js";

const app = express();

const PORT = 8000;

// Using the middleware to change into the json format
app.use(express.json());

app.use("/api/v1/tasks", userRouter);
// Use the listen method

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
