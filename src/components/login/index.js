import { FormLogin } from './Form';


export const Login = () => {
  return (
    <section className='p-4 h-screen md:w-3/4 md:m-auto'>
      <h4 className='text-center font-bold text-xl mt-4 md:text-4xl'>Iniciar Sesión</h4>
      <h2 className='text-center text-sm py-4 md:text-lg'>Hola !! Que bueno verte de nuevo.</h2>
      <FormLogin />
    </section>
  )
}
