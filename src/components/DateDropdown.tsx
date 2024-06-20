import React, { useState } from 'react';

interface DateDropdownProps {
  dates: string[];
  selectedDate: string;
  onChange: (date: string) => void;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ dates, selectedDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (date: string) => {
    onChange(date);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="selected" onClick={() => setIsOpen(!isOpen)}>
        {selectedDate}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="options">
          {dates.map((date) => (
            <div key={date} className="option" onClick={() => handleSelect(date)}>
              {date}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
