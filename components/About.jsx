import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';
import Home from '@/app/page';

const infoData = [
  { icon: <User2 size={20} />, text: 'Zhenhui He' },
  { icon: <PhoneCall size={20} />, text: ' +61 0435 816 339' },
  { icon: <MailIcon size={20} />, text: 'herbertynwa@outlook.com' },
  { icon: <Calendar size={20} />, text: 'Born on  1 Jan 1996' },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor of Information Technology',
  },
  { icon: <HomeIcon size={20} />, text: '285 La Trobe st' },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Example University',
        qualificationData: 'Bachelor of IT',
        years: ' 2018 - 2023',
      },
      {
        university: 'Example University',
        qualificationData: 'Bachelor of IT',
        years: '2018 - 2023',
      },
    ],
  },
  {
    title: 'experiences',
    data: [
      {
        company: 'XXXX',
        role: 'xxx',
        years: '2015',
      },
      {
        company: 'XXXX',
        role: 'xxx',
        years: '2022-2024',
      },
    ],
  },
];

const skillsData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/postman.svg',
      },
      {
        imgPath: '/about/tailwind.svg',
      },
      {
        imgPath: '/about/css-3.svg',
      },
      {
        imgPath: '/about/html-5.svg',
      },
      {
        imgPath: '/about/js.svg',
      },
      {
        imgPath: '/about/mongo.svg',
      },
      {
        imgPath: '/about/react-query.svg',
      },
      {
        imgPath: '/about/nextjs.svg',
      },
      {
        imgPath: '/about/scss.svg',
      },
      {
        imgPath: '/about/react.svg',
      },
      {
        imgPath: '/about/node-js.svg',
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24 pt-16'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About Me
        </h2>
        <div
          className='flex flex-col xl:flex-row
        '>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative justify-center'>
            <DevImg
              containerStyles=' animate-border-radius bg-[#15A374]  hover:stop-animation w-[350px] h-[350px] bg-no-repeat relative '
              imgSrc='bg-[url(/about/1234.png)]'
            />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList
                className='w-full grid xl:grid-cols-3 xl:max-w-[520px]
              xl:border dark:border-none  '>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualification'>
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Unmatched Service Quality for over 10 years{' '}
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0 '
                            key={index}>
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Languages Skills</div>
                      <div className='border-b border-border'></div>
                      <div>English Cantonese Mandarin</div>
                    </div>
                  </div>
                </TabsContent>

                {/* Qualification */}

                <TabsContent value='qualification'>
                  <div>
                    <h3 className='h3 mb-8 text-center'>My Awesome Journey</h3>

                    {/* Experience and Education wrapper */}
                    <div className='grid md:grid-cols-2  gap-y-8'>
                      {/* Experience  */}
                      <div className='flex  flex-col  gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className=' capitalize font-medium'>
                            {getData(qualificationData, 'experiences').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experiences').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className='flex gap-x-8 group '
                                  key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div
                                      className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                     group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education  */}
                      <div className='flex  flex-col  gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className=' capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualificationData, years } =
                                item;
                              return (
                                <div
                                  className='flex gap-x-8 group '
                                  key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div
                                      className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                     group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualificationData}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='skills'>
                  {/* Skills */}
                  <div className='text-center xl:text-left '>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    <div className='mb-16 '>
                      <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list  */}
                      <div>
                        {getData(skillsData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-2/3 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}>
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* Tool lists */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillsData, 'tools').data.map(
                          (item, index) => {
                            const { imgPath } = item;

                            const isSpecialLogo =
                              imgPath === '/about/nextjs.svg';

                            return (
                              <div className='hover:scale-110 transition-all ease-linear'>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=''
                                  priority
                                  className={
                                    isSpecialLogo ? 'special-logo' : ''
                                  }
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
