import React, { useRef, useCallback } from "react";
import Image from "next/image";
import { Kode_Mono } from "next/font/google";
import Header from "@/components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "@/components/Footer";
import Wallet from "@/components/Wallet";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kode-mono",
});

export default function Home() {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const teamList = [
    { image: "/images/ceo.png", name: "Rayka Moradi", des: "Founder & CEO" },
    {
      image: "/images/bof.png",
      name: "Melanie Mohr",
      des: "Blockchain Officer",
    },
    {
      image: "/images/cpo.png",
      name: "Konstantinos Papadakis",
      des: "CPO",
    },
    {
      image: "/images/cmo.png",
      name: "Michael Krützfeldt",
      des: "CMO",
    },
  ];

  const walletAddress = "0x1234567890123456789012345678901234567890";

  return (
    <>
      {/* <Wallet /> */}
      <div className={`${kodeMono.variable} px-4 sm:px-8 gap-16 lg:px-20`}>
        <img
          src="/images/shadow1.png"
          alt="shadow"
          className=" absolute top-0 right-0 hidden xl:block"
        />
        <img
          src="/images/shadow2.png"
          alt="shadow"
          className=" absolute top-1/2 left-0 hidden xl:block"
        />
        <img
          src="/images/shadow3.png"
          alt="shadow"
          className="absolute h-[140%] right-0 top-full hidden xl:block"
        />
        <Header />
        <section className="pt-6 md:pt-10">
          <h1 className="section-title text-[#B2FFE1]">
            Welcome to <br />
            TradesXBT ($XBT)
          </h1>
          <h1 className="text-[38px] md:text-[48px] font-semibold pt-3">
            The <span className="text-primary">first</span> Fully <br />
            Autonomous <span className="text-primary">Hedge Fund</span>
          </h1>
          <div className="flex flex-col xs:flex-row gap-8 xs:gap-4 pt-8">
            <button className="btn-outline w-full xs:w-[200px]">
              Terminal
            </button>
            <button className="btn-outline w-full xs:w-[200px]">
              Invest With Us
            </button>
          </div>
          <div className="flex rounded-[15px] w-full md:w-fit mt-[50px] border border-dashed border-[#565556] items-center justify-between md:gap-[140px] bg-[#24392C] px-[20px] py-[15px]">
            <div className="flex items-center gap-3">
              <div className="bg-[#36C58C66] rounded-full w-[55px] h-[55px] flex-center">
                <Image
                  src={"/icons/frog.svg"}
                  alt="Forg"
                  width={38}
                  height={23}
                  priority
                />
              </div>
              <div>
                <h2 className="pb-1">Contract Address</h2>
                <p className="xs:hidden">{walletAddress.slice(0, 10)}</p>
                <p className=" hidden xs:block md:hidden">
                  {walletAddress.slice(0, 20)}
                </p>
                <p className=" hidden md:block">{walletAddress}</p>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-2">
                <Image
                  src={"/icons/copy.svg"}
                  alt="copy"
                  width={20}
                  height={20}
                />
                copy
              </button>
            </div>
          </div>
        </section>
        <section className="landing-section-spacer">
          <div className="text-center">
            <h2 className="section-title">
              What is <span className="text-primary">TradesXBT</span>
            </h2>
            <p className="xl:w-1/2 mx-auto pt-4">
              A Swarm of Analyzer and Trader Agents to profit from all Financial
              Markets with Low, Medium and High Risk investment Baskets. With a
              veteran team in crypto since 2012 and +20 years in Financial and
              Business Markets from PWC, UBS, BNY and more than 10 Venture and
              Hedge Funds Under Management.{" "}
            </p>
            <button className="btn-outline w-full sm:w-[200px] mt-[25px]">
              Learn More
            </button>
            <div className="flex items-center flex-col gap-[30px] xl:flex-row justify-between pt-[60px] xl:pt-[100px] 2xl:w-[80%] mx-auto">
              <div className="flex flex-col gap-[30px]">
                <TradesXBTItem
                  icon={"/icons/users.svg"}
                  title={"Community Benefit"}
                  desc={
                    "Our system are enabling stakeholder to join create coin"
                  }
                />
                <TradesXBTItem
                  icon={"/icons/smile.svg"}
                  desc={"98% Customer satisfaction"}
                  className=""
                />
              </div>
              <div className="relative">
                <div>
                  <Image
                    src={"/icons/logo.svg"}
                    alt="logo"
                    width={270}
                    height={270}
                  />
                </div>
                <span className="-z-[1] hidden xl:inline-block top-[30%] right-[93%] rotate-[25deg]  border border-dashed border-[#393939] w-[250px] absolute" />
                <span className="-z-[1] hidden xl:inline-block top-[70%] right-[94%] -rotate-[25deg]  border border-dashed border-[#393939] w-[250px] absolute" />
              </div>
              <div>
                <TradesXBTItem
                  icon={"/icons/check-outline.svg"}
                  desc={"97.6% Safety Rate"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="landing-section-spacer 2xl:w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-[50px]">
            <h2 className="text-center md:text-left section-title font-semibold">
              Meet <span className="text-primary">TradesXBT</span> Team
            </h2>
            <div className="flex items-center gap-5">
              <button onClick={handlePrev}>
                <div className="box-icon">
                  <Image
                    src="/icons/left.svg"
                    alt="left"
                    width={30}
                    height={30}
                  />
                </div>
              </button>
              <button onClick={handleNext}>
                <div className="box-icon">
                  <Image
                    src="/icons/right.svg"
                    alt="right"
                    width={30}
                    height={30}
                  />
                </div>
              </button>
            </div>
          </div>
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

              1440: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={10}
            className="mySwiper container h-auto w-full max-w-screen-2xl"
          >
            {teamList.map((item, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <SwiperSlide className="flex flex-col items-center max-w-[170px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={135}
                    height={135}
                    className="border border-primary rounded-full"
                  />
                  <h2 className="py-2 text-center font-semibold text-[18px]">
                    {item.name}
                  </h2>
                  <p className="text-center text-sm">{item.des}</p>
                </SwiperSlide>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="h-[1px]  bg-gradient-to-r from-transparent via-primary to-transparent w-[80%] mx-auto my-[30px]"></div>
        </section>
        <section className="pb-[100px] md:pb-[160px]">
          <div className="flex items-center justify-center gap-4">
            <p>+ 10’s More</p>
            <Image
              src={"/images/items.svg"}
              alt="items"
              width={140}
              height={50}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

const TradesXBTItem = ({ icon, title, desc, className }) => {
  return (
    <div className="border-custom-gradient p-[1px] rounded-[15px]">
      <div
        className={`bg-[#1C2620] p-5 gap-5 w-[365px] rounded-[15px] flex items-center ${className}`}
      >
        <div className="box-icon">
          <Image src={icon} alt={title} width={30} height={30} />
        </div>
        <div className="text-left">
          {title && <h2 className=" font-semibold text-[18px]">{title}</h2>}
          <p className="text-sm pt-2">{desc}</p>
        </div>
      </div>
    </div>
  );
};
