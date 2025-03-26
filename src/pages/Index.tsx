
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, ArrowRight, PieChart, Award, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/CustomButton";
import { CustomBadge } from "@/components/CustomBadge";
import NGOCard from "@/components/NGOCard";
import SplineButton from "@/components/SplineButton";
import SplineBackground from "@/components/SplineBackground";

// Mock data for NGOs
const featuredNGOs = [
  {
    id: "1",
    name: "Clean Ocean Foundation",
    description: "Working to protect marine ecosystems and reduce ocean pollution through community-driven initiatives and advocacy.",
    imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    categories: ["Environment", "Conservation"],
    totalDonors: 1243,
    upcomingEvents: 3,
  },
  {
    id: "2",
    name: "Education For All",
    description: "Providing educational opportunities for underprivileged children across developing nations to build a better future.",
    imageSrc: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1970&auto=format&fit=crop",
    categories: ["Education", "Children"],
    totalDonors: 978,
    upcomingEvents: 5,
  },
  {
    id: "3",
    name: "Global Health Initiative",
    description: "Delivering vital healthcare services to communities in need, focusing on preventative care and medical training.",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    categories: ["Healthcare", "Community"],
    totalDonors: 1567,
    upcomingEvents: 2,
  },
];

// Mock data for impact stats
const impactStats = [
  { label: "NGOs Supported", value: "500+", icon: <Globe className="text-primary" size={24} /> },
  { label: "Total Donors", value: "25K+", icon: <Users className="text-primary" size={24} /> },
  { label: "Projects Funded", value: "1500+", icon: <PieChart className="text-primary" size={24} /> },
  { label: "Impact Badges", value: "10K+", icon: <Award className="text-primary" size={24} /> },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        
        {/* Spline Background */}
        <div className="absolute inset-0 z-0 opacity-70">
          <SplineBackground scene="https://prod.spline.design/QDi9WAXfBoyqHaOK/scene.splinecode" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <CustomBadge variant="primary" className="mb-6 animate-fade-in">
              Making a difference together
            </CustomBadge>
            <h1 className="hero-text text-4xl md:text-6xl mb-6 animate-fade-in [animation-delay:200ms]">
              Connect, Donate, <br />
              <span className="text-primary">Create Impact</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 animate-fade-in [animation-delay:400ms]">
              ImpactGive connects passionate donors with verified NGOs, 
              making it easier than ever to contribute to causes you care about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
              <Link to="/ngos">
                <CustomButton 
                  size="lg"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Explore NGOs
                </CustomButton>
              </Link>
              <Link to="/donate">
                <SplineButton 
                  buttonText="Make a Donation"
                  className="bg-white text-primary border-primary border hover:bg-primary/10 px-4 py-2 text-sm font-medium"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NGOs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="hero-text text-3xl md:text-4xl mb-4">Featured NGOs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover organizations making significant impacts in their communities
              and learn how you can support their missions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNGOs.map((ngo) => (
              <div key={ngo.id} className="animate-slide-in-bottom [animation-delay:var(--delay)]" style={{ "--delay": `${parseInt(ngo.id) * 200}ms` } as React.CSSProperties}>
                <NGOCard {...ngo} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/ngos">
              <CustomButton 
                variant="outline"
                rightIcon={<ArrowRight size={16} />}
              >
                View All NGOs
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="hero-text text-3xl md:text-4xl mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Together we're creating meaningful change across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-subtle hover:shadow-elevation transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="hero-text text-3xl md:text-4xl mb-6">Ready to Make a Difference?</h2>
            <p className="text-white/80 text-lg mb-10">
              Join thousands of donors and volunteers who are creating positive change 
              every day through their contributions and actions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <CustomButton 
                  variant="secondary" 
                  size="lg"
                  className="text-primary hover:bg-white/90"
                >
                  Join as Volunteer
                </CustomButton>
              </Link>
              <Link to="/donate">
                <SplineButton 
                  buttonText="Donate Now"
                  className="bg-transparent text-white border-white border hover:bg-white/10 px-4 py-2 text-sm font-medium"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
