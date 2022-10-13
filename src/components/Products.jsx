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
const products = [
    {
      id: 1,
      name: 'Órtesis',
      href: '#',
      price: '',
      description: '+100 artículos',
      imageSrc: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 2,
      name: 'Silla de ruedas',
      href: '#',
      price: ' ',
      description: 'Walnut',
      imageSrc: 'https://www.silfab.com.ar/media/catalog/product/cache/1/image/767x767/9df78eab33525d08d6e5fb8d27136e95/s/3/s3010-41_1.jpg',
      imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
      id: 3,
      name: 'Correctores de postura',
      href: '#',
      price: '',
      description: 'Correctores de postura',
      imageSrc: 'https://wellbrace.ptm.global/uploads/productos/Wellbrace%20pack%20305.jpg',
      imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
  
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <h1 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">Productos principales</h1>
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  