"use client"
import Image from "next/image";
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Cell() {
  return(
    <div className="bg-blue-300">Teste</div>
  ); 
}

export default function Home() {
  return (
    <main className="min-w-[640px] font-neulis">
      {/*navbar*/}
      <div className="relative grid h-20 grid-cols-10 border-b-2 border-primary">
        <img src="logo.svg" alt="Logo" className="col-span-1 ml-8 h-[75px] w-auto"/>
        <div className="self-end col-span-3 mb-2 text-3xl justify-self-end text-primary">Bom dia, Dals!</div>
        <div className="self-start col-span-4 mt-2 -ml-16 text-2xl text-secondary">27 de janeiro de 2024</div>
        <div className=" col-span-2 flex flex-row justify-center *:mx-4">
          <div>signo</div>
          <div>Fase lua</div>
          <div>Tempo</div>
        </div>
      </div>
      {/*main*/}
      <div className="grid grid-cols-10">
        {/*titulo */}
        <div className="relative col-span-5">
          <img src="title.png" alt="Estante da Dals" className="ml-16 w-[36rem]" />
          <div className="-mt-64 bg-secondary/10 w-[36rem] h-72 -z-20"></div>
          <div className="right-0 w-auto h-4 -mt-10 bg-primary/30 -z-10"></div>
          
          
        </div>

        <div className="col-span-3 mt-24">
          <div className="h-[460px] w-[480px]">
             <Spline scene="https://prod.spline.design/FUg964g5l9mKwzLx/scene.splinecode" />
          </div>
          <div className="bg-primary/30 -mt-[21rem] w-[30rem] h-[24rem]"></div>
        </div>

        <div className="relative col-span-2 border-l-4 border-primary">
          <img src="stamp.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute left-6 top-4 w-36"/>
          <img src="scribbles.svg" alt="Rabiscos" className="absolute bottom-4 right-6 w-36"/>
        </div>
      </div>

      <div className="grid grid-cols-10">
        <div className="col-span-8 pt-20 pl-2 h-[90vh]">
          <iframe src="https://embed.styledcalendar.com/#DvQW3okpp6rEncOSdL1y" title="Styled Calendar" className="ml-8 w-[70vw] h-[80vh]" data-cy="calendar-embed-iframe"></iframe>
          <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
          <div className="bg-secondary/40 -mt-[32rem] ml-[50rem] w-full h-[24rem]"></div>
        </div>
        <div className="relative col-span-2 border-l-4 border-primary">
        <img src="atena.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-48 top-[12rem] left-2 -rotate-12"/>
        <img src="hades.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-64 top-[24rem] right-4 rotate-[16deg]"/>
        </div>
      </div>

      <div className="grid grid-cols-10">
        <div className='flex items-center justify-center col-span-8 border-t-2 border-primary'>
          Feito com <FontAwesomeIcon className='mx-2 text-primary' icon={faHeart}/> por Eduardo Função
        </div>
        <div className="col-span-2 border-l-4 border-primary">
          <div>sidebar</div>
        </div>
      </div>

    </main>
  );
}

