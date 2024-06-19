import React, { useState } from 'react';
import Toggle from './components/Toggle';
import DateDropdown from './components/DateDropdown';
import StrategyCards from './components/StrategyCards';
import { dateArray, strategyArray } from './utils/data';
import './App.css'

const App: React.FC = () => {
  const [selectedView, setSelectedView] = useState<string>('Bullish');
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const strategies = strategyArray.find((item) => item.View === selectedView)?.Value || {};

  return (
    <div className="app">
      <Toggle selectedView={selectedView} onChange={setSelectedView} />
      <DateDropdown dates={dateArray} selectedDate={selectedDate} onChange={setSelectedDate} />
      <StrategyCards strategies={strategies} selectedDate={selectedDate} />
    </div>
  );
};

export default App;