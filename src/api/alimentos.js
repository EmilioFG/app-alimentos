import axios from 'axios';

import CONFIG from '../config';

import { Notification } from '../components/ui/notification';


export const getAlimentos = async () => {
  try {
    const { data } = await axios.get(
      `${CONFIG.REACT_APP_API}/alimentos`,
      CONFIG.PRIVATE_HEADERS
    );

    return data;
  } catch (error) {
    Notification(error, 'error');
    throw error;
  }
}

export const getAlimentosByName = async (nombre) => {
  try {
    const { data } = await axios.get(
      `${CONFIG.REACT_APP_API}/alimentos/nombre?nombre=${nombre}`,
      CONFIG.PRIVATE_HEADERS
    );

    return data;
  } catch (error) {
    Notification(error, 'error');
    throw error;
  }
}
