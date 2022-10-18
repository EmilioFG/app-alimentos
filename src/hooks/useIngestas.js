import { useEffect, useState } from 'react';

import { saveIngesta } from '../api/ingesta';



export const useIngestas = (ingesta) => {
  const [ingestas, setIngestas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const save = async (ingesta) => {
    await saveIngesta(ingesta);
    setIsLoading(false);
  }


  return {
    ingestas,
    save,
  }
}
