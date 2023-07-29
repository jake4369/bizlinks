import ReviewLink from "@models/reviewLink";
import { connectToDB } from "@utils/database";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await ReviewLink.findByIdAndRemove(params.id);

    return new Response("Review link deleted", { status: 204 });
  } catch (error) {
    return new Response("Failed to delete review link", { status: 500 });
  }
};
