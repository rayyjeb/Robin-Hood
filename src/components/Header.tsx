import { ChevronDown, Globe } from "lucide-react";
import Button from "./ui/button";
import { useState, useRef, useEffect } from "react";
import logo from '/logo.svg';

const navItems = [
  "Invest", "Crypto", "Retirement", "Options", "Futures", "Trading", "Banking",
  "Credit Card", "Strategies", "Gold", "Legend", "Learn", "Support",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const offerRef = useRef<HTMLDivElement>(null);
  const [globeOpen, setGlobeOpen] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (globeRef.current && !globeRef.current.contains(event.target as Node)) {
        setGlobeOpen(false);
      }
    };

    if (globeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [globeOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (offerRef.current && !offerRef.current.contains(event.target as Node)) {
        setOfferOpen(false);
      }
    };

    if (offerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [offerOpen]);

  return (
    <>
      <header className="sticky top-0 z-[9999] bg-black text-white px-6 sm:px-9 h-16 flex justify-between items-center border-b border-gray-500">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Robinhood" className="invert" />
          <nav className="ml-5 hidden xl:flex items-center text-sm">
            <div
              ref={offerRef}
              className="relative flex items-center ml-9 text-base font-light cursor-pointer"
              onClick={() => setOfferOpen((prev) => !prev)}
            >
              <div className=" hover:text-primary flex items-center select-none">
                <span>What We Offer</span>
                <ChevronDown
                  className={`size-5 ml-3 transition-transform duration-200 ${offerOpen ? "rotate-180" : ""}`}
                  strokeWidth={2.5}
                />
              </div>

              {offerOpen && (
                <div className="absolute top-full mt-4 left-0 w-44 bg-black rounded-lg shadow-xl py-4 z-50">
                  <ul className="flex flex-col text-[15px] space-y-6 font-light px-8 py-4 w-fit">
                    {[
                      "Invest",
                      "Crypto",
                      "Retirement",
                      "Options",
                      "Futures",
                      "Trading",
                      "Banking",
                      "Credit Card",
                    ].map((item) => (
                      <li
                        key={item}
                        className=" hover:text-primary w-fit cursor-pointer transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {["Strategies", "Gold", "Legend", "Learn", "Support"].map(item => (
              <span key={item} className="cursor-pointer text-base font-light ml-9  hover:text-primary">
                {item}
              </span>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8">
          <div
            ref={globeRef}
            className="relative hidden sm:flex items-center gap-1 cursor-pointer text-sm"
            onClick={() => setGlobeOpen(prev => !prev)}
          >
            <div className="flex items-center gap-1 hover:text-primary">
              <Globe size={16} strokeWidth={1.5} />
              <span>US</span>
              <ChevronDown
                className={`size-5 transition-transform duration-200 ${globeOpen ? "rotate-180" : ""}`}
                strokeWidth={2.5}
              />
            </div>

            {globeOpen && (
              <div className="absolute top-full left-0 mt-3 w-32 bg-black rounded-lg shadow-xl py-2 z-50 select-none text-white">
                <ul className="flex flex-col text-sm px-4 py-2 space-y-4">
                  <li className="hover:text-primary cursor-pointer">UK</li>
                  <li className="hover:text-primary cursor-pointer">EU</li>
                </ul>
              </div>
            )}
          </div>


          <div className="hidden xl:flex gap-2">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div>

          <div className="xl:hidden">
            <Button>Sign up</Button>
          </div>

          <div
            className="xl:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8 cursor-pointer z-[99999]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <div
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
            />
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-[9998] transition-all duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col space-y-6 px-6 pt-10 text-xl font-light">
          {navItems.map((item) => (
            <span key={item} className="cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
