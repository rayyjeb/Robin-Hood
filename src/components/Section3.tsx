import { useEffect, useState } from "react";
import Button from "./ui/button";
import { Info } from "lucide-react";
import crypto from "/crypto.svg"
const Section3 = () => {
  const [bgImage, setBgImage] = useState(
    "https://images.ctfassets.net/ilblxxee70tt/1yBfcc0Y35v8vHS6eUXWMR/5ba2fd65e0cc48044084099e57625f94/web_crypto_hero.jpg"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 425) {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/7vB1E5FkoYiyUiDiLbBvRY/0304e170b4885b5a84042916c69bc792/mobile_crypto_hero_3.jpg"
        );
      } else if (width <= 767) {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/2CVYPS74M1LraWI2D2T9uy/4f600fd09c45ff2de0be946882e0e75d/tablet_crypto_hero.jpg"
        );
      } else if (width >= 1280) {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/2zqFBs1Dk1ZFLa68vgaCUM/ae93f6273da3b74ae09899a4cdcee75e/wide_crypto_hero_4k_test_2.jpg"
        );
      } else {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/1yBfcc0Y35v8vHS6eUXWMR/5ba2fd65e0cc48044084099e57625f94/web_crypto_hero.jpg"
        );
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // and on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative h-[800px] bg-cover bg-center flex justify-center items-start md:items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-[1000px] px-4 sm:px-10 mt-10 md:-mt-16">
        <div className="flex flex-col md:items-end text-left leading-12">
          <div className="max-w-[350px] sm:max-w-[410px]">
            <div className="flex items-center gap-1 mb-6 brightness-0">
              <img src={crypto} alt="Robinhood" className="h-8 invert filter" />
            </div>
            <p className="lg:max-w-[360px] text-black text-2xl sm:text-xl md:text-[32px] lg:text-[40px] lg:leading-12 font-light">
              Get started with Robinhood Crypto Trade crypto 24/7
            </p>
            <p className="leading-normal text-black font-light text-sm sm:text-base mt-4">
              Start with as little as $1. Buy, sell, and transfer BTC, ETH,
              <br />XRP, SOL, DOGE, SHIB, and more.
            </p>
            <div className="flex items-center gap-1 mt-2">
              <Info strokeWidth={1} className="size-4" />
              <p className="text-[11px] font-light">Crypto Risk Disclosure</p>
            </div>
            <Button className="w-fit text-sm mt-5 bg-black text-white">
              Learn More
            </Button>
            <div className="absolute bottom-6 max-w-96">
              <p className="text-xs font-extralight leading-5 text-black">
                Crypto offered through Robinhood Crypto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
