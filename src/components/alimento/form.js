import { useState } from 'react';

import { usePorciones, useTiposIngesta } from '../../hooks';


export const FormAlimento = ({ handleSubmit }) => {

  const { porciones } = usePorciones();
  const { tiposIngesta } = useTiposIngesta();

  const [form, setForm] = useState({
    usuario: 'milo',
    cantidad: 1,
    porcion: 1,
    tipoIngesta: 1,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }


  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <input
          type="number"
          placeholder="Cantidad"
          name="cantidad"
          value={form.cantidad}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <select
          name="porcion"
          onChange={handleChange}
          value={form.porcion}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {porciones.map(({ id, nombre }) => (
            <option key={id} value={id}>{nombre}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <select
          name="tipoIngesta"
          onChange={handleChange}
          value={form.tipoIngesta}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {tiposIngesta.map(({ id, nombre }) => (
            <option key={id} value={id}>{nombre}</option>
          ))}
        </select>
      </div>
      <div className='absolute bottom-12 left-[0] right-[0]'>
        <button
          type="button"
          onClick={(e) => handleSubmit(form)}
          className="text-sz-white bg-sz-primary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-5 py-4 text-center my-4"
        >
          Añadir al diario
        </button>
      </div>
    </>
  )
}
