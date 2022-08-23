import { LOGO } from '../../utils/const';
import { StyledSpanLogo, StyledLogoLink } from './styled';

export function Logo() {
  return (
    <StyledLogoLink href="/" className="logo__link">
      <img src={LOGO} alt="логотип" />
      <StyledSpanLogo className="logo__text">Фермерские продукты</StyledSpanLogo>
    </StyledLogoLink>
  );
}
