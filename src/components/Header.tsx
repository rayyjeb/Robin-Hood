import { ChevronDown, Globe } from "lucide-react";
import Button from "./ui/button";
import { useState } from "react";
import logo from '/logo.svg'
const navItems = [
  "Invest", "Crypto", "Retirement", "Options", "Futures", "Trading", "Banking",
  "Credit Card", "Strategies", "Gold", "Legend", "Learn", "Support",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[9999] bg-black text-white px-6 sm:px-9 h-16 flex justify-between items-center border-b border-gray-500">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Robinhood" className="invert" />
          <nav className="ml-5 hidden xl:flex items-center text-sm">
            <div className="flex items-center ml-9 text-base font-light cursor-pointer">
              <span>What We Offer</span>
              <ChevronDown className="size-5 ml-3" strokeWidth={2.5} />
            </div>
            <span className="cursor-pointer text-base font-light ml-9">Strategies</span>
            <span className="cursor-pointer text-base font-light ml-9">Gold</span>
            <span className="cursor-pointer text-base font-light ml-9">Legend</span>
            <span className="cursor-pointer text-base font-light ml-9">Learn</span>
            <span className="cursor-pointer text-base font-light ml-9">Support</span>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}

          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-1 cursor-pointer text-sm">
            <Globe size={16} strokeWidth={1.5} />
            <span>US</span>
            <ChevronDown className="size-5" strokeWidth={2.5} />
          </div>

          {/* Buttons */}
          <div className="hidden xl:flex gap-2">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div>

          {/* Mobile Sign Up Button */}
          <div className="xl:hidden">
            <Button>Sign up</Button>
          </div>

          {/* Hamburger Icon */}
          <div
            className="xl:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8 cursor-pointer z-[99999]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
            />
            <div
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
            />
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
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
