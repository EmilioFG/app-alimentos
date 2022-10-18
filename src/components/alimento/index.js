import { useParams, useNavigate, Link } from 'react-router-dom';

import { useAlimentos, useIngestas } from '../../hooks';

import { InfoAlimento } from './info';
import { FormAlimento } from './form';



export const Alimento = (props) => {

  const params = useParams();
  const history = useNavigate();

  const { alimento } = useAlimentos(params?.id || null);
  const { save } = useIngestas();


  const handleSubmit = async (e) => {
    const payload = {
      ...e,
      alimento: params.id,
    };
    await save(payload);
    history('/alimentos');
  }


  return (
    <section className='p-4 h-screen md:w-3/4 md:m-auto'>
      <Link title='regresar' to='/alimentos'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </Link>
      {alimento && <div className="p-4 text-center">
        <InfoAlimento {...alimento} />
        <FormAlimento handleSubmit={handleSubmit} />
      </div>}
    </section>
  )
}
