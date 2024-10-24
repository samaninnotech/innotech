"use client";
import { ConsultationSwiperSlideType } from "@/sanity/types";
import { FC } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Column,
  PaginationContainer,
  Row,
  Section,
  Spacer,
  SwiperContainer,
} from "./ConsultationSection.styled";
import ConsultationSwiperSlide from "./ConsultationSwiperSlide";

type ConsultationSectionProps = {
  consultationSwiperSlides: ConsultationSwiperSlideType[];
};

const ConsultationSection: FC<ConsultationSectionProps> = ({
  consultationSwiperSlides,
}) => {
  return (
    <Section>
      <Row>
        <Column>
          <SwiperContainer>
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              autoplay={{ delay: 5000 }}
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
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
