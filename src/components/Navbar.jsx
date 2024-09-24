import React from 'react';
import Button from './Button';
import {Disclosure, DisclosureButton} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <Disclosure as ='nav' className='navbar navbar-expand-lg navbar-light bg-gray-600'>
       <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
            <Link to= "/home"><Button componentName = "Bell"/></Link>
            <Link to="/about"><Button componentName = "Frown"/></Link>
            <Link to= "/contact"><Button componentName = "Bolt"/></Link>
    </Disclosure>
    
  )
}

export default Navbar