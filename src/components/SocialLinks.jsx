import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/aimable-bancunguye/',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/BANCUNGUYE66'
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:bancunguye66@gmail.com'
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: 'https://docs.google.com/document/d/1p-ngwozvQeL_I87Vce4kHRlKjNojgV5-_nugDem6Sok/edit?usp=sharing',
      style: 'rounded-br-md',
      download: true
    }
  ];

  return (
    <div className='lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, child, href, download, style }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' +
              style
            }
          >
            <a href={href} className='flex justify-between items-center w-full text-white'
            download={download}
            target='blank'
            rel='noreferrer'
            >
            
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
