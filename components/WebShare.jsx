import { RWebShare } from "react-web-share";

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
      <button className="outline_btn">Share</button>
    </RWebShare>
  );
};

export default WebShare;
