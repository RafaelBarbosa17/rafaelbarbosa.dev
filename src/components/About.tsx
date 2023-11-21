"use client";
import Image from 'next/image';

const avatar_url = "https://avatars.githubusercontent.com/u/108892373?v=4";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-blue-950 md:flex md:justify-evenly justify-center pt-16">
      <div className="w-full md:w-max p-4 flex justify-center">
        <div className="md:block hidden" id="profile-picture-effects">
          <Image
            className="w-[350px] h-[350px] m-auto rounded-2xl grayscale contrast-100"
            width={350}
            height={350}
            src={avatar_url}
            alt="profile photo"
          />
        </div>
        <div className="md:hidden block" id="profile-picture-effects-s">
          <Image
            className="w-[200px] h-[200px] m-auto rounded-2xl grayscale contrast-100"
            width={200}
            height={200}
            src={avatar_url}
            alt="profile photo"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <p className="font-inter text-white md:text-left text-center md:max-w-[400px] max-w-[400px] p-4">
          Meu nome é Rafael Barbosa, tenho 20 anos e sou um entusiasta da tecnologia. Minha paixão está voltada para a engenharia de software, com um foco especial no desenvolvimento de sistemas. Adoro dedicar meus esforços à criação de páginas ricas em design e interações, seja para atrair clientes ou melhorar a experiência dos usuários.
          <br />
          <br />
          Acredito que a combinação entre tecnologia e design pode criar soluções incríveis e impactantes. Estou sempre em busca de novas maneiras de tornar a experiência online mais atraente e funcional. Se você está em busca de alguém apaixonado por criar soluções inovadoras e eficazes, estou à disposição para colaborar em seus projetos.
          <br />
          <br />
          Espero poder contribuir com minha paixão pela tecnologia e meu comprometimento com a excelência em cada projeto. Aguardo ansiosamente a oportunidade de trabalhar juntos e fazer a diferença no mundo digital.
        </p>
      </div>
    </section>
  );
};

export default About;
