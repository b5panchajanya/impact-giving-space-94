
import React from "react";
import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-display font-bold tracking-tighter text-primary flex items-center gap-2"
            >
              <Heart size={24} className="stroke-primary fill-primary/20" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                ImpactGive
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting compassionate donors with impactful NGOs to create
              meaningful change together.
            </p>
            <div className="flex space-x-4 text-foreground/70">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ngos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  NGOs
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="shrink-0 text-primary mt-0.5" />
                <span>123 Impact Street, Global City</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="shrink-0 text-primary" />
                <a href="mailto:contact@impactgive.org" className="hover:text-primary">
                  contact@impactgive.org
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="shrink-0 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ImpactGive. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Made with <Heart size={14} className="inline fill-red-500 stroke-red-500" /> for social good
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
