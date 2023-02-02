import React from 'react'
import MainImage from '../assets/image/img-1.png'

function Hero() {
  return (
    <section className="container flex flex-col md:flex-row pt-[72px] pb-20 md:pt-[152px] md:pb-[172px] justify-between">
      <div className="order-2 md:order-1 sm:text-left text-center">
        <h2 className="title sm:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-dark-color sm:max-w-[17ch] text-[32px] max-w-full leading-[54px] mt-[32px] md:mt-[0]">
          Saúde natural para os seus cabelos
        </h2>
        <p className="sm:mt-3 max-w-[30ch] mt-4 font-dmsans text-lg text-gray">
          Um salão exclusivo em São Paulo, especializado em tratamentos
          naturais.
        </p>
        <button className="mt-8 sm:mt-6" type="button">
          Agendar um horário
        </button>
      </div>
      <div className="order-1 md:order-2">
        <div className="w-full h-full relative right-7 md:right-11 z-[1] after:w-full after:h-full after:bg-secondary-color after:absolute after:-top-[40px] md:after:-top-[68px] after:-right-[47px] md:after:-right-[77px] after:-z-[1] after:rounded">
          <img src={MainImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
