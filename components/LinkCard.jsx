import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";

const LinkCard = ({ review }) => {
  const siteName =
    review.siteUrl?.split(".")[0][0].toUpperCase() +
    review.siteUrl?.split(".")[0].slice(1);

  return (
    <div className="flex items-center glassmorphism">
      <Image
        src={review.siteImage}
        alt={review.siteUrl}
        width={25}
        height={25}
        className="mr-4"
        priority={true}
      />

      <p>{siteName}</p>

      <a
        href={review.profileUrl}
        target="_blank"
        className="ml-auto text-2xl p-1 bg-gray-200 rounded-md shadow-md"
      >
        <GoLinkExternal />
      </a>
    </div>
  );
};

export default LinkCard;
