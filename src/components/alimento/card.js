export const CardAlimento = ({ nombre, descripcion, calorias, porcion }) => (
  <div
    className="block p-6 w-full bg-sz-gray rounded-lg shadow-md hover:bg-sz-secondary"
  >
    <h5 className="mb-2 text-base font-bold tracking-tight text-sz-white dark:text-sz-white">
      {nombre} - {descripcion}
    </h5>
    <div className="flex">
      <p className="text-sz-primary font-bold">
        {calorias} kcal
      </p>
      {porcion && <div className="font-bold ml-2 flex">
        .
        <p className="ml-2 text-base">{porcion}</p>
      </div>}
    </div>
  </div>
)
