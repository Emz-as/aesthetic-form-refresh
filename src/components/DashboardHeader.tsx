
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const DashboardHeader = () => {
  const tabs = [
    { name: 'Dashboard', active: true },
    { name: 'Daily Report', active: false },
    { name: 'Load Profile One', active: false },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex items-center px-6 py-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center px-4 py-2 mr-2 rounded-t-lg border-b-2 ${
              tab.active
                ? 'bg-blue-50 border-blue-500 text-blue-700'
                : 'bg-gray-50 border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            <span className="text-sm font-medium">{tab.name}</span>
            <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0">
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
