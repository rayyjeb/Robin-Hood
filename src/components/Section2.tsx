import { useEffect, useState } from "react";
import Button from "./ui/button";

const Section2 = () => {
  const [bgImage, setBgImage] = useState(
    "https://images.ctfassets.net/ilblxxee70tt/72AW6WOPCImTemmsfDxVFk/276b95a7314a0d484a27f3f51cc47a82/web_homepage_investing_2.jpeg"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 425) {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/1jvtb9LgLK7amOfYSgNVk7/d1504fdcb9be25bfa5142ee1481b9f32/mobile_homepage_investing_4x.jpeg"
        );
      } else if (width <= 767) {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/4zLMa3c6TiFcrBMSjsxu6L/54f499ab5ca3631b606e96c7afcb938d/tablet_homepage_investing_3x.jpeg"
        );
      } else if (width >= 1280) {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/4AMLNM2FP37FHghha7757l/c29e98a9b5a31535a7333855183dca7b/wide_homepage_investing_4k_3.jpeg"
        );
      } else {
        setBgImage(
          "https://images.ctfassets.net/ilblxxee70tt/72AW6WOPCImTemmsfDxVFk/276b95a7314a0d484a27f3f51cc47a82/web_homepage_investing_2.jpeg"
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative h-[1018px] md:h-[800px] bg-cover bg-center flex justify-center md:justify-center items-start md:items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="w-full max-w-[1000px] px-4 sm:px-10 mt-10 md:-mt-20">
        <div className="flex flex-col md:items-end text-left leading-12">
          <div className="max-w-[350px] sm:max-w-[410px]">
            
            <h2 className="text-primary text-2xl sm:text-3xl md:text-[42px] font-light">
              Intuitive trading tools
            </h2>
            <p className="text-white text-2xl sm:text-3xl xs:text-[34px] lg:text-[40px] font-light mt-2">
              Build your strategy and track market trends, seamlessly
            </p>
            <p className="leading-normal text-white font-extralight text-sm sm:text-base mt-4">
              Trade stocks, options, crypto, and more on <br /> Robinhood Legend and the Robinhood app.
            </p>
            <Button className="w-fit text-sm mt-5">Learn More</Button>
          <div className="absolute bottom-5 px-4 max-w-96">
            <p className="text-[11px] sm:text-xs font-extralight leading-5 text-white">
              Stocks & funds offered through Robinhood Financial. Crypto offered
              through Robinhood Crypto. See our Fee Schedule for more details.
            </p>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section2;
