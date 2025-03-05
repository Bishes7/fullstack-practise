import express from "express";
import { deleteTask, getTask, patchTask, postTask } from "./schema.js";

const router = express.Router();

// GET Method
router.get("/", async (req, res) => {
  const savedData = await getTask();

  res.json({
    status: "success",
    message: "Get Method implemented",
    savedData,
  });
});

// POST Method
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const insertedData = await postTask(req.body);
    res.json({
      status: "success",
      message: "Data has been successfully added",
      insertedData,
    });
  } catch (error) {
    res.json({
      status: "unsuccessful",
      message: error.message,
    });
  }
});

// PATCH Method
router.patch("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const updatedData = await patchTask(_id, rest);
    console.log(req.body);
    res.json({
      status: "success",
      message: "Patch Method implemented",
      updatedData,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
// Delete Method

router.delete("/", async (req, res) => {
  try {
    const deletedData = await deleteTask(req.body);

    deletedData?.deletedCount
      ? res.json({
          status: "success",
          message: "Task has been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the task",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

// Export USERRouter

export default router;
