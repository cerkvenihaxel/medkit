
const products = [
  {
    id: 1,
    name: 'Codera',
    category: 'Profit',
    href: '#',
    imageSrc: 'https://profit.ptm.global/uploads/productos/Profit%20pack%20C1.jpg',
    imageAlt:
      'Imagen de productos de órtesis',
  },

  {
    id: 2,
    name: 'Corrector de postura regulable. Elástlco',
    category: 'Wellbrace',
    href: '#',
    imageSrc: 'https://wellbrace.ptm.global/uploads/productos/Wellbrace%20pack%20630.jpg',
    imageAlt:
      'Imagen de productos de órtesis',
  },

  {
    id: 3,
    name: 'Collar cervical de espuma',
    category: 'Wellbrace',
    href: '#',
    imageSrc: 'https://wellbrace.ptm.global/uploads/productos/Wellbrace%20pack%204508.jpg',
    imageAlt:

      'Imagen de productos de órtesis',
  },

  {
    id: 4,
    name: 'Codera elástica',
    category: 'Bodycare',
    href: '#',
    imageSrc: 'https://www.bodycare.com.ar/productos/BC1500A/g/BC1500A_1%20copia.jpg',
    imageAlt:

      'Imagen de productos de órtesis',
  },
  
  
]

export default function Example() {
  return (
    <section 
      id="products"
      >
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-lg font-medium text-gray-900">Nuestros productos</h1>
          <a href="#" className="whitespace-nowrap text-sm font-medium text-red-600 hover:text-indigo-500">
            Ver más
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 ">
          {products.map((product) => (
            <div key={product.id} className="group relative hover:scale-105 ease-in duration-200">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center " />
                <div className="flex items-end p-4 opacity-0 group-hover:opacity-100 " aria-hidden="true">
                  <div className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    Ver producto
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
