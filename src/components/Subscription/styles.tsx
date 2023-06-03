import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
  width: 311px;
  min-height: 240px;
  background-color: ${COLORS.CYAN};
  padding: 0 24px;

  @media only screen and (min-width: 600px) {
    width: 312.5px;
  }
`;

export const Heading = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: ${COLORS.WHITE};
  padding-top: 24px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

export const Price = styled.p`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  color: ${COLORS.WHITE};
`;

export const Cadence = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${COLORS.WHITE};
  margin-left: 12px;
  opacity: 0.5;
`;

export const Description = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${COLORS.WHITE};
`;

export const SignUpButton = styled.button`
  margin-top: 26px;
  width: 100%;
  background-color: ${COLORS.BRIGHT_YELLOW};
  color: ${COLORS.WHITE};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  padding: 15px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.0973011);
`;
