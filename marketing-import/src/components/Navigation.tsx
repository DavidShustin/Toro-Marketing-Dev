import React from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import bgImage from "@/assets/togo.png";


interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const location = useLocation();
  
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 bg-toro-light/90 backdrop-blur-md border-b border-toro-grey/20",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src={bgImage}
              alt="Toro Marketing Logo" 
              className="w-14 h-14 object-contain"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-toro-gold leading-tight">
                TORO
              </span>
              <span className="text-sm font-semibold text-toro-dark">
                MARKETING
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/marketing" 
              className={clsx(
                "transition-colors",
                location.pathname === "/marketing"
                  ? "text-toro-gold font-semibold"
                  : "text-toro-grey hover:text-toro-gold"
              )}
            >
              Marketing
            </Link>
            <Link 
              to="/pricing" 
              className={clsx(
                "transition-colors",
                location.pathname === "/pricing"
                  ? "text-toro-gold font-semibold"
                  : "text-toro-grey hover:text-toro-gold"
              )}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className={clsx(
                "transition-colors",
                location.pathname === "/about"
                  ? "text-toro-gold font-semibold"
                  : "text-toro-grey hover:text-toro-gold"
              )}
            >
              About Us
            </Link>
          </div>
          
          <Button 
            onClick={scrollToFooter}
            className="btn-gold text-toro-dark font-semibold"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;