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
    <main>
      <div className="grid grid-cols-10 h-[500px]">
        <div className="col-span-5 bg-primary">Teste</div>
        <div className="col-span-3 bg-secondary">Teste</div>
        <div className="col-span-2 border-l-2 bg-bground border-primary">Teste</div>
      </div>
      <div className="grid grid-cols-10 h-[500px]">
        <div className="col-span-8 bg-secondary">Teste</div>
        <div className="col-span-2 border-l-2 bg-bground border-primary">Teste</div>
      </div>

    </main>
  );
}

