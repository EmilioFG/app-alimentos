import axios from 'axios';

import CONFIG from '../config';

import { Notification } from '../components/';


export const getAlimentos = async () => {
  try {
    const { data } = await axios.get(
      `${CONFIG.REACT_APP_API}/alimentos`,
      CONFIG.PRIVATE_HEADERS
    );

    return data;
  } catch (error) {
    Notification(error.response.data.message, 'error');
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
    Notification(error.response.data.message, 'error');
    throw error;
  }
}

export const getAlimentoById = async (id) => {
  try {
    const { data } = await axios.get(
      `${CONFIG.REACT_APP_API}/alimentos/${id}`,
      CONFIG.PRIVATE_HEADERS
    );

    return data;
  } catch (error) {
    Notification(error.response.data.message, 'error');
    throw error;
  }
}
