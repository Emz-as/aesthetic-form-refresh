
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';
import DateRangePicker from './DateRangePicker';
import StationSelector from './StationSelector';

const ControlPanel = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">
            Report Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <DateRangePicker />
          <StationSelector />
          
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
            <Checkbox
              id="show-chart"
              defaultChecked={true}
              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <Label
              htmlFor="show-chart"
              className="text-sm font-medium text-gray-700 cursor-pointer"
            >
              Show Chart Labels
            </Label>
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
          <FileText className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
        <Button variant="outline" className="flex-1">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>
    </div>
  );
};

export default ControlPanel;
