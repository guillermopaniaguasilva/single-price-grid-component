import { useState, useEffect } from 'react';
import './App.css';
import {
  Section,
  Container,
  Heading,
  Subheading,
  Description,
  DesktopContainer,
} from './styles';
import Subscription from '../Subscription/Subscription';
import WhyUs from '../WhyUs/WhyUs';

const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 600px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 600px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Heading>Join our community</Heading>
          <Subheading>30-day, hassle-free money back guarantee</Subheading>
          <Description>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </Description>
        </Container>
      </Section>
      {!matches ? (
        <>
          <Section>
            <Subscription />
          </Section>
          <Section>
            <WhyUs />
          </Section>
        </>
      ) : (
        <DesktopContainer>
          <Section>
            <Subscription />
          </Section>
          <Section>
            <WhyUs />
          </Section>
        </DesktopContainer>
      )}
    </>
  );
};

export default App;
