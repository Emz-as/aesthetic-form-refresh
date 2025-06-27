
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
          <Label htmlFor="start-date" className="text-sm font-medium text-gray-700">
            Start Date:
          </Label>
          <div className="relative">
            <Input
              id="start-date"
              type="datetime-local"
              defaultValue="2024-09-01T07:00"
              className="pr-10"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="end-date" className="text-sm font-medium text-gray-700">
            End Date:
          </Label>
          <div className="relative">
            <Input
              id="end-date"
              type="datetime-local"
              defaultValue="2024-09-02T07:00"
              className="pr-10"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="approvals" className="text-sm font-medium text-gray-700">
          Approvals:
        </Label>
        <Input id="approvals" placeholder="Enter approvals" />
      </div>
    </div>
  );
};

export default DateRangePicker;
