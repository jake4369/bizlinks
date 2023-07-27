import QRCodeReact from "qrcode.react";

const QRCode = () => {
  // Get the current page URL
  const currentPageUrl = window.location.href;

  return (
    <div className="absolute w-full h-screen  top-0 right-0 left-0 bottom-0 bg-black opacity-70 flex items-center justify-center">
      <div className="border">
        <QRCodeReact value={currentPageUrl} />
      </div>
    </div>
  );
};

export default QRCode;
