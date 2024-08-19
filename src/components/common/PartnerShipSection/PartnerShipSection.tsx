// PartnerShipSection.tsx
import { faChalkboardTeacher, faCheckSquare, faCogs, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PartnerShipCard from '../PartnerShipCard/PartnerShipCard';
import { CardsContainer, Container, Header, InnerContainer } from './PartnerShipSection.styled';

export const EuroSignIcon = () => <FontAwesomeIcon icon={faEuroSign} />;
export const CheckSquareIcon = () => <FontAwesomeIcon icon={faCheckSquare} />;
export const CogsIcon = () => <FontAwesomeIcon icon={faCogs} />;
export const ChalkboardTeacherIcon = () => <FontAwesomeIcon icon={faChalkboardTeacher} />;

// Define your icons here
const partnerShipData = [
  {
    icon: <EuroSignIcon />,
    title: "Offerta Commerciale",
    text: "Con le nostre soluzioni puoi avere una offerta commerciale più ampia per i tuoi clienti e le loro esigenze",
  },
  {
    icon: <CheckSquareIcon />,
    title: "Project Manager",
    text: "Il nostro programma prevede che i nostri professionisti ti aiutino nello sviluppo di progetti personalizzati",
  },
  {
    icon: <CogsIcon />,
    title: "Soluzioni integrate a SAP Business One",
    text: "Diventando nostro partner puoi offrire ai tuoi clienti le nostre soluzioni integrate con SAP Business One",
  },
  {
    icon: <ChalkboardTeacherIcon />,
    title: "Formazione",
    text: "Gestire le nostre soluzioni è alla base della formazione che ti offriamo per destreggiarti nella vendita",
  },
];

const PartnerShipSection: React.FC = () => (
  <Container>
    <InnerContainer>
    <Header>
      <h4>Perché diventare <mark>Partner di InnoTech</mark></h4>
    </Header>
    <CardsContainer>
      {partnerShipData.map((data, index) => (
        <PartnerShipCard 
          key={index}
          icon={data.icon}
          title={data.title}
          text={data.text}
        />
      ))}
    </CardsContainer>
    </InnerContainer>
  </Container>
);

export default PartnerShipSection;
