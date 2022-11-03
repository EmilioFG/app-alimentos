export const Calorias = ({ informacionCalorica, handleChange, filtroFecha }) => {

  const { metaCalorica, caloriasConsumidas, caloriasRestantes, porcentajeCaloriasConsumidas } = informacionCalorica;

  const enMeta = porcentajeCaloriasConsumidas < 100;


  return (
    <>
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold">{filtroFecha.texto}</h1>
        <input
          type="date"
          className="w-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={filtroFecha.fecha}
          onChange={handleChange}
        />
      </div>
      {enMeta ? (
        <p className="pt-6 pb-2">
          Todavía puedes comer {caloriasRestantes} calorías
        </p>
      ) : (
        <p className="pt-6 pb-2">
          Objetivo diario superado en {caloriasConsumidas - metaCalorica} calorías
        </p>
      )}
      <div className="w-full bg-sz-gray rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`bg-sz-primary h-2.5 rounded-full`}
          style={{ width: `${!enMeta ? 100 : porcentajeCaloriasConsumidas}%` }}
        >
        </div>
      </div>
      <div className="flex justify-between py-2">
        <p className={`${!enMeta ? 'text-sz-red' : 'text-sz-primary'}`}>
          {caloriasConsumidas} calorías consumidas
        </p>
        <p>Meta: {metaCalorica}</p>
      </div>
    </>
  )
}