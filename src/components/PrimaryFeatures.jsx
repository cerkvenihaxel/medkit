import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Lists from './List'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'


export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 768px)')

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
    <div className='pb-12 items-center shadow-slate-700'>
    <section
      id="features"
      aria-label="Features llamando al doctor"
      className="relative overflow-hidden sm:py-32"
    >
     
      <Container className=" flex relative">
        <div className="max-w md:text-center ">
        <div className="flex items-center justify-between mb-4 space-x-4">
          <h1 className="text-xl font-medium text-gray-600">Nuestros servicios</h1>
          <a href="#" className="whitespace-nowrap text-sm font-medium text-red-600 hover:text-indigo-500">
            Ver más
            <span aria-hidden="true"> &rarr;</span>
           
          </a>
        </div>

        <hr className="border-gray-200 mb-12"></hr>
      

          <Lists />


          
        </div>
        
      </Container>
    </section>
    </div>
  )
}
