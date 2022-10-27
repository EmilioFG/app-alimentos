import axios from 'axios';

import CONFIG from '../config';

import { Notification } from '../components';


export const signIn = async (body) => {
  try {
    await axios.post(
      `${CONFIG.REACT_APP_API}/usuario/sign-in`,
      body,
      CONFIG.PRIVATE_HEADERS
    );

    Notification('Usuario Registrado con Éxito', 'success');
  } catch (error) {
    Notification(error.response.data.message, 'error');
    throw error;
  }
}
