
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Eye, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReportPreview = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center">
          <FileText className="mr-2 h-5 w-5" />
          Report Preview
        </CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 rounded-lg p-8 min-h-[600px] flex flex-col items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                GENSER POWER EXPORT DAILY OPERATIONS REPORT
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Configure your report settings and click "Generate Report" to preview
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline">PDF Report</Badge>
              <Badge variant="outline">Daily Operations</Badge>
              <Badge variant="outline">Sep 1-2, 2024</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportPreview;
