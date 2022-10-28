import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { useUsuarios } from '../../hooks';

import { Field } from '../forms';
import { validationSchema } from './validationSchema';


export const FormLogin = () => {

  const history = useNavigate();
  const { logInUsuario } = useUsuarios();

  const initialValues = {
    usuario: "",
    password: "",
  };

  const onSubmit = async (values) => {
    await logInUsuario(values);
    history('/')
    window.location.reload(true)
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });


  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-4 w-full group text-sz-dark">
          <Field
            type="text"
            name="usuario"
            placeholder="Ingrese un Usuario"
            value={values.usuario}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.usuario}
            touched={touched.usuario}
          />
        </div>
        <div className="relative z-0 mb-4 w-full group">
          <Field
            type="password"
            name="password"
            placeholder="Ingrese una Contraseña"
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.password}
            touched={touched.password}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-sz-white bg-sz-primary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-5 py-4 text-center my-4"
        >
          Iniciar Sesión
        </button>
      </div>
      <Link title='Registrarse' to='/signin'>
        <h2 className='text-right text-sm text-sz-green py-4 pr-4 md:text-lg'>Registrate</h2>
      </Link>
    </form>
  )
}
