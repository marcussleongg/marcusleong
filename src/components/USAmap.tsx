"use client";

import { useState } from 'react';
import { USAMap, USAStateAbbreviation } from '@mirawision/usa-map-react';
import { StateData } from '@/lib/types';

interface USAMapComponentProps {
  statesData: StateData[];
}

const USAMapComponent = ({ statesData }: USAMapComponentProps) => {
  const [selectedState, setSelectedState] = useState<USAStateAbbreviation | null>(null);

  const stateContent = statesData.reduce((acc, stateData) => {
    acc[stateData.state] = stateData;
    return acc;
  }, {} as Record<USAStateAbbreviation, StateData>);
  
  const visitedStates = statesData.map(state => state.state);

  const handleStateClick = (stateAbbreviation: USAStateAbbreviation) => {
    setSelectedState(stateAbbreviation);
  };

  const customStates = Object.fromEntries(
    visitedStates.map(state => [state, {
      fill: '#22c55e',
      onClick: handleStateClick,
    }])
  );

  const selectedStateData = selectedState ? stateContent[selectedState] : null;

  return (
    <div className="flex flex-col [@media(hover:hover)_and_(min-width:1080px)]:flex-row w-full gap-4 [@media(hover:hover)_and_(min-width:1080px)]:gap-8">
      <div className="[@media(hover:hover)_and_(min-width:1080px)]:flex-shrink-0">
        <p className="mb-8">My goal is to visit <strong>all 50 states</strong> before I graduate (hopeful I know). Click on visited states to see my experience!</p>
        <div className="w-full max-w-full">
          <USAMap 
            customStates={customStates}
          />
        </div>
      </div>
      <div className="[@media(hover:hover)_and_(min-width:1080px)]:flex-1">
        {selectedStateData ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              {selectedStateData.name}
            </h2>
            
            <p className="mb-3">
              Visited: {selectedStateData.dates.join(', ')}
            </p>
            
            <div 
              className="mb-4 prose prose-sm max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedStateData.content }}
            />
          </div>
        ) : null 
        }
      </div>
    </div>
  );
};

export default USAMapComponent;