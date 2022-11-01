export const CardAlimento = ({ nombre, descripcion, calorias, porcion }) => (
  <div
    className="block p-6 w-full bg-sz-ligth-green rounded-lg shadow-md hover:bg-sz-secondary hover:text-sz-white"
  >
    <p className="mb-2 text-base font-bold tracking-tight text-sz-dark hover:text-sz-white">
      {nombre} - {descripcion}
    </p>
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
