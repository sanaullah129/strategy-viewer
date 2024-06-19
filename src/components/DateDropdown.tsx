import React from 'react';

interface DateDropdownProps {
  dates: string[];
  selectedDate: string;
  onChange: (date: string) => void;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ dates, selectedDate, onChange }) => {
  return (
    <select value={selectedDate} onChange={(e) => onChange(e.target.value)}>
      {dates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
};

export default DateDropdown;
