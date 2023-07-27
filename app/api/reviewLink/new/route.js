import { connectToDB } from "@utils/database";
import ReviewLink from "@models/reviewLink";

export const POST = async (req, res) => {
  const { userId, siteUrl, profileUrl, siteImage } = await req.json();

  try {
    await connectToDB();
    const newLink = new ReviewLink({
      creator: userId,
      siteUrl,
      profileUrl,
      siteImage,
    });

    await newLink.save();

    return new Response(JSON.stringify(newLink), { status: 201 });
  } catch (error) {
    return new Response("Failed to create Review Link", { status: 500 });
  }
};
