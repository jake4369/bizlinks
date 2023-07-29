"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Profile from "@components/Profile";
import QRCode from "@components/QRCode";
import WebShare from "@components/WebShare";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [reviewLinks, setReviewLinks] = useState([]);
  const [showQr, setShowQr] = useState(false);
  const userId = session?.user.id;

  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    setProfileUrl(`${window.location.href}/${userId}`);
  }, [userId]);

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

  const handleDeleteReviewLink = async (reviewLink) => {
    const hasConfirmed = confirm("Are you sure you want to delete this link?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/reviewLink/${reviewLink._id.toString()}`, {
          method: "DELETE",
        });

        const filterReviewLinks = reviewLinks.filter(
          (obj) => obj._id !== reviewLink._id
        );

        setReviewLinks(filterReviewLinks);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Profile
        name={session?.user.name}
        data={reviewLinks}
        image={session?.user.image}
        handleDelete={handleDeleteReviewLink}
      />

      {reviewLinks.length > 0 ? (
        <>
          <h2 className="desc text-center mb-4">Share your profile</h2>

          <div className="flex items-center justify-center mb-4">
            <button className="blue_btn mr-4" onClick={() => setShowQr(true)}>
              Show QR
            </button>

            <WebShare profileUrl={profileUrl} name={session?.user.name} />
          </div>

          {showQr && <QRCode profileUrl={profileUrl} setShowQr={setShowQr} />}
        </>
      ) : (
        <Link href="/create-link" className="blue_btn w-40 m-auto">
          Create Links
        </Link>
      )}
    </div>
  );
};

export default MyProfile;
