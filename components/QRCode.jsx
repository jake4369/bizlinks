import QRCodeReact from "qrcode.react";

const QRCode = ({ setShowQr, profileUrl }) => {
  // Get the current page URL

  return (
    <div className="fixed w-full h-screen top-0 right-0 left-0 bottom-0 bg-black opacity-90 flex flex-col items-center justify-center">
      <div className="border-4 mb-10 rounded-sm">
        <QRCodeReact value={profileUrl} bgColor="white" size={175} />
      </div>
      <button className="blue_btn opacity-100" onClick={() => setShowQr(false)}>
        Close
      </button>
    </div>
  );
};

export default QRCode;
