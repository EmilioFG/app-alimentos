import * as YUP from 'yup';


export const validationSchema = YUP.object().shape({
  usuario: YUP.string()
    .required("Este campo es obligatorio"),
  nombre: YUP.string()
    .required("Este campo es requerido"),
  password: YUP.string()
    .required("Este campo es requerido"),
  confirmPassword: YUP.string()
    .required("Este campo es requerido"),
  peso: YUP.number()
    .required("Este campo es requerido")
    .positive("Este campo debe de ser positivo"),
  estatura: YUP.number()
    .required("Este campo es requerido")
    .positive("Este campo debe de ser positivo"),
  fechanacimiento: YUP.string()
    .required("Este campo es requerido"),
});
