import { useEffect, useState } from "react";
import Button from "./ui/button";
import strategies from "/strategies.svg"
const Section4 = () => {
    const [bgImage, setBgImage] = useState(
        "https://images.ctfassets.net/ilblxxee70tt/2IeGSELP82mOWLNZHSE5R5/2dd98fffc51573df6d68de384a175435/RH25_Strategiespromo_wide_homepage_hero.jpeg"
    );

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width <= 425) {
                setBgImage(
                    "https://images.ctfassets.net/ilblxxee70tt/42t5C9fq8xRabnCPUCaV3W/2ac191b14f3785e23d1c001d4a31bf0e/RH25_strategiespromo_mobile_homepage_hero.jpg"
                );
            } else if (width <= 767) {
                setBgImage(
                    "https://images.ctfassets.net/ilblxxee70tt/4FRVAk1txyr2Lp9VLyPOoE/da3a2101737f427d91be3cb3ba880cf9/RH25_Strategiespromo_tablet_homepage_hero.jpeg"
                );
            } else if (width >= 1280) {
                setBgImage(
                    "https://images.ctfassets.net/ilblxxee70tt/54Guv4y5evT0ZpKTaC09c1/391b135f648b2582deff63a48ef63c10/RH25_Strategiespromo_wide_homepage_hero_4k.jpeg"
                );
            } else {
                setBgImage(
                    "https://images.ctfassets.net/ilblxxee70tt/2IeGSELP82mOWLNZHSE5R5/2dd98fffc51573df6d68de384a175435/RH25_Strategiespromo_wide_homepage_hero.jpeg"
                );
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className="relative h-[1018px] md:h-[800px] bg-cover bg-center flex justify-center items-start md:items-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="w-full max-w-[1000px] px-4 sm:px-10 mt-10 md:-mt-16">
                <div className="flex flex-col md:items-start text-left leading-12">
                    <div className="max-w-[350px] sm:max-w-[410px]">
                        <div className="flex items-center gap-1 mb-6">
                            <img src={strategies} alt="Robinhood" className="h-8 invert filter" />
                        </div>
                        <p className="text-white text-3xl md:text-[32px] lg:text-[40px] font-light lg:leading-[48px]">
                            Your portfolio, handled by the pros
                        </p>
                        <p className="leading-normal text-white font-light text-base mt-4">
                            Get timely market insights with an expert-managed portfolio
                            that proactively adjusts your investments. Robinhood Gold
                            members get zero management fees on every dollar over
                            $100K.
                        </p>
                        <p className="text-base text-white font-light mt-6">
                            Terms apply. Gold subscription $5/month.
                        </p>
                        <Button className="w-fit text-sm mt-5">Get started</Button>
                        <div className="absolute bottom-5 max-w-96">
                            <p className="text-xs font-light leading-5 text-black">
                                For illustrative purposes only. Portfolio management offered through Robinhood
                                Asset Management (“Robinhood Strategies”), an SEC-registered investment
                                advisor. Gold membership is offered by Robinhood Gold, LLC.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
