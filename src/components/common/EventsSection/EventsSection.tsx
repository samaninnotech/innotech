// EventsSection.tsx
import { EventType } from '@/sanity/types';
import { FC } from 'react';
import Event from '../Event';
import { EventList, EventsSectionContainer } from './EventsSection.styled';

const eventList = [
  {
    title: 'Corsi certificazione 2023',
    description: 'Sono aperte le iscrizioni ai corsi di certificazione e di aggiornamento per i Partner italiani validi per l\'anno 2024...',
    imageUrl: 'https://innotech.software/wp-content/uploads/2023/06/Foto-sito-Innotech-10-1024x576.jpg',
    date: { day: '25', month: 'Settembre', year: '2023' },
    url: 'https://innotech.software/event/corsi-certificazione-2023/',
  },
  {
    title: 'Overview su Listini Prodotti e Programma di Canale 12 luglio',
    description: 'Overview su Listino Prodotti e Programma di Canale! Il nostro Channel Manager presenterà brevemente il listino...',
    imageUrl: 'https://innotech.software/wp-content/uploads/2022/06/Foto-sito-Innotech-23-1024x576.jpg',
    date: { day: '12', month: 'Luglio', year: '2022' },
    url: 'https://innotech.software/event/overview-su-listini-prodotti-e-programma-di-canale-12-luglio/',
  },
  {
    title: 'ProcessForce Customer Day',
    description: 'Un pomeriggio dedicato alle nuove funzionalità di ProcessForce!...',
    imageUrl: 'https://innotech.software/wp-content/uploads/2022/03/Foto-sito-Innotech-850-×-530-px-1800-×-900-px-1024x512.jpg',
    date: { day: '18', month: 'Maggio', year: '2022' },
    url: 'https://innotech.software/event/processforce-customer-day/',
  }
];
type EventSectionProps = {
  events: EventType[];
}
// Define the EventsSection component
const EventsSection: FC<EventSectionProps> = ({events}) => (
  <EventsSectionContainer>
    <h3>Events</h3>
    <EventList>
      {eventList.map((event, index) => (
        <Event
          key={index}
          title={event.title}
          description={event.description}
          imageUrl={event.imageUrl}
          date={event.date}
          url={event.url}
        />
      ))}
    </EventList>
  </EventsSectionContainer>
);

export default EventsSection;
