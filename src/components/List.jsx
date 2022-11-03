import { Container } from "./Container"
import clsx from 'clsx'
import { Button } from "./Button"

const items = [
  { id: 1 },
  // More items...
]

  // More items...
function Items() {
    return (
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-4">
            {/* More items... */}

          </li>
        ))}
      </ul>
    )
  }

function Calling() {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-transparent py-8 lg:order-none'
      )}
    >

   
      <div className="flex flex-col justify-center items-center container mx-auto sm:px-6 lg:px-8">
      <div className=" container">

      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src="/lad1.png" alt="Medkit" className='w-1/2  md:w-1/2 md:h-1/2 justify-center mx-auto items-center'/>

          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          Un servicio de atención médica por videollamada las 24 horas, todos los días del año.
          </p>
        </div>
      </div>
    </div>
    <p className="text-xl pt-12 md:pt-0 tracking-tight md:text-center md:flex text-gray-700 md:text-xl">
             

      Recetas medicas, órdenes de estudios y constancias de atención digitales
      Profesionales de primer nivel pertenecientes a reconocidas instituciones de salud
      Videconsultas a través de la App y plataforma Web
      Múltiples especialidades médicas
      </p>
      
      </div>
      </div>
     
     
    </section>
  )
}

function MobileHospital() {
  return (
    
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-transparent py-8 lg:order-none'
      )}
    >
          <hr className="border-gray-200 pt-12"></hr>

   
      <div className="flex flex-col justify-center items-center container mx-auto sm:px-6 lg:px-8">
      <div className=" container">

      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-red-700">MHU</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Mobile Hospital Unit
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Unidad Hospitalaria preparada para llegar a diversos lugares
          </p>
        </div>
      </div>
    </div>
      
      </div>
      </div>
     
      <div className="aspect-w-16 aspect-h-9">
    <iframe className="w-full rounded-xl " width="560" height="315" src="https://www.youtube.com/embed/WCIkL4nVX8I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>
     
    </section>
  )
}



export default function Lists() {
  return (
    <Container>
      <Calling />
    <ul role="list" className="mt-0 space-y-3">
        
    </ul>

    <div className="aspect-w-16 aspect-h-9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/n4SA0HefY-Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    </div>

<Button
        href="https://www.llamandoaldoctor.com/"
        variant="solid"
        color="pink"
        className="mt-8"
        target="_blank"
        aria-label={`Accede al plan  por el precio completando los siguientes datos`}
      >
        Más información
      </Button>

      <MobileHospital />
    </Container>
  )
}
