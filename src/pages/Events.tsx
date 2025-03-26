
import React, { useState } from "react";
import { Search, Filter, ArrowUpDown, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomBadge } from "@/components/CustomBadge";
import { CustomButton } from "@/components/CustomButton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

// Mock data for events
const allEvents = [
  {
    id: "1",
    title: "Beach Cleanup Drive",
    description: "Join us for a community beach cleanup to remove plastic waste and debris from our local shoreline.",
    imageSrc: "https://images.unsplash.com/photo-1574014629592-2f6d7586e68e?q=80&w=1970&auto=format&fit=crop",
    date: "2023-07-15",
    location: "Marina Beach, Chennai",
    ngoName: "Clean Ocean Foundation",
    category: "Environment",
    registeredVolunteers: 45,
    maxVolunteers: 100,
  },
  {
    id: "2",
    title: "Literacy Workshop",
    description: "A workshop aimed at teaching basic literacy skills to underprivileged children in rural areas.",
    imageSrc: "https://images.unsplash.com/photo-1544749458-95217fc0dacf?q=80&w=1974&auto=format&fit=crop",
    date: "2023-07-22",
    location: "Community Center, Bangalore",
    ngoName: "Education For All",
    category: "Education",
    registeredVolunteers: 28,
    maxVolunteers: 50,
  },
  {
    id: "3",
    title: "Health Camp",
    description: "Free health checkups and consultations for residents of underserved communities.",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    date: "2023-07-30",
    location: "Public Park, Delhi",
    ngoName: "Global Health Initiative",
    category: "Healthcare",
    registeredVolunteers: 32,
    maxVolunteers: 40,
  },
  {
    id: "4",
    title: "Food Distribution Drive",
    description: "Help distribute nutritious meals to homeless and vulnerable populations in the city.",
    imageSrc: "https://images.unsplash.com/photo-1566454544259-f4b94c3d751c?q=80&w=2000&auto=format&fit=crop",
    date: "2023-08-05",
    location: "Central Market, Mumbai",
    ngoName: "Food Security Alliance",
    category: "Food",
    registeredVolunteers: 55,
    maxVolunteers: 80,
  },
  {
    id: "5",
    title: "Home Building Project",
    description: "Volunteer to help build affordable housing for families in need through community-led construction.",
    imageSrc: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=1972&auto=format&fit=crop",
    date: "2023-08-12",
    location: "Suburban Area, Hyderabad",
    ngoName: "Habitat Builders",
    category: "Housing",
    registeredVolunteers: 62,
    maxVolunteers: 75,
  },
  {
    id: "6",
    title: "Digital Literacy Camp",
    description: "Teaching basic computer skills to senior citizens and those with limited access to technology.",
    imageSrc: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop",
    date: "2023-08-25",
    location: "Community Library, Pune",
    ngoName: "Digital Inclusion Project",
    category: "Technology",
    registeredVolunteers: 18,
    maxVolunteers: 30,
  },
];

const categories = [
  "All Categories",
  "Environment",
  "Education",
  "Healthcare",
  "Food",
  "Housing",
  "Technology",
  "Community",
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState("default");
  const { user, profile } = useAuth();
  const { toast } = useToast();

  // Filter and sort events
  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.ngoName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || 
                            event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortOrder === "date-asc") return new Date(a.date).getTime() - new Date(b.date).getTime();
    if (sortOrder === "date-desc") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortOrder === "volunteers-high") return b.registeredVolunteers - a.registeredVolunteers;
    if (sortOrder === "volunteers-low") return a.registeredVolunteers - b.registeredVolunteers;
    return 0;
  });

  const handleVolunteerClick = (eventId: string, eventTitle: string) => {
    // This would be replaced with actual API call to register volunteer
    console.log(`Registering as volunteer for event ${eventId}`);
    toast({
      title: "Registration Successful!",
      description: `You have successfully registered for ${eventTitle}`,
    });
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <CustomBadge variant="primary" className="mb-6">
              Make a Difference
            </CustomBadge>
            <h1 className="hero-text text-4xl md:text-5xl mb-6">
              Upcoming Volunteer Events
            </h1>
            <p className="text-muted-foreground text-lg mb-10">
              Browse through events from various NGOs and find opportunities to contribute 
              your time and skills to causes that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-y">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-custom w-full pl-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Category filter */}
              <div className="relative w-full sm:w-auto">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-custom w-full sm:w-auto appearance-none pl-10 pr-10"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Sort order */}
              <div className="relative w-full sm:w-auto">
                <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="input-custom w-full sm:w-auto appearance-none pl-10 pr-10"
                >
                  <option value="default">Sort By</option>
                  <option value="date-asc">Date (Earliest First)</option>
                  <option value="date-desc">Date (Latest First)</option>
                  <option value="volunteers-high">Most Volunteers</option>
                  <option value="volunteers-low">Fewest Volunteers</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="h-4 w-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Listing Section */}
      <section className="py-16">
        <div className="container-custom">
          {sortedEvents.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedEvents.map((event) => (
                  <div key={event.id} className="animate-fade-in">
                    <Card className="h-full overflow-hidden flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.imageSrc}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                          <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs text-white">
                            <Calendar className="mr-1 h-3 w-3" />
                            {formatDate(event.date)}
                          </span>
                        </div>
                      </div>
                      <CardContent className="flex-1 p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {event.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {event.ngoName}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Location:</strong> {event.location}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <strong>Volunteers:</strong>
                          <div className="relative flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-primary rounded-full"
                              style={{
                                width: `${Math.min(
                                  (event.registeredVolunteers / event.maxVolunteers) * 100,
                                  100
                                )}%`,
                              }}
                            />
                          </div>
                          <span>
                            {event.registeredVolunteers}/{event.maxVolunteers}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-5 pt-0 flex gap-2">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <CustomButton variant="primary" size="sm" className="flex-1">
                              Volunteer
                            </CustomButton>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Become a volunteer?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to register as a volunteer for "{event.title}"? 
                                By confirming, you're committing to attend this event.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleVolunteerClick(event.id, event.title)}
                              >
                                Yes, I want to volunteer
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <CustomButton variant="outline" size="sm" className="flex-1">
                          Learn More
                        </CustomButton>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <CustomButton variant="outline" size="sm" disabled>
                    Previous
                  </CustomButton>
                  <CustomButton variant="primary" size="sm">
                    1
                  </CustomButton>
                  <CustomButton variant="outline" size="sm">
                    2
                  </CustomButton>
                  <CustomButton variant="outline" size="sm">
                    3
                  </CustomButton>
                  <CustomButton variant="outline" size="sm">
                    Next
                  </CustomButton>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No Events Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <CustomButton 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                  setSortOrder("default");
                }}
              >
                Reset Filters
              </CustomButton>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
