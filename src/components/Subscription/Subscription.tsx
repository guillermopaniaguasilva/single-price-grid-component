import {
  Container,
  Heading,
  PriceContainer,
  Price,
  Cadence,
  Description,
  SignUpButton,
} from './styles';

const Subscription = () => {
  return (
    <Container>
      <Heading>Monthly Subscription</Heading>
      <PriceContainer>
        <Price>$29</Price>
        <Cadence>per month</Cadence>
      </PriceContainer>
      <Description>Full access for less than $1 a day</Description>
      <SignUpButton>Sign Up</SignUpButton>
    </Container>
  );
};

export default Subscription;
