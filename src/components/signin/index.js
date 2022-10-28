import { Link } from 'react-router-dom';

import { FormSingIn } from './form';


export const SignIn = () => {
  return (
    <section className='p-4 h-screen md:w-3/4 md:m-auto'>
      <Link title='regresar' to='/login'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </Link>
      <h4 className='text-center font-bold text-xl md:text-4xl'>Registrarse</h4>
      <h2 className='text-center text-sm py-4 md:text-lg'>Complete todos los campos para poder crear un usuario.</h2>
      <FormSingIn />
    </section>
  )
}
