import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';

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
            className='absolute bottom-5 p-6 shadow-2xl rounded-xl hover:scale-125 ease-in-out transition-all '
            src={project.image}
            width={350}
            height={350}
            alt=''
            property=''
          />
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
