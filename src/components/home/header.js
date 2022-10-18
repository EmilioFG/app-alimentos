export const Header = () => {

  const caloriasRestantes = 0;

  return (
    <>
      <h1 className="text-2xl font-bold">Hoy</h1>
      <p className="pt-6 pb-2">
        Todavía puedes comer {caloriasRestantes} calorías
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
      </div>
      <div className="flex justify-between py-2">
        <p>0 calorías consumidas</p>
        <p>Meta: 2000</p>
      </div>
    </>
  )
}