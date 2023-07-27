import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* <div className="hero-image_container">
        <Image
          src="/assets/hero.svg"
          alt="Tech hero image"
          width={100}
          height={100}
          className="home-page_img"
          loading="eager"
          priority={true}
        />
  </div> */}

      <section className="hero_text px-4 mb-10">
        <h1 className="head_text">
          Enhance Your Online Presence with{" "}
          <span className="blue_gradient">Bizlinks</span>
        </h1>

        <p>
          Discover the Power of BizLinks: The Easy Way to Store, Organize, and
          Share Business Profiles and Review Site Links Effortlessly!
        </p>
      </section>

      <section className="bg-[#191921] pb-10">
        <Image
          src="/assets/reviews.svg"
          alt="Customer pressing rating button"
          width={100}
          height={100}
          className="home-page_img mb-10"
        />

        <h2 className="text-white text-3xl font-extrabold leading-[1.15] sm:text-6xl px-4 mb-4">
          <span className="blue_gradient">Increase</span> reviews
        </h2>

        <p className="text-white px-4">
          Maximize Your Reviews, Elevate Your Business: Unleash the potential of
          positive feedback, boost credibility, and surpass the competition with
          our innovative solution.
        </p>
      </section>
    </div>
  );
};

export default Home;
