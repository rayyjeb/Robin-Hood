import { ChevronDown, Globe } from "lucide-react";
import Button from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-[9999] bg-black text-white px-9 h-16 flex justify-between items-center border-b border-gray-500">
      {/* Left side */}
      <div className="flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img src="/logo.png" alt="Robinhood" className="h-6" />
          <span className="text-2xl font-regular">Robinhood</span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center ml-9 text-white text-sm">
          <div className="flex items-center ml-9 text-base font-light cursor-pointer">
            <span>What We Offer</span>
            <ChevronDown className="size-5 ml-3" strokeWidth={2.5} />
          </div>
          <span className="cursor-pointer text-base font-light ml-9">Strategies</span>
          <span className="cursor-pointern text-base font-light ml-9">Gold</span>
          <span className="cursor-pointer text-base font-light ml-9">Legend</span>
          <span className="cursor-pointer text-base font-light ml-9">Learn</span>
          <span className="cursor-pointer text-base font-light ml-9">Support</span>
        </nav>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Language Selector */}
        <div className="flex items-center gap-1 cursor-pointer ml-9 text-white text-sm">
          <Globe size={16} strokeWidth={1.5} />
          <span>US</span>
          <ChevronDown className="size-5" strokeWidth={2.5} />
        </div>
        <div className="gap-2 flex">
          <Button variant="outline">
            Log in
          </Button>
          <Button>
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
