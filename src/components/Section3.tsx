import { useEffect, useState } from "react";
import backgroundImg1 from "../assets/section-2.jpeg";
import Button from "./ui/button";
import { Info } from "lucide-react";

const Section3 = () => {
    const [bgImage, setBgImage] = useState(backgroundImg1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setBgImage("https://images.ctfassets.net/ilblxxee70tt/1yBfcc0Y35v8vHS6eUXWMR/5ba2fd65e0cc48044084099e57625f94/web_crypto_hero.jpg");
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
            className="relative h-[800px] bg-cover bg-center flex justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Content here */}
            <div className="flex flex-col">
                <div className="flex flex-col ml-[650px] mr-[152px] mt-52 leading-12">
                    <div>
                        <div className="flex items-center gap-1 brightness-0 mb-6">
                            <img src="/logo.png" alt="Robinhood" className="h-8" />
                            <span className="text-3xl font-regular">Robinhood</span>
                            <span className="text-3xl font-extralight">Crypto</span>
                        </div>
                        <p className="text-black text-[42px] font-light">Get started with<br />Robinhood Crypto <br /> Trade crypto 24/7</p>
                        <p className="leading-normal text-black font-light text-base mt-4">Start with as little as $1. Buy, sell, and transfer BTC, ETH, <br /> XRP, SOL, DOGE, SHIB, and more.</p>
                        <div className="flex items-center gap-1 mt-2">
                            <Info strokeWidth={1} className="size-4" />
                            <p className="text-[11px] font-light">Crypto Risk Disclosure</p>
                        </div>
                    </div>
                    <Button className="w-fit text-sm mt-5 bg-black text-white">Learn More</Button>
                    <div className="absolute bottom-5">
                        <p className="text-xs font-extralight leading-5 text-black">Crypto offered through RobinHood Crypto.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
