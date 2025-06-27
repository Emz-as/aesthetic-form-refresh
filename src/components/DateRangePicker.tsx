
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const DateRangePicker = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="start-date" className="text-sm font-medium text-foreground">
            Start Date:
          </Label>
          <div className="relative">
            <Input
              id="start-date"
              type="datetime-local"
              defaultValue="2024-09-01T07:00"
              className="pr-10 bg-background border-border text-foreground"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="end-date" className="text-sm font-medium text-foreground">
            End Date:
          </Label>
          <div className="relative">
            <Input
              id="end-date"
              type="datetime-local"
              defaultValue="2024-09-02T07:00"
              className="pr-10 bg-background border-border text-foreground"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="approvals" className="text-sm font-medium text-foreground">
          Approvals:
        </Label>
        <Input id="approvals" placeholder="Enter approvals" className="bg-background border-border text-foreground placeholder:text-muted-foreground" />
      </div>
    </div>
  );
};

export default DateRangePicker;
