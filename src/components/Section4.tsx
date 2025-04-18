import { useEffect, useState } from "react";
import backgroundImg1 from "../assets/section-2.jpeg";
import Button from "./ui/button";
import { Info } from "lucide-react";

const Section4 = () => {
    const [bgImage, setBgImage] = useState(backgroundImg1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setBgImage("https://images.ctfassets.net/ilblxxee70tt/2IeGSELP82mOWLNZHSE5R5/2dd98fffc51573df6d68de384a175435/RH25_Strategiespromo_wide_homepage_hero.jpeg");
            } else {
                setBgImage(backgroundImg1);
            }
        };

        handleResize(); // check on mount
        window.addEventListener("resize", handleResize); // check on resize

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className="relative h-[93.5vh] bg-cover bg-center flex justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Content here */}
            <div className="flex flex-col">
                <div className="flex flex-col mr-[650px] ml-[152px] mt-52 leading-12">
                    <div>
                        <div className="flex items-center gap-1 mb-6">
                            <img src="/logo.png" alt="Robinhood" className="h-8" />
                            <span className="text-3xl text-white font-regular">Robinhood</span>
                            <span className="text-3xl  text-white font-extralight">Strategies</span>
                        </div>
                        <p className="text-white text-[42px] font-light">Your portfolio, handled<br />by the pros</p>
                        <p className="leading-normal text-white font-light text-base mt-4">
                            Get timely market insights with an expert-managed portfolio <br /> that proactively adjusts your investments. Robinhood Gold<br />members get zero management fees on every dollar over<br />$100K.</p>
                        <div className="flex items-center gap-1 mt-2">
                            <p className="text-base text-white font-light">Terms apply. Gold subscription $5/month.</p>
                        </div>
                    </div>
                    <Button className="w-fit text-sm mt-5">Get Started</Button>
                    <div className="absolute bottom-5">
                        <p className="text-xs font-light leading-5 text-black">For illustrative purposes only. Portfolio management offered through Robinhood<br/>Asset Management (“Robinhood Strategies”), an SEC-registered investment<br/>advisor. Gold membership is offered by Robinhood Gold, LLC.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
