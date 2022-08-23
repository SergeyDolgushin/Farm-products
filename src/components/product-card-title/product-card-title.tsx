import { StyledTitle } from './styled';

type ProductTitle = {
  productTitle: string;
}

export function ProductCardTitle({ productTitle }: ProductTitle) {
  return (
    <StyledTitle>{productTitle}</StyledTitle>
  );
}
