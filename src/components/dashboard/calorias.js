import { useIngestas } from '../../hooks';

export const Calorias = () => {

  const { informacionCalorica } = useIngestas();
  const { metaCalorica, caloriasConsumidas, caloriasRestantes, porcentajeCaloriasConsumidas } = informacionCalorica;

  const enMeta = porcentajeCaloriasConsumidas < 100;


  return (
    <>
      <h1 className="text-2xl font-bold">Hoy</h1>
      <p className="pt-6 pb-2">
        Todavía puedes comer {caloriasRestantes} calorías
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`${!enMeta ? 'bg-sz-red' : 'bg-sz-primary'} h-2.5 rounded-full`}
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