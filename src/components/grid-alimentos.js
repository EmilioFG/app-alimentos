import { Link } from 'react-router-dom';

import { useAlimentos } from '../hooks/useAlimentos';


export const GridAlimentos = () => {

  const { alimentos, getByName } = useAlimentos();

  const handleSearchProduct = async (e) => {
    await getByName(e.target.value);
  }


  return (
    <>
      <div className="relative px-4 py-3">
        <div className="flex absolute inset-y-0 left-0 items-center pl-7 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-sz-white dark:text-sz-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-sz-white dark:text-sz-white bg-sz-gray rounded-lg border border-sz-gray active:bg-sz-gray"
          placeholder="Buscar Producto"
          onChange={handleSearchProduct}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-14 px-4 py-3">
        {alimentos.map((alimento) => (
          <Link
            to={{ pathname: `/alimento/${alimento.id}` }}
            key={alimento.id}
          >
            <div
              className="block p-6 w-full bg-sz-gray rounded-lg shadow-md hover:bg-sz-secondary"
            >
              <h5 className="mb-2 text-lg font-bold tracking-tight text-sz-white dark:text-sz-white">
                {alimento.nombre} - {alimento.descripcion}
              </h5>
              <p className="text-sz-primary font-bold">
                {alimento.calorias} kcal
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}