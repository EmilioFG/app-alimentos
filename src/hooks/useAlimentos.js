import { useEffect, useState } from 'react';

import { getAlimentos, getAlimentosByName, getAlimentoById } from '../api';



export const useAlimentos = (id) => {
  const [alimentos, setAlimentos] = useState([]);
  const [alimento, setAlimento] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !id ? get() : getById(id);
  }, [id]);


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

  const getById = async (id) => {
    const response = await getAlimentoById(id);
    setAlimento(response);
    setIsLoading(false);
  }


  return {
    alimentos,
    alimento,
    isLoading,
    getByName,
  }
}
