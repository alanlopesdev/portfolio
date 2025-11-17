import { use, useState } from "react";
import Image from "next/image";
import usa from '@/public/images/usa.png'
import brasil from '@/public/images/brasil.jpg'
import ts from '@/public/images/typescript.png'
import tw from '@/public/images/tailwind.png'
import js from '@/public/images/javascript.png'
import rc from '@/public/images/react.png'
import c from '@/public/images/c.png'
import dotnet from '@/public/images/dotnet.png'
import '@/app/globals.css'

const imageHeigth = 60
const ImageWidth = 60 

export function HomeHeader(){
    return(
        <div className="flex justify-center gap-2 w-full h-15">
        <header className="bg-blue-950 bg-scroll w-full h-15">
            <nav className="text-blue-300 flex flex-rol gap-2 p-2">
                <h1 className="cursor-pointer border-b-1 text-white">Lopes</h1>
                <div className="w-full"></div>
                <div className="flex flex-row gap-2 p-2 w-100 justify-center">
                <h1 className={Styles.headerHoverText}>Sobre mim</h1>
                <h1 className="text-white">|</h1>
                <h1 className={Styles.headerHoverText}>Tecnologias</h1>
                <h1 className="text-white">|</h1>
                <h1 className={Styles.headerHoverText}>Projetos</h1>
                </div>
            </nav>
        </header>
        </div>
    )
}

export function HomeMain(){
    return(
        <div className="flex justify-center gap-2">
        <main className="flex justify-center items-center w-330 h-screen border-b-1">
            <div className="flex flex-col ml-2 gap-5">
            <h1 className="text-blue-300 text-2xl font-bold">Olá, me chamo</h1>

            <h1 id="nome" className="text-9xl font-bold">Alan Lopes.</h1>
            <h1 className="text-blue-300 text-4xl font-bold">Engenharia e arquitetura de software.</h1>
            <h1 className="text-blue-300 text-4xl font-bold">Desenvolvimento de aplicações front-end, back-end e mobile.</h1>

            </div>
        </main>
        </div>
    )
}


export function HomeAsideLeft(){
    return(
        <div className="flex justify-center gap-2">
        <div className="h-200 flex items-center">
        <aside className="flex h-100 w-100 justify-center items-center">
            <ol className="flex flex-col justify-center items-center text-blue-300 font-bold text-xl gap-10">
                <li className={Styles.efeitoAsideLeft}>HOME</li>
                <li className={Styles.efeitoAsideLeft}>LINGUAGENS E FRAMEWORKS</li>
                <li className={Styles.efeitoAsideLeft}>PROJETOS</li>
                <li className={Styles.efeitoAsideLeft}>CONTATOS</li>
            </ol>
        </aside>
        </div>
        </div>
    )
}

export function HomeAsideRight(){
    const [onMouseOverEN, SetOnMouseOverEN] = useState("")
    const [onMouseOverPT, SetOnMouseOverPT] = useState("")

    const handleMouseOverEN = () =>{
        SetOnMouseOverEN(`${Styles.asideHoverLanguage}`)
    }

    const handleMouseOutEN = () =>{
        SetOnMouseOverEN("")
    }


    const handleMouseOverPT = () =>{
        SetOnMouseOverPT(`${Styles.asideHoverLanguage}`)
    }

    const handleMouseOutPT = () =>{
        SetOnMouseOverPT("")
    }
    return(
        <div className="flex justify-center gap-2">
        <aside className="flex flex-col text-black h-200 w-30 justify-center items-center gap-50 text-white">
            <div className="flex flex-col h-50 w-30 items-center justify-center gap-10 rounded-md">
            <div className="cursor-pointer flex flex-row gap-2 border-1 w-40 rounded-md p-2 justify-center items-center"
            onMouseOver={handleMouseOverEN}
            onMouseOut={handleMouseOutEN}>
            <p className={onMouseOverEN}>Inglês</p>
            <Image
            src={usa}
            height={15}
            width={50}
            alt="usa-foto"></Image>
            </div>
            <div className="cursor-pointer flex flex-row gap-2 border-1 w-40 rounded-md justify-center p-2 items-center"
            onMouseOver={handleMouseOverPT}
            onMouseOut={handleMouseOutPT}>
            <p className={onMouseOverPT}>Português</p>
            <Image
            src={brasil}
            height={15}
            width={50}
            alt="brasil-foto"></Image>
            </div>
            </div>
        </aside>
        </div>
    )
}


export function HomeFooter(){
    return(
        <div className="flex justify-center gap-2">
        <footer className="flex flex-row justify-center gap-10">
            <Image className={Styles.imagens}
            src={js}
            height={imageHeigth}
            width={ImageWidth}
            alt="typescript"
            ></Image>
            <Image
            className={Styles.imagens}
            src={ts}
            height={imageHeigth}
            width={ImageWidth}
            alt="typescript"
            ></Image>
            <Image
            className={Styles.imagens}
            src={rc}
            height={imageHeigth}
            width={ImageWidth}
            alt="typescript"
            ></Image>
            <Image
            className={Styles.imagens}
            src={c}
            height={imageHeigth}
            width={ImageWidth}
            alt="typescript"
            ></Image>
            <Image
            className={Styles.imagens}
            src={tw}
            height={imageHeigth}
            width={ImageWidth}
            alt="typescript"
            ></Image>
            <Image
            className={Styles.imagens}
            src={dotnet}
            height={imageHeigth}
            width={ImageWidth}
            alt="typescript"
            ></Image>
        </footer>
        </div>
    )
}


export function SobreMimMain(){
    return(
        <div className="flex justify-center gap-2">
        <main className="flex flex-col gap-30 justify-center items-center w-330 h-screen border-b-1">
            <h1 className="text-white font-bold text-5xl">SOBRE MIM</h1>
            <div className="flex flex-row gap-30">
            <div className={Styles.divSobreMim}></div>
            <div className={Styles.divSobreMim}></div>
            <div className={Styles.divSobreMim}></div>
            </div>
        </main>
        </div>
    )
}

export function Tecnologias(){
    return(
        <div className="flex justify-center gap-2">
        <main className="flex flex-col gap-30 justify-center items-center w-330 h-screen border-b-1">
            <h1 className="text-white font-bold text-5xl">Tecnologias</h1>
            <div className="flex flex-row gap-30">
            <div className={Styles.divSobreMim}>
                <Image
                src={tw}
                height={90}
                width={90}
                alt="tailwind"></Image>
                <h1 className="text-white font-bold text-xl">Tailwild</h1>
            </div>
            <div className={Styles.divSobreMim}></div>
            <div className={Styles.divSobreMim}></div>
            </div>
        </main>
        </div>
    )
}


export function Projetos(){
    return(
        <div className="flex justify-center gap-2">
        <main className="flex flex-col gap-30 justify-center items-center w-330 h-screen border-b-1">
            <h1 className="text-white font-bold text-5xl">Projetos</h1>
            <div className="flex flex-row gap-30">
            <div className={Styles.divSobreMim}>
            </div>
            <div className={Styles.divSobreMim}></div>
            <div className={Styles.divSobreMim}></div>
            </div>
        </main>
        </div>
    )
}


export function FooterAll(){
    return(
        <div className="flex justify-center gap-2">
        <div className="h-50 w-full flex justify-center items-center">
            <p>© 2025 Desenvolvido por Alan Lopes - engenheiro e arquiteto de software.</p>
        </div>
        </div>
    )
}


const Styles = {
    imagens : "border-1 border-black p-2",
    efeitoAsideLeft : "cursor-pointer hover:text-2xl transtion duration-300 hover:text-shadow-lg/50 text-shadow-blue-300",
    headerHoverText : "cursor-pointer hover:text-white hover:border-b-1",
    asideHoverLanguage: "border-white border-b-1",
    divSobreMim: "h-80 w-60 flex flex-col justify-center items-center bg-blue-950 border-1 border-white rounded-4xl gap-10"
}