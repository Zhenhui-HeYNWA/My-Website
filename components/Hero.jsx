'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiCodeSSlashLine,
  RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  const handleDownloadCV = () => {
    fetch('/reviews/ZhenhuiHe(Herbert)-resume.pdf')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'ZhenhuiHe-resume.pdf'; // Just the file name, no path
        alink.click();

        // Revoke the object URL after download
        window.URL.revokeObjectURL(fileURL);
      })
      .catch((error) => {
        console.error('Error fetching and downloading PDF:', error);
      });
  };
  return (
    <section className='py-12 xl:py-24 h-[84vh] xt:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none '>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}

          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Web Developer
            </div>

            <h1 className='h1 mb-4'>Hello, My name is Zhenhui He</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2 shadow-md'>
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant='secondary'
                className='gap-x-2 shadow-md'
                onClick={handleDownloadCV}>
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* social */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary hover:scale-150 ease-in-out transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex  relative'>
            {/* badge 1*/}
            <Badge
              containerStyles='absolute top-[24%] -left-[7rem]'
              icon={<RiCodeSSlashLine />}
              endCountNum={1}
              badgeText={'Years Of Experience'}
            />

            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText='k'
              badgeText={'Finished Projects'}
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText='k'
              badgeText={'Happy client'}
            />
            <div className='animate-border-radius-2 bg-[#15A374]  w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='animate-border-radius  hover:stop-animation w-[500px] h-[500px] bg-no-repeat relative bg-bottom'
              imgSrc='bg-[url(/hero/my-img.png)]'
            />
          </div>
        </div>
        {/* icon */}
        <div
          className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-22
           animate-bounce
        '>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
