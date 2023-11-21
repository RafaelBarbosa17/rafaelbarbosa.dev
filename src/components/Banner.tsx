"use client";
import Header from "./Header";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const Banner = () => {
  return (
    <section id="Banner" className="flex flex-col items-center">
      <Header />
      <div className="h-[90vh] max-h-min w-screen max-w-[1000px] flex flex-wrap-reverse justify-center mg:justify-around items-center">
        <div className="max-w-[425px] w-full flex flex-col items-center">
          <h2 className="text-center font-inter md:text-3xl text-2xl font-bold">
            Olá, eu sou Rafael 👋
          </h2>
          <h1 className="text-center uppercase md:text-7xl mg:text-4xl text-3xl font-rowdies font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-600">
            Desenvolvedor Web
          </h1>
          <button className="text-[#241943] rounded m-8 px-4 py-2 text-xl font-bold relative hover:scale-110 hover:text-[#3400b9]">
            <span className="z-50">Vamos trabalhar juntos?</span>
          </button>
          <div className="flex flex-row gap-6 mt-4">
            <a
              href="https://github.com/RafaelBarbosa17"
              target="_blank"
              className="link"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-barbosa-30372524b/"
              target="_blank"
              className="link"
            >
              <BsLinkedin />
            </a>
            <a href="https://wa.link/v1hfsi" target="_blank" className="link">
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
