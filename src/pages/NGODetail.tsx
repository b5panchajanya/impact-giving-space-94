
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Heart, Users, DollarSign, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/CustomButton";
import { CustomBadge } from "@/components/CustomBadge";
import DonationForm from "@/components/DonationForm";

// Mock data for NGO details
const ngoData = {
  id: "1",
  name: "Clean Ocean Foundation",
  description: "Working tirelessly to protect marine ecosystems and reduce ocean pollution through community-driven initiatives, education programs, and advocacy for sustainable policies. Our mission is to ensure clean oceans for future generations.",
  longDescription: "The Clean Ocean Foundation is dedicated to the preservation and restoration of our planet's oceans. Founded in 2005 by a group of passionate marine biologists and environmental activists, we have grown into a global organization with projects spanning across 25 countries. Our team works on various fronts including beach clean-ups, marine wildlife conservation, sustainable fishing advocacy, plastic pollution awareness, and educational outreach programs for schools and communities.",
  imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
  logoSrc: "https://images.unsplash.com/photo-1618005198919-177e9dd3b230?q=80&w=1974&auto=format&fit=crop",
  coverSrc: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop",
  categories: ["Environment", "Conservation", "Education"],
  totalDonors: 1243,
  donationsRaised: "$125,478",
  volunteers: 324,
  impactMetrics: [
    { label: "Ocean Area Cleaned", value: "25,000 sq km" },
    { label: "Marine Species Protected", value: "120+" },
    { label: "Plastic Waste Collected", value: "250 tons" },
    { label: "Community Workshops", value: "150+" }
  ],
  upcomingEvents: [
    {
      id: "e1",
      title: "Annual Beach Cleanup",
      date: "2023-07-15",
      location: "Pacific Beach, CA",
      participants: 75
    },
    {
      id: "e2",
      title: "Marine Life Conservation Workshop",
      date: "2023-08-05",
      location: "Oceanside Learning Center",
      participants: 40
    },
    {
      id: "e3",
      title: "Sustainable Fishing Symposium",
      date: "2023-09-10",
      location: "Harbor Conference Center",
      participants: 120
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Coral Reef Restoration",
      status: "In Progress",
      completion: 65,
      description: "Restoring damaged coral reefs through cultivation and transplantation of healthy coral fragments.",
      impact: "Restored over 5,000 sq meters of coral reef habitat, supporting hundreds of marine species."
    },
    {
      id: "p2",
      title: "Ocean Plastic Cleanup",
      status: "Ongoing",
      completion: 85,
      description: "Removing plastic waste from ocean surfaces and coastal areas using innovative collection technologies.",
      impact: "Collected over 150 tons of plastic waste, preventing it from harming marine life."
    },
    {
      id: "p3",
      title: "Marine Education Program",
      status: "Completed",
      completion: 100,
      description: "Educating students about marine conservation through interactive workshops and field trips.",
      impact: "Reached over 10,000 students across 50 schools, inspiring the next generation of ocean advocates."
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "Sarah Johnson",
      role: "Volunteer",
      quote: "Volunteering with Clean Ocean Foundation has been incredibly rewarding. I've learned so much about marine conservation while making a tangible difference.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    {
      id: "t2",
      name: "David Chen",
      role: "Donor",
      quote: "I'm proud to support an organization that shows such clear results. Their transparency about how funds are used gives me confidence in my donations.",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ]
};

const NGODetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("about");
  const [showDonationForm, setShowDonationForm] = useState(false);

  if (!ngoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Cover Image */}
      <section className="h-64 md:h-80 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ngoData.coverSrc} 
            alt={`${ngoData.name} cover`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="container-custom h-full relative z-10 flex items-end pb-8">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 md:h-24 md:w-24 bg-white rounded-full overflow-hidden border-4 border-white">
              <img 
                src={ngoData.logoSrc} 
                alt={`${ngoData.name} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{ngoData.name}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {ngoData.categories.map((category, index) => (
                  <CustomBadge key={index} variant="secondary" className="text-xs bg-opacity-80">
                    {category}
                  </CustomBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 flex-grow">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Tabs for different content sections */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
                <TabsList className="mb-6">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="projects">Projects & Impact</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-6">
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {ngoData.longDescription}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {ngoData.impactMetrics.map((metric, index) => (
                      <div key={index} className="bg-primary/5 p-4 rounded-lg text-center">
                        <p className="text-xl md:text-2xl font-bold text-primary">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="projects" className="space-y-8">
                  <h2 className="text-2xl font-bold">Our Projects</h2>
                  {ngoData.projects.map((project) => (
                    <div key={project.id} className="bg-card border rounded-xl p-6 shadow-subtle">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <CustomBadge 
                          variant={
                            project.status === "Completed" ? "success" : 
                            project.status === "In Progress" ? "warning" : "primary"
                          }
                        >
                          {project.status}
                        </CustomBadge>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      {/* Progress bar for project completion */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${project.completion}%` }}
                        ></div>
                      </div>
                      
                      <h4 className="font-semibold mt-4 mb-2">Impact:</h4>
                      <p className="text-muted-foreground">{project.impact}</p>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="events" className="space-y-6">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ngoData.upcomingEvents.map((event) => (
                      <div key={event.id} className="bg-card border rounded-xl p-6 shadow-subtle">
                        <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{event.participants} participants</span>
                        </div>
                        <CustomButton variant="outline" size="sm" className="w-full">
                          Register
                        </CustomButton>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="testimonials" className="space-y-6">
                  <h2 className="text-2xl font-bold">What People Say</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ngoData.testimonials.map((testimonial) => (
                      <div key={testimonial.id} className="bg-card border rounded-xl p-6 shadow-subtle">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                            <img 
                              src={testimonial.imageSrc} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {showDonationForm ? (
                <div className="bg-card border rounded-xl p-6 shadow-subtle">
                  <h3 className="text-xl font-bold mb-4">Make a Donation</h3>
                  <DonationForm onCancel={() => setShowDonationForm(false)} />
                </div>
              ) : (
                <div className="bg-card border rounded-xl p-6 shadow-subtle">
                  <h3 className="text-xl font-bold mb-4">Support Our Cause</h3>
                  <p className="text-muted-foreground mb-6">
                    Your contribution helps us continue our vital work. Choose how you'd like to make an impact:
                  </p>
                  <CustomButton 
                    className="w-full mb-3" 
                    onClick={() => setShowDonationForm(true)}
                    rightIcon={<DollarSign className="h-4 w-4" />}
                  >
                    Make a Donation
                  </CustomButton>
                  <CustomButton 
                    variant="outline" 
                    className="w-full mb-3"
                    rightIcon={<Users className="h-4 w-4" />}
                  >
                    Volunteer With Us
                  </CustomButton>
                  <CustomButton 
                    variant="ghost" 
                    className="w-full"
                    rightIcon={<Heart className="h-4 w-4" />}
                  >
                    Follow Organization
                  </CustomButton>
                </div>
              )}

              {/* Stats Card */}
              <div className="bg-card border rounded-xl p-6 shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Organization Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center">
                      <Users className="h-4 w-4 mr-2" /> Total Volunteers
                    </span>
                    <span className="font-semibold">{ngoData.volunteers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center">
                      <Heart className="h-4 w-4 mr-2" /> Donors
                    </span>
                    <span className="font-semibold">{ngoData.totalDonors}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" /> Funds Raised
                    </span>
                    <span className="font-semibold">{ngoData.donationsRaised}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center">
                      <Award className="h-4 w-4 mr-2" /> Impact Badges
                    </span>
                    <span className="font-semibold">15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NGODetail;
