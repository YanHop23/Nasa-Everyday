import axios from 'axios';

const API_KEY = 'P1uWPfRoU989rusvpjJpKCGyBon6ed4isCMXj7pt';
const APOD_API_BASE_URL = 'https://api.nasa.gov/planetary/apod';

async function fetchPictureOfTheDay(date) {
    try {
        const response = await axios.get(`${APOD_API_BASE_URL}?api_key=${API_KEY}&date=${date}`);
        return response.data;
    } catch (error) {
        console.error('Помилка запиту до APOD API:', error);
        throw error;
    }
}

export { fetchPictureOfTheDay };
