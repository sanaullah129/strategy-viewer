import React from 'react';

interface DateDropdownProps {
  dates: string[];
  selectedDate: string;
  onChange: (date: string) => void;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ dates, selectedDate, onChange }) => {
  return (
    <div className="select-wrapper">
      <select value={selectedDate} onChange={(e) => onChange(e.target.value)}>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateDropdown;
