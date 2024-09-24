import React from 'react'
import { BellIcon } from '@heroicons/react/24/outline'
import { BoltIcon, FaceFrownIcon } from '@heroicons/react/20/solid'

const myObj = {
  Bell: <BellIcon aria-hidden="true" className='h-6 w-6'/>,
  Frown: <FaceFrownIcon aria-hidden="true" className='h-6 w-6' />,
  Bolt: <BoltIcon aria-hidden="true" className='h-6 w-6' />}; 


function Button({componentName}) {
  console.log(componentName)
  return(
<button
type="button"
className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
>
<span className="absolute -inset-1.5" />
<span className="sr-only">View notifications</span>
{myObj[componentName]}
</button>
  )
}
export default Button