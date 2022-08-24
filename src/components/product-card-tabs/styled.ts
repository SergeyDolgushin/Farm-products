import styled from 'styled-components';
import { Li, Ul } from '../elements';
import Button from '../elements/button';

export const StyledList = styled(Ul)`
  display: flex;
  align-items: center;
  text-align: center;

  & :nth-child(2) {
  margin-right: 8px;
  margin-left: 8px;
}
`;

export const StyledLi = styled(Li)`
`;

export const ProductCardButton = styled(Button)<{isActive: boolean}>`
  padding: 8px 12px;
  background: ${(props) => (props.isActive ? '#88AA4D' : '#F7F7F7')};
  border: ${(props) => (props.isActive ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid #E3E3E3')};

  &:hover {
    background: ${(props) => (props.isActive ? '#88AA4D' : '#F7F7F7')};
  }
`;
