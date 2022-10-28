import * as YUP from 'yup';


export const validationSchema = YUP.object().shape({
  usuario: YUP.string()
    .required("Este campo es obligatorio"),
  password: YUP.string()
    .required("Este campo es requerido"),
});
