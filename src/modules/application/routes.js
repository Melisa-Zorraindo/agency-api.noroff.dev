import express from "express";
import { databasePrisma } from "../../prismaClient.js";

export const applicationsRouter = express.Router();


// Put application router :


applicationsRouter.put('/', async (req, res) => {
  try {
    const { applicantId, listingId, coverLetter } = req.body;
    const newApplication = await databasePrisma.application.create({
      data: {
        applicantId,
        user: {
          connect: { id: applicantId },
        },
        listing: {
          connect: { id: listingId },
        },
        Offers: {
          create: [],
        },
        coverLetter,
      },
      select: {
        id: true,
        applicantId: true,
        user: true,
        listing: true,
        Offers: true,
        listingId: true,
        coverLetter: true,
      },
    });
    res.status(201).json({ application: newApplication });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

