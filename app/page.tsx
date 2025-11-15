"use client"
import Image from "next/image";
import {HomeHeader, HomeMain, HomeAsideLeft, HomeAsideRight, HomeFooter} from '@/app/components/components'

export default function Home() {
  return (
  <div className="flex justify-center-safe flex flex-col gap-2 h-full">

      <header className="flex justify-center-safe">
        <HomeHeader></HomeHeader>
      </header>

      <div className="flex justify-center gap-2">

      <main>
      <HomeMain></HomeMain>
      </main>
      
      <aside>
        <HomeAsideRight></HomeAsideRight>
      </aside>

      </div>


      <main>
        <HomeMain></HomeMain>
      </main>

  </div>
  );
}
