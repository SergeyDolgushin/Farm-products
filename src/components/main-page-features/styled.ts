import styled from 'styled-components';
import { H2, Li, Ul } from '../elements';

export const StyledList = styled(Ul)`
  display: flex;
  width: 100%;
  max-width: 1280px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & :nth-child(odd) {
    margin-right: 20px;
  };
`;

export const StyledLi = styled(Li)<{isOwner: boolean}>`
  width: 45%;
  min-height: 250px;
  margin-bottom: 20px;
  background-color: ${(props) => ((props.isOwner) ? '#E1EDCE' : '#F8DDD7')};
`;


export const StyledH2 = styled(H2)`
  text-align: center;
  margin-bottom: 64px;
  font-weight: 700;
  font-size: 36px;
  line-height: 115%;
  color: #333333;
`;


export const StyledSection = styled.section`
  position: relative;
  display: flex;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;
