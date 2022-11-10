import axios from 'axios';

import CONFIG from '../config';

import { Notification } from '../components';


export const getNutrientes = async () => {
  try {
    const { data } = await axios.get(
      `${CONFIG.REACT_APP_API}/reportes`,
      CONFIG.PRIVATE_HEADERS
    );

    return data;
  } catch (error) {
    Notification(error.response.data.message, 'error');
    throw error;
  }
}

