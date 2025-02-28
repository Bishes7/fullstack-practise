import express from "express";

const router = express.Router();

// Using the CRUD Methods

// GET Method
router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Get Method implemented",
  });
});

// POST Method
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    message: "Post Method implemented",
  });
});

// PATCH Method
router.patch("/", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    message: "Put Method implemented",
  });

  // Delete Method
  router.delete("/", (req, res) => {
    res.json({
      status: "success",
      message: "Delete Method implemented",
    });
  });
});

// Export USERRouter

export default router;
