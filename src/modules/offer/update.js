import { OfferState } from "@prisma/client";

export async function updateOffer(prismaClient, req, res) {
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
    const updateOffer = await prismaClient.offer.update({
      where: {
        id: id,
        state: OfferState.Pending,
      },
      data: {
        id: id,
        ...req.body,
      },
    });
    res.status(200).json(updateOffer);
  } catch (error) {
    res.status(400);
  }
}
