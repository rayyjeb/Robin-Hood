import Button from "./ui/button"

const Section6 = () => {
    return (
        <div className="bg-primary min-h-[744px] relative flex justify-center w-full p-[50px]">
            <div className="flex flex-col items-center z-10">
                <div className="text-black flex items-center gap-8 flex-col p-6">
                    <h1 className="text-[36px] sm:text-[52px] font-light text-center leading-[40px] sm:leading-[52px]">
                        Become a better investor on the go, right in the app
                    </h1>
                    <p className="font-light text-center">
                        Here's a preview of the things you can learn when you sign up.
                    </p>
                    <Button className="bg-black text-white">Sign up to access Robinhood Learn</Button>
                </div>
            </div>
            <img 
                src="https://images.ctfassets.net/ilblxxee70tt/PKdx5QPF2hxl9vcbxm55W/b1942354f732fbb69a019c53c73bf46b/homepage_learn_phone_2x.png" 
                alt="App Preview" 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-[400px] md:max-w-[500px]"
            />
        </div>
    )
}

export default Section6
