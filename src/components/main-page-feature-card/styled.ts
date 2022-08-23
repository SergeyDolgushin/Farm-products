import styled from 'styled-components';
import { H3 } from '../elements';

export const StyledSection = styled.section`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  text-align: left;
`;

export const StyledTitle = styled(H3)`

`;

export const StyledDiv = styled.div`
  /* margin-left: 20px; */
`;

export const StyledSpan = styled.span<{isOwner: boolean}>`
  display: inline-block;
  min-height: 25px;
  margin-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 25px;
  color: #ffffff;
  background-color: ${(props) => ((props.isOwner) ? '#88aa4d' : '#E64C3C')};
`;

export const StyledImg = styled.img.attrs<{src: string, alt: string}>((props) => ({
  src: `${props.src}`,
  alt: `${props.alt}`
}))`
  margin-right: 20px;
  width: 56px;
  height: 56px;
`;

export const StyledP = styled.p`
  padding: 0;
  margin: 0;
  text-align: left;
`;
