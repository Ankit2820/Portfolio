import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import {BsFillPersonLinesFill} from "react-icons/bs";
const SocialLinks = () => {

    const links =[
        {
            id: 1,
            child: (
                <>
                Linkedin <FaLinkedin size={30} />   
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md '
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Ankit2820',
           
        },
        {
            id: 3,
            child: (
                <>
                Mail <MdOutlineMailOutline size={30} />
                </>
            ),
           href: 'mailto:ankit.abhishek125@gmail.com',   
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>

        {links.map(({id, child, href, style, download}) => (
        <li 
        key={id} eslint-disable-next-line
         // eslint-disable-next-line 
        className={"flex justify-between items-center w-[132px] h-14 px-4 ml-[-78px]  hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"+" "+
        style}>
        <a 
        href={href} 
        className="flex justify-between items-center w-full
         text-white " 
         download={download} 
         target='_blank'
         rel="noreferrer"
         >
            {child}
        </a>
    </li>
        ))}      
      </ul>
    </div>
  );
};

export default SocialLinks
