import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ${className}`}
    >
      {children}
    </a>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white'>
            Start Taking Notes <br />
            Unleash Your Creativity.
          </h1>
          <p className='max-w-2xl mb-6 mt-8 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Stay organized with folders, tags, and reminders. Never miss a beat
            🚀 <br />
            Effortlessly jot down ideas, tasks, and reminders <br />
            Sync seamlessly across devices 📱 💻 🖥️
          </p>
          <div className='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
            <Link href='https://github.com/themesberg/Acme Note'>
              Try it on Web
            </Link>
            <Link
              href='https://www.figma.com/community/file/1125744163617429490'
              className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg'
            >
              Get Started for Free!
            </Link>
          </div>
        </div>
        <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
          <img src='./images/hero-bg.png' alt='hero image' />
        </div>
      </div>
    </section>
  );
};
