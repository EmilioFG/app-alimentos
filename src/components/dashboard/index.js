import { Calorias } from './Calorias';
import { Graficas } from './Graficas';
import { Alimentos } from './Alimentos';

export const Dashboard = () => {
  return (
    <section className='container mx-auto p-4'>
      <Calorias />
      <Graficas />
      <Alimentos />
    </section>
  )
}
