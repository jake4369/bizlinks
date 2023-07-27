import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className="hero-image_container">
        <Image
          src="/assets/hero.svg"
          alt="Tech hero image"
          width={100}
          height={500}
          className="hero_img"
          priority={true}
        />
      </div>

      <div className="hero_text ">
        <h1 className="head_text">
          Enhance Your Online Presence with{" "}
          <span className="blue_gradient">Bizlink</span>
        </h1>

        <p className="mb-10">
          Discover the Power of BizLink: The Easy Way to Store, Organize, and
          Share Business Profiles and Review Site Links Effortlessly!
        </p>
      </div>
    </div>
  );
};

export default Home;
