"use client";
import Image from "next/image";
import { Animate } from "./Animate";

const avatar_url = "https://avatars.githubusercontent.com/u/108892373?v=4";

const About: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-blue-950 py-4 pb-16">
      <h1 className="w-full text-center text-3xl text-white font-bold font-inter my-2">
        Sobre mim
      </h1>
      <div className="w-full flex flex-col gap-6 md:gap-32 items-center">
        <div className="w-[90%] flex flex-col md:flex-row-reverse gap-4 md:gap-16 justify-center items-center">
          <Animate hidden={{ opacity: 0, x: 75 }}>
            <div id="profile-picture-effects">
              <div
                id="effect-card-picture"
                className={`md:w-[305px] md:h-[305px] w-[200px] h-[200px]`}
              ></div>
              <Image
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-2xl md:rounded-3xl contrast-100 border-[#ff00cc] border-4 md:border-8"
                width={500}
                height={500}
                src={avatar_url}
                alt="profile photo"
              />
            </div>
          </Animate>
          <Animate hidden={{ opacity: 0, y: 75 }}>
            <p className="font-inter md:text-lg text-white md:text-left text-center md:max-w-[400px] p-4">
              Meu nome é Rafael Barbosa, tenho 20 anos e sou um entusiasta da
              tecnologia. Minha paixão está voltada para a engenharia de
              software, com um foco especial no desenvolvimento de sistemas.
              Adoro dedicar meus esforços à criação de páginas ricas em design e
              interações, seja para atrair clientes ou melhorar a experiência
              dos usuários.
            </p>
          </Animate>
        </div>
        <div className="w-[90%] flex flex-col md:flex-row gap-4 md:gap-16 justify-center items-center">
          <Animate hidden={{ opacity: 0, x: -75 }}>
            <div id="designtecnology-picture-effects">
              <Image
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
                width={500}
                height={500}
                src={"/designtecnology.jpeg"}
                alt="profile photo"
              />
            </div>
          </Animate>
          <Animate hidden={{ opacity: 0, y: 75 }}>
            <p className="font-inter text-white md:text-lg md:text-left text-center md:max-w-[400px] p-4 mt-2">
              Acredito que a combinação entre tecnologia e design pode criar
              soluções incríveis e impactantes. Estou sempre em busca de novas
              maneiras de tornar a experiência online mais atraente e funcional.
              Se você está em busca de alguém apaixonado por criar soluções
              inovadoras e eficazes, estou à disposição para colaborar em seus
              projetos.
            </p>
          </Animate>
        </div>
        <div className="w-[90%] flex flex-col md:flex-row-reverse gap-4 md:gap-16 justify-center items-center">
          <Animate hidden={{ opacity: 0, x: 75 }}>
            <div id="get-job-picture-effects">
              <div
                id="get-job-card-picture"
                className="md:w-[280px] md:h-[280px] w-[200px] h-[200px]"
              ></div>
              <Image
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative z-50"
                width={500}
                height={500}
                src={"/get-job.jpeg"}
                alt="profile photo"
              />
            </div>
          </Animate>
          <Animate hidden={{ opacity: 0, y: 75 }}>
            <p className="font-inter md:text-lg text-white md:text-left text-center md:max-w-[400px] p-4 mt-2">
              Espero poder contribuir com minha paixão pela tecnologia e meu
              comprometimento com a excelência em cada projeto. Aguardo
              ansiosamente a oportunidade de trabalhar juntos e fazer a diferença
              no mundo digital.
            </p>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
