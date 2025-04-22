const Register = () => {
  return(
    <>
      <div className="my-5 flex flex-col gap-5 px-5 md:px-10 lg:px-[25vw]">

        <p className="text-xl">Información para crear tu cuenta</p>
        <p>Tipo de usuario</p>
        <div className="flex justify-around text-zinc-700 border-1 border-zinc-300 rounded-lg py-1 px-2">
          <p>Particular</p>
          <p>Inmobiliaria</p>
        </div>
        <input type="email" placeholder="Email" className="outline-none border-b-1 border-zinc-300"/>
        <input type="password" placeholder="Contraseña" className="outline-none border-b-1 border-zinc-300"/>
        <p>Datos</p>
        <input type="text" placeholder="Nombre completo" className="outline-none border-b-1 border-zinc-300"/>
        <input type="text" placeholder="DNI" className="outline-none border-b-1 border-zinc-300"/>
        <input type="text" placeholder="Telefono" className="outline-none border-b-1 border-zinc-300"/>

        <div className='flex flex-col gap-2'>
          <div className="flex gap-2 items-start">
            <input id="terms" type="checkbox" className="checkbox bg-zinc-200 rounded-lg"/>
            <label for="terms">Acepto los términos y condiciones de uso</label>
          </div>
          <div className="flex gap-2 items-start">
            <input id="politics" type="checkbox" className="checkbox bg-zinc-200 rounded-lg"/>
            <label for="politics">Acepto las políticas de privacidad</label>
          </div>

          <div className="w-full flex justify-center">
            <button className="mt-10 bg-black text-white py-1 px-2 rounded-lg shadow-xl w-5/10">Registrarme</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Register