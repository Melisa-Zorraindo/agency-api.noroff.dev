import express from "express";
import { handleEdit } from "./controllers/controllerEdit.js";

export const applicationsRouter = express.Router();

applicationsRouter.get("/", async (req, res) => {
  res.send("This is the app request");
});


// Handling request using router
applicationsRouter.get("/", async (req, res) => {
  res.send("This is the app request");
});

// PUT /application/:id
applicationsRouter.put("/:id", async (req, res) => {
  try {
    const result = await handleEdit(req);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);

    const errorObject = await JSON.parse(err.message);
    if (errorObject.status) {
      res.status(errorObject.status).json(errorObject.message);
    } else {
      res.status(500).json("Internal server error.");
    }
  }
});


