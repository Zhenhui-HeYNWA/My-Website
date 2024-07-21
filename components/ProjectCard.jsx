import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';
import { RiGithubFill, RiLink } from 'react-icons/ri';

const ProjectCard = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* Images */}
        <div
          className='relative w-full h-[300px] flex items-center justify-center 
        dark:bg-secondary/40 xl:bg-work_project_bg_light 
        xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-5  shadow-2xl rounded-xl hover:scale-125 ease-in-out transition-all '
            src={project.image}
            width={320}
            height={320}
            alt=''
            property=''
          />
          {/* button links */}
          {/* <div className='flex gap-x-4'>
            <Link
              href={project.link}
              className='bg-[#15A374] w-[54px] h-[54px]
               rounded-full flex justify-center items-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
              <Link2Icon className='text-white' />
            </Link>
            <Link
              href={project.github}
              className='bg-[#15A374] w-[54px] h-[54px]
               rounded-full flex justify-center items-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
              <Github className='text-white' />
            </Link>
          </div> */}
        </div>
      </CardHeader>
      <div className='h-full px-4 py-4'>
        <Badge className='uppercase text-sm font-medium mb-1 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className=' text-muted-foreground text-xs'>{project.description}</p>
      </div>
      <div className='flex justify-center gap-x-4 my-4 '>
        <Link
          href={project.link}
          className=' w-[30px] h-[30px]
               rounded-full flex justify-center items-center  hover:text-primary hover:scale-150 ease-in-out transition-all'>
          <RiLink size={40} />
        </Link>
        <Link
          href={project.github}
          className=' w-[30px] h-[30px]
                flex justify-center items-center  hover:text-primary hover:scale-150 ease-in-out transition-all'>
          <RiGithubFill size={40} />
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
