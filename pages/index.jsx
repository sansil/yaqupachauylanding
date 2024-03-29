/* This example requires Tailwind CSS v2.0+ */
export default function Home() {
  return (
    <div className="relative ">
      <div className="relative sm:min-h-[40rem] min-h-[10rem]">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src="/dol1.jpg" alt="" />
          <div
            className="absolute inset-0  mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="block">Toninas</span>
            <span className="block bg-gradient-to-r from-cyan-200 to-cyan-700 bg-clip-text pb-3 text-transparent sm:pb-5">
              centinelas de la costa
            </span>
          </h1>
          <h1 className="max-w-2xl text-xl font-bold tracking-tight text-white  sm:text-6xl  xl:text-3xl">
            <p className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text  text-transparent ">
              Si cuidamos las toninas cuidamos la costa
            </p>
            <p className="block bg-gradient-to-r from-white to-cyan-200 bg-clip-text  text-transparent ">
              Si cuidamos la costa cuidamos las toninas
            </p>
          </h1>
          {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Toninas, centinelas de la costa
          </h1> */}
        </div>

        {/* <img
          className="absolute bottom-10 right-32 w-96 object-cover"
          src="/logo.png"
          alt=""
        /> */}
      </div>
      <div className="relative flex flex-col items-center justify-center w-full">
        {/* <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/gomon.jpeg"
            alt=""
          />
          <div
            className="absolute inset-0  mix-blend-multiply"
            aria-hidden="true"
          />
        </div> */}
        <div className="relative w-full max-w-7xl  sm:pt-24 px-4 py-12  sm:px-6 lg:px-8 bg-white">
          <h1 className="text-2xl font-bold tracking-tight text-cyan-600 sm:text-3xl lg:text-4xl">
            ¿Qué es Yaqu Pacha Uruguay?
          </h1>
          <div className="flex justify-between">
            <p className=" max-w-3xl  text-base sm:text-xl text-slate-400   p-4 rounded-2xl shadow-xl relative ">
              Yaqu Pacha Uruguay es una filial de la Organización para la
              Conservación de Mamíferos Acuáticos en América del Sur - Yaqu
              Pacha e.V. en Alemania. La organización tiene como objetivos
              investigar y conservar las especies de mamíferos acuáticos en
              América del Sur, en particular aquellas amenazadas, así como
              difundir y concientizar a las personas sobre la importancia de
              estudiar y conservar a estas especies y sus ambientes.
            </p>
            <div className="flex justify-around flex-1">
              <img src="logo_sinf.png" className="w-56 h-56  " alt="" />
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl py-12 px-4  sm:px-6 lg:px-8 bg-white">
          <h1 className="text-2xl font-bold tracking-tight text-teal-600 sm:text-3xl lg:text-4xl">
            ¿Cuál es el objetivo?
          </h1>
          <p className=" max-w-3xl text-base sm:text-xl text-slate-400  p-4 rounded-2xl shadow-xl ">
            Esta filial fue creada en 2013 incorporando al Proyecto Toninas que
            se venía desarrollando desde 2002 en Uruguay. Los dos objetivos
            principales de este proyecto son estudiar a la tonina{" "}
            <span className="italic font-semibold">
              Tursiops truncatus gephyreus
            </span>
            , una subespecie del delfín nariz de botella
            <span className="italic font-semibold">Tursiops truncatus</span> que
            ocurre únicamente en la zona costera del sur de Brasil, Uruguay y
            Argentina, y promover la educación ambiental costera, la conciencia
            sobre los efectos del cambio climático y a la tonina como especie
            centinela de la costa.
          </p>
        </div>
        <div className="relative w-full max-w-7xl py-12 px-4  sm:px-6 lg:px-8 bg-white flex justify-center  ">
          <iframe
            className="w-full  aspect-video max-w-5xl h-[340px] sm:h-[540px]"
            src={`https://www.youtube.com/embed/KQ81xnqVkLY`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="yaqupacha youtube"
          />
        </div>
        <div className="relative  pb-12 px-4  sm:px-6 lg:px-8 bg-cyan-800 w-full">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="/gomon.jpeg"
              alt=""
            />
            <div
              className="absolute inset-0 bg-cyan-600 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Conoce más en nuestras redes sociales
            </h1>
            <div className=" max-w-3xl flex space-x-10 mt-8 ">
              <a
                href="https://www.instagram.com/proyecto.toninas/"
                className=""
              >
                <img
                  src="/iglogo.png"
                  alt=""
                  className=" w-12 h-12 sm:w-20 sm:h-20"
                />
              </a>
              <a href="https://es-la.facebook.com/yaqupachauy/">
                <img
                  src="/fblogo.png"
                  alt=""
                  className=" w-12 h-12 sm:w-20 sm:h-20"
                />
              </a>
              <a href="https://twitter.com/yaqupachauy">
                <img
                  src="/twlogo.png"
                  alt=""
                  className=" w-12 h-12 sm:w-20 sm:h-20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
