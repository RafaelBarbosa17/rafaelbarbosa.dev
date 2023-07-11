"use client"
import { useEffect, useState } from "react"
import Header from "./Header"
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'
import Image from "next/image"

interface DataProps {
    bio: string
    avatar_url: string
}

const linkApi = "https://api.github.com/users/rafaelbarbosa17"

const Banner = () => {
    const [data, setData] = useState({} as DataProps)
    
    const getDatas = async () => {
        const data = await fetch(linkApi)
        const response = await data.json()
        console.log(response)
        setData(response)
    }
    
    useEffect(() => {
        getDatas()
    }, [])

    return (
        <section id="Banner" className="">
            <Header />
            <div className="h-[90vh] w-screen flex flex-wrap-reverse justify-center mg:justify-around items-center">
                <div className="max-w-[425px] w-full flex flex-col items-center">
                    <h2 className="text-center uppercase font-inter text-2xl font-bold">Olá, Eu sou Rafael</h2>
                    <h1 className="text-center uppercase text-3xl font-inter font-bold">
                        Desenvolvedor 
                        <br />
                        Web
                    </h1>
                    <p className="text-center max-w-[90vw] font-inter font-bold my-4">
                        Tenho 20 anos sou desenvolvedor web com foco em frontend, tenho 1 ano de experiência como freelancer.
                    </p>
                    <div className="flex flex-row gap-6">
                        <a href="https://github.com/RafaelBarbosa17" target="_blank"  className="link">
                            <BsGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/rafael-barbosa-30372524b/" target="_blank" className="link">
                            <BsLinkedin />
                        </a>
                        <a href="https://wa.link/v1hfsi" target="_blank" className="link">
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
                <div className="h-max my-2">
                    <div className="w-[200px] h-[200px] bg-cover bg-center rounded-[50%] shadow-[0px_0px_0px_5px_#241943] saturate-100" style={{backgroundImage: `url(${data.avatar_url})`}}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner