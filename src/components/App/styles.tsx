import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Section = styled.section`
  box-shadow: 0px 15px 30px rgba(0, 81, 171, 0.148847);
  border-radius: 5px;
`;

export const Container = styled.div`
  width: 311px;
  min-height: 240px;
  background-color: #fff;
  padding: 0 24px;

  @media only screen and (min-width: 600px) {
    width: 625px;
  }
`;

export const DesktopContainer = styled.div`
  display: flex;
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  color: ${COLORS.CYAN};
  padding-top: 24px;

  @media only screen and (min-width: 600px) {
    padding-top: 40px;
  }
`;

export const Subheading = styled.h2`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: ${COLORS.BRIGHT_YELLOW};
  margin-top: 24px;

  @media only screen and (min-width: 600px) {
    margin-top: 24px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: ${COLORS.GRAYISH_BLUE};
  margin-top: 16px;
  padding-bottom: 32px;

  @media only screen and (min-width: 600px) {
    margin-top: 12px;
  }
`;
