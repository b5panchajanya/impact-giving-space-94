
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CalendarCheck, 
  Users, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart, 
  Share2, 
  ArrowLeft, 
  Info,
  X,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/CustomButton";
import { CustomBadge } from "@/components/CustomBadge";
import { 
  CustomCard, 
  CustomCardHeader, 
  CustomCardTitle, 
  CustomCardDescription,
  CustomCardContent,
  CustomCardFooter
} from "@/components/CustomCard";
import DonationForm from "@/components/DonationForm";

// Mock NGO data
const ngoData = {
  id: "1",
  name: "Clean Ocean Foundation",
  description: "Working to protect marine ecosystems and reduce ocean pollution through community-driven initiatives and advocacy across coastal regions worldwide.",
  longDescription: "The Clean Ocean Foundation is dedicated to preserving our oceans and marine life through a combination of direct action, education, and policy advocacy. Founded in 2005 by a group of passionate marine biologists and environmental activists, we have grown into a leading organization in the fight against ocean pollution, plastic waste, and habitat destruction.\n\nOur initiatives include beach cleanup operations, marine ecosystem restoration projects, educational programs for schools and communities, and lobbying efforts to strengthen environmental protection laws. We work closely with local communities, businesses, and governments to create sustainable solutions that protect our oceans while supporting the livelihoods of those who depend on them.",
  mission: "To protect and restore the health of the world's oceans through direct action, education, and advocacy.",
  vision: "A world where oceans are clean, healthy, and teeming with diverse marine life for generations to come.",
  imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  logoSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  categories: ["Environment", "Conservation", "Education"],
  location: "Global, headquarters in San Diego, CA",
  founded: "2005",
  totalDonors: 1243,
  upcomingEvents: 3,
  website: "https://www.cleanoceanfoundation.org",
  contactEmail: "info@cleanoceanfoundation.org",
  contactPhone: "+1 (800) 555-OCEAN",
  socialMedia: {
    twitter: "https://twitter.com/cleanoceanfdn",
    facebook: "https://facebook.com/cleanoceanfoundation",
    instagram: "https://instagram.com/cleanoceanfdn"
  },
  impactStats: [
    { label: "Ocean Cleanup Operations", value: "500+" },
    { label: "Marine Animals Saved", value: "10,000+" },
    { label: "Volunteers Engaged", value: "25,000+" },
    { label: "Educational Programs", value: "750+" }
  ],
  ongoingProjects: [
    {
      id: "p1",
      title: "Pacific Garbage Patch Cleanup",
      description: "A multi-year initiative to remove plastic waste from the Great Pacific Garbage Patch using innovative collection technologies.",
      status: "Active",
      progress: 65,
      fundingGoal: 500000,
      fundingReceived: 325000,
      impactDetails: "Removed over 200 tons of plastic waste from the ocean, preventing harm to thousands of marine animals.",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "p2",
      title: "Coral Reef Restoration",
      description: "Restoring damaged coral reefs through cultivation and transplantation of coral fragments, focusing on areas affected by bleaching events.",
      status: "Active",
      progress: 40,
      fundingGoal: 300000,
      fundingReceived: 120000,
      impactDetails: "Successfully transplanted over 5,000 coral fragments, with a 75% survival rate, revitalizing reef ecosystems.",
      image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "p3",
      title: "Coastal Community Education",
      description: "Educational programs for coastal communities on sustainable fishing practices, waste management, and conservation.",
      status: "Active",
      progress: 80,
      fundingGoal: 150000,
      fundingReceived: 120000,
      impactDetails: "Trained over 10,000 community members, resulting in a 40% reduction in local marine pollution.",
      image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2071&auto=format&fit=crop"
    }
  ],
  pastProjects: [
    {
      id: "pp1",
      title: "Mediterranean Plastic Survey",
      description: "Comprehensive study of plastic pollution levels across the Mediterranean Sea, identifying major sources and hotspots.",
      completionDate: "2022",
      outcomes: "Published findings in leading environmental journals, informing policy decisions in 5 Mediterranean countries.",
      image: "https://images.unsplash.com/photo-1596753316268-243a7f86da95?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "pp2",
      title: "Seabird Rehabilitation Center",
      description: "Establishment of a rehabilitation center for seabirds affected by oil spills and marine pollution.",
      completionDate: "2021",
      outcomes: "Treated and released over 500 seabirds, with an 85% survival rate.",
      image: "https://images.unsplash.com/photo-1632935190508-c95c7b13ba86?q=80&w=1973&auto=format&fit=crop"
    }
  ]
};

const NGODetail = () => {
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "impact">("about");
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "primary";
      case "Completed":
        return "secondary";
      case "On Hold":
        return "outline";
      default:
        return "primary";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="h-64 md:h-80 bg-gray-200 relative overflow-hidden">
          <img 
            src={ngoData.imageSrc} 
            alt={ngoData.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        
        <div className="container-custom relative -mt-24 mb-10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* NGO Logo */}
            <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-white bg-white shadow-md">
              <img 
                src={ngoData.logoSrc} 
                alt={`${ngoData.name} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* NGO Info */}
            <div className="flex-1 pt-4 md:pt-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold text-white md:text-gray-900 dark:text-white">{ngoData.name}</h1>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {ngoData.categories.map((category, index) => (
                      <CustomBadge key={index} variant="primary">{category}</CustomBadge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <CustomButton
                    variant="primary"
                    leftIcon={<Heart size={16} />}
                    onClick={() => setIsDonateModalOpen(true)}
                  >
                    Donate Now
                  </CustomButton>
                  <CustomButton
                    variant="outline"
                    leftIcon={<Share2 size={16} />}
                    onClick={() => console.log("Share")}
                  >
                    Share
                  </CustomButton>
                  <Link to="/ngos">
                    <CustomButton
                      variant="secondary"
                      leftIcon={<ArrowLeft size={16} />}
                    >
                      Back
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="mb-6 border-b">
                <div className="flex overflow-x-auto">
                  <button
                    className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === "about" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === "projects" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
                    onClick={() => setActiveTab("projects")}
                  >
                    Projects
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${activeTab === "impact" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
                    onClick={() => setActiveTab("impact")}
                  >
                    Impact
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="mb-8">
                {/* About Tab */}
                {activeTab === "about" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">About {ngoData.name}</h2>
                    <p className="text-muted-foreground whitespace-pre-line">{ngoData.longDescription}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Our Mission</h3>
                        <p className="text-muted-foreground">{ngoData.mission}</p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Our Vision</h3>
                        <p className="text-muted-foreground">{ngoData.vision}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Projects Tab */}
                {activeTab === "projects" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Ongoing Projects</h2>
                    <div className="space-y-6">
                      {ngoData.ongoingProjects.map((project) => (
                        <CustomCard key={project.id} className="overflow-hidden">
                          <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="h-48 md:h-full">
                              <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:col-span-2 p-6">
                              <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <CustomBadge variant={getStatusClass(project.status)}>
                                  {project.status}
                                </CustomBadge>
                              </div>
                              <p className="text-muted-foreground mt-2">{project.description}</p>
                              
                              <div className="mt-4">
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Progress</span>
                                  <span>{project.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                  <div 
                                    className="bg-primary h-2.5 rounded-full" 
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                              
                              <div className="mt-4 flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                  <strong>${(project.fundingReceived / 1000).toFixed(1)}K</strong> raised of ${(project.fundingGoal / 1000).toFixed(1)}K goal
                                </div>
                                <CustomButton
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setIsDonateModalOpen(true)}
                                >
                                  Support
                                </CustomButton>
                              </div>
                            </div>
                          </div>
                        </CustomCard>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-semibold mt-10">Past Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {ngoData.pastProjects.map((project) => (
                        <CustomCard key={project.id} className="overflow-hidden">
                          <div className="h-40">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CustomCardContent>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-semibold">{project.title}</h3>
                              <span className="text-sm text-muted-foreground">{project.completionDate}</span>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="mt-4">
                              <h4 className="text-sm font-medium">Outcomes:</h4>
                              <p className="text-sm text-muted-foreground mt-1">{project.outcomes}</p>
                            </div>
                          </CustomCardContent>
                        </CustomCard>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Impact Tab */}
                {activeTab === "impact" && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Our Impact</h2>
                    <p className="text-muted-foreground">
                      At {ngoData.name}, we measure our success through the tangible impact we make on ocean 
                      ecosystems and communities worldwide. Here's a snapshot of what we've achieved with the 
                      support of our donors and volunteers.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {ngoData.impactStats.map((stat, index) => (
                        <div 
                          key={index} 
                          className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-subtle hover:shadow-elevation transition-all duration-300"
                        >
                          <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                          <p className="text-muted-foreground text-sm">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-10">
                      <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
                      <div className="space-y-6">
                        <CustomCard hover>
                          <CustomCardContent>
                            <h4 className="text-lg font-semibold">Caribbean Coral Restoration</h4>
                            <p className="text-muted-foreground mt-2">
                              Our three-year project in the Caribbean has successfully restored over 20 acres of coral reef,
                              creating new habitats for thousands of marine species and improving coastal protection for 
                              local communities.
                            </p>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <p className="text-2xl font-bold text-primary">20+ acres</p>
                                <p className="text-sm text-muted-foreground">Reef Restored</p>
                              </div>
                              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <p className="text-2xl font-bold text-primary">15,000+</p>
                                <p className="text-sm text-muted-foreground">Marine Species Supported</p>
                              </div>
                            </div>
                          </CustomCardContent>
                        </CustomCard>
                        
                        <CustomCard hover>
                          <CustomCardContent>
                            <h4 className="text-lg font-semibold">Beach Cleanup Initiative</h4>
                            <p className="text-muted-foreground mt-2">
                              Our worldwide beach cleanup program has mobilized over 100,000 volunteers across 
                              50 countries, removing more than 500 tons of plastic and debris from coastlines.
                            </p>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <p className="text-2xl font-bold text-primary">500+ tons</p>
                                <p className="text-sm text-muted-foreground">Waste Removed</p>
                              </div>
                              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <p className="text-2xl font-bold text-primary">1,000+</p>
                                <p className="text-sm text-muted-foreground">Beaches Cleaned</p>
                              </div>
                            </div>
                          </CustomCardContent>
                        </CustomCard>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <CustomCard glass>
                <CustomCardHeader>
                  <CustomCardTitle>Quick Information</CustomCardTitle>
                </CustomCardHeader>
                <CustomCardContent className="space-y-4">
                  <div className="flex items-center">
                    <MapPin size={18} className="text-primary mr-2" />
                    <span>{ngoData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="text-primary mr-2" />
                    <span>Founded in {ngoData.founded}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={18} className="text-primary mr-2" />
                    <span>{ngoData.totalDonors} donors supporting</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarCheck size={18} className="text-primary mr-2" />
                    <span>{ngoData.upcomingEvents} upcoming events</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="text-primary mr-2" />
                    <span>25,000+ volunteers engaged</span>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-semibold mb-2">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <p>Email: {ngoData.contactEmail}</p>
                      <p>Phone: {ngoData.contactPhone}</p>
                      <a 
                        href={ngoData.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        Visit Website <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </CustomCardContent>
                <CustomCardFooter>
                  <CustomButton 
                    variant="primary"
                    fullWidth
                    onClick={() => setIsDonateModalOpen(true)}
                  >
                    Support Our Mission
                  </CustomButton>
                </CustomCardFooter>
              </CustomCard>
              
              <CustomCard glass className="mt-6">
                <CustomCardHeader>
                  <CustomCardTitle>Get Involved</CustomCardTitle>
                </CustomCardHeader>
                <CustomCardContent className="space-y-3">
                  <Link to="/volunteer" className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition">
                    <div className="flex items-center">
                      <Users size={18} className="text-primary mr-2" />
                      <span>Become a Volunteer</span>
                    </div>
                    <ChevronRight size={16} />
                  </Link>
                  <Link to="/events" className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition">
                    <div className="flex items-center">
                      <CalendarCheck size={18} className="text-primary mr-2" />
                      <span>Join an Event</span>
                    </div>
                    <ChevronRight size={16} />
                  </Link>
                  <button className="w-full flex items-center justify-between p-3 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition">
                    <div className="flex items-center">
                      <Share2 size={18} className="text-primary mr-2" />
                      <span>Spread the Word</span>
                    </div>
                    <ChevronRight size={16} />
                  </button>
                </CustomCardContent>
              </CustomCard>
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Modal */}
      {isDonateModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-lg w-full relative">
            <button 
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setIsDonateModalOpen(false)}
            >
              <X size={20} />
            </button>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-1">Donate to {ngoData.name}</h2>
              <p className="text-muted-foreground mb-6">Your contribution helps us create a cleaner ocean for all.</p>
              
              <DonationForm ngoId={ngoData.id} ngoName={ngoData.name} />
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default NGODetail;
