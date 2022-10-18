const info = (value, name, className) => (
  <div>
    <p className={`font-bold ${className}`}>{value}</p>
    <p className='font-bold text-sz-white text-xs'>{name}</p>
  </div>
)

export const InfoAlimento = ({ nombre, descripcion, calorias, carbohidratos, proteinas, grasas }) => (
  <>
    <h1 className="text-xl font-bold text-sz-white py-4">{nombre} {descripcion}</h1>
    <div className='flex justify-between py-6'>
      {info(calorias, "Calorías", "text-sz-primary")}
      {info(carbohidratos, "Carbohidratos (g)", "text-sz-ligth-green")}
      {info(proteinas, "Proteína (g)", "text-sz-yellow")}
      {info(grasas, "Grasa (g)", "text-sz-ligth-red")}
    </div>
  </>
)
