const items = [
    { id: 1 
    , title: 'Llamando al doctor'
    , description: 'El servicio que MedkiT dispone para vos, donde vas a encontrar atención médica por videollamada las 24 horas, todos los días del año.'
    , image: '/homeapp.png'
    , imageAlt: 'Llamando al doctor APP'
    , imageWidth: 200
    , imageHeight: 300
    , imagePosition: 'right'
    , listFeatures: [
        'Recetas medicas, órdenes de estudios y constancias de atención digitales',
        'Profesionales de primer nivel pertenecientes a reconocidas instituciones de salud',
        'Videconsultas a través de la App y plataforma Web',
        'Múltiples especialidades médicas',
    ]
    },
 
    // More items...
  ]
  
  export default function Lists() {
    return (
      <ul role="list" className="mt-24 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="overflow-hidden inline-block bg-transparent px-6 py-4">
            {item.image && (
                <div className="mt-12 content flex py-2">
            <img
                        
                        src={item.image}
                        alt={item.imageAlt}
                        width={item.imageWidth}
                        height={item.imageHeight}
                    />            
          </div>
            )}
            <div className="inline-block justify-between h-full">
          <div className="container mx-auto sm:px-6 lg:px-8">
          <p className="mt-6 text-lg tracking-tight md:flex  text-blue-100"/>
          <p className="mt-6 text-2xl tracking-tight text-blue-100">
          </p>
          <div classnName="container mx-auto sm:px-6 lg:px-8">
          <p className="mt-6 text-xl tracking-tight md:text-center md:flex  text-blue-100">
          Un servicio de atención médica por videollamada las 24 horas, todos los días del año.
¿Querés contratar Llamando al Doctor?</p>
</div>

                <div className="mt-6">
                    <ul role="list" className="space-y-3">
                        {item.listFeatures.map((item) => (
                            <li key={item} className="flex items-start">
                                <span className="ml-3 text-base text-blue-100">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            
          <button
        type="button"
        className="items-center mt-12 px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Más información.
      </button>
      </div>
      </div>
          </li>
        ))}
      </ul>
    )
  }
  