import './App.css';
import { Section, Container, Heading, Subheading, Description } from './styles';
import Subscription from '../Subscription/Subscription';
import WhyUs from '../WhyUs/WhyUs';

const App = () => {
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
      <Section>
        <Subscription />
      </Section>
      <Section>
        <WhyUs />
      </Section>
    </>
  );
};

export default App;
