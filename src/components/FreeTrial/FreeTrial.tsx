import React from 'react';

// Sub-component for the title
const Title: React.FC<{ text: string }> = ({ text }) => (
  <h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'>
    {text}
  </h2>
);

// Sub-component for the description
const Description: React.FC<{ text: string }> = ({ text }) => (
  <p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
    {text}
  </p>
);

// Sub-component for the button
const Button: React.FC<{ text: string }> = ({ text }) => (
  <a
    href='#'
    className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'
  >
    {text}
  </a>
);

// Main component
export const FreeTrial = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
        <div className='max-w-screen-sm mx-auto text-center'>
          <Title text='Start using for free!' />
          <Description text='Try Acme Note Platform for Free. No credit card required.' />
          <Button text='Free Forever' />
        </div>
      </div>
    </section>
  );
};
