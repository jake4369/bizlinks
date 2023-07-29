import Image from "next/image";

const GetStarted = () => {
  return (
    <div>
      <section className="px-6 mt-10 mb-12">
        <h1 className="head_text mb-4">
          Get started with <span className="blue_gradient">BizLink</span>
        </h1>

        <p className="mb-4">
          If you're new to Bizlinks and already have a{" "}
          <span className="blue_gradient font-bold">Google Account</span>,
          simply clicking the{" "}
          <span className="blue_gradient font-bold">'Sign In'</span> button will
          instantly create an account for you, eliminating the need to fill in
          any registration forms.
        </p>

        <p className="mb-10">
          We've implemented Google authentication, which{" "}
          <span className="blue_gradient font-bold">
            requires a Google account
          </span>{" "}
          for signing in. Rest assured, we've chosen this method because having
          a Google account for your business unlocks{" "}
          <span className="blue_gradient font-bold">numerous benefits</span>{" "}
          that we wouldn't want you to miss out on!
        </p>

        <a
          href="https://business.google.com/create?skipLandingPage&service=ome&original_intent=GMB&omesrcexp=48778922&omec=EKqdoRcyAgECQAFKEwin6cz85LSAAxU0CNQBHUGLCVQ%3D"
          className="flex items-center justify-center rounded-full outline-none bg-blue-500 py-2 px-6 mx-8 mb-8 text-white transition-all tracking-widest hover:bg-blue-400 ease-in-out duration-500 text-center text-md font-semibold font-inter"
          target="_blank"
        >
          Create account{" "}
          <Image
            src="/assets/google-logo.png"
            alt="Google logo"
            width={35}
            height={35}
            className="ml-2 bg-white rounded-full"
          />
        </a>

        <p className="text-lg font-bold">
          Here are some of the most important ones:
        </p>
      </section>

      <section className="px-6 py-[72px]  bg-[#191921] text-white">
        <ul className="px-2 flex flex-col gap-10">
          <li>
            <h2 className="mb-4 blue_gradient font-bold text-3xl">
              Get found more easily online.
            </h2>{" "}
            A Google Business account boosts your business visibility in search
            results, Maps, and other Google platforms. Reach more potential
            customers searching for products or services like yours.
          </li>

          <li>
            <h2 className="mb-4 blue_gradient font-bold text-3xl">
              Manage your online presence.
            </h2>{" "}
            You control your business info online, including name, address,
            phone, website, hours, and more. Add photos, videos, and respond to
            reviews.
          </li>

          <li>
            <h2 className="mb-4 blue_gradient font-bold text-3xl">
              Get more reviews.
            </h2>{" "}
            Customer reviews build trust and credibility. With a Google Business
            account you can gather reviews to attract new customers and enhance
            online visibility.
          </li>

          <li>
            <h2 className="mb-4 blue_gradient font-bold text-3xl">
              Connect with customers.
            </h2>{" "}
            Receive messages from potential customers via Google. Answer
            questions, resolve issues, and build strong customer relationships.
          </li>

          <li>
            <h2 className="mb-4 blue_gradient font-bold text-3xl">
              Get insights into your business.
            </h2>{" "}
            Get valuable insights with Google Business analytics. Understand how
            people find and interact with your business, improving your
            marketing and sales strategies.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <Image
          src="/assets/google-business.png"
          alt="Google business"
          width={500}
          height={500}
          className="block w-full mb-[72px]"
        />

        <p className="mb-8 px-6">
          Overall, a Google Business account is a valuable tool for any business
          that wants to improve its online presence and connect with customers.
          It's free to create and maintain, so there's no reason not to sign up!
        </p>

        <a
          href="https://business.google.com/create?skipLandingPage&service=ome&original_intent=GMB&omesrcexp=48778922&omec=EKqdoRcyAgECQAFKEwin6cz85LSAAxU0CNQBHUGLCVQ%3D"
          className="flex items-center justify-center rounded-full outline-none bg-blue-500 py-2 px-6 mx-8 mb-8 text-white transition-all tracking-widest hover:bg-blue-400 ease-in-out duration-500 text-center text-md font-semibold font-inter"
          target="_blank"
        >
          Create account{" "}
          <Image
            src="/assets/google-logo.png"
            alt="Google logo"
            width={35}
            height={35}
            className="ml-2 bg-white rounded-full"
          />
        </a>

        <p className="text-lg font-bold px-6">
          Still need convincing? Here are some additional benefits of having a
          Google Business account:
        </p>
      </section>

      <section className="bg-[#0e87be] px-6 py-[72px] text-white">
        <ul className="px-2 flex flex-col gap-10">
          <li>
            <h2 className="mb-4 font-bold text-3xl">Improve your local SEO.</h2>{" "}
            A Google Business account can help improve your local SEO, which
            means that your business will be more likely to show up in search
            results for people who are searching for businesses like yours in
            your area.
          </li>

          <li>
            <h2 className="mb-4 font-bold text-3xl">Reach more customers.</h2>{" "}
            Your Google Business listing can be seen by people all over the
            world, so it's a great way to reach new customers who may not be
            aware of your business.
          </li>

          <li>
            <h2 className="mb-4 font-bold text-3xl">Increase sales.</h2> A
            well-optimized Google Business listing can lead to more website
            traffic, phone calls, and in-store visits, which can all lead to
            increased sales.
          </li>
        </ul>
      </section>

      <section className="py-[72px] px-6">
        <div className="flex items-center justify-center mb-10">
          <Image
            src="/assets/logo.png"
            alt="BizLinks logo"
            width={100}
            height={100}
            className="mr-1"
          />

          <span className="text-2xl font-bold blue_gradient">BizLinks</span>
        </div>

        <p className="mb-10">
          If you're not already using a{" "}
          <span className="blue_gradient font-bold">
            Google Business account
          </span>
          , we highly recommend signing up. It's a{" "}
          <span className="blue_gradient font-bold">free and easy</span> way to
          improve your online presence and connect with customers.
        </p>

        <a
          href="https://business.google.com/create?skipLandingPage&service=ome&original_intent=GMB&omesrcexp=48778922&omec=EKqdoRcyAgECQAFKEwin6cz85LSAAxU0CNQBHUGLCVQ%3D"
          className="flex items-center justify-center rounded-full outline-none bg-blue-500 py-2 px-6 mx-8 mb-10 text-white transition-all tracking-widest hover:bg-blue-400 ease-in-out duration-500 text-center text-md font-semibold font-inter"
        >
          Create account{" "}
          <Image
            src="/assets/google-logo.png"
            alt="Google logo"
            width={35}
            height={35}
            className="ml-2 bg-white rounded-full"
          />
        </a>
      </section>
    </div>
  );
};

export default GetStarted;
