import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="hero_text px-6 mt-6 mb-10">
        <h1 className="head_text mb-4">
          Enhance Your Online Presence with{" "}
          <span className="blue_gradient">Bizlinks</span>
        </h1>

        <p className="mb-10">
          Discover the Power of BizLinks: The Easy Way to Store, Organize, and
          Share Business Profiles and Review Site Links Effortlessly!
        </p>

        <Link
          href="get-started"
          className="rounded-full outline-none bg-blue-500 py-4 px-6 mx-auto text-white transition-all tracking-widest hover:bg-blue-400 ease-in-out duration-500 text-center text-md font-semibold font-inter"
        >
          Get Started
        </Link>
      </section>

      <section className="bg-[#191921] pb-[72px]">
        <Image
          src="/assets/reviews.svg"
          alt="Customer pressing rating button"
          width={100}
          height={100}
          className="home-page_img mb-[72px]"
        />

        <h2 className="text-white text-4xl font-extrabold leading-[1.15] sm:text-6xl px-6 mb-4">
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
          <p className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              01
            </span>{" "}
            Increase Trust and Credibilty
          </p>

          <p className="leading-6 px-4 relative">
            Real customer reviews build trust and credibility, inspiring
            confidence in potential buyers, leading to increased brand trust and
            sales.
          </p>
        </div>

        <div className="mb-[86px]">
          <p className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              02
            </span>{" "}
            Improved Decision Making
          </p>

          <p className="leading-6 px-4">
            Reviews enable potential customers to make informed decisions by
            learning from others' experiences, aligning products or services
            with their needs.
          </p>
        </div>

        <div className="mb-[86px]">
          <p className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              03
            </span>{" "}
            Higher Conversion Rates
          </p>

          <p className="leading-6 px-4">
            Positive reviews showcase satisfied customers, creating a compelling
            incentive for potential buyers to transition into actual customers.
          </p>
        </div>

        <div>
          <p className="text-lg font-bold mb-4 px-4 relative">
            <span className="text-[80px] font-extrabold opacity-25 absolute top-[-12px] left-0">
              04
            </span>{" "}
            SEO and Search Rankings
          </p>

          <p className="leading-6 px-4">
            Fresh and relevant user-generated content, such as reviews, plays a
            vital role in optimizing search engine rankings, leading to
            increased website visibility and traffic.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <Image
          src="/assets/hero.svg"
          alt="Tech image"
          width={200}
          height={200}
          className="home-page_img mb-[72px]"
        />

        <h2 className="text-black text-3xl font-extrabold leading-[1.15] sm:text-6xl px-6 mb-4">
          Share your review pages with{" "}
          <span className="blue_gradient">ease</span>
        </h2>

        <p className="px-6 mb-4">
          Effortlessly create a clickable link to your review site profiles by
          simply pasting the web address.
        </p>

        <p className="px-6 mb-4">
          Search from thousands of companies to find the name of the site,
          utilising the power of{" "}
          <a href="https://brandfetch.com/" className="font-bold blue_gradient">
            Brandfetch
          </a>
          .
        </p>

        <p className="px-6 mb-8">
          Share this link instantly with your valued customers and clients.
        </p>

        <Image
          src="/assets/form.png"
          alt="BizLinks link creation form"
          width={400}
          height={100}
          className="h-auto w-full"
        />
      </section>

      <section className="bg-[#191921] text-white py-[72px] px-6">
        <h2 className="text-3xl font-extrabold leading-[1.15] sm:text-6xl mb-4">
          Generate a <span className="blue_gradient">QR Code</span> or share
          your profile across{" "}
          <span className="blue_gradient">multiple platforms</span>
        </h2>

        <p className="mb-4 font-bold">
          We make it simple to share your profile.
        </p>

        <p className="mb-10">
          Generate a unique QR Code your customers can scan from their mobile
          device.
        </p>

        <Image
          src="/assets/qr.png"
          alt="QR code for BizLinks profile page"
          width={200}
          height={200}
          className="mx-auto mb-10"
        />

        <p className="mb-10">
          Share your link via Whatsapp, text message, email, social media,
          direct messaging or any other application you may have on your device.
        </p>

        <Image
          src="/assets/share-profile.png"
          alt="Sharing your profile"
          width={200}
          height={200}
          className="mx-auto w-full rounded-lg"
        />
      </section>
    </div>
  );
};

export default Home;
