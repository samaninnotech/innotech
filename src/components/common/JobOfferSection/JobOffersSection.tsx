"use client";
import JobOffer from '../JobOffer/JobOffer';
import { Heading, JobOffersContainer } from './JobOffersSection.styled';

const JobOffersSection = () => {
  const jobOffers = [
    {
      title: 'Business Development Assistant',
      time: 'Full time',
      description: 'InnoTech, società del Gruppo InformEtica che si occupa di progetti e sviluppi nell’ambito dell’Innovazione Tecnologica, sta cercando una persona che voglia crescere professionalmente in un team giovane e innovativo.',
      link: 'https://innotech.software/lavora-con-noi/business-development-assistant/'
    },
    {
      title: 'Sviluppatore Web Full Stack',
      time: 'Full time',
      description: 'InnoTech, società del Gruppo InformEtica che si occupa di progetti e sviluppi nell’ambito dell’Innovazione Tecnologica, sta cercando uno Sviluppatore Web Full Stack per la sede di San Martino Buon Albergo (VR).',
      link: 'https://innotech.software/lavora-con-noi/sviluppatore-web-full-stack-20210211/'
    },
    {
      title: 'Candidatura Spontanea',
      time: 'Full time',
      description: 'InnoTech, società del Gruppo InformEtica che si occupa di progetti e sviluppi nell’ambito dell’Innovazione Tecnologica, sta cercando una persona che voglia crescere professionalmente in un team giovane e innovativo.',
      link: 'https://innotech.software/lavora-con-noi/candidatura-spontanea'
    }
  ];

  return (
    <JobOffersContainer>
      <Heading>Entra a far parte del nostro team</Heading>
      {jobOffers.map((job, index) => (
        <JobOffer
          key={index}
          title={job.title}
          type={job.time}
          description={job.description}
          link={job.link}
          index={index}
        />
      ))}
    </JobOffersContainer>
  );
};

export default JobOffersSection;
