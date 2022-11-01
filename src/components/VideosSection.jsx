import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Divider from './Divider'

const people = [

    {
        name: 'Hospital Ship Bahamas',
        title: '',
        role:'Hospital Ship',
        imageUrl:'https://www.youtube.com/embed/noBaBq4Vvl8'
      },


  {
    name: 'Mobile Hospital Unit',
    title: '',
    role:'Mobile Hospital',
    imageUrl:'https://www.youtube.com/embed/WCIkL4nVX8I'

  },

 
  // More people...
]

export default function Videos() {
  return (
    <div className="mx-auto max-w-7xl pt-12 px-4 sm:px-6 lg:px-8">
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-2 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-4 justify-center">
          <div className="aspect-w-16 aspect-h-9">

          <iframe className="justify-center" width="400" height="315" src={person.imageUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
        </div>
          <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
          
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
