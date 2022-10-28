export const ForgotPassword = () => {
  return (
    <section className='container mx-auto p-4'>
      <h4>App Alimentación Saludable</h4>
      <h1>Iniciar Sesión</h1>
      <h2>Hola! Que bueno verte de nuevo.</h2>
      <button
        type="button"
        // onClick={(e) => handleSubmit(form)}
        className="text-sz-white bg-sz-primary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-5 py-4 text-center my-4"
      >
        Iniciar Sesión
      </button>
      <p>¿Olvido su contraseña?</p>
      <p>Registrarte</p>
    </section>
  )
}
