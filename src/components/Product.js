import React from "react";
import Link from "next/link";

function Product() {
  return (
    <main className="h-screen w-screen bg-background flex">
      {/* Headline */}
      <div className="w-7/12 flex flex-row items-center px-[90px]">
        <div>
          <div>
            <p className="flex items-center text-brand font-Poppins font-medium text-lg">
              <span className="w-5 h-0.5 bg-brand block mr-[6px]"></span>
              Future Investment
            </p>
            <h3 className="mt-3 font-Montserrat font-extrabold text-[60px] leading-[70px] text-text-dark2">
              Manage Your Finances Every Day
              <span className="text-brand"> Very Easily</span>
            </h3>
            <p className="text-lg text-text-dark3 mt-5">
              Manage & develop your finance for the future to come. Download now
              on your smartphone.
            </p>
          </div>
          <div className="flex space-x[30px] justify-evenly ">
            <Link href="/">
              <img src="/appstore.svg"></img>
            </Link>
            <Link href="/">
              <img src="/googleplay.svg"></img>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
