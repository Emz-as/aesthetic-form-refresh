
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
    <div className="bg-card border-b border-border">
      <div className="flex items-center px-6 py-3">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex items-center px-4 py-2 mr-2 rounded-t-lg border-b-2 ${
              tab.active
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-muted border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60'
            }`}
          >
            <span className="text-sm font-medium">{tab.name}</span>
            <Button variant="ghost" size="sm" className="ml-2 h-4 w-4 p-0 hover:bg-background/20">
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
