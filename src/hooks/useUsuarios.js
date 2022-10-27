
import { useState } from 'react';

import { signIn } from '../api';


export const useUsuarios = () => {

  const [isLoading, setIsLoading] = useState(true);

  const singInUsuario = async (usuario) => {
    await signIn(usuario);
    setIsLoading(false);
  }

  return {
    isLoading,
    singInUsuario,
  }
}
