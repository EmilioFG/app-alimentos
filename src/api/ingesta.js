import axios from 'axios';

import CONFIG from '../config';

import { Notification } from '../components';


export const saveIngesta = async (body) => {
  try {
    await axios.post(
      `${CONFIG.REACT_APP_API}/ingesta`,
      body,
      CONFIG.PRIVATE_HEADERS
    );

    Notification('Ingesta agregada con éxito', 'success');
  } catch (error) {
    Notification(error.response.data.message, 'error');
    throw error;
  }
}

export const getIngestaByUsuario = async (fecha) => {
  try {
    const { data } = await axios.get(
      `${CONFIG.REACT_APP_API}/ingesta?fecha=${fecha}`,
      CONFIG.PRIVATE_HEADERS
    );

    return data;
  } catch (error) {
    Notification(error.response.data.message, 'error');
    throw error;
  }
}
