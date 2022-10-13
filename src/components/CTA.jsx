import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export default function CTA() {
  return (
    <div className="relative bg-gray-800">
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">ORTOPEDIA</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Servicio de Ortesis a medida y fisioterapia</p>
          <p className="mt-3 text-lg text-gray-300">
          Los miembros de nuestro equipo cuentan con la experiencia y están capacitados para trabajar en una amplia gama de condiciones. 
Hacer bien nuestro trabajo incluye abarcar multiples terapias para asistir a las necesidades de los pacientes y trabajar hacia la rehabilitación e insersion de una mejor calidad de vida. 
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Mirá nuestro catálogo
                <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
