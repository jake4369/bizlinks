"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userReviewLinks, setUserReviewLinks] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/reviewLinks`);
      const data = await response.json();

      setUserReviewLinks(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  console.log(userReviewLinks);

  return <Profile data={userReviewLinks} />;
};

export default UserProfile;
