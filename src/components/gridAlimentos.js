import { Link } from 'react-router-dom';

import { useAlimentos } from '../hooks';

import { CardAlimento } from './alimento/card';


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
            className="w-5 h-5"
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
          className="block p-4 pl-10 w-full text-sm text-sz-black dark:text-sz-black bg-sz-ligth-green rounded-lg"
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
            <CardAlimento {...alimento} />
          </Link>
        ))}
      </div>
    </>
  )
}
