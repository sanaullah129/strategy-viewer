import React from 'react';

interface ToggleProps {
  selectedView: string;
  onChange: (view: string) => void;
}

const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];

const Toggle: React.FC<ToggleProps> = ({ selectedView, onChange }) => {
  return (
    <div className="toggle">
      {views.map((view) => (
        <button
          key={view}
          className={`toggle-button ${selectedView === view ? 'active' : ''}`}
          onClick={() => onChange(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
