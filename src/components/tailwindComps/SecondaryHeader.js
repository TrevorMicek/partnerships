import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


import { Link } from "gatsby"
import Logo from '../../images/logo.png'
const navigation = [
  { name: 'Main Site', href: 'https://websitesbytrevor.com/' },
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Header(props) {
  const Title = () => {
    switch(props.title) {
      case 'Product':
        return ['Personalized websites', 'for your business']
      case 'Pricing':
        return ['Pricing plans for', 'businesses of all sizes']
      case 'Blog':
        return ['Tips & Tricks', 'For a Better Website']
      case 'Contact':
        return ['Contact', 'Websites By Trevor']
      case 'Store':
        return ['Custom', 'Ecommerce Store']
    }
  }
  return (
    <div className="relative bg-bg overflow-hidden" style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">

        </div>
      </div>

      <div className="relative pb-16 sm:pb-24">
      <Popover as="header" className="border-solid border-indigo-200 border-b">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="h-20 w-auto  flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-28 w-auto"
                    src={Logo}
                    alt=""
                    width="50px"
                    height="50px"
                  />
                </a>
                <div className=" flex items-center md:hidden relative bottom-3">
                  <Popover.Button className="bg-bg rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex  md:absolute md:right-10">
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name} className="text-base font-medium text-white hover:text-gray-300">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="h-20 w-auto pt-4 flex items-center justify-between">
                <div className="pt-4">
                  <img
                    className="h-28 w-auto"
                    src={Logo}
                    alt=""
                    width="50px"
                    height="50px"
                  />
                </div>
                <div className="px-4 pt-4 -mr-2">
                  <Popover.Button className="relative bottom-3 bg-white rounded-md p-2 inline-flex items-center justify-center text-indigo-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-100 hover:bg-indigo-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

        <main className="mt-16 -mb-6 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{props.title ? Title()[0] : ''}</span>{' '}
              <span className="block text-indigo-500 xl:inline">{props.title ? Title()[1] : ''}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {props.text}
            </p>

          </div>
        </main>
      </div>
    </div>
  )
}