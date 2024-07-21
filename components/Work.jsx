'use client';

import Link from 'next/link';
import { Button } from './ui/button';

//import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

//components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/react-twitter-clone.png',
    category: 'React js ',
    name: 'React-Twitter-Clone',
    description:
      'React Twitter Clone is a modern social platform for posting, following, and real-time messages.',
    link: 'https://react-twitter-clone.onrender.com/',
    github: 'https://github.com/Zhenhui-HeYNWA/React-Twitter-clone',
  },
  {
    image: '/work/next-weather-app.png',
    category: 'next js',
    name: 'Next-weather',
    description:
      'Next.js Weather App provides real-time weather updates with a sleek, user-friendly interface.',
    link: 'https://nextjs-weather-app-psi-peach.vercel.app/',
    github: 'https://github.com/Zhenhui-HeYNWA/nextjs-weather-app',
  },
  {
    image: '/work/3.png',
    category: 'React js',
    name: 'Nexa Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsa.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'Fullstack',
    name: 'Nexa Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsa.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Envision Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsa.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'React js',
    name: 'Nova Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsa.',
    link: '/',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48 '>
      <div className='container mx-auto'>
        {/* text */}
        <div
          className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
xl:items-start'>
          <h2 className='section-title mb-4 '>Latest Project</h2>
          <p className='subtitle mb-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. ullam.
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-20 top-0'>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className='h-[520px]'>
            {/* show only the first 4 project for the sliders  */}

            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
