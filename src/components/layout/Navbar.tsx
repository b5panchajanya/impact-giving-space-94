
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Heart, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "NGOs", path: "/ngos" },
    { name: "Donate", path: "/donate" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrollPosition > 50 || isOpen
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display font-bold tracking-tighter text-primary"
          >
            <span className="flex items-center gap-2">
              <Heart size={24} className="stroke-primary fill-primary/20" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                ImpactGive
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary story-link",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link to="/login" className="btn-outline py-1.5 px-3 text-sm flex items-center gap-2">
                <LogIn size={16} />
                Log In
              </Link>
              <Link to="/dashboard" className="btn-primary py-1.5 px-3 text-sm flex items-center gap-2">
                <User size={16} />
                Dashboard
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-base font-medium py-2 transition-colors",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/80"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Link to="/login" className="btn-outline py-2 px-3 text-center text-sm">
                Log In
              </Link>
              <Link to="/dashboard" className="btn-primary py-2 px-3 text-center text-sm">
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
