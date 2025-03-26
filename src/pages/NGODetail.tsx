
// Import necessary components
import React from "react";
import { useParams } from "react-router-dom";
import { 
  Calendar, Globe, Mail, Phone, MapPin, Heart, Share2, Users, 
  Info, Clock, DollarSign, Award, ArrowRight
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import DonationForm from "@/components/DonationForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

// Mock data for NGO details
const ngoData = {
  id: "1",
  name: "Global Health Initiative",
  tagline: "Healthcare for All",
  description: "A non-profit organization dedicated to providing quality healthcare services to underprivileged communities around the world. We focus on preventive care, education, and sustainable health solutions.",
  logoUrl: "https://placehold.co/200x200?text=GHI",
  coverImage: "https://images.unsplash.com/photo-1469571486292-b53601022cba?q=80&w=2070&auto=format&fit=crop",
  website: "www.globalhealthinitiative.org",
  email: "info@globalhealthinitiative.org",
  phone: "+1 (555) 123-4567",
  location: "New York, USA",
  yearFounded: 2005,
  totalVolunteers: 1250,
  totalEvents: 75,
  totalDonations: "$2.3M",
  impactMetrics: [
    {
      title: "Lives Impacted",
      value: "35,000+"
    },
    {
      title: "Health Camps",
      value: "230"
    },
    {
      title: "Countries",
      value: "15"
    }
  ],
  upcomingEvents: [
    {
      id: "e1",
      title: "Health Camp in Delhi",
      date: "2023-08-15",
      location: "Delhi, India",
      description: "Free health checkups and distribution of medicines.",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "e2",
      title: "Medical Workshop",
      date: "2023-09-05",
      location: "Chicago, USA",
      description: "Training community health workers on basic healthcare.",
      imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  pastEvents: [
    {
      id: "e3",
      title: "Vaccination Drive",
      date: "2023-06-10",
      location: "Nairobi, Kenya",
      description: "Vaccinated over 5,000 children against polio.",
      imageUrl: "https://images.unsplash.com/photo-1613843596852-15cec5576d55?q=80&w=2067&auto=format&fit=crop"
    },
    {
      id: "e4",
      title: "Awareness Campaign",
      date: "2023-05-22",
      location: "Mumbai, India",
      description: "Raised awareness about COVID-19 preventive measures.",
      imageUrl: "https://images.unsplash.com/photo-1603202662744-5e6c8c3e9414?q=80&w=2069&auto=format&fit=crop"
    }
  ],
  testimonials: [
    {
      id: "t1",
      quote: "The work that Global Health Initiative does is truly remarkable. They're changing lives every day.",
      author: "Dr. Jane Smith",
      role: "Public Health Specialist"
    },
    {
      id: "t2",
      quote: "I've volunteered with GHI for 3 years now, and I've seen firsthand the impact they make in communities.",
      author: "Mark Johnson",
      role: "Volunteer"
    }
  ]
};

const NGODetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Simplified example - in a real app, fetch NGO data based on ID
  const ngo = ngoData;

  const handleVolunteerRegistration = () => {
    // In a real app, this would register the user as a volunteer
    toast({
      title: "Registration Successful!",
      description: "You have been registered as a volunteer for Global Health Initiative.",
      duration: 5000,
    });
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 relative mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        <img 
          src={ngo.coverImage} 
          alt={ngo.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-8 pt-16">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-4 border-white bg-white">
              <img 
                src={ngo.logoUrl} 
                alt={`${ngo.name} logo`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{ngo.name}</h1>
              <p className="text-white/80">{ngo.tagline}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="about">
              <TabsList className="mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
                <TabsTrigger value="getInvolved">Get Involved</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold mb-4">About the NGO</h2>
                  <p className="text-muted-foreground">{ngo.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Globe size={18} className="text-primary" />
                      <span className="text-sm">{ngo.website}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail size={18} className="text-primary" />
                      <span className="text-sm">{ngo.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone size={18} className="text-primary" />
                      <span className="text-sm">{ngo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} className="text-primary" />
                      <span className="text-sm">{ngo.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-5 flex flex-col items-center justify-center text-center">
                    <Info className="text-primary mb-2" size={20} />
                    <p className="text-sm text-muted-foreground">Year Founded</p>
                    <p className="text-xl font-semibold">{ngo.yearFounded}</p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-5 flex flex-col items-center justify-center text-center">
                    <Users className="text-primary mb-2" size={20} />
                    <p className="text-sm text-muted-foreground">Total Volunteers</p>
                    <p className="text-xl font-semibold">{ngo.totalVolunteers}</p>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-5 flex flex-col items-center justify-center text-center">
                    <DollarSign className="text-primary mb-2" size={20} />
                    <p className="text-sm text-muted-foreground">Total Donations</p>
                    <p className="text-xl font-semibold">{ngo.totalDonations}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="events" className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold mb-6">Upcoming Events</h2>
                  <div className="space-y-6">
                    {ngo.upcomingEvents.map(event => (
                      <div key={event.id} className="flex flex-col md:flex-row gap-4 border-b pb-6 last:border-0 last:pb-0">
                        <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                          <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium mb-2">{event.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Calendar size={16} />
                            <span className="text-sm">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-3">
                            <MapPin size={16} />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                          <Button size="sm">Register as Volunteer</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold mb-6">Past Events</h2>
                  <div className="space-y-6">
                    {ngo.pastEvents.map(event => (
                      <div key={event.id} className="flex flex-col md:flex-row gap-4 border-b pb-6 last:border-0 last:pb-0">
                        <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
                          <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium mb-2">{event.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Calendar size={16} />
                            <span className="text-sm">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-3">
                            <MapPin size={16} />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                          <Button size="sm" variant="outline">See Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="impact" className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold mb-6">Our Impact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {ngo.impactMetrics.map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
                        <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.title}</p>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-medium mb-4">Testimonials</h3>
                  <div className="space-y-6">
                    {ngo.testimonials.map(testimonial => (
                      <blockquote key={testimonial.id} className="border-l-4 border-primary pl-4 py-2">
                        <p className="text-muted-foreground italic mb-2">"{testimonial.quote}"</p>
                        <footer className="text-sm">
                          <strong>{testimonial.author}</strong>, {testimonial.role}
                        </footer>
                      </blockquote>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="getInvolved" className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-semibold mb-4">Get Involved</h2>
                  <p className="text-muted-foreground mb-6">
                    There are many ways you can contribute to {ngo.name} and help us make a difference.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Heart className="text-red-500" size={20} />
                        <h3 className="text-lg font-medium">Donate</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Your donations help us fund our programs and reach more people in need.
                      </p>
                      <Button>Make a Donation</Button>
                    </div>
                    
                    <div className="border rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="text-blue-500" size={20} />
                        <h3 className="text-lg font-medium">Volunteer</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Join our volunteer program and help us with our events and initiatives.
                      </p>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button>Become a Volunteer</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure you want to become a volunteer?</AlertDialogTitle>
                            <AlertDialogDescription>
                              By becoming a volunteer, you'll be part of our team working to make a difference. You'll receive notifications about upcoming events and opportunities.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleVolunteerRegistration}>
                              Yes
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Share2 className="text-green-500" size={20} />
                      <h3 className="text-lg font-medium">Spread the Word</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Help us reach more people by sharing our mission with your network.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm">
                        <Share2 size={14} className="mr-1" /> Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail size={14} className="mr-1" /> Email
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Donation Form */}
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border overflow-hidden sticky top-24">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="text-lg font-medium">Make a Donation</h3>
                <p className="text-sm text-primary-foreground/80">Your contribution matters</p>
              </div>
              <div className="p-5">
                <DonationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NGODetail;
