import { Logo } from '../../ui/logo/logo';
import { StyledHeader } from '../header/styled';
import { StyledP } from './styled';

export function Footer() {
  return (
    <StyledHeader className="header">
      <Logo />
      <StyledP>Создано в 2022</StyledP>
    </StyledHeader>
  );
}
