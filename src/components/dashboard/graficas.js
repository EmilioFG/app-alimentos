import { CircleProgress } from 'react-gradient-progress'

import { META_CARBOHIDRATOS, META_PROTEINA, META_GRASA } from '../../constants';


export const Graficas = ({
  carbohidratosConsumidos,
  proteinasConsumidas,
  grasaConsumida,
  porcentajeCarbohidratosConsumidos,
  porcentajeProteinasConsumidas,
  porcentajeGrasaConsumida,
}) => {

  const carbohidratos = (porcentajeCarbohidratosConsumidos <= 100) ? porcentajeCarbohidratosConsumidos : 100;
  const proteinas = (porcentajeProteinasConsumidas <= 100) ? porcentajeProteinasConsumidas : 100;
  const grasas = (porcentajeGrasaConsumida <= 100) ? porcentajeGrasaConsumida : 100;


  return (
    <section className='flex justify-between py-8 md:w-3/4 md:m-auto'>
      <section className='text-center'>
        <CircleProgress
          percentage={carbohidratos}
          strokeWidth={10}
          width={125}
          fontColor="f0f0f0"
          primaryColor={['#ffb05a', '#ffb05a']}
          secondaryColor="#7575757d"
        />
        <h2 className='font-bold text-sz-yellow md:text-xl'>Carbohidratos</h2>
        <h2 className='font-bold text-sz-yellow md:text-xl'>{carbohidratosConsumidos} / {META_CARBOHIDRATOS}</h2>
      </section>
      <section className='text-center'>
        <CircleProgress
          percentage={proteinas}
          strokeWidth={10}
          width={125}
          fontColor="f0f0f0"
          primaryColor={['#f85f6a', '#f85f6a']}
          secondaryColor="#7575757d"
        />
        <h2 className='font-bold text-sz-ligth-red md:text-xl'>Proteínas</h2>
        <h2 className='font-bold text-sz-ligth-red md:text-xl'>{proteinasConsumidas} / {META_PROTEINA}</h2>
      </section>
      <section className='text-center'>
        <CircleProgress
          percentage={grasas}
          strokeWidth={10}
          width={125}
          fontColor="f0f0f0"
          primaryColor={['#5f6af8', '#5f6af8']}
          secondaryColor="#7575757d"
        />
        <h2 className='font-bold text-sz-blue md:text-xl'>Grasas</h2>
        <h2 className='font-bold text-sz-blue md:text-xl'>{grasaConsumida} / {META_GRASA}</h2>
      </section>
    </section>
  )
}
