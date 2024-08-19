"use client";
import { ConsultationSwiperSlideType } from '@/sanity/types';
import { FC } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ConsultationSwiperSlide from '../ConsultationSwiperSlide';
import { Column, PaginationContainer, Row, Section, Spacer, SwiperContainer } from './ConsultationSection.styled';

const slidesData = [
  {
    imageSrc: 'https://innotech.software/wp-content/uploads/2021/01/proj-100x100.png',
    imageHoverSrc: 'https://innotech.software/wp-content/uploads/2021/01/proj-white-100x100.png',
    heading: 'Project oriented',
    text: 'Esperienza nella gestione di progetti di sviluppo che implementano e interconnettono i sistemi IT delle PMI',
  },
  {
    imageSrc: 'https://innotech.software/wp-content/uploads/2021/01/lab-100x100.png',
    imageHoverSrc: 'https://innotech.software/wp-content/uploads/2021/01/lab-white-100x100.png',
    heading: 'LAB di sviluppo',
    text: 'Specialisti delle nuove tecnologie capaci di personalizzare le soluzioni IT alle necessità delle aziende',
  },
  {
    imageSrc: 'https://innotech.software/wp-content/uploads/2021/01/cust-100x100.png',
    imageHoverSrc: 'https://innotech.software/wp-content/uploads/2021/01/cust-white-100x100.png',
    heading: 'Digital Business Transformation',
    text: 'Integrazione tra processi e risorse per un efficiente modello di business digitale',
  },
];

type ConsultationSectionProps = {
  consultationSwiperSlides: ConsultationSwiperSlideType[];
}

const ConsultationSection: FC<ConsultationSectionProps> = ({consultationSwiperSlides}) => {
  return (
    <Section>
      <Row>
        <Column>
          <SwiperContainer>
            <Swiper
              spaceBetween={0} // Adjust the value as needed
              slidesPerView={3}
              autoplay={{ delay: 5000 }}
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, el: '.swiper-pagination' }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                990: { slidesPerView: 3 },
              }}
            >
              {consultationSwiperSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <ConsultationSwiperSlide
                    imageSrc={slide.imageSrc}
                    heading={slide.heading}
                    text={slide.text}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <PaginationContainer>
              <div className="swiper-pagination"></div>
            </PaginationContainer>
          </SwiperContainer>
        </Column>
      </Row>
      <Spacer />
    </Section>
  );
};

export default ConsultationSection;
