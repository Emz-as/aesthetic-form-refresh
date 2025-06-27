
import React from 'react';
import { 
  BarChart3, 
  Calendar, 
  Database, 
  FileText, 
  Settings, 
  Activity,
  ChevronDown,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Sidebar = () => {
  const [isTelemeryOpen, setIsTelemeryOpen] = React.useState(true);
  const [isSystemOpen, setIsSystemOpen] = React.useState(false);

  const menuItems = [
    { icon: BarChart3, label: 'Executive Dashboard', active: false },
    { icon: Activity, label: 'Power Apps', active: false },
  ];

  const telemeryItems = [
    { label: 'Dashboard', active: true },
    { label: 'Daily Report', active: false },
    { label: 'Nominated Values', active: false },
    { label: 'Load Profile One', active: false },
    { label: 'Load Profile Two', active: false },
    { label: 'Billing Data Profile', active: false },
    { label: 'Data Loader', active: false },
  ];

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-lg font-semibold text-sidebar-foreground">Main Navigator</h2>
      </div>
      
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sidebar-foreground/60 h-4 w-4" />
          <Input 
            placeholder="Type search value here..." 
            className="pl-10 text-sm bg-sidebar-accent border-sidebar-border text-sidebar-foreground placeholder:text-sidebar-foreground/60"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-2 space-y-1">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start text-left font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                item.active && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Button>
          ))}

          <Collapsible open={isTelemeryOpen} onOpenChange={setIsTelemeryOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between text-left font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <div className="flex items-center">
                  <Database className="mr-3 h-4 w-4" />
                  Telemetry
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isTelemeryOpen && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-7 space-y-1">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between text-left font-normal text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    Entries
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-4 space-y-1">
                  {telemeryItems.map((item, index) => (
                    <Button
                      key={index}
                      variant={item.active ? "secondary" : "ghost"}
                      size="sm"
                      className={cn(
                        "w-full justify-start text-left font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        item.active && "bg-sidebar-primary text-sidebar-primary-foreground"
                      )}
                    >
                      {item.label}
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>

          <Button variant="ghost" className="w-full justify-start text-left font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <Settings className="mr-3 h-4 w-4" />
            Setups
          </Button>

          <Button variant="ghost" className="w-full justify-start text-left font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <FileText className="mr-3 h-4 w-4" />
            ElogBook
          </Button>

          <Collapsible open={isSystemOpen} onOpenChange={setIsSystemOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between text-left font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <div className="flex items-center">
                  <Settings className="mr-3 h-4 w-4" />
                  System Administration
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isSystemOpen && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
          </Collapsible>

          <Button variant="ghost" className="w-full justify-start text-left font-normal text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-xs">?</span>
              </div>
              Help Desk
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
