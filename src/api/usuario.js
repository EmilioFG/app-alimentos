import axios from 'axios';

import CONFIG from '../config';

import { Notification } from '../components';


export const signIn = async (body) => {
  try {
    await axios.post(
      `${CONFIG.REACT_APP_API}/usuario/signin`,
      body,
      CONFIG.PRIVATE_HEADERS
    );

    Notification('Usuario Registrado con Éxito', 'success');
  } catch (error) {
    Notification(error.response.data.message, 'error');
    throw error;
  }
}

export const logIn = async (body) => {
  try {
    const { data } = await axios.post(
      `${CONFIG.REACT_APP_API}/usuario/login`,
      body,
      CONFIG.PRIVATE_HEADERS
    );
    sessionStorage.setItem(CONFIG.REACT_APP_SESSION_SECRET, JSON.stringify(data.token));
  } catch (error) {
    Notification(error.response.data.message, 'error');
    throw error;
  }
}
