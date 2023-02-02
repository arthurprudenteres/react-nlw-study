import React from 'react'
import AvatarOne from '../assets/image/avatar1.png'
import AvatarTwo from '../assets/image/avatar2.png'

function Review() {
  return (
    <section className="border-transition sm:py-[160px] py-[80px] bg-white font-dmsans">
      <div className="container flex flex-col items-center">
        <h2 className="title sm:text-center max-w-[22ch]">
          Depoimentos de quem já passou por aqui
        </h2>
        <div className="boxes flex items-center mt-16 justify-between gap-8">
          <div className="review-box p-[52px] rounded box-shadow hidden sm:block">
            <div className="">
              <span className="text-5xl text-primary-color relative top-2">
                “
              </span>
              <span>
                Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
                Certamente meu cabelo mudou muito depois que comecei a tratar
                somente com produtos naturais e veganos. São profissionais
                incríveis e qualificados.
              </span>
            </div>
            <div className="review-user mt-6 flex items-center gap-2 text-gray">
              <img src={AvatarOne} alt="" />
              <span>Wanessa Souza</span>
            </div>
          </div>
          <div className="review-box p-[52px] rounded box-shadow">
            <div className="">
              <span className="text-5xl text-primary-color relative top-2">
                “
              </span>
              <span>
                Minha mãe frequenta o salão há anos e me levou um dia para
                conhecer. Minha experiência foi incrível, eu continuo fazendo o
                a terapia capilar e isso salvou o meu cabelo. Adoro todos os
                profissionais do Beautysalon.
              </span>
            </div>
            <div className="review-user mt-6 flex items-center gap-2 text-gray">
              <img src={AvatarTwo} alt="" />
              <span>Luna Falcão</span>
            </div>
          </div>
        </div>
        <div className="selection flex items-center gap-2 mt-[58px]">
          <div className="ball cursor-pointer w-3 h-3 bg-primary-color rounded-full" />
          <div className="ball cursor-pointer w-3 h-3 bg-light-gray rounded-full" />
          <div className="ball cursor-pointer w-3 h-3 bg-light-gray rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Review
