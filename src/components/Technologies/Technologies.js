import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiAdobeindesign } from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>

    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Javascript and Dart<br />
            HTML <br />
            CSS <br />
            Tailwindcss <br />
            Bootstrap <br />
            Flutter <br />
            Bulma <br />
            React.js <br />
            Angular.js <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobeindesign size="3rem" />
        <ListContainer>
          <ListTitle>UI Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <br />
    <br />
  </Section>
);

export default Technologies;
