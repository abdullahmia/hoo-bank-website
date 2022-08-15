import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggole, setToggole] = useState(false);
  return (
    <nav className='w-full flex py-6 between items-center navbar'>
      <img src={logo} alt="HooBank" className='w-[124px] h-[32px]' loading='lazy' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {
          navLinks.map((nav, key) => (
            <li key={key} className={`font-poppins font-normal cursor-pointer text-[16px] ${key === navLinks.length ? 'mr-0' : 'mr-10'} text-white`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))
        }
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img src={toggole ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggole((prev) => !prev)}
        />

        <div className={`${toggole ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {
              navLinks.map((nav, key) => (
                <li key={key} className={`font-poppins font-normal cursor-pointer text-[16px] ${key === navLinks.length ? 'mb-0' : 'mb-4'} text-white`}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;