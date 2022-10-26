import { Calorias } from './calorias';
import { Graficas } from './graficas';
import { Alimentos } from './alimentos';

export const Dashboard = () => {
  return (
    <section className='container mx-auto p-4'>
      <Calorias />
      <Graficas />
      <Alimentos />
    </section>
  )
}
