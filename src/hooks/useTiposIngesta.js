import { useEffect, useState } from 'react';

import { getTiposIngesta } from '../api/tiposingesta';



export const useTiposIngesta = () => {
  const [tiposIngesta, setTiposIngesta] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get();
  }, []);


  const get = async () => {
    const response = await getTiposIngesta();
    setTiposIngesta(response || []);
    setIsLoading(false);
  }


  return {
    tiposIngesta,
    isLoading,
  }
}
