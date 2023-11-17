import React, { useState, useEffect } from "react";
import { fetchPictureOfTheDay } from "../api/Api";
import s from "./pictureoftheday.module.scss";

function PictureOfTheDay({ date: selectedDate }) {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() => {
    setPictureData(null); 
    async function loadPictureOfTheDay() {
      try {
        const response = await fetchPictureOfTheDay(selectedDate);
        setPictureData(response);
      } catch (error) {
        console.error("Помилка запиту до APOD API:", error);
      }
    }
    loadPictureOfTheDay();
  }, [selectedDate]);

  if (!pictureData) {
    return <div className={s.pictload}>Завантаження...</div>;
  }

  const { title, date, url, explanation } = pictureData;

  return (
    <div className={s.wrapper}>
      <div className={s.explanation}>
        <h2>{title}</h2>
        <p className={s.date}>{date}</p>
        <p>{explanation}</p>
      </div>
      <div className={s.picture} >
        <img src={url} alt={title} />
      </div>
    </div>
  );
}

export default PictureOfTheDay;
