"use client"
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

function getZodSign(day:number, month:number) {
  const signos = ["capricórnio", "aquário", "peixes", "áries", "touro", "gêmeos", "câncer", "leão", "virgem", "libra", "escorpião", "sagitário"];
  if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
    return signos[0];
  } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
    return signos[1];
  } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return signos[2];
  } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return signos[3];
  } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)){
    return signos[4];
  } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    return signos[5];
  } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return signos[6];
  } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
    return signos[7];
  } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
    return signos[8];
  } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
    return signos[9];
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    return signos[10];
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    return signos[11];
  }
}

function getGreeting(hour:number){
  if(hour < 12) return "bom dia, dals!"
  else if(hour<18) return "boa tarde, dals!"
  else return "boa noite, dals!"
}

const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let today = new Date();
let dia = today.getDate();
let mes = today.getMonth();
let ano = today.getFullYear();
let hora = today.getHours();
let cabecalho = dia + " de " + meses[mes] + " de " + ano;

const fases = ["lua nova", "crescente", "quarto crescente", "crescente gibosa", "lua Cheia", "minguante gibosa", "quarto minguante", "minguante"];
let fase = fases[getMoonPhase(ano,mes,dia)];

let signo = getZodSign(dia, mes+1);

let greeting = getGreeting(hora);

const apiKey = "302fbfa1c9142dd22096df320fc91f22";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

export default function Home() {
  return (
  <main className="min-w-[640px] font-neulis bg-[url('../public/paper.svg')]">


      {/*navbar*/}
      <div className="relative grid h-20 grid-cols-10 border-b-2 border-primary">
        <img src="logo.svg" alt="Logo" className="col-span-1 ml-8 h-[75px] w-auto"/>
        <div className="self-end col-span-3 mb-2 text-3xl justify-self-end text-primary">{greeting}</div>
        <div className="self-start col-span-4 mt-2 -ml-16 text-2xl text-secondary">{cabecalho}</div>
        <div className=" col-span-2 flex flex-row justify-center *:mx-4 text-secondary py-5">
          <div>{signo}</div>
          <div className='flex items-center'>{fase}</div>
          <div className='flex items-end'>temp</div>
        </div>
      </div>
      {/*main*/}
      <div className="grid grid-cols-10">
        {/*titulo */}
        <div className="relative col-span-5">
          <img src="title.png" alt="Estante da Dals" className="ml-16 w-[36rem]" />
          <div className="-mt-64 bg-secondary/10 w-[36rem] h-72 -z-20"></div>
          <div className="right-0 w-auto h-4 -mt-10 bg-primary/30 -z-10"></div>
          <div className='mx-16 mt-16 text-lg text-secondary'> feliz um ano de namoro, eu te amo muito! aqui tem coisas bonitas sobre a gente e testes que demoraram muito mais do que eu gostaria de adimitir pra funcionar. Segura aquele botao <FontAwesomeIcon className=' text-primary' icon={faArrowRight}/> pra ver o que acontece </div>
          <div className='inline-block px-2 ml-16 text-sm text-bground bg-secondary/50'>Flatam X dias pra você poder comemorar... vamos ter a mesma idade</div>
        </div>
        {/*estante*/}
        <div className="col-span-3 mt-24">
          <div className="h-[460px] w-[480px]">
            <Spline scene="https://prod.spline.design/aVuPaGMb3RF9w9jP/scene.splinecode" />
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
        <div className="col-span-8 pt-20 pl-2">
          <div className='ml-6 text-3xl text-primary'>nossos dates</div>
          <div className='inline-block px-2 ml-16 text-sm text-bground bg-primary/70'>Um calendário com todas as vezes que saímos juntos, principalmente de quando saímos pra comer</div>
          <iframe src="https://embed.styledcalendar.com/#DvQW3okpp6rEncOSdL1y" title="Styled Calendar" className="ml-8 w-[70vw] h-[750px]" data-cy="calendar-embed-iframe"></iframe>
          <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
          <div className="bg-secondary/40 -mt-[32rem] ml-[50rem] w-full h-[24rem]"></div>
        </div>
        <div className="relative col-span-2 border-l-4 border-primary">
          <img src="atena.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-48 top-[12rem] left-2 -rotate-12"/>
          <img src="hades.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-64 top-[24rem] right-4 rotate-[16deg]"/>
        </div>
      </div>

      {/*fotos*/}
      <div className="grid grid-cols-10">
        <div className='col-span-8 mt-2 mb-2 ml-2 mr-32 bg-secondary/40'>
          <div className='inline px-2 ml-6 text-3xl text-bground'>momentos felizes</div>
          <div className='flex justify-center ml-56 bg-primary/40 w-[80%]'>
            <div className='grid grid-cols-5 mt-2 ml-4'>
              <div className='col-span-1'>
                <img src="fotos/campos.jpg" alt="" className='w-auto h-48' />
                <p className='text-center'>campos</p>
              </div>
              <div className='col-span-1'>
                <img src="fotos/maceio.jpg" alt="" className='w-auto h-48' />
                <p className='text-center'>campos</p>
              </div>
              <div className='col-span-1'>
                <img src="fotos/formatura1.jpg" alt="" className='w-auto h-48' />
                <p className='text-center'>campos</p>
              </div>
              <div className='col-span-1'>
                <img src="fotos/casal.jpg" alt="" className='w-auto h-48' />
                <p className='text-center'>campos</p>
              </div>
              <div className='col-span-1'>
                <img src="fotos/taylor.jpg" alt="" className='w-auto h-48' />
                <p className='text-center'>campos</p>
            </div>
          </div>
          


          
        </div>
        </div>
        <div className="col-span-2 border-l-4 border-primary"></div>
      </div>
      
      {/*textinho*/}
      <div className='grid grid-cols-10'>
        <div className='flex col-span-8 mt-8 mr-16'>
          <div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
          </div>
          <div className='px-2 ml-16 w-[500px] text-secondary bg-primary/30 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iste incidunt vel magni quas, nihil quos voluptatum ratione impedit nesciunt dolore accusantium cupiditate pariatur quidem repellat illum delectus harum saepe distinctio perferendis. Optio explicabo error delectus aliquam unde cumque eius, recusandae id fuga ipsam rem nostrum, animi officia vel labore!</div>
        </div>
        <div className="col-span-2">

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

