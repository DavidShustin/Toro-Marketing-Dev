import React from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Link, NavLink, useLocation } from "react-router-dom";
import bgImage from "@/assets/togo.png";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const { pathname } = useLocation();

  // Treat both "/" and "/marketing" as the Marketing (home) page for active styling
  const marketingActive = pathname === "/" || pathname === "/marketing";

  const linkBase = "transition-colors";
  const active = "text-toro-gold font-semibold";
  const inactive = "text-toro-grey hover:text-toro-gold";

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 bg-toro-light/90 backdrop-blur-md border-b border-toro-grey/20 text-toro-dark",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo → Home (Marketing) */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={bgImage} alt="Toro Marketing Logo" className="w-14 h-14 object-contain" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-toro-gold leading-tight">TORO</span>
              <span className="text-sm font-semibold text-toro-dark">MARKETING</span>
            </div>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Marketing = Home (highlight for "/" AND "/marketing") */}
            <NavLink
              to="/"
              end
              aria-current={marketingActive ? "page" : undefined}
              className={clsx(linkBase, marketingActive ? active : inactive)}
            >
              Marketing
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) => clsx(linkBase, isActive ? active : inactive)}
            >
              Pricing
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => clsx(linkBase, isActive ? active : inactive)}
            >
              About Us
            </NavLink>
          </div>

          {/* Contact button → /contact page */}
          <Button asChild variant="gold" className="text-toro-dark font-semibold px-8 py-3">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
