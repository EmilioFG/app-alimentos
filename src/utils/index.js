export const formatearFecha = (date) => (
  `${new Date(date).getFullYear()}-${new Date(date).getMonth()+1}-${new Date(date).getDate()}`
);
