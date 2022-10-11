import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Example from '@/components/Products'
import CTA from '@/components/CTA'
import Filosophy from '@/components/Filosophy'
import { Testimonials } from '@/components/Testimonials'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
        <Example />
        <CTA />
        <Filosophy />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
