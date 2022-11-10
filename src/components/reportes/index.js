// import { useState } from 'react';
import { Link } from 'react-router-dom';

// import { formatearFecha } from '../../utils';
import { BarChart } from './bar';

import { useReporte } from '../../hooks';


export const Reportes = () => {

  // const [filtroFecha, setFiltroFecha] = useState({
  //   fecha: formatearFecha(new Date()),
  //   texto: 'Hoy',
  // });


  // const handleChange = (e) => {
  //   setFiltroFecha({
  //     fecha: e.target.value,
  //     texto: e.target.value,
  //   });
  //   getByUsuario(e.target.value);
  // }
  const { nutrientes } = useReporte();
  const { labels, calorias, carbohidratos, proteinas, grasas } = nutrientes;


  return (
    <section className='container mx-auto p-4'>
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold">Reportes</h1>
        <div className='flex justify-center items-center'>
          <Link to="/" className='mr-4'>
            <button
              type="button"
              className="text-sz-white bg-sz-primary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-2 py-2 text-center my-2"
            >
              Regresar
            </button>
          </Link>
          {/* <input
            type="date"
            className="w-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={filtroFecha.fecha}
            onChange={handleChange}
          /> */}
        </div>
      </div>
      <div className='container mx-auto p-4 md:w-2/4'>
        <BarChart
          titleChart="Calorías Consumidas"
          labelDataset="Calorías"
          labels={labels}
          dataDatasets={calorias}
          color="#107329"
        />
        <BarChart
          titleChart="Carbohidratos Consumidas"
          labelDataset="Carbohidratos"
          labels={labels}
          dataDatasets={carbohidratos}
          color="#012611"
        />
        <BarChart
          titleChart="Proteinas Consumidas"
          labelDataset="Proteinas"
          labels={labels}
          dataDatasets={proteinas}
          color="#ffb05a"
        />
        <BarChart
          titleChart="Grasas Consumidas"
          labelDataset="Grasas"
          labels={labels}
          dataDatasets={grasas}
          color="#8C0813"
        />
      </div>
    </section>
  )
}