
const SecurityFeaturesGrid = () => {
  const features = [
    {
      title: "We work hard to keep your data safe and secure.",
      icon: "https://images.ctfassets.net/ilblxxee70tt/4eSlnvgaWAu2jaCVAyRcrY/602aa63fb17d4448ef651bd2944e963a/illo_secure.svg", // Replace with actual path
    },
    {
      title: "We protect your account from unauthorized activity.",
      icon: "https://images.ctfassets.net/ilblxxee70tt/DwoUYJLid0EWhDOJPjFYN/673186170fb52deebdfaeb3691a28cac/illo_protect.svg",
    },
    {
      title: "We provide multi-factor authentication on all accounts.",
      icon: "https://images.ctfassets.net/ilblxxee70tt/2KMkk3plAKjRG2fPBI69a1/18a5f48bbf278bc91008f6904096b559/illo_multi-factor.svg",
    },
    {
      title: "We've got your back. We're available to you 24/7.",
      icon: "https://images.ctfassets.net/ilblxxee70tt/4u2J3HEANe8rXfdytWGpAC/72bd780bca181f59b40dcf8c51f0e996/illo_247.svg",
    },
  ];

  return (
    <div className=" flex justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-[78px] text-center ">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-4 w-[300px] mb-[40px]">
            <img src={feature.icon} alt="" className="w-[200px] h-[200px]" />
            <h5 className="text-lg sm:text-[22px] font-light">{feature.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityFeaturesGrid;
