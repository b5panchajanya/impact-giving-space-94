
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Heart, FileText, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DonorDashboardProps {
  activeTab: string;
}

const DonorDashboard: React.FC<DonorDashboardProps> = ({ activeTab }) => {
  const { profile } = useAuth();

  // Overview tab content
  if (activeTab === "overview") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹15,000</div>
              <p className="text-xs text-muted-foreground">Across 4 NGOs</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favorite NGOs</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 new updates</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tax Receipts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">For FY 2022-23</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Supported Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Last 12 months</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Donations</CardTitle>
              <CardDescription>Your contribution history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    ngo: "Clean Ocean Foundation",
                    amount: "₹5,000",
                    date: "May 15, 2023",
                  },
                  {
                    ngo: "Education For All",
                    amount: "₹3,000",
                    date: "April 28, 2023",
                  },
                  {
                    ngo: "Wildlife Protection Society",
                    amount: "₹2,500",
                    date: "March 10, 2023",
                  },
                ].map((donation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div>
                      <h4 className="font-medium">{donation.ngo}</h4>
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
          
          <Card>
            <CardHeader>
              <CardTitle>NGOs You Support</CardTitle>
              <CardDescription>Organizations you've donated to</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Clean Ocean Foundation",
                    cause: "Environment",
                    donationsCount: 2,
                  },
                  {
                    name: "Education For All",
                    cause: "Education",
                    donationsCount: 1,
                  },
                  {
                    name: "Wildlife Protection Society",
                    cause: "Conservation",
                    donationsCount: 1,
                  },
                ].map((ngo, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div>
                      <h4 className="font-medium">{ngo.name}</h4>
                      <p className="text-sm text-muted-foreground">{ngo.cause}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {ngo.donationsCount} donation{ngo.donationsCount > 1 ? 's' : ''}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Search className="h-4 w-4 mr-2" /> Discover More NGOs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // My Donations tab content
  if (activeTab === "myDonations") {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Donations</h2>
          <Button>
            <DollarSign className="h-4 w-4 mr-2" /> Make a Donation
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Donation History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Donations list would be fetched from Supabase here */}
              <p className="text-muted-foreground">No donations made yet. Start supporting causes you care about!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Favorite NGOs tab content
  if (activeTab === "favoriteNGOs") {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6">Favorite NGOs</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>NGOs You Follow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* NGOs list would be fetched from Supabase here */}
              <p className="text-muted-foreground">You haven't favorited any NGOs yet. Explore NGOs to find ones you want to follow!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tax Receipts tab content
  if (activeTab === "taxReceipts") {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6">Tax Receipts</h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Available Receipts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Receipts list would be fetched from Supabase here */}
              <p className="text-muted-foreground">No tax receipts available yet. Receipts will be generated for eligible donations.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default DonorDashboard;
