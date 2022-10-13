import Link from 'next/link';

export default function Contact() {
    return (
      <section 
        id="contact"
      >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Contacto</h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">La Rioja</h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Correo electrónico</dt>
                      <dd>medkitlarioja@gmail.com</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <Link href="https://wa.me/5493804375460/?text=Hola%20quiero%20mas%20informacion%20de%20MedkiT%20" target="_blank">
                      <dd>📞 +54 (380) 154-375460</dd>
                    </Link>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Oficinas</h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">La Rioja</h3>
                  <div className="mt-2 text-base text-gray-500">
                    <Link href="https://goo.gl/maps/z9TW98s2orGg3c1r9" target="_blank">
                    <dd>📍 8 de Diciembre 701</dd>
                    </Link>
                    <dd className="mt-1">La Rioja, Argentina. CP 5300.</dd>
                  </div>
                </div>
              
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
  