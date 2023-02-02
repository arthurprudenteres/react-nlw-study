import React from 'react'
import HairIcon from '../assets/image/icon-hair.svg'
import ScissorIcon from '../assets/image/scissor-icon.svg'
import CreamIcon from '../assets/image/cream-icon.svg'

function Services() {
  return (
    <section className="bg-white sm:py-[160px] py-[80px] border-transition">
      <div className="container flex flex-col items-center">
        <div className="sm:text-center text-dark-color">
          <h2 className="title">Serviços</h2>
          <p className="sm:mt-3 mt-4 font-dmsans text-lg max-w-[525px]">
            Com mais de 10 anos no mercado, o{' '}
            <span className="text-primary-color font-semibold">
              Beautysalon
            </span>{' '}
            já conquistou clientes de inúmeros países com seus tratamentos
            exclusivos e totalmente naturais
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-8 mt-16">
          <div className="box-services">
            <img className="max-w-[75px]" src={HairIcon} alt="" />
            <h3 className="mt-6 font-poppins font-bold text-[24px]">
              Terapia capilar
            </h3>
            <p className="mt-3 text-gray max-w-[256px]">
              Terapia completa para couro cabeludo e fios, protegendo todos os
              tipos de cabelos, inclusive os longos e finos.
            </p>
          </div>
          <div className="box-services">
            <img className="max-w-[75px]" src={ScissorIcon} alt="" />
            <h3 className="mt-6 font-poppins font-bold text-[24px]">Cortes</h3>
            <p className="mt-3 text-gray max-w-[256px]">
              A nossa equipe é repleta de profissionais renomados, famosos por
              lançarem tendências com cortes diferenciados e clássicos.
            </p>
          </div>
          <div className="box-services">
            <img className="max-w-[75px]" src={CreamIcon} alt="" />
            <h3 className="mt-6 font-poppins font-bold text-[24px]">
              Tratamentos
            </h3>
            <p className="mt-3 text-gray max-w-[256px]">
              O beautysalon conta com diversos tratamentos naturais e totalmente
              veganos, para qualquer tipo de cabelo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
