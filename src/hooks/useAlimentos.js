import { useEffect, useState } from 'react';

import { getAlimentos, getAlimentosByName } from '../api/alimentos';



export const useAlimentos = () => {
  const [alimentos, setAlimentos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const response = await getAlimentos();
    setAlimentos(response || []);
    setIsLoading(false);
  }

  const getByName = async (nombre) => {
    setIsLoading(true);

    if (!nombre) {
      return await get();
    }

    const response = await getAlimentosByName(nombre);
    setAlimentos(response || []);
    setIsLoading(false);
  }

  return {
    alimentos,
    isLoading,
    getByName,
  }
}
