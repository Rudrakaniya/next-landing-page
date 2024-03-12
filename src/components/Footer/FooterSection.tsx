import React from 'react';

interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h3 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
        {title}
      </h3>
      <ul className='text-gray-500 dark:text-gray-400'>
        {links.map((link, index) => (
          <li className='mb-4' key={index}>
            <a href={link.href} className='hover:underline'>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
