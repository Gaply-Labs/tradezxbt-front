import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-[40px]">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src={"/icons/frog.svg"}
          alt="Forg"
          width={38}
          height={23}
          priority
        />
        <span className=" font-bold text-[20px]">TradesXBT</span>
      </Link>
      <div className="hidden lg:block">
        <ul className="flex gap-[50px]">
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
      </div>
      <div className="flex gap-[30px] items-center">
        <Link href="/" className="hidden lg:block">
          <Image
            src={"/icons/Telegram.svg"}
            alt="Forg"
            width={16}
            height={16}
            priority
          />
        </Link>
        <Link href="/" className="hidden lg:block">
          <Image
            src={"/icons/X.svg"}
            alt="Forg"
            width={16}
            height={16}
            priority
          />
        </Link>
        <button className="btn-primary">Buy $XBT</button>
      </div>
    </div>
  );
};

export default Header;
