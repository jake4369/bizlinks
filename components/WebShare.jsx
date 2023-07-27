import { RWebShare } from "react-web-share";

const WebShare = ({ userId, name }) => {
  const currentPageUrl = `${window.location.href}/${userId}`;

  return (
    <RWebShare
      data={{
        text: `Leave reviews for ${name} at - `,
        url: currentPageUrl,
        title: "Share",
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <button className="outline_btn">Share</button>
    </RWebShare>
  );
};

export default WebShare;
