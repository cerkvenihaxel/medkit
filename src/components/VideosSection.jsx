import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Video() {
  return (

    <section id="projects">
    <div className="relative overflow-hidden bg-gray-100 pb-32">


      <div className="relative">
      <div className="text-center">
          <p className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Nuestros proyectos
          </p>
         
        </div>
      

        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
           
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Hospital Ship Bahamas</h2>
                <p className="mt-4 text-lg text-gray-500">
                La base central se encontrará en Exuma Comunity, George Town. El barco iniciará su recorrido desde George Town y realizará diferentes paradas por la zona de Bahamas.                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-400"
                  >
                    Más información
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
        
            </div>
          </div>
          <div className="mt-24">
            <div className="aspect-w-16 aspect-h-9">

            <iframe className="w-full rounded-xl shadow-xl"
 width="560" height="315" src="https://www.youtube.com/embed/noBaBq4Vvl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            
            </div>
          </div>
        </div>
      </div>


      {/* <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Better understand your customers</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                  porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                  viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-red-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-400"
                  >
                    Más información
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="aspect-w-16 aspect-h-9">

            <iframe className="w-full rounded-xl shadow-xl"
 width="560" height="315" src="https://www.youtube.com/embed/noBaBq4Vvl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </section>
  )
}