"use client";
import { TeamMemberType } from "@/sanity/types";
import React from "react";
import {
  Container,
  EmployeesRow,
  Header,
  InnerContainer1,
  InnerContainer2,
  InnerContainer3,
  ListContainer,
  ManagersRow,
  Spacer,
} from "./TeamList.styled";
import TeamMember from "./TeamMember/TeamMember";

type TeamListProps = {
  header: string;
  teamMembers: TeamMemberType[];
};

const TeamList: React.FC<TeamListProps> = ({ header, teamMembers }) => {
  const managers = teamMembers.slice(0, 6);
  const employees = teamMembers.slice(6);

  return (
    <Container>
      <InnerContainer1>
        <InnerContainer2>
          <InnerContainer3>
            <Header>{header}</Header>
            <ListContainer>
              <ManagersRow>
                {managers.map((member, idx) => (
                  <TeamMember
                    key={idx}
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    linkedIn={member.linkedIn}
                  />
                ))}
              </ManagersRow>

              {employees.length > 0 && (
                <EmployeesRow>
                  {employees.map((member, idx) => (
                    <TeamMember
                      key={idx + 6}
                      image={member.image}
                      name={member.name}
                      position={member.position}
                      linkedIn={member.linkedIn}
                    />
                  ))}
                </EmployeesRow>
              )}
            </ListContainer>
            <Spacer />
          </InnerContainer3>
        </InnerContainer2>
      </InnerContainer1>
    </Container>
  );
};

export default TeamList;
