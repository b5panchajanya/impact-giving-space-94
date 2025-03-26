
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, DollarSign, Award, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NGODashboardProps {
  activeTab: string;
}

const NGODashboard: React.FC<NGODashboardProps> = ({ activeTab }) => {
  const { profile } = useAuth();

  // Overview tab content
  if (activeTab === "overview") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Volunteers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
              <p className="text-xs text-muted-foreground">+28 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹32,450</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impact Rating</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8/5.0</div>
              <p className="text-xs text-muted-foreground">Based on 56 reviews</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your next 3 scheduled events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Beach Cleanup Drive",
                    date: "June 15, 2023",
                    volunteers: 24,
                  },
                  {
                    title: "Educational Workshop",
                    date: "June 22, 2023",
                    volunteers: 18,
                  },
                  {
                    title: "Fundraising Gala",
                    date: "July 5, 2023",
                    volunteers: 10,
                  },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users size={14} />
                      <span>{event.volunteers} volunteers</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Plus className="h-4 w-4 mr-2" /> Create Event
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>Latest donations to your NGO</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Anonymous",
                    amount: "₹5,000",
                    date: "June 10, 2023",
                  },
                  {
                    name: "Rajesh Kumar",
                    amount: "₹2,500",
                    date: "June 8, 2023",
                  },
                  {
                    name: "Priya Sharma",
                    amount: "₹10,000",
                    date: "June 5, 2023",
                  },
                ].map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div>
                      <h4 className="font-medium">{donation.name}</h4>
                      <p className="text-sm text-muted-foreground">{donation.date}</p>
                    </div>
                    <div className="font-medium text-green-600 dark:text-green-400">
                      {donation.amount}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Donations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Events tab content
  if (activeTab === "events") {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Events Management</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" /> Create Event
          </Button>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Events list would be fetched from Supabase here */}
                <p className="text-muted-foreground">No upcoming events found. Create your first event!</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Past Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Past events list would be fetched from Supabase here */}
                <p className="text-muted-foreground">No past events found.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Volunteers tab content
  if (activeTab === "volunteers") {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6">Volunteer Management</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Registered Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Volunteers list would be fetched from Supabase here */}
              <p className="text-muted-foreground">No volunteers registered yet.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Donations tab content
  if (activeTab === "donations") {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6">Donation Management</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Donations list would be fetched from Supabase here */}
              <p className="text-muted-foreground">No donations received yet.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default NGODashboard;
