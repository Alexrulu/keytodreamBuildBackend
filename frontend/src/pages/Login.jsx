import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="my-5 flex flex-col gap-5 px-5 md:px-10 lg:px-[25vw]">

      <p className="text-xl">Ingresá a tu cuenta y accedé a tu historial, favoritos y mucho más</p>

      <div className="w-full flex flex-col gap-2">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="example@gmail.com" className="outline-none border-b-1 border-zinc-300"/>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label for="password">Contraseña</label>
        <input id="password" type="password" placeholder="Contraseña" className="outline-none border-b-1 border-zinc-300"/>
      </div>

      <div className="flex gap-2 items-start">
        <input id="remember" type="checkbox" className="checkbox bg-zinc-200 rounded-lg"/>
        <label for="remember">Recordarme</label>
      </div>

      <div className="w-full flex justify-center">
        <button className="mt-10 bg-black py-1 px-2 rounded-lg text-white w-5/10 shadow-xl">Ingresar</button>
      </div>

      <div className="mt-10 flex flex-col items-center gap-5">
        <p>También puedes ingresar con</p>
        <div className="text-2xl flex gap-10">
          <i className="fa-brands fa-google"/>
          <i className="fa-brands fa-facebook"/>
          <i className="fa-brands fa-apple"/>
        </div>
        <p>¿No tienes una cuenta?</p>
        <Link to="/register" className="bg-zinc-100 py-1 px-2 rounded-lg border-1 border-zinc-200">Registrarse</Link>
      </div>

        

    </div>
  )
}

export default Login