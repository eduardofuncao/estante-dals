"use client"
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Cell() {
  return(
    <div className="bg-blue-300">Teste</div>
  ); 
}

function getMoonPhase(year:number, month:number, day:number)
{
    var c = 0; var e = 0; var jd = 0; var b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = Math.floor(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
    
    return b;
}

const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
let today = new Date();
let cabecalho = today.getDate() + " de " + meses[today.getMonth()] + " de " + today.getFullYear();


export default function Home() {
  return (
  <main className="min-w-[640px] font-neulis bg-[url('../public/paper.svg')]">


      {/*navbar*/}
      <div className="relative grid h-20 grid-cols-10 border-b-2 border-primary">
        <img src="logo.svg" alt="Logo" className="col-span-1 ml-8 h-[75px] w-auto"/>
        <div className="self-end col-span-3 mb-2 text-3xl justify-self-end text-primary">Bom dia, Dals!</div>
        <div className="self-start col-span-4 mt-2 -ml-16 text-2xl text-secondary">{cabecalho}</div>
        <div className=" col-span-2 flex flex-row justify-center *:mx-4 text-secondary py-5">
          <div>signo</div>
          <div className='flex items-center'>Fase lua</div>
          <div className='flex items-end'>Tempo</div>
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
        {/*estante*/}
        <div className="col-span-3 mt-24">
          <div className="h-[460px] w-[480px]">
             <Spline scene="https://prod.spline.design/FUg964g5l9mKwzLx/scene.splinecode" />
          </div>
          <div className="bg-primary/30 -mt-[21rem] w-[30rem] h-[24rem]"></div>
        </div>
        {/*rabiscos*/}
        <div className="relative col-span-2 border-l-4 border-primary">
          <img src="stamp.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute left-6 top-4 w-36"/>
          <img src="sun.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute right-0 top-[12rem] w-28"/>
          <img src="scribbles.svg" alt="Rabiscos" className="absolute bottom-4 right-6 w-36"/>
        </div>
      </div>

      {/*calendario*/}
      <div className="grid grid-cols-10 bg-right-top">
        <div className="col-span-8 pt-20 pl-2 h-[95vh]">
          <iframe src="https://embed.styledcalendar.com/#DvQW3okpp6rEncOSdL1y" title="Styled Calendar" className="ml-8 w-[70vw] h-[80vh]" data-cy="calendar-embed-iframe"></iframe>
          <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
          <div className="bg-secondary/40 -mt-[32rem] ml-[50rem] w-full h-[24rem]"></div>
        </div>
        <div className="relative col-span-2 border-l-4 border-primary">
          <img src="atena.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-48 top-[12rem] left-2 -rotate-12"/>
          <img src="hades.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-64 top-[24rem] right-4 rotate-[16deg]"/>
        </div>
      </div>
      {/*footer*/}
      <div className="grid grid-cols-10">
        <div className='flex items-center justify-center col-span-8 py-8 border-t-2 border-primary'>
          Feito com <FontAwesomeIcon className='mx-2 text-primary' icon={faHeart}/> por Eduardo Função
        </div>
        <div className="col-span-2 border-t-2 border-l-4 border-primary">
          <div>sidebar</div>
        </div>
      </div>

    </main>
  );
}

