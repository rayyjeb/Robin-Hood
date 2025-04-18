import Button from "./ui/button";
import Video from "/videos/Video.webm"
const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute top-0 left-0 h-full w-full object-cover z-0"
                src={Video}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="flex-col relative z-10 flex items-center justify-center h-full">
                <p className="font-martina leading-24 tracking-[-0.5px] text-white text-[110px] text-center px-4">
                    Built for the <br /> Future of Trading
                </p>
                <div className="h-8" />
                <p className="mb-8 text-white text-xl tracking-wide">Analyze, buy, and sell with tools purpose-built for how you trade.</p>
                <Button>Sign Up</Button>
            </div>
        </div>
    );
};

export default Hero;
