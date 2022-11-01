import { Link } from 'react-router-dom';

import { CardAlimento } from '../alimento/card';


export const Alimentos = ({ ingestas = []}) => {
  return (
    <>
      {!ingestas.length && (
        <div className="flex justify-center items-center w-full">
          <label className="flex flex-col justify-center items-center w-full h-64 rounded-lg border-2 border-sz-gray border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-sz-secondary">
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
              <p className="mb-2 text-sm text-sz-white hover:text-sz-white">
                <span className="font-semibold">Agregue alimentos</span>
              </p>
            </div>
          </label>
        </div>
      )}

      {ingestas.map((ingesta) => (
        <div className='my-4' key={ingesta.tipoIngesta}>
          <h1 className='font-bold'>{ingesta.tipoIngesta}</h1>
          <p className='text-sm text-sz-primary mb-2'>{ingesta.tipoIngesta} {ingesta.calorias.toFixed} calorías ({ingesta.porcentajeCalorias}%)</p>
          {ingesta.alimentos.map(({ alimento, descripcionalimento, calorias, porcion }) => (
            <CardAlimento
              key={alimento}
              nombre={alimento}
              descripcion={descripcionalimento}
              calorias={calorias}
              porcion={porcion}
            />
          ))}
        </div>
      ))}

      <div className="flex justify-end pt-4">
        <Link to="alimentos">
          <button
            type="button"
            className="text-white bg-sz-primary hover:bg-sz-secondary focus:ring-4 focus:outline-none focus:sz-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="sr-only">Icon description</span>
          </button>
        </Link>
      </div>
    </>
  )
}