import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section className="hero_text px-6 mt-6 mb-10">
        <h1 className="head_text mb-4">
          Enhance Your Online Presence with{" "}
          <span className="blue_gradient">Bizlinks</span>
        </h1>

        <p>
          Discover the Power of BizLinks: The Easy Way to Store, Organize, and
          Share Business Profiles and Review Site Links Effortlessly!
        </p>
      </section>

      <section className="bg-[#191921] pb-[72px]">
        <Image
          src="/assets/reviews.svg"
          alt="Customer pressing rating button"
          width={100}
          height={100}
          className="home-page_img mb-[72px]"
        />

        <h2 className="text-white text-3xl font-extrabold leading-[1.15] sm:text-6xl px-6 mb-4">
          <span className="blue_gradient">Increase</span> reviews
        </h2>

        <p className="text-white px-6">
          Maximize Your Reviews, Elevate Your Business: Unleash the potential of
          positive feedback, boost credibility, and surpass the competition with
          our innovative solution.
        </p>
      </section>

      <section className="py-24 px-6 bg-[#0e87be] text-white">
        <h2 className="text-3xl font-extrabold leading-[1.15] sm:text-6xl mb-20">
          Unlock Success, Trust, and Growth!
        </h2>

        <div className="mb-[86px]">
          <h3 className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              01
            </span>{" "}
            Increase Trust and Credibilty
          </h3>

          <p className="leading-6 px-4 relative">
            Real customer reviews build trust and credibility, inspiring
            confidence in potential buyers, leading to increased brand trust and
            sales.
          </p>
        </div>

        <div className="mb-[86px]">
          <h3 className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              02
            </span>{" "}
            Improved Decision Making
          </h3>

          <p className="leading-6 px-4">
            Reviews enable potential customers to make informed decisions by
            learning from others' experiences, aligning products or services
            with their needs.
          </p>
        </div>

        <div className="mb-[86px]">
          <h3 className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              03
            </span>{" "}
            Higher Conversion Rates
          </h3>

          <p className="leading-6 px-4">
            Positive reviews showcase satisfied customers, creating a compelling
            incentive for potential buyers to transition into actual customers.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              04
            </span>{" "}
            SEO and Search Rankings
          </h3>

          <p className="leading-6 px-4">
            Fresh and relevant user-generated content, such as reviews, plays a
            vital role in optimizing search engine rankings, leading to
            increased website visibility and traffic.
          </p>
        </div>
      </section>

      <section>
        <Image
          src="/assets/hero.svg"
          alt="Tech image"
          width={200}
          height={200}
          className="home-page_img"
        />
      </section>
    </div>
  );
};

export default Home;
