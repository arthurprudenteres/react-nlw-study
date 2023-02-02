import React from 'react'
import SecondImage from '../assets/image/img-2.png'

function About() {
  return (
    <section className="border-transition bg-white sm:pt-[194px] sm:pb-[160px] pt-[100px] pb-[80px]">
      <div className="flex xl:flex-row flex-col max-w-screen-xl w-[90%] my-0 mx-auto items-center justify-between sm:gap-32 gap-8">
        <div className="w-full relative z-[1] after:w-full after:h-full after:bg-secondary-color after:absolute sm:after:-top-[34px] sm:after:right-[192px] after:-z-[1] after:rounded after:-top-[21px] after:right-[120px]">
          <img className="object-cover" src={SecondImage} alt="/" />
        </div>
        <div className="max-w-[72ch]">
          <h2 className="title">Sobre nós</h2>
          <p className="mt-3 font-dmsans text-gray leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus.
          </p>
          <p className="mt-6 font-dmsans text-gray leading-6">
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut
            pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec
            luctus, nunc finibus elementum suscipit, tortor augue vulputate
            sapien, vitae feugiat enim augue sed.
          </p>
          <p className="mt-6 font-dmsans text-gray leading-6">
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis
            rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu
            tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat,
            nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend
            dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
