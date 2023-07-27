"use client";

import { useState } from "react";

import Image from "next/image";

import LinkCard from "./LinkCard";
import QRCode from "./QRCode";

const Profile = ({ name, image, data }) => {
  const [showQr, setShowQr] = useState(false);
  const userId = data[0]?.creator._id;

  return (
    <section className="px-4">
      <Image
        src={image || data[0]?.creator.image}
        alt="Profile image"
        width={100}
        height={100}
        className="mx-auto mb-4 rounded-full"
      />

      <p className="desc text-center">{name || data[0]?.creator.username}</p>

      <div className="mt-10 flex flex-col gap-4 mb-10">
        {data.map((review) => (
          <LinkCard key={review._id} review={review} />
        ))}
      </div>

      <div className="flex items-center justify-center mb-4">
        <button className="blue_btn" onClick={() => setShowQr(true)}>
          Show QR
        </button>
      </div>

      {showQr && <QRCode userId={userId} setShowQr={setShowQr} />}
    </section>
  );
};

export default Profile;
