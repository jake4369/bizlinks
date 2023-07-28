import Image from "next/image";

import LinkCard from "./LinkCard";

const Profile = ({ name, image, data, handleDelete }) => {
  return (
    <section className="px-4">
      <Image
        src={
          image || data[0]?.creator.image || `/assets/profile-placeholder.jpeg`
        }
        alt="Profile image"
        width={100}
        height={100}
        className="mx-auto mb-4 rounded-full"
      />

      <p className="desc text-center">{name || data[0]?.creator.username}</p>

      <div className="mt-10 flex flex-col gap-4 mb-10">
        {data.map((review) => (
          <LinkCard
            key={review._id}
            review={review}
            handleDelete={() => handleDelete && handleDelete(review)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
