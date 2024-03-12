import React from 'react';
import { FooterSection } from './FooterSection';

export const Footer = () => {
  return (
    <footer className='bg-white dark:bg-gray-800'>
      <div className='max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
          {/* Company Section */}
          <FooterSection
            title='Company'
            links={[
              { label: 'About', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Brand Center', href: '#' },
              { label: 'Blog', href: '#' },
            ]}
          />
          {/* Help Center Section */}
          <FooterSection
            title='Help Center'
            links={[
              { label: 'Discord Server', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'Facebook', href: '#' },
              { label: 'Contact Us', href: '#' },
            ]}
          />
          {/* Legal Section */}
          <FooterSection
            title='Legal'
            links={[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Licensing', href: '#' },
              { label: 'Terms', href: '#' },
            ]}
          />
          {/* Download Section */}
          <FooterSection
            title='Download'
            links={[
              { label: 'iOS', href: '#' },
              { label: 'Android', href: '#' },
              { label: 'Windows', href: '#' },
              { label: 'MacOS', href: '#' },
            ]}
          />
          {/* Help Center Section */}
          <FooterSection
            title='Resource Center'
            links={[
              { label: 'Discord Server', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'Facebook', href: '#' },
              { label: 'Contact Us', href: '#' },
            ]}
          />
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='text-center'>
          <a
            href='#'
            className='flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white'
          >
            <img
              src='./images/logo.png'
              className='h-6 mr-3 sm:h-9'
              alt='Acme Note Logo'
            />
            Acme Note
          </a>
          <span className='block text-sm text-center text-gray-500 dark:text-gray-400'>
            © 2022-2024 Acme Note™. All Rights Reserved. Built with{' '}
            <span className='text-red-600 dark:text-purple-500'>Love ♥️</span>{' '}
            and{' '}
            <span className='text-green-700 dark:text-purple-500'>
              Patience 🍃
            </span>
            .
          </span>
          <ul className='flex justify-center mt-5 space-x-5'>
            <li>
              <a
                href='#'
                className='text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  {/* Facebook icon */}
                </svg>
              </a>
            </li>
            {/* More social icons */}
          </ul>
        </div>
      </div>
    </footer>
  );
};
