import { RWebShare } from "react-web-share";
import { FaShare } from "react-icons/fa";

const WebShare = ({ profileUrl, name }) => {
  return (
    <RWebShare
      data={{
        text: `Leave reviews for ${name} at - `,
        url: profileUrl,
        title: "Share",
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <button className="outline_btn">
        Share <FaShare className="ml-2" />
      </button>
    </RWebShare>
  );
};

export default WebShare;
