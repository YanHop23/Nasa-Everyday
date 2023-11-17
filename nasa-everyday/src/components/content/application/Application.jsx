import React, { useState } from "react";
import PictureOfTheDay from "./pictureoftheday/PictureOfTheDay";
import MyDatePicker from "./datepicker/DatePicker";
import s from "./application.module.scss";

const Application = () => {
    const [selectedDate, setSelectedDate] = useState("2023-10-04");
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        setIsDatePickerVisible(false);
    };

    const toggleDatePicker = () => {
        setIsDatePickerVisible(!isDatePickerVisible); 
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    return (
        <div className={s.wrapper}>
            <button className={s.searchblock} onClick={toggleDatePicker}>
                <div className={s.searchblock__pict}></div>
            </button>
            <div className={s.datepicker}>
                {isDatePickerVisible && (<MyDatePicker onDateChange={handleDateChange}/>)}
            </div>
            <PictureOfTheDay date={selectedDate} />
        </div>
    );
};

export default Application;
