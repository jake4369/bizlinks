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
          loading="eager"
          priority={true}
        />
      </div>

      <div className="hero_text px-4">
        <h1 className="head_text">
          Enhance Your Online Presence with{" "}
          <span className="blue_gradient">Bizlinks</span>
        </h1>

        <p>
          Discover the Power of BizLinks: The Easy Way to Store, Organize, and
          Share Business Profiles and Review Site Links Effortlessly!
        </p>
      </div>
    </div>
  );
};

export default Home;
