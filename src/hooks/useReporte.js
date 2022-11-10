import { useEffect, useState } from 'react';

import { getNutrientes } from '../api';



export const useReporte = () => {
  const [nutrientes, setNutrientes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get();
  }, []);


  const get = async () => {
    const response = await getNutrientes();
    setNutrientes(response || []);
    setIsLoading(false);
  }


  return {
    nutrientes,
    isLoading,
  }
}
