"use client";
import { TeamMemberType } from '@/sanity/types';
import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import { Container, Header, InnerContainer1, InnerContainer2, InnerContainer3, ListContainer, Row, Spacer } from './TeamList.styled';

type TeamListProps = {
  header: string;
  teamMembers: TeamMemberType[];
};
const TeamList: React.FC<TeamListProps> = ({ header, teamMembers }) => {
  const rowConfigurations = [
    { columns: 3, count: 3 }, 
    { columns: 3, count: 3 }, 
    { columns: 4, count: Infinity } 
  ];

  const createRowsFromConfiguration = (members: TeamMemberType[], configurations: any[]) => {
    let index = 0;
    const rows = [];

    for (const config of configurations) {
      const { columns, count } = config;
      const rowMembers = members.slice(index, index + count);
      rows.push({ members: rowMembers, columns });
      index += count;

      // Break loop if all members are processed
      if (index >= members.length) break;
    }

    return rows;
  };

  const rows = createRowsFromConfiguration(teamMembers, rowConfigurations);

  return (
    <Container>
      <InnerContainer1>
        <InnerContainer2>
          <InnerContainer3>
            <Header>
              {header}
            </Header>
            <ListContainer>
              {rows.map((row, index) => (
                <Row key={index} style={{ gridTemplateColumns: `repeat(${row.columns}, 1fr)` }}>
                  {row.members.map((member, idx) => (
                    <TeamMember
                      key={idx}
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      linkedIn={member.linkedIn}
                    />
                  ))}
                </Row>
              ))}
            </ListContainer>
            <Spacer />
          </InnerContainer3>
        </InnerContainer2>
      </InnerContainer1>
    </Container>
  );
};

export default TeamList;