import Button from "./ui/button";
import Video from "/videos/Video.webm"
const Hero = () => {
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
    max-[425px]:text-[60px] max-[425px]:leading-[63px]
    min-[426px]:max-[1023px]:text-[80px] min-[426px]:max-[1023px]:leading-[80px]
    min-[1024px]:text-[110px] min-[1024px]:leading-[110px]">
                    Built for the <br /> Future of Trading
                </p>

                <div className="h-8" />
                <p className="mb-8 px-6 text-white text-[22px] text-center tracking-wide">Analyze, buy, and sell with tools purpose-built for how you trade.</p>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
};

export default Hero;
