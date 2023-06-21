import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="fixed top-10 left-[90px] right-[90px] flex justify-between items-center font-Poppins text-text-dark2 text-xs">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/b">
            <img src="/Logo.svg" alt="logo" className="h-[45px]" />
          </Link>

          {/* Navbar Link */}
          <nav className="ml-[50px] justify-evenly">
            <ul className="flex space-x-[30px]">
              <li>
                <Link href="/" className="font-Poppins text-text-dark2 text-xs">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/" className="font-Poppins text-text-dark2 text-xs">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/" className="font-Poppins text-text-dark2 text-xs">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* nav link kanan */}
        <div>
          <ul className="flex">
            <li>
              <Link href="/contact us" className="px-8 py-3 text-text-dark2">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact us"
                className="px-8 py-3 text-white bg-brand rounded-md"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
