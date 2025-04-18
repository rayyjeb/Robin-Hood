import { useEffect, useState } from "react";
import backgroundImg1 from "../assets/section-2.jpeg";
import Button from "./ui/button";

const Section2 = () => {
    const [bgImage, setBgImage] = useState(backgroundImg1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setBgImage("https://images.ctfassets.net/ilblxxee70tt/4AMLNM2FP37FHghha7757l/c29e98a9b5a31535a7333855183dca7b/wide_homepage_investing_4k_3.jpeg");
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
                <div className="flex flex-col ml-[650px] mr-[152px] mt-52 leading-12">
                    <div>   
                        <h2 className="text-primary text-[42px] font-light">Intuitive trading tools</h2>
                        <p className="text-white text-[42px] font-light">Build your strategy <br /> and track market <br /> trends, seamlessly</p>
                        <p className="leading-normal text-white font-extralight text-base mt-4">Trade stocks, options, crypto, and more on <br /> Robinhood Legend and the Robinhood app.</p>
                    </div>
                    <Button className="w-fit text-sm mt-5">Learn More</Button>
                <div className="absolute bottom-5">
                    <p className="text-xs font-extralight leading-5 text-white">Stocks & funds offered through Robinhood Financial. Crypto offered <br/> through Robinhood Crypto. See our Fee Schedule for more details.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
