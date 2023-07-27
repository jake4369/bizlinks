"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import QRCode from "@components/QRCode";

import Image from "next/image";
import LinkCard from "@components/LinkCard";

const Profile = () => {
  const [reviewLinks, setReviewLinks] = useState([]);
  const { data: session } = useSession();
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/reviewLink");
      const data = await response.json();

      setReviewLinks(data);
    };

    fetchPosts();
  }, []);

  const linkCards = reviewLinks.map((review) => {
    return (
      <LinkCard
        key={review.siteUrl}
        siteUrl={review.siteUrl}
        profileUrl={review.profileUrl}
        siteImage={review.siteImage}
      />
    );
  });

  return (
    <div className="profile_page px-4 relative">
      <Image
        src={session?.user.image}
        alt="User profile image"
        width={100}
        height={100}
        className="rounded-full m-auto mb-4"
      />

      <p className="text-center mb-8 desc blue_gradient">
        {session?.user.name}
      </p>

      <h2 className="desc text-lg mb-2 text-center">
        Visit the links to leave a review
      </h2>
      <section className="link_cards flex flex-col gap-4 mb-12">
        {linkCards}
      </section>

      <div className="share-btns flex items-start justify-center">
        <button className="blue_btn" onClick={() => setShowQr(true)}>
          Show QR
        </button>
      </div>

      {showQr && <QRCode setShowQr={setShowQr} />}
    </div>
  );
};

export default Profile;
