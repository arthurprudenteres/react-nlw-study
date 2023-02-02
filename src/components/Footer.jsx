import React from 'react'
import DarkLogo from '../assets/image/dark-logo.svg'
import InstaIcon from '../assets/image/instagram-icon.svg'
import FaceIcon from '../assets/image/facebook-icon.svg'
import YTIcon from '../assets/image/youtube-icon.svg'

function Footer() {
  return (
    <footer className="bg-primary-color sm:py-[60px] py-[64px]">
      <div className="container flex sm:flex-row flex-col justify-between sm:items-center font-dmsans text-back-color">
        <div>
          <img src={DarkLogo} alt="" />
          <p className="mt-6">©2021 Beautysalon.</p>
          <span className="block mt-3">Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-8 mt-8 sm:mt-0">
          <a href="https://www.instagram.com/" aria-label='insta'><img src={InstaIcon} alt="" /></a>
          <a href="https://www.facebook.com/" aria-label='facebook'><img src={FaceIcon} alt="" /></a>
          <a href="https://www.youtube.com/" aria-label='youtube'><img src={YTIcon} alt="" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
