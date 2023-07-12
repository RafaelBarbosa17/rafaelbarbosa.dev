"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

interface DataProps {
  bio: string;
  avatar_url: string;
}

const linkApi = "https://api.github.com/users/rafaelbarbosa17";

const Banner = () => {
  const [data, setData] = useState({} as DataProps);

  const getDatas = async () => {
    const data = await fetch(linkApi);
    const response = await data.json();
    console.log(response);
    setData(response);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <section id="Banner" className="flex flex-col items-center">
      <Header />
      <div className="h-[90vh] max-h-min w-screen max-w-[1000px] flex flex-wrap-reverse justify-center mg:justify-around items-center">
        <div className="max-w-[425px] w-full flex flex-col items-center">
          <h2 className="text-center uppercase font-inter md:text-3xl text-2xl font-bold">
            Olá, Eu sou Rafael
          </h2>
          <h1 className="text-center uppercase md:text-4xl text-3xl font-rowdies font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-fuchsia-600">
            Desenvolvedor
            <br />
            <span className="text-5xl" >Front-end</span>
          </h1>
          <p className="text-center max-w-[90vw] font-inter font-bold my-4">
            Tenho 20 anos, sou desenvolvedor web com foco em frontend, tenho 1
            ano de experiência como freelancer.
          </p>
          <div className="flex flex-row gap-6">
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
        <div className="my-2 md:my-0 md:w-[300px] md:h-[350px] w-[200px] h-[220px]">
          <div
            className="w-[100%] h-[100%] bg-cover bg-center rounded-3xl shadow-[15px_15px_20px_0px_black] staturate-150"
            style={{ backgroundImage: `url(./profile.jpg)` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
