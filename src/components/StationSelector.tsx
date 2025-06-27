
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const StationSelector = () => {
  const stations = [
    { id: 'chirano', name: 'Chirano', checked: true },
    { id: 'edikan', name: 'Edikan', checked: false },
    { id: 'wassa', name: 'Wassa', checked: true },
    { id: 'damang', name: 'Damang', checked: false },
    { id: 'tarkwa', name: 'Tarkwa', checked: false },
  ];

  const meters = [
    { id: '345-ch', name: '345-Ch (Tarkw...', checked: false },
    { id: '651-ws', name: '651-Ws (Tark...', checked: false },
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">Stations</Label>
        <div className="space-y-3">
          {stations.map((station) => (
            <div key={station.id} className="flex items-center space-x-3">
              <Checkbox
                id={station.id}
                defaultChecked={station.checked}
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <Label
                htmlFor={station.id}
                className="text-sm font-normal text-gray-700 cursor-pointer"
              >
                {station.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <Label className="text-sm font-medium text-gray-700">Meters</Label>
        <div className="space-y-3">
          {meters.map((meter) => (
            <div key={meter.id} className="flex items-center space-x-3">
              <Checkbox
                id={meter.id}
                defaultChecked={meter.checked}
                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
              />
              <Label
                htmlFor={meter.id}
                className="text-sm font-normal text-gray-700 cursor-pointer"
              >
                {meter.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StationSelector;
