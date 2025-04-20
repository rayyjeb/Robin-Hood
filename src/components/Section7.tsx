import Button from "./ui/button";

const Section7 = () => {
    return (
        <div className="relative h-[700px] w-full overflow-hidden">
            <video
                className="absolute top-0 left-0 h-full w-full object-cover z-0"
                src="https://videos.ctfassets.net/ilblxxee70tt/3r1UZhjsj4AexVmCH9hrfH/1e7b93b16249b7ef73025a31d4cfae38/Dotcom_NewGeneration_Animation_WEB.webm"
                poster="https://images.ctfassets.net/ilblxxee70tt/6WBms0BL77uZhazKdaye91/981a21240eef31028f4e760ae6fa9886/Investors_Hero.jpg"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="flex-col relative z-10 flex items-center justify-center h-full">
                <p className="max-w-2xl font-martina tracking-[-0.5px] text-white text-5xl  sm:text-7xl leading-[50px] sm:leading-[78px] text-center px-4">
                    Join a new generation of investors
                </p>
                <div className="h-8" />
                <Button>Sign Up</Button>
            </div>
        </div>
    );
};

export default Section7;
