import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Heart,
  Users,
  Calendar,
  Globe,
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronRight,
  Share2,
  BookmarkPlus,
  Bookmark,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomBadge } from "@/components/CustomBadge";
import { CustomButton } from "@/components/CustomButton";
import DonationForm from "@/components/DonationForm";
import {
  CustomCard,
  CustomCardHeader,
  CustomCardTitle,
  CustomCardDescription,
  CustomCardContent,
} from "@/components/CustomCard";

import { Twitter, Facebook, Instagram } from "lucide-react";

// Mock data for NGO details
const ngoData = {
  "1": {
    id: "1",
    name: "Clean Ocean Foundation",
    description:
      "Working to protect marine ecosystems and reduce ocean pollution through community-driven initiatives and advocacy.",
    longDescription:
      "The Clean Ocean Foundation is dedicated to addressing the critical issues facing our oceans today. Our team of marine biologists, environmental scientists, and passionate volunteers work tirelessly to clean beaches, monitor water quality, advocate for policy changes, and educate communities about sustainable practices. Since our founding in 2008, we have removed over 500 tons of plastic from coastlines, rehabilitated marine habitats, and influenced key legislation to reduce industrial pollution in coastal waters.",
    imageSrc: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2070&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1564156280315-1d42b4651629?q=80&w=1964&auto=format&fit=crop",
    categories: ["Environment", "Conservation", "Marine"],
    location: "San Francisco, CA",
    foundedYear: 2008,
    website: "www.cleanoceanfoundation.org",
    email: "contact@cleanoceanfoundation.org",
    phone: "+1 (123) 456-7890",
    socialMedia: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
    totalDonors: 1243,
    upcomingEvents: 3,
    projects: [
      {
        id: "p1",
        title: "Beach Cleanup Initiative",
        description:
          "Regular beach cleanup events along the West Coast, removing plastic waste and debris to protect marine life.",
        status: "Ongoing",
        progress: 75,
        impact: "250 tons of waste removed from 30 beaches",
      },
      {
        id: "p2",
        title: "Coral Reef Restoration",
        description:
          "Rebuilding damaged coral reefs through innovative coral farming techniques and transplantation.",
        status: "In Progress",
        progress: 45,
        impact: "15 reef sites restored, increasing marine biodiversity by 35%",
      },
      {
        id: "p3",
        title: "Marine Education Program",
        description:
          "Educational workshops for schools and communities about ocean conservation and sustainable practices.",
        status: "Ongoing",
        progress: 90,
        impact: "Reached over 50,000 students across 200 schools",
      },
    ],
    upcomingEvents: [
      {
        id: "e1",
        title: "World Oceans Day Celebration",
        date: "2023-06-08T10:00:00",
        location: "Golden Gate Park, San Francisco",
        description:
          "Join us for a day of activities, workshops, and beach cleanup to celebrate World Oceans Day.",
      },
      {
        id: "e2",
        title: "Marine Conservation Workshop",
        date: "2023-07-15T14:00:00",
        location: "Virtual Event",
        description:
          "Learn about the latest marine conservation techniques and how you can contribute to protecting our oceans.",
      },
      {
        id: "e3",
        title: "Annual Coastal Cleanup",
        date: "2023-08-20T09:00:00",
        location: "Multiple locations along California coast",
        description:
          "Our largest cleanup event of the year, with simultaneous activities at multiple beaches.",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Education For All",
    description:
      "Providing educational opportunities for underprivileged children across developing nations to build a better future.",
    longDescription:
      "Education For All believes that every child deserves access to quality education regardless of their socioeconomic background. We work in underserved communities to establish schools, train teachers, provide learning materials, and create scholarship programs. Our holistic approach focuses not just on academic learning, but also on developing life skills, promoting gender equality in education, and creating sustainable educational institutions that can be locally managed.",
    imageSrc: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1970&auto=format&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1471&auto=format&fit=crop",
    categories: ["Education", "Children", "Development"],
    location: "Global (HQ: New York, NY)",
    foundedYear: 2005,
    website: "www.educationforall.org",
    email: "info@educationforall.org",
    phone: "+1 (234) 567-8901",
    socialMedia: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
    totalDonors: 978,
    upcomingEvents: 5,
    projects: [
      {
        id: "p1",
        title: "School Construction Program",
        description:
          "Building new schools in rural areas where children have limited access to education facilities.",
        status: "Ongoing",
        progress: 60,
        impact: "Built 120 schools serving over 25,000 children",
      },
      {
        id: "p2",
        title: "Teacher Training Initiative",
        description:
          "Comprehensive training programs for local teachers to improve educational quality and teaching methodologies.",
        status: "Ongoing",
        progress: 85,
        impact: "Trained 3,500 teachers who now provide improved education to 100,000+ students",
      },
      {
        id: "p3",
        title: "Digital Learning Project",
        description:
          "Introducing technology-based learning tools in remote schools to bridge the digital divide.",
        status: "In Progress",
        progress: 40,
        impact: "Implemented in 50 schools, benefiting 15,000 students",
      },
    ],
    upcomingEvents: [
      {
        id: "e1",
        title: "Annual Fundraising Gala",
        date: "2023-09-15T18:00:00",
        location: "Plaza Hotel, New York City",
        description:
          "Our flagship fundraising event to support our school construction program in Southeast Asia.",
      },
      {
        id: "e2",
        title: "Teacher Development Conference",
        date: "2023-07-22T09:00:00",
        location: "Virtual Event",
        description:
          "A three-day virtual conference for educators, featuring workshops and sessions on innovative teaching methods.",
      },
      {
        id: "e3",
        title: "Back to School Drive",
        date: "2023-08-12T10:00:00",
        location: "Multiple cities across the US",
        description:
          "Collection of school supplies and learning materials for underprivileged students in our partner schools.",
      },
    ],
  },
  // Add more NGO data here
};

const NGODetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ngo, setNgo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      if (id && ngoData[id as keyof typeof ngoData]) {
        setNgo(ngoData[id as keyof typeof ngoData]);
      }
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/20 rounded-full"></div>
            <div className="mt-4 h-8 w-48 bg-primary/20 rounded"></div>
            <div className="mt-2 h-4 w-64 bg-primary/10 rounded"></div>
            <p className="mt-4 text-muted-foreground">Loading NGO details<span className="loading-dots"></span></p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!ngo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <AlertCircle size={48} className="mx-auto text-destructive mb-4" />
            <h1 className="text-2xl font-bold mb-2">NGO Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The NGO you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/ngos">
              <CustomButton>Return to NGO Listings</CustomButton>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Format date for events
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatEventTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Cover Image */}
      <section className="pt-20 relative">
        <div className="h-80 w-full relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={ngo.coverImage}
            alt={`${ngo.name} Cover`}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 z-20">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-xl overflow-hidden border-4 border-white bg-white shadow-lg">
                  <img
                    src={ngo.logo}
                    alt={`${ngo.name} Logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {ngo.categories.map((category: string, index: number) => (
                      <CustomBadge key={index} className="bg-white/90 text-primary">
                        {category}
                      </CustomBadge>
                    ))}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {ngo.name}
                  </h1>
                  <div className="flex items-center gap-2 text-white/90 mt-2">
                    <MapPin size={16} />
                    <span>{ngo.location}</span>
                    <span className="mx-2">•</span>
                    <span>Est. {ngo.foundedYear}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-6 bg-white dark:bg-gray-900 border-b">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link to="#donate-section">
                <CustomButton leftIcon={<Heart size={16} />}>
                  Donate Now
                </CustomButton>
              </Link>
              <CustomButton
                variant="outline"
                leftIcon={
                  isFollowing ? (
                    <Bookmark size={16} className="fill-primary" />
                  ) : (
                    <BookmarkPlus size={16} />
                  )
                }
                onClick={() => setIsFollowing(!isFollowing)}
              >
                {isFollowing ? "Following" : "Follow"}
              </CustomButton>
              <CustomButton
                variant="outline"
                size="sm"
                leftIcon={<Share2 size={14} />}
                className="hidden sm:flex"
              >
                Share
              </CustomButton>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users size={16} className="text-primary" />
                <span>{ngo.totalDonors.toLocaleString()} donors</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} className="text-primary" />
                <span>{ngo.upcomingEvents.length} events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-2 bg-white dark:bg-gray-900 border-b sticky top-16 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex overflow-x-auto no-scrollbar">
            <button
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "about"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "projects"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "events"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("events")}
            >
              Events
            </button>
            <button
              className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === "donate"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveTab("donate")}
            >
              Donate
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* About Tab */}
              {activeTab === "about" && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">About {ngo.name}</h2>
                  <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <p className="text-lg">{ngo.longDescription}</p>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Contact Information</h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Globe size={18} className="text-primary" />
                        <a
                          href={`https://${ngo.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {ngo.website}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-primary" />
                        <a
                          href={`mailto:${ngo.email}`}
                          className="text-primary hover:underline"
                        >
                          {ngo.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-primary" />
                        <a
                          href={`tel:${ngo.phone}`}
                          className="text-primary hover:underline"
                        >
                          {ngo.phone}
                        </a>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Our Impact</h3>
                    <p>
                      Through our various projects and initiatives, we've been able to make a
                      significant difference in our focus areas. Our work continues to
                      expand as we develop new partnerships and receive support from donors
                      like you.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                      {ngo.projects.map((project: any) => (
                        <div
                          key={project.id}
                          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                        >
                          <h4 className="font-medium mb-2">{project.impact.split(" ")[0]}</h4>
                          <p className="text-sm text-muted-foreground">
                            {project.impact.split(" ").slice(1).join(" ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === "projects" && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Our Projects</h2>
                  <p className="text-muted-foreground mb-8">
                    Discover the various initiatives and programs we're currently working on
                    to create meaningful impact in our community.
                  </p>

                  <div className="space-y-8">
                    {ngo.projects.map((project: any) => (
                      <CustomCard key={project.id}>
                        <CustomCardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CustomCardTitle>{project.title}</CustomCardTitle>
                              <CustomBadge
                                variant={
                                  project.status === "Completed"
                                    ? "secondary"
                                    : project.status === "In Progress"
                                    ? "outline"
                                    : "primary"
                                }
                                className="mt-2"
                              >
                                {project.status}
                              </CustomBadge>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center">
                              <span className="text-lg font-bold">{project.progress}%</span>
                            </div>
                          </div>
                        </CustomCardHeader>
                        <CustomCardContent>
                          <CustomCardDescription className="mb-4">
                            {project.description}
                          </CustomCardDescription>

                          {/* Progress bar */}
                          <div className="mt-4">
                            <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-sm font-medium mb-2">Impact</h4>
                            <p className="text-muted-foreground">{project.impact}</p>
                          </div>
                        </CustomCardContent>
                      </CustomCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Events Tab */}
              {activeTab === "events" && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                  <p className="text-muted-foreground mb-8">
                    Join us at our upcoming events to support our cause, learn more about our
                    work, and meet like-minded individuals passionate about making a difference.
                  </p>

                  <div className="space-y-6">
                    {ngo.upcomingEvents.map((event: any) => (
                      <CustomCard key={event.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 bg-primary p-6 text-white flex flex-col justify-center items-center text-center">
                            <span className="text-xl font-bold">
                              {formatEventDate(event.date).split(" ")[1]}
                            </span>
                            <span className="text-lg">
                              {formatEventDate(event.date).split(" ")[0]}
                            </span>
                            <span>
                              {formatEventDate(event.date).split(" ")[2]}
                            </span>
                            <div className="mt-2 flex items-center">
                              <Clock size={14} className="mr-1" />
                              <span>{formatEventTime(event.date)}</span>
                            </div>
                          </div>
                          <div className="md:w-3/4 p-6">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="flex items-center text-muted-foreground mb-4">
                              <MapPin size={16} className="mr-1" />
                              <span>{event.location}</span>
                            </div>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            <div className="flex justify-end">
                              <CustomButton
                                variant="outline"
                                size="sm"
                                rightIcon={<ChevronRight size={14} />}
                                onClick={() => console.log(`Register for event ${event.id}`)}
                              >
                                Register
                              </CustomButton>
                            </div>
                          </div>
                        </div>
                      </CustomCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Donate Tab */}
              {activeTab === "donate" && (
                <div className="animate-fade-in" id="donate-section">
                  <h2 className="text-2xl font-bold mb-6">Support Our Cause</h2>
                  <p className="text-muted-foreground mb-8">
                    Your donation helps us continue our important work and create lasting
                    positive change. Choose your donation amount and payment method below.
                  </p>

                  <DonationForm ngoId={ngo.id} ngoName={ngo.name} />
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Quick Info Card */}
                <CustomCard>
                  <CustomCardHeader>
                    <CustomCardTitle>Quick Info</CustomCardTitle>
                  </CustomCardHeader>
                  <CustomCardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-muted-foreground">Founded</span>
                        <span className="font-medium">{ngo.foundedYear}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-muted-foreground">Location</span>
                        <span className="font-medium">{ngo.location}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-muted-foreground">Total Donors</span>
                        <span className="font-medium">
                          {ngo.totalDonors.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Categories</span>
                        <div className="flex flex-wrap justify-end gap-1 max-w-[70%]">
                          {ngo.categories.map((category: string, index: number) => (
                            <CustomBadge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {category}
                            </CustomBadge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CustomCardContent>
                </CustomCard>

                {/* Contact Card */}
                <CustomCard>
                  <CustomCardHeader>
                    <CustomCardTitle>Contact</CustomCardTitle>
                  </CustomCardHeader>
                  <CustomCardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Globe size={18} className="text-primary" />
                        <a
                          href={`https://${ngo.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm truncate"
                        >
                          {ngo.website}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-primary" />
                        <a
                          href={`mailto:${ngo.email}`}
                          className="text-primary hover:underline text-sm truncate"
                        >
                          {ngo.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-primary" />
                        <a
                          href={`tel:${ngo.phone}`}
                          className="text-primary hover:underline text-sm"
                        >
                          {ngo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-3">Social Media</h4>
                      <div className="flex space-x-4">
                        {Object.entries(ngo.socialMedia).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`${platform} profile`}
                          >
                            {platform === "twitter" && <Twitter size={18} />}
                            {platform === "facebook" && <Facebook size={18} />}
                            {platform === "instagram" && <Instagram size={18} />}
                          </a>
                        ))}
                      </div>
                    </div>
                  </CustomCardContent>
                </CustomCard>

                {/* Verification Card */}
                <CustomCard>
                  <CustomCardHeader>
                    <CustomCardTitle>Verification</CustomCardTitle>
                  </CustomCardHeader>
                  <CustomCardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle size={16} />
                        <span className="font-medium text-sm">Verified Organization</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle size={16} />
                        <span className="font-medium text-sm">Financial Transparency</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle size={16} />
                        <span className="font-medium text-sm">Secure Donation Processing</span>
                      </div>
                      <div className="flex items-center gap-2 text-red-500">
                        <XCircle size={16} />
                        <span className="font-medium text-sm">Tax Deduction Receipts</span>
                      </div>

                      <p className="text-xs text-muted-foreground mt-4">
                        This organization has been verified by our team and meets our
                        standards for transparency and accountability.
                      </p>
                    </div>
                  </CustomCardContent>
                </CustomCard>
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
