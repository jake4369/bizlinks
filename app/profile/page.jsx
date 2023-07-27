"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import QRCode from "@components/QRCode";
import WebShare from "@components/WebShare";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [reviewLinks, setReviewLinks] = useState([]);
  const [showQr, setShowQr] = useState(false);
  const userId = session?.user.id;

  const profileUrl = `${window.location.href}/${userId}`;

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

      <h2 className="desc text-center mb-4">Share your profile</h2>

      <div className="flex items-center justify-center mb-4">
        <button className="blue_btn mr-4" onClick={() => setShowQr(true)}>
          Show QR
        </button>

        <WebShare profileUrl={profileUrl} name={session?.user.name} />
      </div>

      {showQr && <QRCode profileUrl={profileUrl} setShowQr={setShowQr} />}
    </div>
  );
};

export default MyProfile;
