
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
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-card-foreground">
            Report Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <DateRangePicker />
          <StationSelector />
          
          <div className="flex items-center space-x-3 pt-4 border-t border-border">
            <Checkbox
              id="show-chart"
              defaultChecked={true}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary border-border"
            />
            <Label
              htmlFor="show-chart"
              className="text-sm font-medium text-foreground cursor-pointer"
            >
              Show Chart Labels
            </Label>
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
          <FileText className="mr-2 h-4 w-4" />
          Generate Report
        </Button>
        <Button variant="outline" className="flex-1 border-border text-foreground hover:bg-muted">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>
    </div>
  );
};

export default ControlPanel;
