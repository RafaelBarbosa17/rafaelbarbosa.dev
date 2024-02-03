"use client";
import Image from 'next/image';

const avatar_url = "https://avatars.githubusercontent.com/u/108892373?v=4";

const About = () => {
  return (
    <section className='w-full min-h-screen bg-blue-950 py-4 pb-16'>
      <h1 className='w-full text-center text-3xl text-white font-bold font-inter my-2'>
        Sobre mim
      </h1>
      <div className='w-full flex flex-col gap-6 items-center'>
        <div className='flex flex-col md:flex-row-reverse gap-4 justify-center items-center'>
          <div id='profile-picture-effects'>
            <div id='effect-card-picture'></div>
            <Image 
              className='w-[200px] h-[200px] rounded-2xl contrast-100 border-[#ff00cc] border-4'
              width={200}
              height={200}
              src={avatar_url}
              alt='profile photo'
            />
          </div>
          <p className="font-inter text-white md:text-left text-center md:max-w-[400px] p-4 mt-8">
            Meu nome é Rafael Barbosa, tenho 20 anos e sou um entusiasta da tecnologia. Minha paixão está voltada para a engenharia de software, com um foco especial no desenvolvimento de sistemas. Adoro dedicar meus esforços à criação de páginas ricas em design e interações, seja para atrair clientes ou melhorar a experiência dos usuários.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
          <div id='designtecnology-picture-effects'>
            <Image 
              className='w-[200px] h-[200px]'
              width={200}
              height={200}
              src={'/designtecnology.jpeg'}
              alt='profile photo'
            />
          </div>
          <p className="font-inter text-white md:text-left text-center md:max-w-[400px] p-4 mt-2">
            Acredito que a combinação entre tecnologia e design pode criar soluções incríveis e impactantes. Estou sempre em busca de novas maneiras de tornar a experiência online mais atraente e funcional. Se você está em busca de alguém apaixonado por criar soluções inovadoras e eficazes, estou à disposição para colaborar em seus projetos.
          </p>
        </div>
        <div className='flex flex-col md:flex-row-reverse gap-4 justify-center items-center'>
          <div id='get-job-picture-effects'>
            <div id='get-job-card-picture'></div>
            <Image 
              className='w-[200px] h-[200px] relative z-50'
              width={200}
              height={200}
              src={'/get-job.jpeg'}
              alt='profile photo'
            />
          </div>
          <p className="font-inter text-white md:text-left text-center md:max-w-[400px] p-4 mt-2">
            Espero poder contribuir com minha paixão pela tecnologia e meu comprometimento com a excelência em cada projeto. Aguardo ansiosamente a oportunidade de trabalhar juntos e fazer a diferença no mundo digital.
          </p>
        </div>
      </div>
    </section>
    );
};

export default About;