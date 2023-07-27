"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import QRCode from "@components/QRCode";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [reviewLinks, setReviewLinks] = useState([]);
  const [showQr, setShowQr] = useState(false);
  const userId = session?.user.id;

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

      <div className="flex items-center justify-center mb-4">
        <button className="blue_btn" onClick={() => setShowQr(true)}>
          Show QR
        </button>
      </div>

      {showQr && <QRCode userId={userId} setShowQr={setShowQr} />}
    </div>
  );
};

export default MyProfile;
