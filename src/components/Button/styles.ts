import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { Props } from '.';

export const ButtonStyle = styled.button<Props>`
  max-width: ${(props) => (props.buttonType === 'knowMore' ? '82px' : '304px')};
  width: 100%;
  height: 24px;
  padding: 4px 6px;
  color: ${(props) =>
    props.buttonType === 'knowMore' ? colors.white : colors.warmPink};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.buttonType === 'knowMore' ? colors.warmPink : colors.warmBeige};

  &:hover {
    background-color: ${(props) =>
      props.buttonType === 'knowMore' ? colors.salmonRed : colors.lightApricot};
  }
`;
