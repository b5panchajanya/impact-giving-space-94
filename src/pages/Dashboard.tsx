
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NGODashboard from "@/components/dashboard/NGODashboard";
import VolunteerDashboard from "@/components/dashboard/VolunteerDashboard";
import DonorDashboard from "@/components/dashboard/DonorDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Redirect to login if not authenticated and not loading
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container-custom py-24">
          <div className="space-y-4">
            <Skeleton className="h-12 w-[250px]" />
            <Skeleton className="h-8 w-[300px]" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-48 w-full rounded-lg" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Render different dashboards based on user role
  const renderDashboardContent = () => {
    if (!profile) return null;

    switch (profile.role) {
      case "NGO":
        return <NGODashboard activeTab={activeTab} />;
      case "Volunteer":
        return <VolunteerDashboard activeTab={activeTab} />;
      case "Donor":
        return <DonorDashboard activeTab={activeTab} />;
      default:
        return (
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-medium mb-4">Welcome to your dashboard</h2>
            <p className="text-muted-foreground">
              Your account type is not recognized. Please contact support for assistance.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container-custom py-24">
        {profile ? (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Hi, {profile.name}!</h1>
              <p className="text-muted-foreground">
                Welcome to your {profile.role} dashboard. Here's an overview of your activities.
              </p>
            </div>
            
            <Tabs defaultValue="overview" onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                {profile.role === "NGO" && (
                  <>
                    <TabsTrigger value="events">Events</TabsTrigger>
                    <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
                    <TabsTrigger value="donations">Donations</TabsTrigger>
                  </>
                )}
                {profile.role === "Volunteer" && (
                  <>
                    <TabsTrigger value="myEvents">My Events</TabsTrigger>
                    <TabsTrigger value="certificates">Certificates</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  </>
                )}
                {profile.role === "Donor" && (
                  <>
                    <TabsTrigger value="myDonations">My Donations</TabsTrigger>
                    <TabsTrigger value="favoriteNGOs">Favorite NGOs</TabsTrigger>
                    <TabsTrigger value="taxReceipts">Tax Receipts</TabsTrigger>
                  </>
                )}
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                {renderDashboardContent()}
              </TabsContent>
              
              <TabsContent value="events" className="mt-0">
                {profile.role === "NGO" && <NGODashboard activeTab="events" />}
              </TabsContent>
              
              <TabsContent value="volunteers" className="mt-0">
                {profile.role === "NGO" && <NGODashboard activeTab="volunteers" />}
              </TabsContent>
              
              <TabsContent value="donations" className="mt-0">
                {profile.role === "NGO" && <NGODashboard activeTab="donations" />}
              </TabsContent>
              
              <TabsContent value="myEvents" className="mt-0">
                {profile.role === "Volunteer" && <VolunteerDashboard activeTab="myEvents" />}
              </TabsContent>
              
              <TabsContent value="certificates" className="mt-0">
                {profile.role === "Volunteer" && <VolunteerDashboard activeTab="certificates" />}
              </TabsContent>
              
              <TabsContent value="achievements" className="mt-0">
                {profile.role === "Volunteer" && <VolunteerDashboard activeTab="achievements" />}
              </TabsContent>
              
              <TabsContent value="myDonations" className="mt-0">
                {profile.role === "Donor" && <DonorDashboard activeTab="myDonations" />}
              </TabsContent>
              
              <TabsContent value="favoriteNGOs" className="mt-0">
                {profile.role === "Donor" && <DonorDashboard activeTab="favoriteNGOs" />}
              </TabsContent>
              
              <TabsContent value="taxReceipts" className="mt-0">
                {profile.role === "Donor" && <DonorDashboard activeTab="taxReceipts" />}
              </TabsContent>
              
              <TabsContent value="profile" className="mt-0">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
                  <h2 className="text-xl font-medium mb-4">Profile Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium mb-1">Name</p>
                      <p className="text-muted-foreground">{profile.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Email</p>
                      <p className="text-muted-foreground">{profile.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Role</p>
                      <p className="text-muted-foreground">{profile.role}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">User Profile Not Found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find your profile information. Please try logging in again.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
