import React from 'react'
import WppIcon from '../assets/image/wpp-icon.svg'
import PhoneIcon from '../assets/image/phone-icon.svg'
import MapIcon from '../assets/image/map-pin-icon.svg'
import MailIcon from '../assets/image/mail-icon.svg'

function Contact() {
  return (
    <section className="border-transition sm:py-[160px] py-[80px] font-dmsans">
      <div className="container flex items-center sm:gap-[368px] gap-16 flex-wrap">
        <div className="max-w-[344px]">
          <h3 className="title">Entre em contato com a gente!</h3>
          <p className="text-gray sm:mt-3 mt-4">
            Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
            ouvir suas críticas e sugestões.
          </p>
          <button className="flex gap-[10px] sm:mt-6 mt-8" type='button'>
            <img src={WppIcon} alt="" />
            Entrar em contato
          </button>
        </div>
        <div className="flex flex-col gap-8 text-gray">
          <div className="flex gap-3 ">
            <img src={PhoneIcon} alt="" />
            <span>11 99845-6754</span>
          </div>
          <div className="flex gap-3">
            <img src={MapIcon} alt="" />
            <span>R. Amauri Souza, 346</span>
          </div>
          <div className="flex gap-3">
            <img src={MailIcon} alt="/" />
            <span>contato@beautysalon.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
