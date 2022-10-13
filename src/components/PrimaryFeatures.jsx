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
    <div className='pt-12 pb-12 bg-gray-200 items-center shadow-slate-700'>
    <section
      id="features"
      aria-label="Features llamando al doctor"
      className="relative overflow-hidden sm:py-32"
    >
     
      <Container className=" flex relative">
        <div className="max-w md:text-center xl:max-w-none">
      

          <Lists />

       
          
        </div>
        
      </Container>
    </section>
    </div>
  )
}
