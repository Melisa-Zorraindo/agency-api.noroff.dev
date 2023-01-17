import { OfferState, prisma } from "@prisma/client";
import express from "express";
import { databasePrisma } from "../../prismaClient";

export const putOffers = express.Router();

putOffers.put("/:id", async (req, res) => {
  const { id } = req.params;

  const {
    listingId,
    applicationId,
    companyId,
    userId,
    applicantId,
    state,
    updated,
  } = req.body;

  try {
    const updateOffer = await prisma.offer.update({
      where: {
        id: id,
      },
      data: {
        id: id,
        ...req.body,
      },
    });
    res.status(200).json(updateOffer);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});
