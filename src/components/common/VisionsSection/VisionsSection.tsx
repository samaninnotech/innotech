import React from 'react';
import VisionCard from '../VisionCard';
import { GridWrapper, Heading, SectionWrapper, Spacer } from './VisionsSection.styled';

const VisionsSection: React.FC = () => {
  const visionData = [
    {
      id: 1,
      title: "Progetti al centro",
      text: "Il nostro lavoro consiste nel gestire progetti di sviluppo, integrati sia con i sistemi informatici che con la user experience",
      imgSrc: "https://innotech.software/wp-content/uploads/2021/11/progetti-innotech-330x330.jpg",
      imgAlt: "progetti-innotech",
    },
    {
      id: 2,
      title: "Laboratori di sviluppo",
      text: "Durante lo sviluppo di un software si ha bisogno di specialisti delle nuove tecnologie e noi li abbiamo voluti e formati, ora sono il nostro team",
      imgSrc: "https://innotech.software/wp-content/uploads/2021/11/sviluppo-innotech-330x330.jpg",
      imgAlt: "sviluppo-innotech",
    },
    {
      id: 3,
      title: "Digital business transformation",
      text: "La vostra azienda e vostri clienti possono contare sulla totale integrazione tra processi e risorse per tutto ciò che riguarda la gestione delle informazioni e la progettazione IT",
      imgSrc: "https://innotech.software/wp-content/uploads/2021/11/digital-transformation-innotech-330x330.jpg",
      imgAlt: "digital-transformation-innotech",
    },
  ];

  return (
    <SectionWrapper>
      <Spacer />
      <Heading>In cosa siamo bravi?</Heading>
      <Spacer />
      <Heading large>
        Te lo spieghiamo con la nostra <mark>Vision & Mission</mark>
      </Heading>
      <Spacer />
      <Spacer />
      <GridWrapper>
        {visionData.map((vision) => (
          <VisionCard key={vision.id} {...vision} />
        ))}
      </GridWrapper>
      <Spacer />
      <Spacer />
      <Heading large>
        Le sfide sono solo opportunità per noi. <mark>Le affrontiamo insieme?</mark>
      </Heading>
      <Spacer />
    </SectionWrapper>
  );
};

export default VisionsSection;
