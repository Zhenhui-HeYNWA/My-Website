'use client';

import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

//import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';
import { projectData } from '@/public/stores/projects';

const Review = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>
          My pictures wall
        </h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className='h-[350px]'>
          {projectData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40  items-center justify-center p-8 min-h-[300px]'>
                  <CardHeader className='p-0  '>
                    <div className='flex items-center gap-x-4  justify-center'>
                      {/* image */}
                      <Image
                        src={item.image}
                        width={320}
                        height={320}
                        alt=''
                        priority
                        className='rounded-xl'
                      />
                      {/* name */}
                    </div>
                  </CardHeader>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
