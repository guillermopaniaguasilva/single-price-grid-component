import styled from 'styled-components';

import { COLORS } from '../../styles/colors';

export const Container = styled.div`
  width: 311px;
  min-height: 240px;
  background-color: ${COLORS.CYAN};
  padding: 0 24px;
  opacity: 0.8;
`;

export const Heading = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  color: ${COLORS.WHITE};
  padding-top: 24px;
  margin-bottom: 18px;
`;

export const Reason = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${COLORS.WHITE};
  opacity: 0.75;
`;
