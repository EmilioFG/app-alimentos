import { useEffect, useState } from 'react';

import { getPorciones } from '../api';



export const usePorciones = () => {
  const [porciones, setPorciones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get();
  }, []);


  const get = async () => {
    const response = await getPorciones();
    setPorciones(response || []);
    setIsLoading(false);
  }


  return {
    porciones,
    isLoading,
  }
}
