import Image from "next/image";
import { GoLinkExternal } from "react-icons/go";

const LinkCard = ({ siteUrl, profileUrl, siteImage }) => {
  const siteName =
    siteUrl?.split(".")[0][0].toUpperCase() + siteUrl?.split(".")[0].slice(1);
  return (
    <div className="flex items-center glassmorphism">
      <Image
        src={siteImage}
        alt={siteUrl}
        width={25}
        height={25}
        className="mr-4"
      />
      <p>{siteName}</p>

      <a
        href={profileUrl}
        target="_blank"
        className="ml-auto text-2xl p-1 bg-gray-200 rounded-md shadow-md"
      >
        <GoLinkExternal />
      </a>
    </div>
  );
};

export default LinkCard;
