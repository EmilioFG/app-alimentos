import { useEffect, useState } from 'react';

import { saveIngesta, getIngestaByUsuario } from '../api';


export const useIngestas = () => {
  const [ingestas, setIngestas] = useState([]);
  const [informacionCalorica, setInformacionCalorica] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getByUsuario();
  }, []);

  const save = async (ingesta) => {
    await saveIngesta(ingesta);
    setIsLoading(false);
  }

  const getByUsuario = async (fecha) => {
    const response = await getIngestaByUsuario(fecha);

    setIngestas(response.ingesta || []);
    setInformacionCalorica(response.informacionCalorica);
    setIsLoading(false);
  }


  return {
    ingestas,
    informacionCalorica,
    isLoading,
    save,
    getByUsuario,
  }
}
