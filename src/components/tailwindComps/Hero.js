import React, { useState, useRef } from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"
import emailjs from 'emailjs-com';

import Confirm from './Confirmation'
import Logo from '../../images/logo.png'
import BG from '../../images/techBG2.jpg'
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/partnerships/pricing' },
  { name: 'Partnerships', href: '/partnerships' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function HeroComp() {
  const [confirm, setConfirm] = useState(false)
  const [email, setEmail] = useState('')
  const form = useRef()
  const onSubmit = (e) => {
    emailjs.sendForm('service_arikqvn', 'template_ht51ufi', e.target, 'user_kC0T8kmC4F1GOkt3Q06Q4')
       e.preventDefault()
       console.log('sent')
  }
  const handleChange = (e) => {

            setEmail(e.target.value)

  }
  const confirmMessage = ['Thanks for choosing Websites By Trevor!', ' We will reach out ASAP to start collaborating on your new free site']
  return (

    <div className="relative overflow-hidden" style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>
      <Popover as="header" className="relative border-solid border-indigo-200 border-b">
        <div className="bg-bg pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="h-16 w-auto flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-28 w-auto mt-4"
                    src={Logo}
                    alt="coding logo"
                    width="200px"
                    height="200px"
                  />
                </a>
                <div className="flex items-center md:hidden">
                  <Popover.Button className="relative bottom-3 bg-bg rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-7 w-7" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:absolute md:right-10">
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name} className="text-base font-medium text-white hover:text-indigo-500">
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
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="h-20 w-auto  pt-4 flex items-center justify-between">
                <div className="px-0 pt-7">
                  <img
                    className="h-28 w-auto"
                    src={Logo}
                    alt=""
                    width="50px"
                    height="50px"
                  />
                </div>
                <div className="px-4 -mr-2">
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
                      className="block px-3 py-2 rounded-md text-base font-medium text-bg hover:text-white hover:bg-indigo-500"
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

      <main>
        <div className="pt-10 bg-bg sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <span className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <Link to={"/pricing"} className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-default rounded-full">
                      Wholesale prices
                    </Link>
                    <Link to={"/partnerships"} className="ml-4 text-sm">Visit our pricing page</Link>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                  </span>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Wholesale Custom </span>
                    <span className="block text-default">Ecommerce Websites</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl min-w-full ">
                  High quality websites for services and products. <br /> Start offering customized sites to your clients.
                  </p>
                  <div className="mt-10 sm:mt-12">
                  {confirm ? <Confirm prompt="false" message={confirmMessage} confirm={() =>setConfirm(false)} /> : null}
                    <form ref={form} onSubmit={onSubmit} className="sm:grid-cols-2 sm:gap-x-8">



            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">

              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  key='name'
                  placeholder="Enter email..."
                  className="py-3 px-4 mb-6 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>




            <div className="sm:col-span-2">
              <button

                type="submit"
                onClick={() => setConfirm(true)}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start partnership
              </button>

            </div>
            <div className="ml-3">
                <p className="mt-2 text-sm text-gray-300 sm:mt-4">
                        Start a partnership with Websites By Trevor. By providing your email, you agree to
                        our{' '}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                </div>
          </form>


                  </div>
                </div>
              </div>
              <div className="mt-12 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src={BG}
                    alt=""
                    width="200px"
                    height="100px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}