
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Award, Certificate, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface VolunteerDashboardProps {
  activeTab: string;
}

const VolunteerDashboard: React.FC<VolunteerDashboardProps> = ({ activeTab }) => {
  const { profile } = useAuth();

  // Overview tab content
  if (activeTab === "overview") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registered Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">3 upcoming, 2 completed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volunteer Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+8 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impact Points</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">350</div>
              <p className="text-xs text-muted-foreground">Level 3 Volunteer</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates</CardTitle>
              <Certificate className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">View all certificates</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events you've registered for</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Beach Cleanup Drive",
                    ngo: "Clean Ocean Foundation",
                    date: "June 15, 2023",
                  },
                  {
                    title: "Tree Plantation Drive",
                    ngo: "Green Earth Initiative",
                    date: "June 28, 2023",
                  },
                  {
                    title: "Food Distribution",
                    ngo: "Food for All",
                    date: "July 5, 2023",
                  },
                ].map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.ngo} • {event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="h-4 w-4 mr-2" /> Find More Events
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Achievement Progress</CardTitle>
              <CardDescription>Your journey as a volunteer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Dedicated Volunteer</span>
                    <span className="text-muted-foreground">24/30 hrs</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Event Enthusiast</span>
                    <span className="text-muted-foreground">5/10 events</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Community Champion</span>
                    <span className="text-muted-foreground">350/500 points</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                
                <Button variant="outline" className="w-full mt-2">
                  View All Achievements
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // My Events tab content
  if (activeTab === "myEvents") {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Events</h2>
          <Button>
            <Search className="h-4 w-4 mr-2" /> Find Events
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
                <p className="text-muted-foreground">No upcoming events found. Register for events to see them here!</p>
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

  // Certificates tab content
  if (activeTab === "certificates") {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6">My Certificates</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Earned Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Certificates list would be fetched from Supabase here */}
              <p className="text-muted-foreground">No certificates earned yet. Participate in events to earn certificates!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Achievements tab content
  if (activeTab === "achievements") {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6">My Achievements</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Badges & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Achievements list would be fetched from Supabase here */}
              <p className="text-muted-foreground">No achievements unlocked yet. Start volunteering to earn badges!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default VolunteerDashboard;
