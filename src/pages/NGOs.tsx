
import React, { useState } from "react";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NGOCard from "@/components/NGOCard";
import { CustomBadge } from "@/components/CustomBadge";
import { CustomButton } from "@/components/CustomButton";

// Mock data for NGOs
const allNGOs = [
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
  {
    id: "4",
    name: "Food Security Alliance",
    description: "Fighting hunger and promoting sustainable agriculture to ensure everyone has access to nutritious food.",
    imageSrc: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    categories: ["Food", "Sustainability"],
    totalDonors: 832,
    upcomingEvents: 4,
  },
  {
    id: "5",
    name: "Habitat Builders",
    description: "Creating safe, affordable housing for families in need through volunteer-driven construction projects.",
    imageSrc: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
    categories: ["Housing", "Community"],
    totalDonors: 1104,
    upcomingEvents: 6,
  },
  {
    id: "6",
    name: "Digital Inclusion Project",
    description: "Bridging the digital divide by providing technology access and education to underserved communities.",
    imageSrc: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop",
    categories: ["Technology", "Education"],
    totalDonors: 756,
    upcomingEvents: 3,
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
  "Children",
  "Conservation",
  "Sustainability",
];

const NGOs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState("default");

  // Filter and sort NGOs
  const filteredNGOs = allNGOs.filter((ngo) => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          ngo.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || 
                            ngo.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const sortedNGOs = [...filteredNGOs].sort((a, b) => {
    if (sortOrder === "name-asc") return a.name.localeCompare(b.name);
    if (sortOrder === "name-desc") return b.name.localeCompare(a.name);
    if (sortOrder === "donors-high") return b.totalDonors - a.totalDonors;
    if (sortOrder === "donors-low") return a.totalDonors - b.totalDonors;
    if (sortOrder === "events-high") return b.upcomingEvents - a.upcomingEvents;
    if (sortOrder === "events-low") return a.upcomingEvents - b.upcomingEvents;
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <CustomBadge variant="primary" className="mb-6">
              Discover & Support
            </CustomBadge>
            <h1 className="hero-text text-4xl md:text-5xl mb-6">
              Explore Impactful NGOs
            </h1>
            <p className="text-muted-foreground text-lg mb-10">
              Browse through our curated list of verified organizations making a difference 
              in various sectors and find causes that resonate with you.
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
                placeholder="Search NGOs..."
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
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="donors-high">Most Donors</option>
                  <option value="donors-low">Fewest Donors</option>
                  <option value="events-high">Most Events</option>
                  <option value="events-low">Fewest Events</option>
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

      {/* NGO Listing Section */}
      <section className="py-16">
        <div className="container-custom">
          {sortedNGOs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedNGOs.map((ngo) => (
                  <div key={ngo.id} className="animate-fade-in">
                    <NGOCard {...ngo} />
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
              <h3 className="text-xl font-medium mb-2">No NGOs Found</h3>
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

export default NGOs;
