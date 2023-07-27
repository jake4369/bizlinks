import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed w-screen flex h-screen items-start justify-center pt-10">
      <Image
        src="assets/loader.svg"
        width={50}
        height={50}
        alt="loader"
        className="object-contain"
      />
    </div>
  );
};

export default Loading;
