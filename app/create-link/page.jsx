"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreateLink = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [reviewLink, setReviewLink] = useState({
    siteUrl: "",
    profileUrl: "",
    siteImage: "",
  });

  const createLink = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/reviewLink/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          siteUrl: reviewLink.siteUrl,
          profileUrl: reviewLink.profileUrl,
          siteImage: reviewLink.siteImage,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      reviewLink={reviewLink}
      setReviewLink={setReviewLink}
      submitting={submitting}
      handleSubmit={createLink}
    >
      CreateLink
    </Form>
  );
};

export default CreateLink;
