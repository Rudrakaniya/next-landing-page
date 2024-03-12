import React from 'react';

// Icon component
const Icon = () => (
  <svg
    className='flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    />
  </svg>
);

// List item component
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className='flex space-x-3'>
    <Icon />
    <span className='text-base font-medium leading-tight text-gray-900 dark:text-white'>
      {children}
    </span>
  </li>
);

export const PreviewsSection = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6'>
        {/* Row */}
        <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
          <div className='text-gray-500 sm:text-lg dark:text-gray-400'>
            <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
              Smart, Seamless Integration
            </h2>
            <p className='mb-8 font-light lg:text-xl'>
              Connect effortlessly to your favorite apps, calendars, and task
              managers. Say goodbye to switching between applications—Acme Note
              brings it all together.
            </p>
            {/* List */}
            <ul
              role='list'
              className='pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700'
            >
              <ListItem>Continuous integration and deployment</ListItem>
              <ListItem>Development workflow</ListItem>
              <ListItem>Knowledge management</ListItem>
            </ul>
            <p className='mb-8 font-light lg:text-xl'>
              Whether you’re a developer, designer, or business professional,
              our app plays well with the tools you rely on daily.
            </p>
          </div>
          <img
            className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
            src='./images/Designer-removed-1.png'
            alt='dashboard feature image'
          />
        </div>
        {/* Row */}
        <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
          <img
            className='hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex'
            src='./images/Designer-removed-2.png'
            alt='feature image 2'
          />
          <div className='text-gray-500 sm:text-lg dark:text-gray-400'>
            <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
              Empowering Tomorrow
            </h2>
            <p className='mb-8 font-light lg:text-xl'>
              Our commitment extends beyond digital boundaries. With every note
              you take, you contribute to a greener future. Join us in shaping a
              world where innovation meets environmental responsibility.
            </p>
            {/* List */}
            <ul
              role='list'
              className='pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700'
            >
              <ListItem>Dynamic reports and dashboards</ListItem>
              <ListItem>Templates for everyone</ListItem>
              <ListItem>Development workflow</ListItem>
              <ListItem>Limitless business automation</ListItem>
              <ListItem>Knowledge management</ListItem>
            </ul>
            <p className='font-light lg:text-xl'>
              At Acme Note, we believe in more than just note-taking. We invest
              in the world’s potential by championing sustainable energy
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
