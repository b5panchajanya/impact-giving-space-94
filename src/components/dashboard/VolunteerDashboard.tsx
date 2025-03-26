
import React from "react";
import { Award, Calendar, Trophy, FileCheck } from "lucide-react";
// Changed 'Certificate' to 'FileCheck' which is a valid Lucide icon

const VolunteerDashboard = ({ activeTab = "overview" }) => {
  return (
    <div>
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Upcoming Events</h3>
              <Calendar className="text-primary h-5 w-5" />
            </div>
            <p className="text-muted-foreground">
              You have 2 upcoming volunteer events scheduled. See your calendar for details.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Certificates</h3>
              <FileCheck className="text-primary h-5 w-5" />
            </div>
            <p className="text-muted-foreground">
              You have earned 5 certificates for your volunteer work. View and download them here.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Achievements</h3>
              <Trophy className="text-primary h-5 w-5" />
            </div>
            <p className="text-muted-foreground">
              You have unlocked 8 badges and earned 350 impact points. Keep up the good work!
            </p>
          </div>
        </div>
      )}

      {activeTab === "myEvents" && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-medium mb-4">My Events</h2>
          <p className="text-muted-foreground">
            You are registered for 2 upcoming events and have participated in 3 past events.
          </p>
        </div>
      )}

      {activeTab === "certificates" && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-medium mb-4">Certificates</h2>
          <p className="text-muted-foreground">
            View and download certificates for events you've volunteered at.
          </p>
        </div>
      )}

      {activeTab === "achievements" && (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-medium mb-4">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Award className="mx-auto text-primary h-8 w-8 mb-2" />
              <p className="font-medium">First Time Volunteer</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Award className="mx-auto text-primary h-8 w-8 mb-2" />
              <p className="font-medium">5 Events Completed</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg opacity-50">
              <Award className="mx-auto text-gray-400 h-8 w-8 mb-2" />
              <p className="font-medium">10 Events Completed</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg opacity-50">
              <Award className="mx-auto text-gray-400 h-8 w-8 mb-2" />
              <p className="font-medium">Community Leader</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerDashboard;
