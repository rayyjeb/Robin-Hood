import SecurityFeaturesGrid from "./ui/grid"

const Section5 = () => {
    return (
        <div className="bg-[#1C180D] min-h-[1226px] flex justify-center w-full p-[50px]">
            <div>
                <div className="text-white flex items-center flex-col sm:p-6 w-full">
                    <h1 className="text-[32px] sm:text-6xl font-light text-center">Robinhood Protection<br /> Guarantee</h1>
                    <button className="mt-8 sm:mt-16 border text-sm sm:text-base border-white rounded-full px-8 py-2">Learn more about our commitments</button>
                </div>
                <div className="text-white mt-[84px]">
                    <SecurityFeaturesGrid />
                </div>
            </div>
        </div>
    )
}

export default Section5
