import React, { useState } from 'react';
import {
  AccordionContent,
  AccordionIcon,
  AccordionSection,
  AccordionTitle,
  AccordionTitleWrapper,
  AccordionWrapper,
  Column,
  HeadingLarge,
  HeadingSmall,
  LeftColumn,
  LeftColumnText,
  MarkedNumber,
  MarkedText,
  Row,
  SectionWrapper,
  Spacer,
} from './OurCompanySection.styled';

const OurCompanySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper>
      <Spacer />
      <HeadingSmall>La nostra azienda</HeadingSmall>
      <Spacer />
      <HeadingLarge>
        Abbiamo l’ambizione di portare <MarkedText>l’innovazione tecnologica</MarkedText> nel mondo attraverso <MarkedText>soluzioni e progetti di implementazione tecnologica.</MarkedText>
      </HeadingLarge>
      <Row>
        <Column md={6}>
          <LeftColumn>
            <MarkedNumber>29</MarkedNumber> Team People
          </LeftColumn>
          <LeftColumnText>
            Lavoriamo insieme per <MarkedText>985 ore alla settimana.</MarkedText> Costruiamo progetti di successo con i nostri partner.
          </LeftColumnText>
          <Spacer />
        </Column>
        <Column md={6}>
          <AccordionWrapper>
            {[
              {
                title: 'Come possiamo aiutare il tuo business?',
                content:
                  "Attraverso la nostra esperienza e le nostre soluzioni, collaboriamo con i Partner dell'Ecosistema SAP nel discutere le esigenze dei loro clienti. Siamo in grado di offrire la tecnologia più innovativa e l'esperienza professionale più affidabile. Con la nostra tecnologia costruiamo rapporti di fiducia e trasformiamo il vostro business e quello dei vostri clienti.",
              },
              {
                title: 'Quali sono i vantaggi di lavorare con InnoTech?',
                content:
                  "InnoTech prende in considerazione ogni piccolo dettaglio, si assicura che il progetto di implementazione sia compatibile con le esigenze del vostro cliente. InnoTech sviluppa soluzioni completamente integrate a SAP Business One per garantire ai vostri clienti l'univocità del dato e un flusso di lavoro snello e veloce.",
              },
              {
                title: 'Quali sono i prossimi passi?',
                content:
                  'Conoscerci! Il nostro team è a disposizione per presentare la nostra realtà aziendale, i nostri progetti e le nostre soluzioni. Crediamo che la sinergia che una buona collaborazione crei sia un vantaggio per il vostro lavoro come per nostro, garantendo così la miglior soddisfazione al cliente.',
              },
            ].map((item, index) => (
              <AccordionSection key={index} active={activeIndex === index}>
                <AccordionTitleWrapper onClick={() => toggleAccordion(index)}>
                  <AccordionTitle active={activeIndex === index}>{item.title}</AccordionTitle>
                  <AccordionIcon active={activeIndex === index} />
                </AccordionTitleWrapper>
                <AccordionContent active={activeIndex === index}>
                  {item.content}
                </AccordionContent>
              </AccordionSection>
            ))}
          </AccordionWrapper>
        </Column>
      </Row>
      <Spacer />
    </SectionWrapper>
  );
};

export default OurCompanySection;
