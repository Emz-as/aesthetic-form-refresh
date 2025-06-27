
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import ControlPanel from '@/components/ControlPanel';
import ReportPreview from '@/components/ReportPreview';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 flex overflow-hidden">
          <div className="w-96 bg-white border-r border-gray-200 overflow-y-auto">
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
