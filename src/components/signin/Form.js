import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { useUsuarios } from '../../hooks';

import { Notification } from '../ui';
import { Field } from '../forms';
import { validationSchema } from './ValidationSchema';


export const FormSingIn = () => {

  const history = useNavigate();
  const { singInUsuario } = useUsuarios();

  const initialValues = {
    usuario: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    peso: "",
    estatura: "",
    fechanacimiento: "",
    genero: "H",
  };

  const onSubmit = async (values) => {
    const { password, confirmPassword } = values;
    if (password !== confirmPassword) return Notification("Las contraseñas deben ser iguales.", "error");

    await singInUsuario(values);
    history('/login');
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
            type="text"
            name="nombre"
            placeholder="Ingrese un Nombre"
            value={values.nombre}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.nombre}
            touched={touched.nombre}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
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
        <div className="relative z-0 mb-4 w-full group">
          <Field
            type="password"
            name="confirmPassword"
            placeholder="Ingrese una Contraseña"
            value={values.confirmPassword}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-4 w-full group">
          <Field
            type="number"
            name="peso"
            placeholder="Ingrese un Peso"
            value={values.peso}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.peso}
            touched={touched.peso}
          />
        </div>
        <div className="relative z-0 mb-4 w-full group">
          <Field
            type="number"
            name="estatura"
            placeholder="Ingrese un Estatura"
            value={values.estatura}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.estatura}
            touched={touched.estatura}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 mb-4 w-full group">
          <Field
            type="date"
            name="fechanacimiento"
            placeholder="Ingrese una Fecha Nacimiento"
            value={values.fechanacimiento}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.fechanacimiento}
            touched={touched.fechanacimiento}
          />
        </div>
        <div className="relative z-0 w-full group">
          <select
            name="genero"
            value={values.genero}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="H">Hombre</option>
            <option value="M">Mujer</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-sz-white bg-sz-primary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-5 py-4 text-center my-4"
        >
          Registrarse
        </button>
      </div>
    </form>
  )
}
