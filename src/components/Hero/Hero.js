import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { GiWolfHowl } from 'react-icons/gi'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <GiWolfHowl size="250px" />
      <SectionTitle main center>
        Welcome to <br />
        Jose's Betancourt Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this personal portfolio is to show to employers and other developers the services I offer and the work I've done.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;