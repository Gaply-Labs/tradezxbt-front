import Link from "next/link";
import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row items-center justify-between py-6  border-t border-[#393939]">
      <p className=" font-semibold">
        Autoramated By <span className="text-primary">@GaplyLabs</span>
      </p>
      <ul className="flex justify-center flex-wrap gap-7 lg:gap-[50px]">
        <li>
          <Link href="/" className="font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="font-medium">
            Readmap
          </Link>
        </li>
        <li>
          <Link href="/" className="font-medium">
            About
          </Link>
        </li>
        <li>
          <Link href="/" className="font-medium">
            Team
          </Link>
        </li>
        <li>
          <Link href="/" className="font-medium">
            PNl
          </Link>
        </li>
      </ul>
      <div className="flex gap-[30px] items-center">
        <Link href="/">
          <Image
            src={"/icons/Telegram.svg"}
            alt="Forg"
            width={24}
            height={24}
            priority
          />
        </Link>
        <Link href="/">
          <Image
            src={"/icons/X.svg"}
            alt="Forg"
            width={24}
            height={24}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Index;
