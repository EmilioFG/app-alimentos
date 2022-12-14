const hasHerror = (hasError) => {
  return hasError
    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
}

export const Field = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => (
  <>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      className={hasHerror(Boolean(errors) && Boolean(touched))}
    />
    {(Boolean(errors) && Boolean(touched)) && (
      <p className="mt-2 text-sm text-red-600 dark:text-red-500 font-medium">
        {errors}
      </p>
    )}
  </>
)
