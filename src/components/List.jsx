import { Container } from "./Container"
import clsx from 'clsx'
import { Button } from "./Button"



  // More items...

function Calling() {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-transparent py-8 lg:order-none'
      )}
    >

   
      <div className="flex flex-col justify-center items-center container mx-auto sm:px-6 lg:px-8">
      <div className=" container md:flex ">

      <img src="/lad1.png" alt="Medkit" className='w-1/2  md:w-1/2 md:h-1/2 justify-center mx-auto items-center'/>
      <p className="text-xl pt-12 md:pt-0 tracking-tight md:text-center md:flex text-gray-700 md:text-xl">
      Un servicio de atención médica por videollamada las 24 horas, todos los días del año.
                  ¿Querés contratar Llamando al Doctor?

      Recetas medicas, órdenes de estudios y constancias de atención digitales
      Profesionales de primer nivel pertenecientes a reconocidas instituciones de salud
      Videconsultas a través de la App y plataforma Web
      Múltiples especialidades médicas
      </p>
      
      </div>
      </div>
     
      <Button
        href="#"
        variant="solid"
        color="pink"
        className="mt-8"
        aria-label={`Accede al plan  por el precio completando los siguientes datos`}
      >
        Más información
      </Button>
    </section>
  )
}


export default function Lists() {
  return (
    <Container>
      <Calling />
    <ul role="list" className="mt-0 space-y-3">
        
    </ul>
    </Container>
  )
}
