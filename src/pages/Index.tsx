
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import ControlPanel from '@/components/ControlPanel';
import ReportPreview from '@/components/ReportPreview';

const Index = () => {
  return (
    <div className="flex h-screen bg-background dark:bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 flex overflow-hidden">
          <div className="w-96 bg-card border-r border-border overflow-y-auto">
            <div className="p-6">
              <ControlPanel />
            </div>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto">
            <ReportPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
