import { Fragment, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const handleTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.querySelector('html').removeAttribute('class');
      document.querySelectorAll('.switch').forEach((e) => {
        e.checked = false;
      });
    } else {
      localStorage.setItem('theme', 'dark');
      document.querySelector('html').setAttribute('class', 'dark');
      document.querySelectorAll('.switch').forEach((e) => {
        e.checked = true;
      });
    }
  };
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').setAttribute('class', 'dark');
      document.querySelectorAll('.switch').forEach((e) => {
        e.checked = true;
      });
    }
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-100 dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <p className="font-Finger-Paint select-none dark:text-white hover:text-purple-700 dark:hover:text-purple-700 transition-colors duration-500">Lucas&apos;s Portfolio</p>
                </div>
                <label className="toggle-control block sm:hidden !fixed right-0 top-[14px]" htmlFor="switch" title="Switch color">
                  <input className="switch" id="switch" type="checkbox" onClick={handleTheme} />
                  <span className="control" />
                </label>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'hover-underline-animation font-Raleway text-gray-800 dark:text-white hover:bg-purple-200 dark:hover:bg-purple-900 hover:text-black',
                          'px-4 py-2 rounded-md text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <label className="toggle-control" htmlFor="switch-desktop" title="Switch color">
                      <input className="switch" id="switch-desktop" type="checkbox" onClick={handleTheme} />
                      <span className="control" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-600 dark:text-gray-100 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
