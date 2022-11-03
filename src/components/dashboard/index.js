import { useState } from 'react';

import { Calorias } from './calorias';
import { Graficas } from './graficas';
import { Alimentos } from './alimentos';

import { useIngestas } from '../../hooks';
import { formatearFecha } from '../../utils';


export const Dashboard = () => {

  const { ingestas, informacionCalorica, getByUsuario } = useIngestas(formatearFecha(new Date()));

  const [filtroFecha, setFiltroFecha] = useState({
    fecha: formatearFecha(new Date()),
    texto: 'Hoy',
  });


  const handleChange = (e) => {
    setFiltroFecha({
      fecha: e.target.value,
      texto: e.target.value,
    });
    getByUsuario(e.target.value);
  }


  return (
    <section className='container mx-auto p-4'>
      <Calorias
        filtroFecha={filtroFecha}
        handleChange={handleChange}
        informacionCalorica={informacionCalorica}
      />
      <Graficas {...informacionCalorica} />
      <Alimentos ingestas={ingestas} />
    </section>
  )
}
