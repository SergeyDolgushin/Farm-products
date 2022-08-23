import { Logo } from '../../ui/logo/logo';
import { MainPageNav } from '../main-page-nav/main-page-nav';
import { StyledHeader } from './styled';


export function Header() {
  return (
    <StyledHeader className="header">
      <Logo />
      <MainPageNav />
    </StyledHeader>
  );
}
