import { useParams, Link } from 'react-router-dom';

import { useAlimentos } from '../../hooks';

import { InfoAlimento } from './info';
import { FormAlimento } from './form';



export const Alimento = () => {

  const params = useParams();
  const { alimento } = useAlimentos(params?.id || null);


  return (
    <section className='p-4 h-screen md:w-3/4 md:m-auto'>
      <Link title='regresar' to='/alimentos'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </Link>
      {alimento && <div className="p-4 text-center">
        <InfoAlimento {...alimento} />
        <FormAlimento id={params?.id}/>
      </div>}
    </section>
  )
}
