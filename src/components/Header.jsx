import React from 'react'
import Logo from '../assets/image/main-logo.svg'
import BarsIcon from '../assets/image/bars-icon.svg'
import CloseIcon from '../assets/image/close-icon.svg'

// eslint-disable-next-line react/prop-types
function Header({ toggleMenu, nav }) {

  return (
    <header className="flex items-center justify-between py-6 container relative">
      <a href="./">
        <img src={Logo} alt="" />
      </a>
      <div className="nav-menu md:block hidden font-dmsans text-dark-color">
        <ul className="flex gap-8 text-base">
          <li className="hover:text-primary-color cursor-pointer">Início</li>
          <li className="hover:text-primary-color cursor-pointer">Sobre</li>
          <li className="hover:text-primary-color cursor-pointer">Serviços</li>
          <li className="hover:text-primary-color cursor-pointer">Depoimentos</li>
          <li className="hover:text-primary-color cursor-pointer">Contato</li>
        </ul>
      </div>
      <button type='button' className="md:hidden absolute right-0 top-1 z-20"
        onClick={toggleMenu}>
          {!nav ? <img src={BarsIcon} alt="" /> : <img src={CloseIcon} alt="" />}
      </button>
      <div
        className={
          nav
            ? 'nav-menu-mobile z-10 font-dmsans text-dark-color text-center absolute -top-[0] py-[208px] px-[103px] w-full left-0 bg-white font-bold text-[30px] ease-in duration-500'
            : 'w-full z-10 absolute text-center py-[208px] px-[103px] left-0 top-[-1000px] ease-in duration-500'
        }
      >
        <ul className="flex flex-col items-center gap-8 ">
          <li className="hover:text-primary-color">Início</li>
          <li className="hover:text-primary-color">Sobre</li>
          <li className="hover:text-primary-color">Serviços</li>
          <li className="hover:text-primary-color">Depoimentos</li>
          <li className="hover:text-primary-color">Contato</li>
        </ul>
      </div>
    </header>
  )
}


export default Header
