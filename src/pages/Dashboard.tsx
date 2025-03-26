
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Heart,
  Settings,
  LogOut,
  ChevronDown,
  Calendar,
  BarChart,
  Award,
  Clock,
  Bell,
  MessageSquare,
  Menu,
  X,
  Users,
  FileText,
  Mail,
  Phone,
  MapPin,
  Globe,
  Download,
  Star,
  UserPlus,
  Check,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/CustomButton";
import { CustomBadge } from "@/components/CustomBadge";
import {
  CustomCard,
  CustomCardHeader,
  CustomCardTitle,
  CustomCardContent,
  CustomCardFooter,
} from "@/components/CustomCard";

enum DashboardType {
  Volunteer = "volunteer",
  Donor = "donor",
  NGO = "ngo",
}

const Dashboard = () => {
  const [dashboardType, setDashboardType] = useState<DashboardType>(DashboardType.Volunteer);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleChangeDashboard = (type: DashboardType) => {
    setDashboardType(type);
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="md:grid md:grid-cols-5 min-h-[calc(100vh-4rem)]">
          {/* Mobile Sidebar Toggle */}
          <div className="md:hidden bg-white dark:bg-gray-800 border-b px-4 py-3 flex items-center justify-between sticky top-16 z-30 shadow-sm">
            <h2 className="font-semibold">Dashboard</h2>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle sidebar"
              className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Sidebar */}
          <aside 
            className={`md:col-span-1 bg-white dark:bg-gray-800 border-r md:block transition-all duration-300 ${
              isSidebarOpen ? "block fixed inset-0 z-40 pt-20" : "hidden"
            }`}
          >
            <div className="p-4">
              <div className="flex items-center space-x-3 pb-4 border-b mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">John Doe</h3>
                  <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>

              <div className="space-y-1 mb-6">
                <h4 className="text-xs uppercase font-semibold text-muted-foreground mb-2 px-2">Dashboard Type</h4>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    dashboardType === DashboardType.Volunteer 
                      ? "bg-primary/10 text-primary font-medium"
                      : ""
                  }`}
                  onClick={() => handleChangeDashboard(DashboardType.Volunteer)}
                >
                  <User size={16} />
                  <span>Volunteer Dashboard</span>
                </button>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    dashboardType === DashboardType.Donor
                      ? "bg-primary/10 text-primary font-medium"
                      : ""
                  }`}
                  onClick={() => handleChangeDashboard(DashboardType.Donor)}
                >
                  <Heart size={16} />
                  <span>Donor Dashboard</span>
                </button>
                <button
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    dashboardType === DashboardType.NGO
                      ? "bg-primary/10 text-primary font-medium"
                      : ""
                  }`}
                  onClick={() => handleChangeDashboard(DashboardType.NGO)}
                >
                  <Users size={16} />
                  <span>NGO Dashboard</span>
                </button>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs uppercase font-semibold text-muted-foreground mb-2 px-2">Account</h4>
                <button className="w-full text-left px-3 py-2 rounded-md text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Bell size={16} />
                  <span>Notifications</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <MessageSquare size={16} />
                  <span>Messages</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md text-sm flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500">
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-4 p-6">
            {dashboardType === DashboardType.Volunteer && <VolunteerDashboard />}
            {dashboardType === DashboardType.Donor && <DonorDashboard />}
            {dashboardType === DashboardType.NGO && <NGODashboard />}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const VolunteerDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Volunteer Dashboard</h1>
          <CustomButton size="sm">Update Profile</CustomButton>
        </div>

        <div className="flex overflow-x-auto mb-6 pb-1 border-b no-scrollbar">
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeSection === "profile"
                ? "text-primary border-b-2 border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveSection("profile")}
          >
            Personal Details
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeSection === "background"
                ? "text-primary border-b-2 border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveSection("background")}
          >
            Background
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeSection === "availability"
                ? "text-primary border-b-2 border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveSection("availability")}
          >
            Availability
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeSection === "documents"
                ? "text-primary border-b-2 border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveSection("documents")}
          >
            Documents
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeSection === "ngos"
                ? "text-primary border-b-2 border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveSection("ngos")}
          >
            NGOs
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeSection === "badges"
                ? "text-primary border-b-2 border-primary -mb-px"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveSection("badges")}
          >
            Badges
          </button>
        </div>
      </div>

      {activeSection === "profile" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomCard className="md:col-span-2">
            <CustomCardHeader>
              <CustomCardTitle>Personal Details</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border bg-gray-100 flex items-center justify-center relative group">
                  <User size={40} className="text-gray-400" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <CustomButton size="sm" variant="secondary">Change</CustomButton>
                  </div>
                </div>
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                    <p className="font-medium">John Doe</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Age</label>
                    <p className="font-medium">32 years</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="font-medium">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <p className="font-medium">+1 (234) 567-8901</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-muted-foreground">Address</label>
                    <p className="font-medium">123 Main Street, Apt 4B, San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Upcoming Events</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="bg-primary/10 text-primary rounded p-2 h-fit">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Beach Cleanup Drive</h3>
                    <p className="text-sm text-muted-foreground">May 15, 2023 • 10:00 AM</p>
                    <p className="text-sm text-muted-foreground">San Francisco Beach</p>
                  </div>
                </div>
                <div className="flex gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="bg-primary/10 text-primary rounded p-2 h-fit">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Food Distribution Event</h3>
                    <p className="text-sm text-muted-foreground">May 22, 2023 • 9:00 AM</p>
                    <p className="text-sm text-muted-foreground">Community Center</p>
                  </div>
                </div>
              </div>
            </CustomCardContent>
            <CustomCardFooter>
              <Link to="/ngos">
                <CustomButton variant="outline" size="sm">View All Events</CustomButton>
              </Link>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Volunteering Hours</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold">48</span>
                    <span className="block text-sm text-muted-foreground">hours</span>
                  </div>
                </div>
                <div className="w-full grid grid-cols-3 gap-2 text-center">
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <p className="text-lg font-semibold">12</p>
                    <p className="text-xs text-muted-foreground">This Month</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <p className="text-lg font-semibold">3</p>
                    <p className="text-xs text-muted-foreground">Events</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <p className="text-lg font-semibold">4.8</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>
      )}

      {activeSection === "background" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Education</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-medium">Master of Environmental Science</h3>
                  <p className="text-sm text-muted-foreground">University of California, 2018-2020</p>
                  <p className="text-sm">Specialized in Marine Conservation</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4 py-2">
                  <h3 className="font-medium">Bachelor of Science in Biology</h3>
                  <p className="text-sm text-muted-foreground">Stanford University, 2014-2018</p>
                  <p className="text-sm">GPA: 3.8/4.0</p>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Work Experience</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h3 className="font-medium">Environmental Scientist</h3>
                  <p className="text-sm text-muted-foreground">EcoSolutions Inc., 2020-Present</p>
                  <p className="text-sm">Conducting research on marine pollution and developing sustainable solutions.</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4 py-2">
                  <h3 className="font-medium">Research Assistant</h3>
                  <p className="text-sm text-muted-foreground">Marine Biology Lab, 2018-2020</p>
                  <p className="text-sm">Assisted in research projects focused on coral reef conservation.</p>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Skills</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="flex flex-wrap gap-2">
                <CustomBadge variant="outline">Project Management</CustomBadge>
                <CustomBadge variant="outline">Data Analysis</CustomBadge>
                <CustomBadge variant="outline">Scientific Research</CustomBadge>
                <CustomBadge variant="outline">Public Speaking</CustomBadge>
                <CustomBadge variant="outline">Team Leadership</CustomBadge>
                <CustomBadge variant="outline">First Aid Certified</CustomBadge>
                <CustomBadge variant="outline">Environmental Education</CustomBadge>
                <CustomBadge variant="outline">Community Outreach</CustomBadge>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Languages</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">English</span>
                    <span className="text-xs text-muted-foreground">Native</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">Spanish</span>
                    <span className="text-xs text-muted-foreground">Fluent</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">French</span>
                    <span className="text-xs text-muted-foreground">Basic</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>
      )}

      {activeSection === "availability" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CustomCard className="md:col-span-3">
            <CustomCardHeader>
              <CustomCardTitle>Availability Settings</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Preferred Roles</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="role-fieldwork" className="mr-2" checked />
                      <label htmlFor="role-fieldwork">Field Work</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="role-education" className="mr-2" checked />
                      <label htmlFor="role-education">Education & Training</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="role-admin" className="mr-2" />
                      <label htmlFor="role-admin">Administrative Support</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="role-events" className="mr-2" checked />
                      <label htmlFor="role-events">Event Organization</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="role-fundraising" className="mr-2" />
                      <label htmlFor="role-fundraising">Fundraising</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Timing Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="time-weekday" className="mr-2" checked />
                      <label htmlFor="time-weekday">Weekdays</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="time-weekend" className="mr-2" checked />
                      <label htmlFor="time-weekend">Weekends</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="time-morning" className="mr-2" checked />
                      <label htmlFor="time-morning">Mornings</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="time-afternoon" className="mr-2" />
                      <label htmlFor="time-afternoon">Afternoons</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="time-evening" className="mr-2" />
                      <label htmlFor="time-evening">Evenings</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Duration & Location</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground block mb-1">Commitment Period</label>
                      <select className="input-custom w-full">
                        <option>One-time event</option>
                        <option selected>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6-12 months</option>
                        <option>Ongoing</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground block mb-1">Hours per week</label>
                      <select className="input-custom w-full">
                        <option>Less than 5 hours</option>
                        <option selected>5-10 hours</option>
                        <option>10-20 hours</option>
                        <option>20+ hours</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground block mb-1">Preferred Locations</label>
                      <select className="input-custom w-full">
                        <option>In-person only</option>
                        <option>Remote only</option>
                        <option selected>Both in-person and remote</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton>Update Availability</CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard className="md:col-span-3">
            <CustomCardHeader>
              <CustomCardTitle>Weekly Availability</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="grid grid-cols-7 gap-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="text-center">
                    <h3 className="font-medium mb-2">{day}</h3>
                    <div className="space-y-2">
                      <div className={`p-2 rounded-md text-xs ${
                        ["Mon", "Wed", "Sat"].includes(day) ? "bg-primary/10 text-primary font-medium" : "bg-gray-100 dark:bg-gray-800 text-muted-foreground"
                      }`}>
                        Morning
                      </div>
                      <div className={`p-2 rounded-md text-xs ${
                        ["Tue", "Fri"].includes(day) ? "bg-primary/10 text-primary font-medium" : "bg-gray-100 dark:bg-gray-800 text-muted-foreground"
                      }`}>
                        Afternoon
                      </div>
                      <div className={`p-2 rounded-md text-xs ${
                        ["Thu", "Sun"].includes(day) ? "bg-primary/10 text-primary font-medium" : "bg-gray-100 dark:bg-gray-800 text-muted-foreground"
                      }`}>
                        Evening
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>
      )}

      {activeSection === "documents" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomCard className="md:col-span-2">
            <CustomCardHeader>
              <CustomCardTitle>My Documents</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg">
                  <div className="w-full md:w-1/4">
                    <h3 className="font-medium mb-1">Resume/CV</h3>
                    <p className="text-sm text-muted-foreground mb-3">PDF, DOCX or RTF file</p>
                    <div className="flex gap-2">
                      <CustomButton variant="outline" size="sm">View</CustomButton>
                      <CustomButton variant="outline" size="sm">Replace</CustomButton>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4 flex items-center">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg w-full">
                      <FileText size={24} className="text-primary" />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">John_Doe_Resume_2023.pdf</p>
                        <p className="text-xs text-muted-foreground">Uploaded on May 2, 2023</p>
                      </div>
                      <Download size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg">
                  <div className="w-full md:w-1/4">
                    <h3 className="font-medium mb-1">Identification</h3>
                    <p className="text-sm text-muted-foreground mb-3">Government-issued ID</p>
                    <div className="flex gap-2">
                      <CustomButton variant="outline" size="sm">View</CustomButton>
                      <CustomButton variant="outline" size="sm">Replace</CustomButton>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4 flex items-center">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg w-full">
                      <FileText size={24} className="text-primary" />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">ID_Scan_2023.jpg</p>
                        <p className="text-xs text-muted-foreground">Uploaded on April 15, 2023</p>
                      </div>
                      <Download size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg">
                  <div className="w-full md:w-1/4">
                    <h3 className="font-medium mb-1">References</h3>
                    <p className="text-sm text-muted-foreground mb-3">Professional references</p>
                    <div className="flex gap-2">
                      <CustomButton variant="outline" size="sm">View</CustomButton>
                      <CustomButton variant="outline" size="sm">Replace</CustomButton>
                    </div>
                  </div>
                  <div className="w-full md:w-3/4 flex items-center">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg w-full">
                      <FileText size={24} className="text-primary" />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">References_John_Doe.pdf</p>
                        <p className="text-xs text-muted-foreground">Uploaded on April 10, 2023</p>
                      </div>
                      <Download size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton>Upload New Document</CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard className="md:col-span-2">
            <CustomCardHeader>
              <CustomCardTitle>Certificates</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 border p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Award size={24} className="text-primary" />
                    <CustomBadge variant="outline">March 2023</CustomBadge>
                  </div>
                  <h3 className="font-semibold mb-1">Environmental Cleanup Certificate</h3>
                  <p className="text-sm text-muted-foreground mb-3">Clean Ocean Foundation</p>
                  <div className="flex gap-2">
                    <CustomButton variant="outline" size="sm">View</CustomButton>
                    <CustomButton variant="outline" size="sm">Download</CustomButton>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <Award size={24} className="text-primary" />
                    <CustomBadge variant="outline">January 2023</CustomBadge>
                  </div>
                  <h3 className="font-semibold mb-1">Community Service Recognition</h3>
                  <p className="text-sm text-muted-foreground mb-3">Global Health Initiative</p>
                  <div className="flex gap-2">
                    <CustomButton variant="outline" size="sm">View</CustomButton>
                    <CustomButton variant="outline" size="sm">Download</CustomButton>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>
      )}

      {activeSection === "ngos" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">NGOs I'm Following</h2>
              <Link to="/ngos">
                <CustomButton variant="outline" size="sm">Find More NGOs</CustomButton>
              </Link>
            </div>
          </div>

          <CustomCard>
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop"
                alt="Clean Ocean Foundation"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <CustomBadge
                  variant="primary"
                  className="bg-white/90 dark:bg-gray-800/90 text-primary shadow-sm"
                >
                  Environment
                </CustomBadge>
              </div>
            </div>
            <CustomCardHeader>
              <CustomCardTitle>Clean Ocean Foundation</CustomCardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <Users size={14} className="text-primary" />
                  <span>1243 donors</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-primary" />
                  <span>3 events</span>
                </div>
              </div>
            </CustomCardHeader>
            <CustomCardContent>
              <p className="text-muted-foreground line-clamp-3">
                Working to protect marine ecosystems and reduce ocean pollution through community-driven initiatives and advocacy.
              </p>
            </CustomCardContent>
            <CustomCardFooter className="flex justify-between">
              <Link to="/ngo/1">
                <CustomButton
                  variant="outline"
                  size="sm"
                  rightIcon={<ChevronRight size={14} />}
                >
                  View
                </CustomButton>
              </Link>
              <CustomButton
                variant="primary"
                size="sm"
                leftIcon={<Heart size={14} />}
              >
                Donate
              </CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <CustomCard>
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1970&auto=format&fit=crop"
                alt="Education For All"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <CustomBadge
                  variant="primary"
                  className="bg-white/90 dark:bg-gray-800/90 text-primary shadow-sm"
                >
                  Education
                </CustomBadge>
              </div>
            </div>
            <CustomCardHeader>
              <CustomCardTitle>Education For All</CustomCardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <div className="flex items-center gap-1">
                  <Users size={14} className="text-primary" />
                  <span>978 donors</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} className="text-primary" />
                  <span>5 events</span>
                </div>
              </div>
            </CustomCardHeader>
            <CustomCardContent>
              <p className="text-muted-foreground line-clamp-3">
                Providing educational opportunities for underprivileged children across developing nations to build a better future.
              </p>
            </CustomCardContent>
            <CustomCardFooter className="flex justify-between">
              <Link to="/ngo/2">
                <CustomButton
                  variant="outline"
                  size="sm"
                  rightIcon={<ChevronRight size={14} />}
                >
                  View
                </CustomButton>
              </Link>
              <CustomButton
                variant="primary"
                size="sm"
                leftIcon={<Heart size={14} />}
              >
                Donate
              </CustomButton>
            </CustomCardFooter>
          </CustomCard>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center p-6 h-full">
            <UserPlus size={32} className="text-gray-400 mb-4" />
            <h3 className="font-medium text-center mb-2">Discover More NGOs</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Find and follow more organizations that align with your interests
            </p>
            <Link to="/ngos">
              <CustomButton variant="outline" size="sm">Browse NGOs</CustomButton>
            </Link>
          </div>

          <CustomCard className="md:col-span-3">
            <CustomCardHeader>
              <CustomCardTitle>NGO Applications</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm">NGO Name</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Position</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Date Applied</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Global Health Initiative</td>
                      <td className="py-3 px-4">Community Outreach Volunteer</td>
                      <td className="py-3 px-4">April 15, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="primary">Accepted</CustomBadge>
                      </td>
                      <td className="py-3 px-4">
                        <CustomButton variant="outline" size="sm">View Details</CustomButton>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Education For All</td>
                      <td className="py-3 px-4">Teaching Assistant</td>
                      <td className="py-3 px-4">May 2, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="outline">Pending</CustomBadge>
                      </td>
                      <td className="py-3 px-4">
                        <CustomButton variant="outline" size="sm">View Details</CustomButton>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Habitat Builders</td>
                      <td className="py-3 px-4">Construction Volunteer</td>
                      <td className="py-3 px-4">April 28, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="secondary">Interview</CustomBadge>
                      </td>
                      <td className="py-3 px-4">
                        <CustomButton variant="outline" size="sm">View Details</CustomButton>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>
      )}

      {activeSection === "badges" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomCard className="md:col-span-2">
            <CustomCardHeader>
              <div className="flex justify-between items-center">
                <CustomCardTitle>My Badges & Achievements</CustomCardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                    <Star size={14} className="fill-primary" />
                    <span className="font-medium">320 Points</span>
                  </div>
                </div>
              </div>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {[
                  { name: "First Volunteer", icon: <Award size={32} />, date: "Mar 10, 2023", points: 50, earned: true },
                  { name: "Environmental Hero", icon: <Globe size={32} />, date: "Apr 5, 2023", points: 100, earned: true },
                  { name: "Team Player", icon: <Users size={32} />, date: "Apr 22, 2023", points: 75, earned: true },
                  { name: "Event Organizer", icon: <Calendar size={32} />, date: "May 3, 2023", points: 150, earned: false },
                  { name: "Dedicated Volunteer", icon: <Clock size={32} />, date: "May 15, 2023", points: 200, earned: false },
                  { name: "Public Speaker", icon: <MessageSquare size={32} />, date: "Jun 1, 2023", points: 125, earned: false },
                  { name: "Community Builder", icon: <Heart size={32} />, date: "Jun 10, 2023", points: 175, earned: false },
                  { name: "Fundraising Star", icon: <BarChart size={32} />, date: "Jul 5, 2023", points: 250, earned: false },
                  { name: "Mentor", icon: <User size={32} />, date: "Jul 20, 2023", points: 300, earned: false },
                  { name: "Sustainability Champion", icon: <Globe size={32} />, date: "Aug 10, 2023", points: 350, earned: false },
                ].map((badge, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border text-center ${
                      badge.earned 
                        ? "bg-white dark:bg-gray-800" 
                        : "bg-gray-50 dark:bg-gray-900 border-dashed opacity-50"
                    }`}
                  >
                    <div className={`mb-3 text-primary ${!badge.earned && "text-muted-foreground"}`}>
                      {badge.icon}
                    </div>
                    <h3 className="font-medium text-sm mb-1">{badge.name}</h3>
                    <div className="text-xs text-muted-foreground mb-2">
                      {badge.earned ? `Earned: ${badge.date}` : `${badge.points} points needed`}
                    </div>
                    {badge.earned && (
                      <div className="flex items-center gap-1 text-xs text-primary">
                        <Check size={12} />
                        <span>+{badge.points} points</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Leaderboard</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-xs text-muted-foreground">You</p>
                    </div>
                  </div>
                  <div className="font-semibold">320 pts</div>
                </div>

                <div className="space-y-2">
                  {[
                    { position: 1, name: "Sarah Johnson", points: 580 },
                    { position: 2, name: "Michael Chen", points: 510 },
                    { position: 3, name: "Emma Wilson", points: 475 },
                    { position: 4, name: "David Kim", points: 390 },
                    { position: 6, name: "Lisa Garcia", points: 290 },
                    { position: 7, name: "Robert Taylor", points: 250 },
                  ].map((user) => (
                    <div key={user.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          user.position <= 3 
                            ? "bg-yellow-500 text-white" 
                            : "bg-gray-100 dark:bg-gray-700 text-foreground"
                        }`}>
                          {user.position}
                        </div>
                        <div>
                          <h3 className="font-medium">{user.name}</h3>
                        </div>
                      </div>
                      <div className="font-semibold">{user.points} pts</div>
                    </div>
                  ))}
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Your Progress</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-sm">Silver Volunteer</h3>
                    <span className="text-xs text-muted-foreground">320 / 500 points</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "64%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Earn 180 more points to reach Silver Volunteer status
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-sm mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3 text-sm">
                      <div className="bg-primary/10 text-primary rounded p-1.5 h-fit">
                        <Check size={14} />
                      </div>
                      <div>
                        <p className="font-medium">Beach Cleanup participation</p>
                        <p className="text-xs text-muted-foreground">May 5, 2023 • +50 points</p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <div className="bg-primary/10 text-primary rounded p-1.5 h-fit">
                        <Check size={14} />
                      </div>
                      <div>
                        <p className="font-medium">Donation to Clean Ocean Foundation</p>
                        <p className="text-xs text-muted-foreground">April 22, 2023 • +25 points</p>
                      </div>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <div className="bg-primary/10 text-primary rounded p-1.5 h-fit">
                        <Award size={14} />
                      </div>
                      <div>
                        <p className="font-medium">Earned "Team Player" badge</p>
                        <p className="text-xs text-muted-foreground">April 20, 2023 • +75 points</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>
      )}
    </div>
  );
};

const DonorDashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Donor Dashboard</h1>
        <CustomButton size="sm">Update Profile</CustomButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Total Contributions</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="text-center py-6">
            <h2 className="text-4xl font-bold text-primary mb-2">$1,250</h2>
            <p className="text-muted-foreground">Lifetime Donations</p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Donation Frequency</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="text-center py-6">
            <h2 className="text-4xl font-bold text-primary mb-2">8</h2>
            <p className="text-muted-foreground">Total Donations</p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Donor Status</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="text-center py-6">
            <h2 className="text-2xl font-bold text-primary mb-2">Bronze Donor</h2>
            <div className="flex justify-center">
              <CustomBadge>Tier 1</CustomBadge>
            </div>
          </CustomCardContent>
        </CustomCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Donation History</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm">NGO</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Clean Ocean Foundation</td>
                      <td className="py-3 px-4">$350</td>
                      <td className="py-3 px-4">May 10, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="primary">Completed</CustomBadge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Education For All</td>
                      <td className="py-3 px-4">$200</td>
                      <td className="py-3 px-4">April 22, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="primary">Completed</CustomBadge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Global Health Initiative</td>
                      <td className="py-3 px-4">$150</td>
                      <td className="py-3 px-4">March 15, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="primary">Completed</CustomBadge>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Habitat Builders</td>
                      <td className="py-3 px-4">$300</td>
                      <td className="py-3 px-4">February 28, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="primary">Completed</CustomBadge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Food Security Alliance</td>
                      <td className="py-3 px-4">$250</td>
                      <td className="py-3 px-4">January 10, 2023</td>
                      <td className="py-3 px-4">
                        <CustomBadge variant="primary">Completed</CustomBadge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CustomCardContent>
            <CustomCardFooter>
              <Link to="/donate">
                <CustomButton leftIcon={<Heart size={16} />}>Make a New Donation</CustomButton>
              </Link>
            </CustomCardFooter>
          </CustomCard>
        </div>

        <div>
          <CustomCard className="mb-6">
            <CustomCardHeader>
              <CustomCardTitle>Causes Supported</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Environment</span>
                    <span className="text-sm font-medium">$350</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Education</span>
                    <span className="text-sm font-medium">$450</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "36%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Healthcare</span>
                    <span className="text-sm font-medium">$150</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Housing</span>
                    <span className="text-sm font-medium">$300</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: "24%" }}></div>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Recognition</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Award size={24} className="text-yellow-500" />
                  <div>
                    <h3 className="font-medium">First-Time Donor</h3>
                    <p className="text-xs text-muted-foreground">January 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <Award size={24} className="text-blue-500" />
                  <div>
                    <h3 className="font-medium">Consistent Supporter</h3>
                    <p className="text-xs text-muted-foreground">March 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 opacity-50">
                  <Award size={24} className="text-purple-500" />
                  <div>
                    <h3 className="font-medium">Silver Donor</h3>
                    <p className="text-xs text-muted-foreground">Requires $2000 in donations</p>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>
      </div>

      <div className="mt-8 md:col-span-3">
        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Tax Receipts</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-sm">Year</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Total Donation</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">2023 (YTD)</td>
                    <td className="py-3 px-4">$700</td>
                    <td className="py-3 px-4">
                      <CustomBadge variant="outline">In Progress</CustomBadge>
                    </td>
                    <td className="py-3 px-4">
                      <CustomButton variant="outline" size="sm" disabled>Not Available</CustomButton>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">2022</td>
                    <td className="py-3 px-4">$550</td>
                    <td className="py-3 px-4">
                      <CustomBadge variant="primary">Available</CustomBadge>
                    </td>
                    <td className="py-3 px-4">
                      <CustomButton variant="outline" size="sm" leftIcon={<Download size={14} />}>
                        Download
                      </CustomButton>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CustomCardContent>
        </CustomCard>
      </div>
    </div>
  );
};

const NGODashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">NGO Dashboard</h1>
        <CustomButton size="sm">Update Profile</CustomButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Total Donations</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="text-center py-6">
            <h2 className="text-4xl font-bold text-primary mb-2">$24,850</h2>
            <p className="text-muted-foreground">All-time</p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Donors</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="text-center py-6">
            <h2 className="text-4xl font-bold text-primary mb-2">312</h2>
            <p className="text-muted-foreground">Total Supporters</p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Volunteers</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="text-center py-6">
            <h2 className="text-4xl font-bold text-primary mb-2">85</h2>
            <p className="text-muted-foreground">Active Helpers</p>
          </CustomCardContent>
        </CustomCard>

        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Events</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent className="text-center py-6">
            <h2 className="text-4xl font-bold text-primary mb-2">23</h2>
            <p className="text-muted-foreground">Past & Upcoming</p>
          </CustomCardContent>
        </CustomCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <CustomCard>
            <CustomCardHeader>
              <div className="flex justify-between items-center">
                <CustomCardTitle>NGO Profile</CustomCardTitle>
                <CustomButton variant="outline" size="sm">Edit Profile</CustomButton>
              </div>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center relative group">
                    <img
                      src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop"
                      alt="Clean Ocean Foundation"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <CustomButton size="sm" variant="secondary">Change</CustomButton>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Organization Name</label>
                    <p className="font-medium">Clean Ocean Foundation</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Description</label>
                    <p>Working to protect marine ecosystems and reduce ocean pollution through community-driven initiatives and advocacy.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Founded</label>
                      <p className="font-medium">2008</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Location</label>
                      <p className="font-medium">San Francisco, CA</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Categories</label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <CustomBadge variant="outline">Environment</CustomBadge>
                        <CustomBadge variant="outline">Conservation</CustomBadge>
                        <CustomBadge variant="outline">Marine</CustomBadge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <div className="flex justify-between items-center">
                <CustomCardTitle>Contact Information</CustomCardTitle>
                <CustomButton variant="outline" size="sm">Edit</CustomButton>
              </div>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p>contact@cleanoceanfoundation.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="text-primary" />
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Website</label>
                    <p>www.cleanoceanfoundation.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary" />
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Address</label>
                    <p>123 Bay Street, San Francisco, CA 94111</p>
                  </div>
                </div>
              </div>
            </CustomCardContent>
          </CustomCard>
        </div>

        <div className="space-y-6">
          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Quick Actions</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-3">
                <CustomButton fullWidth leftIcon={<Calendar size={16} />}>
                  Create New Event
                </CustomButton>
                <CustomButton fullWidth variant="outline" leftIcon={<Award size={16} />}>
                  Generate Certificates
                </CustomButton>
                <CustomButton fullWidth variant="outline" leftIcon={<Users size={16} />}>
                  Manage Volunteers
                </CustomButton>
                <CustomButton fullWidth variant="outline" leftIcon={<Heart size={16} />}>
                  View Donors
                </CustomButton>
              </div>
            </CustomCardContent>
          </CustomCard>

          <CustomCard>
            <CustomCardHeader>
              <CustomCardTitle>Upcoming Events</CustomCardTitle>
            </CustomCardHeader>
            <CustomCardContent>
              <div className="space-y-4">
                <div className="flex gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="bg-primary/10 text-primary rounded p-2 h-fit">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">World Oceans Day</h3>
                    <p className="text-sm text-muted-foreground">June 8, 2023 • 10:00 AM</p>
                    <p className="text-sm text-muted-foreground">Golden Gate Park</p>
                  </div>
                </div>
                <div className="flex gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                  <div className="bg-primary/10 text-primary rounded p-2 h-fit">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Marine Workshop</h3>
                    <p className="text-sm text-muted-foreground">July 15, 2023 • 2:00 PM</p>
                    <p className="text-sm text-muted-foreground">Virtual Event</p>
                  </div>
                </div>
              </div>
            </CustomCardContent>
            <CustomCardFooter>
              <CustomButton variant="outline" size="sm">View All Events</CustomButton>
            </CustomCardFooter>
          </CustomCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Recent Donors</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-sm">Donor</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">John Doe</td>
                    <td className="py-3 px-4">$350</td>
                    <td className="py-3 px-4">May 10, 2023</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Sarah Johnson</td>
                    <td className="py-3 px-4">$500</td>
                    <td className="py-3 px-4">May 8, 2023</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Anonymous</td>
                    <td className="py-3 px-4">$200</td>
                    <td className="py-3 px-4">May 7, 2023</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Michael Chen</td>
                    <td className="py-3 px-4">$150</td>
                    <td className="py-3 px-4">May 5, 2023</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Emma Wilson</td>
                    <td className="py-3 px-4">$250</td>
                    <td className="py-3 px-4">May 3, 2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CustomCardContent>
          <CustomCardFooter>
            <CustomButton variant="outline" size="sm">View All Donors</CustomButton>
          </CustomCardFooter>
        </CustomCard>

        <CustomCard>
          <CustomCardHeader>
            <CustomCardTitle>Certificate Generation</CustomCardTitle>
          </CustomCardHeader>
          <CustomCardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-sm mb-3">Certificate Type</h3>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 rounded-md border bg-primary text-primary-foreground font-medium">
                    Volunteer
                  </button>
                  <button className="flex-1 py-2 rounded-md border border-input font-medium">
                    Donor
                  </button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Select Event</label>
                <select className="input-custom w-full">
                  <option>Beach Cleanup Drive (May 5, 2023)</option>
                  <option>Marine Education Workshop (April 15, 2023)</option>
                  <option>Earth Day Celebration (April 22, 2023)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Select Recipients</label>
                <div className="space-y-2 max-h-36 overflow-y-auto p-2 border rounded-md">
                  {["John Doe", "Sarah Johnson", "Michael Chen", "Emma Wilson", "David Kim", "Lisa Garcia", "Robert Taylor"].map((name) => (
                    <div key={name} className="flex items-center">
                      <input type="checkbox" id={`recipient-${name}`} className="mr-2" />
                      <label htmlFor={`recipient-${name}`}>{name}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CustomCardContent>
          <CustomCardFooter>
            <CustomButton leftIcon={<Award size={16} />}>Generate Certificates</CustomButton>
          </CustomCardFooter>
        </CustomCard>
      </div>
    </div>
  );
};

export default Dashboard;
