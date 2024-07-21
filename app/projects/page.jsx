'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/react-twitter-clone.png',
    category: 'React js',
    name: 'React-Twitter-Clone',
    description:
      'React Twitter Clone is a modern social platform for posting, following, and real-time notifications.',
    link: 'https://react-twitter-clone.onrender.com/',
    github: 'https://github.com/Zhenhui-HeYNWA/React-Twitter-clone',
  },
  {
    image: '/work/next-weather-app.png',
    category: 'Next js',
    name: 'Next-weather',
    description:
      'Next.js Weather App provides real-time weather updates with a sleek, user-friendly interface..',
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
    category: 'Next js',
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
//remove category duplicates
const uniqueCategories = [
  'All projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All projects');

  const filteredProjects = projectData.filter((project) => {
    //if category === is 'All projects' return all projects else filter by category
    return category === 'All projects'
      ? project
      : project.category === category;
  });
  console.log(filteredProjects);
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My project
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none '>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'>
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
