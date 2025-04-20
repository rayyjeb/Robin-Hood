'use client';

import { motion } from "framer-motion";
import Button from "./ui/button";
import Video from "/videos/Video.webm";

const headline = "Built for the \n Future of Trading";

const Hero = () => {
    const lines = headline.split("\n");

    return (
        <div className="relative h-[800px] w-full overflow-hidden">
            <video
                className="absolute top-0 left-0 h-full w-full object-cover z-0"
                src={Video}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="flex-col relative z-10 flex items-center justify-center h-full">
                <p className="font-martina text-white text-center px-4 tracking-[-0.5px] font-normal
    max-[426px]:text-[60px] max-[426px]:leading-[63px]
    min-[426px]:max-[1023px]:text-[80px] min-[426px]:max-[1023px]:leading-[80px]
    min-[1024px]:text-[110px] min-[1024px]:leading-[110px]">
                    Built for the <br /> Future of Trading
                </p>


                <div className="h-8" />
                <motion.p
                    className="mb-8 px-6 text-white font-light text-[22px] text-center tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    Analyze, buy, and sell with tools purpose-built for how you trade.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} // comes after subtext
                >
                    <Button>Sign Up</Button>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
