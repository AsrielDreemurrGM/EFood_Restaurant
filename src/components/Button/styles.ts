import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { Props } from '.';

export const ButtonStyle = styled.button<Props>`
  display: block;
  text-align: center;
  width: 100%;
  height: 24px;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  max-width: ${(props) => (props.whichPage === 'home' ? '82px' : '304px')};

  color: ${(props) =>
    props.whichPage === 'home' ? colors.white : colors.warmPink};

  background-color: ${(props) =>
    props.whichPage === 'home' ? colors.warmPink : colors.warmBeige};

  &:hover {
    background-color: ${(props) =>
      props.whichPage === 'home' ? colors.salmonRed : colors.lightApricot};
  }
`;
