'use client'
import Header from "./Header";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Animate } from "./Animate";
import { useState } from "react";
import Image from "next/image";

const Banner = () => {
  const [linkHover, setLinkHover] = useState(false);

  return (
    <section id="Banner" className="flex flex-col items-center">
      <Header />
      <div className="min-h-[90vh] max-h-min w-screen max-w-[1000px] flex justify-start pt-8">
        <div className="px-4 py-6 flex flex-col">
          <Animate style="overflow-hidden">
            <h2 className="font-rowdies mg:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-600">
              Eu sou Rafael.
            </h2>
          </Animate>
          <Animate style="overflow-hidden">
            <h1 className="mg:text-4xl text-2xl font-inter font-black text-[#2b1b58]">
              Desenvolvedor de Software
            </h1>
          </Animate>
          <Animate style="overflow-hidden">
            <p className="font-bold max-w-[400px]">
              Tenho 20 anos e estou a 1 ano e meio atuando como Desenvolvedor de Software freelancer.
            </p>
          </Animate>
          <Animate style="overflow-visible">
            <div className="flex flex-row gap-6 mt-4">
              <a
                href="https://github.com/RafaelBarbosa17"
                target="_blank"
                className="link hover:bg-black"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-barbosa-30372524b/"
                target="_blank"
                className="link hover:bg-[#0a66c2]"
                onMouseOver={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
              >
                {
                  linkHover ?
                  <FaLinkedinIn /> :
                  <BsLinkedin />
                }
              </a>
              <a 
                href="https://wa.link/v1hfsi" 
                target="_blank" 
                className="link hover:bg-[#00e676]"
              >
                <BsWhatsapp />
              </a>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default Banner;
