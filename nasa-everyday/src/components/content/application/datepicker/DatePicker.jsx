import React, { useState, forwardRef  } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk'; 
import s from "./datepicker.module.scss";

registerLocale('uk', uk);

function MyDatePicker({ onDateChange }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);


    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (onDateChange) {
            const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
            onDateChange(formattedDate);
        }
    };
    
    

    const minDate = new Date(1996, 0, 1);
    const maxDate = new Date(); 
    return (
        <DatePicker
            className={`${s.datepicker} ${isDatePickerVisible ? 'visible' : ''}`}
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy" 
            placeholderText="Виберіть дату"
            locale="uk" 
            showMonthDropdown
            showYearDropdown
            yearDropdownItemNumber={27}
            scrollableYearDropdown
            minDate={minDate} 
            maxDate={maxDate} 
            withPortal
        />
    );
}

export default MyDatePicker;
