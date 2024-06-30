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
const review = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Chef',
    review:
      '  return Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Mason  Wilson',
    job: 'Chef',
    review:
      '  return Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Evelyn Anderson',
    job: 'Game Dev',
    review:
      '  return Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Financial leader',
    job: 'Chef',
    review:
      '  return Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Teacher Head',
    job: 'Chef',
    review:
      '  return Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Teacher Head',
    job: 'Therapist',
    review:
      '  return Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates',
  },
];
const Review = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Review</h2>
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
          {review.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={item.avatar}
                        width={70}
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div>
                        <CardTitle>{item.name}</CardTitle>
                        <p>{item.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {item.review}
                  </CardDescription>
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
