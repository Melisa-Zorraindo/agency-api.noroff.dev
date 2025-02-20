import express from "express";
import { databasePrisma } from "../../prismaClient.js";
import { offersGet, offerGetId } from "./read.js";
import { createOffer } from "./create.js";
import { removeOffer } from "./delete.js";
import { updateOffer } from "./update.js";

export const offersRouter = express.Router();

offersRouter.get("/", async (req, res) => {
  offersGet(databasePrisma, req, res);
});

offersRouter.get("/:id", async (req, res) => {
  offerGetId(databasePrisma, req, res);
});

offersRouter.post("/", async (req, res) => {
  createOffer(databasePrisma, req, res);
});

offersRouter.put("/:id", async (req, res) => {
  updateOffer(databasePrisma, req, res);
});

offersRouter.delete("/:id", async (req, res) => {
  removeOffer(databasePrisma, req, res);
});
