"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [reviewLinks, setReviewLinks] = useState([]);

  useEffect(() => {
    const fetchReviewLinks = async () => {
      const response = await fetch(
        `/api/users/${session?.user.id}/reviewLinks`
      );
      const data = await response.json();

      setReviewLinks(data);
    };

    if (session?.user.id) fetchReviewLinks();
  }, [session?.user.id]);

  return (
    <div>
      <Profile
        name={session?.user.name}
        data={reviewLinks}
        image={session?.user.image}
      />
    </div>
  );
};

export default MyProfile;
