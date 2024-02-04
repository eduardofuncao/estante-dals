"use client"
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons";

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

function daysTo(fromDate:Date, toDate:Date){
  let today = new Date();
  let year = toDate.getFullYear();

  if(today.getMonth() > toDate.getMonth() ||  today.getMonth() == toDate.getMonth() && today.getDate() > toDate.getDate()){
    console.log("aqui")
    toDate.setFullYear(year+1);
  }
  

  return (Math.ceil((toDate.getTime() - fromDate.getTime())/(1000*60*60*24)));
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
  <main className="min-w-[1000px] font-neulis bg-[url('../public/paper.svg')]">


      {/*navbar*/}
      <div className="relative grid h-20 grid-cols-10 border-b-2 border-primary">
        <img src="logo.svg" alt="Logo" className="col-span-1 ml-8 h-[75px] w-auto hover:scale-105 duration-500 ease-in-out hover:rotate-12"/>
        <div className="self-end col-span-3 mb-2 text-3xl justify-self-end text-primary">{greeting}</div>
        <div className="self-start col-span-4 mt-2 -ml-16 text-2xl text-secondary">{cabecalho}</div>
        <div className=" col-span-2 flex flex-row justify-center *:mx-4 text-secondary py-5">
          <div className='duration-500 ease-in-out hover:scale-105'>{signo}</div>
          <div className='flex items-center duration-500 ease-in-out hover:scale-105'>{fase}</div>
          <div className='flex items-end duration-500 ease-in-out hover:scale-105'><a target='_blank' href="http://chess.com"><FontAwesomeIcon className='mr-4' icon={faChessQueen}/></a></div>
        </div>
      </div>
      {/*main*/}
      <div className="grid grid-cols-10">
        {/*titulo */}
        <div className="relative col-span-5">
          <img src="title2.png" alt="Estante da Dals" className="ml-16 w-[36rem] hover:scale-105 duration-1000 ease-in-out" />
          <div className="-mt-64 bg-secondary/10 w-[36rem] h-72 -z-20"></div>
          <div className="right-0 w-auto h-4 -mt-10 bg-primary/30 -z-10"></div>
          <div className='mx-16 mt-16 text-lg text-secondary'> feliz um ano de namoro, eu te amo muito! aqui tem coisas bonitas sobre a gente e testes que demoraram muito mais do que eu gostaria de adimitir pra funcionar. Segura aquele botao <FontAwesomeIcon className=' text-primary' icon={faArrowRight}/> pra ver o que acontece </div>
          <div className='inline-block px-2 ml-16 text-sm text-bground bg-secondary/50'>Flatam {daysTo(today, new Date(today.getFullYear(),9,2))} dias pra você poder comemorar... vamos ter a mesma idade</div>
        </div>
        {/*estante*/}
        <div className="col-span-3 mt-24">
          <div className="h-[460px] w-[480px]">
           <Spline scene="https://prod.spline.design/rw-c-C7i3k10NL5N/scene.splinecode" />
          </div>
          <div className="bg-primary/30 -mt-[21rem] w-[30rem] h-[24rem]" ></div>
        </div>
        {/*rabiscos*/}
        <div className="relative col-span-2 border-l-4 border-primary">
          <img src="stamp.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute duration-500 ease-in-out hover:rotate-45 left-6 top-4 w-36 hover:scale-105"/>
          <img src="sun.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute right-0 top-[12rem] w-28 hover:scale-105 duration-500 ease-in-out"/>
          <img src="scribbles.svg" alt="Rabiscos" className="absolute duration-500 ease-in-out bottom-4 right-6 w-36 hover:scale-105"/>
        </div>
      </div>

      {/*calendario*/}
      <div className="grid grid-cols-10 bg-right-top">
        <div className="col-span-8 pt-20 pl-2">
          <div className='ml-6 text-3xl text-primary'>nossos dates</div>
          <div className='inline-block px-2 ml-16 text-sm text-bground bg-primary/70'>Um calendário com todas as vezes que saímos juntos, principalmente de quando saímos pra comer</div>
          <iframe src="https://embed.styledcalendar.com/#DvQW3okpp6rEncOSdL1y" title="Styled Calendar" className="ml-8 w-[70vw] h-[650px]" data-cy="calendar-embed-iframe"></iframe>
          <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
        </div>
        <div className="relative col-span-2 border-l-4 border-primary">
          <img src="atena.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-48 top-[12rem] left-2 -rotate-12 hover:scale-105 duration-500 ease-in-out hover:rotate-6"/>
          <img src="hades.svg" alt="carimbo circular com o texto 'propriedade de Dals, desde 1995'" className="absolute w-64 top-[24rem] right-5 rotate-[16deg] hover:scale-105 duration-500 ease-in-out hover:-rotate-6"/>
        </div>
      </div>

      {/*fotos*/}
      <div className="grid grid-cols-10">
        <div className='col-span-8 mt-2 mb-2 ml-2 mr-32 '>
          <div className='px-2 ml-6 text-3xl text-primary'>momentos felizes</div>
            <div className='flex justify-center mt-2 ml-44 pt-6 bg-secondary/40 w-[60rem] -mb-6 text-bground relative'>
            <div className='absolute w-[90%] h-[21rem] -ml-56 bg-primary/20'></div>
              <div className='grid grid-cols-5 mt-2 ml-4'>
                <div className='col-span-1'>
                  <img src="fotos/campos.svg" alt="" className='w-auto border-2 border-transparent h-72' />
                  <p className='-mt-3 text-center'>campos</p>
                </div>
                <div className='col-span-1'>
                  <img src="fotos/formatura1.svg" alt="" className='w-auto border-2 border-transparent h-72' />
                  <p className='-mt-3 text-center'>formatura</p>
                </div>
                <div className='col-span-1'>
                  <img src="fotos/casal.svg" alt="" className='w-auto border-2 border-transparent h-72' />
                  <p className='-mt-3 text-center'>elevador</p>
                </div>
                <div className='col-span-1'>
                  <img src="fotos/taylor.svg" alt="" className='w-auto border-2 border-transparent h-72' />
                  <p className='-mt-3 text-center'>taylor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-2 border-l-4 border-primary">
          <img src="wine.svg" alt="" className='absolute w-32 duration-1000 ease-in-out hover:scale-105 hover:rotate-[105deg]'/>
          <img src="wineGlass.svg" alt="" className='absolute bottom-0 w-32 duration-500 ease-in-out right-12 hover:scale-105'/>
          <img src="blob.svg" alt="" className='absolute bottom-[5.5rem] scale-[50%] scale-y-[125%] right-[2.75rem] origin-bottom hover:scale-y-[31%] ease-in-out duration-1000'/>
        </div>
      </div>
      
      {/*textinho*/}
      <div className='grid grid-cols-10'>
        <div className='relative flex col-span-8 mt-32 mr-16'>
          <div className='text-primary/10 text-[30rem] absolute mt-8 ml-[30rem] -z-50'> textinho</div>

          <div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
            <div className='ml-24 text-3xl text-primary'>textinho</div>
          </div>
          <div className='p-2 ml-16 w-[500px] text-secondary bg-primary/30 text-justify mb-4'>
            <h3 className='text-lg'>minha gatinha,</h3>
            <p className='px-2 ml-2'>eu fiquei horas pensando no que escrever aqui pra finalizar a página. mais uma vez não faço ideia do que colocar aqui e parece que nada parece bom o suficiente para representar tudo que quero falar</p>
            <p className='px-2 mt-1 ml-2'>eu sempre penso que preciso me superar a cada presente. eu acho que um dia minha criatividade vai acabar por completo, mas por enquanto ainda tenho algumas ideias. eu acabo ficando fissurido nessas coisas, e esquece o essencial. Nessas últimas semanas conversei pouco com você, e muitas vezes, como você percebeu, ficava trabalhando nesse "projeto secreto" enquanto tentava manter uma conversa com você.</p>
            <p className='px-2 mt-1 ml-2'>eu não notei que, planejando o extraordinário, deixei de notar os detalhes: os sorrisos, a risada fechando os olhinhos, a conversa animada mesmo sendo madrugada e você estando cansada, cada mensagem me contando subre seu dia, os eu te amos mais sinceros.</p>
            <p className='px-2 mt-1 ml-2'>são as tulipas da vida - elas continuam crescendo mesmo depois de serem cortadas. mesmo com todos os problemas (distância, fuso horário, você gostar de friends), nossas tulipas continuam crescendo.</p>
            <p className='px-2 mt-2 ml-2'>te amo muito e não vejo a hora de viver tudo, agora mais de perto, com você!</p>
            <p className='mr-4 text-right'>dudu</p>
            <p className='px-2 mt-16 ml-2'>o código pra abrir o seu presente está escondido em algum lugar nesse site. boa sorte!</p>
            <p className='inline-block px-1 mt-4 ml-6 cursor-pointer bg-secondary/80 text-bground peer'>dica</p>
            <p className='z-50 inline-block ml-2 duration-1000 opacity-0 peer-active:opacity-100'>você segurou bem aquele botâo?</p>

          </div>
        </div>
        <div className="col-span-2 border-l-4 border-primary">

        </div>
      </div>


      {/*footer*/}
      <div className="grid grid-cols-10">
        <div className='flex items-center justify-center col-span-8 py-8 border-t-2 border-primary text-secondary'>
          Feito com <FontAwesomeIcon className='mx-2 text-primary' icon={faHeart}/> por Eduardo Função
        </div>
        <div className="col-span-2 border-t-2 border-l-4 border-primary">
          <div></div>
        </div>
      </div>

    </main>
  );
}

