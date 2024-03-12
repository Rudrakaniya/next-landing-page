import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ answer }) => {
  return (
    <div className='py-5 border-b border-gray-200 dark:border-gray-700'>
      <p className='mb-2 text-gray-500 dark:text-gray-400'>{answer}</p>
    </div>
  );
};

const FAQSection: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h3>
        <button
          type='button'
          className={`flex items-center justify-between w-full py-5 font-medium text-left ${
            isOpen
              ? 'text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
              : 'text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
          }`}
          onClick={toggleAccordion}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls={question.replace(/\s+/g, '-')}
        >
          <span>{question}</span>
          <svg
            data-accordion-icon=''
            className={`w-6 h-6 shrink-0 transform ${isOpen && 'rotate-180'}`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </h3>
      <div
        id={question.replace(/\s+/g, '-')}
        className={isOpen ? '' : 'hidden'}
        aria-labelledby={question.replace(/\s+/g, '-')}
      >
        <FAQItem question={question} answer={answer} />
      </div>
    </>
  );
};

export const Questions: React.FC = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 '>
        <h2 className='mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white'>
          Frequently asked questions
        </h2>
        <div className='max-w-screen-md mx-auto'>
          <div
            id='accordion-flush'
            data-accordion='collapse'
            data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
            data-inactive-classes='text-gray-500 dark:text-gray-400'
          >
            <FAQSection
              question='How do I get started with Acme Note?'
              answer='Simply download the Acme Note app from your preferred app store (iOS, Android, or web). Create an account, and you’re ready to organize your notes!'
            />
            <FAQSection
              question='Is my data secure in Acme Note?'
              answer='Acme Note employs robust encryption to safeguard your data. Rest assured that your notes are private and secure.'
            />
            <FAQSection
              question='Can I access my notes offline?'
              answer='Acme Note allows offline access to your notes. Create, edit, and view your content even without an internet connection.'
            />
            <FAQSection
              question='Can I collaborate with others on notes?'
              answer='Yes! Collaborate by sharing notes or entire folders. Acme Note supports real-time editing and commenting.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
