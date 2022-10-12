import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

/* const features = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: screenshotPayroll,
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: screenshotExpenses,
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns,
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
  },
]
*/ 
export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Llamando al doctor
          </h2>
<<<<<<< HEAD
          <p className="mt-12 text-lg tracking-tight text-blue-100">
          El servicio que MedkiT dispone para vos, donde vas a encontrar atención médica por videollamada las 24 horas, todos los días del año.
          </p>
          <div classnName="container mx-auto sm:px-6 lg:px-8">
          <p className="mt-6 text-lg tracking-tight md:flex  text-blue-100">
=======
          <p className="mt-6 text-2xl tracking-tight text-blue-100">
          El servicio que MedkiT dispone para vos, donde vas a encontrar atención médica por videollamada las 24 horas, todos los días del año.
          </p>
          <div classnName="container mx-auto sm:px-6 lg:px-8">
          <p className="mt-6 text-xl tracking-tight md:text-center md:flex  text-blue-100">
>>>>>>> e21a43b (Actualizacion de textos v2)
          Un servicio de atención médica por videollamada las 24 horas, todos los días del año.
¿Querés contratar Llamando al Doctor?</p>
            <li className=" mt-10 text-left -right-2.5 text-amber-200">
            Recetas medicas, órdenes de estudios y constancias de atención digitales
            </li>
            <li className='mt-10 text-left -right-2.5 text-amber-200'>
            Profesionales de primer nivel pertenecientes a reconocidas instituciones de salud
            </li> 
            <li className='mt-10 text-left -right-2.5 text-amber-200'>
            Videconsultas a través de la App y plataforma Web
            </li> 
            <li className='mt-10 text-left -right-2.5 text-amber-200'>
            Múltiples especialidades médicas
            </li> 
          <img className="mt-8 items-center flex -z-10" src="/homeapp.png" alt="" />
          <button
        type="button"
        className="items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Más información
      </button>
      </div>
        </div>
        
      </Container>
    </section>
  )
}
