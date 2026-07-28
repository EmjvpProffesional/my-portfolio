import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import '../App.css'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: "Home", section: "hero" },
  { name: "Skills", section: "skills" },
  { name: "About", section: "about" },
  { name: "Contact", section: "contact" },
  { name: "Portfolio", route: "/portfolio" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {


  // TODO: hacer que el nabvar ocupe todo el ancho de la pantalla
    return (
      <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur">
        <Disclosure as="nav" className="bg-gray-800/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  {/* TODO: hacer y poner mi logo*/}
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="size-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const classes = classNames(
                        "rounded-md px-3 py-2 text-sm font-medium",
                        "text-gray-300 transition hover:bg-white/5 hover:text-white"
                      );

                              if (item.route) {
                                return (
                                  <Link
                                    key={item.name}
                                    to={item.route}
                                    className={classes}
                                  >
                                    {item.name}
                                  </Link>
                                );
                              }

                              return (
                                <HashLink
                                  key={item.name}
                                  smooth
                                  to={`/#${item.section}`}
                                  className={classes}
                                >
                                  {item.name}
                                </HashLink>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                          <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                      </div>
                    </div>
                  </div>

                  <DisclosurePanel className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                      {/* TODO: validar navegación con el navbar responsive */}
                  {navigation.map((item) => {

              const classes =
                "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white";

              if (item.route) {
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.route}
                    className={classes}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              }

              return (
                <DisclosureButton
                  key={item.name}
                  as={HashLink}
                  smooth
                  to={`/#${item.section}`}
                  className={classes}
                >
                  {item.name}
                </DisclosureButton>
              );
            })}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </header>
    );
}