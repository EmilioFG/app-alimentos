
import { useState } from 'react';

import { signIn, logIn } from '../api';


export const useUsuarios = () => {
  const [isLoading, setIsLoading] = useState(true);


  const singInUsuario = async (usuario) => {
    await signIn(usuario);
    setIsLoading(false);
  }

  const logInUsuario = async (usuario) => {
    await logIn(usuario);
    setIsLoading(false);
  }


  return {
    isLoading,
    logInUsuario,
    singInUsuario,
  }
}
