"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProvider();
  }, []);

  const handleSignOut = async () => {
    // Sign out logic (you may keep it as is)
    await signOut({
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <nav className="w-full flex items-center justify-between px-2 py-4">
      <Link href="/" className="flex items-center cursor-pointer">
        <Image
          src="/assets/logo.png"
          alt="BizLink logo"
          width={50}
          height={50}
          className="mr-2"
        />
        <p className="logo_text blue_gradient">BizLinks</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden ">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-link" className="blue_btn">
              Create Link
            </Link>

            <button
              type="button"
              onClick={() => handleSignOut()}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                alt="Profile photo"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="blue_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex cursor-pointer">
            <Image
              src={session?.user.image}
              alt="Profile photo"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown z-50">
                <Link
                  href="profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-link"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Link
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    handleSignOut();
                  }}
                  className="mt-5 w-full blue_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="blue_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
