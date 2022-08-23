import styled from 'styled-components';
import { H1 } from '../elements';

export const StyledTitle = styled(H1)`
  color: #333333;
  font-weight: 700;
  font-size: 44px;
  line-height: 115%;
  max-width: 650px;
`;

export const StyledP = styled.p`
  box-sizing: border-box;
  max-width: 650px;
  margin-top: 24px;
  padding-right: 116px;
  margin-bottom: 40px;
`;

export const DivWrapper = styled.div`
  width: 100%;
  background-color: #D8ECFE;
`;

export const StyledSectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 1280px;
  height: 600px;
  padding-left: 90px;
  min-height: 550px;
  padding-top: 183px;
  padding-bottom: 145px;
  padding-right: 553px;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;

  &::after {
    position: absolute;
    bottom: -18px;
    right: 90px;
    display: block;
    content: "";
    width: 446px;
    height: 563px;
    margin: auto;
    background-image: url('/img/main-picture.png');
    background-repeat: no-repeat;
    };

    &::before {
    position: absolute;
    bottom: 82px;
    right: 172px;
    display: block;
    content: "";
    width: 446px;
    height: 447px;
    margin: auto;
    background-image: url('/img/Ellipse 8.svg');
    background-repeat: no-repeat;
    };
`;
