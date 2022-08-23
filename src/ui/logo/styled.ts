import styled from 'styled-components';


export const StyledLogoLink = styled.a`
  display: flex;
  margin-left: -4px;
  height: 44px;
  align-items: center;
  text-decoration: none;
  color: #333333;

  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: #333333;
  }
`;


export const StyledSpanLogo = styled.span`
  display: flex;
  min-height: 44px;
  margin-left: 25px;
  font-weight: bold;
  font-size: 28px;
  line-height: 44px;
  color: #333333;
`;
