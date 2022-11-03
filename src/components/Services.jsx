/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Button } from "./Button"

const features = [
    {
      name: 'Llamando al doctor',
      description:
        'Un servicio de atención médica por videollamada las 24 horas, todos los días del año. Recetas medicas, órdenes de estudios y constancias de atención digitales Profesionales de primer nivel pertenecientes a reconocidas instituciones de salud Videconsultas a través de la App y plataforma Web Múltiples especialidades médicas',
    imageLogo: '/lad1.png',  
    imageSrc: 'https://www.youtube.com/embed/n4SA0HefY-Q',
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
      url:'https://www.llamandoaldoctor.com/'
    },
    {
      name: 'Mobile Hospital Unit',
      imageLogo: '/mhulogo.png',
      description:
        'Unidad Hospitalaria pensada y acondicionada para llegar a diferentes destinos, con el objetivo de brindar atención médica de calidad a personas que no tienen acceso a servicios de salud.',
      imageSrc: 'https://www.youtube.com/embed/WCIkL4nVX8I',
      imageAlt: '#',
      url:''
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Services() {
    return (
      <section id="services" className="bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros servicios</h2>
            <p className="mt-4 text-gray-500">
              Prestaciones para tu salud
            </p>
          </div>
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (


              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >

                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                  )}
                >
                  <img src={feature.imageLogo} alt="Logo" className="lg:col-span-6 w-96" />
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                  <Button
        href={feature.url}
        variant="solid"
        color="red"
        className="mt-8"
        target="_blank"
        aria-label={`Accede al plan  por el precio completando los siguientes datos`}
      >
        Más información
      </Button>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                  )}
                >
                  <div className="aspect-w-16 aspect-h-9">
    <iframe className="rounded-xl" width="560" height="315" src={feature.imageSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section> 
         )
  }
  