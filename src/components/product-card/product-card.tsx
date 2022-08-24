import { Product } from '../../types/types';
import { ProductCardDescription } from '../product-card-description/product-card-decription';
import { ProductCardImage } from '../product-card-img/product-card-image';
import { ProductCardTabs } from '../product-card-tabs/product-card-tabs';
import { ProductCardTitle } from '../product-card-title/product-card-title';
import { StyledSection, Wrapper } from './styled';


export function ProductCard({ productDescription }: Product) {
  const {title, imgSrc} = productDescription;

  return (
    <StyledSection>
      <ProductCardImage src={imgSrc} alt={title}/>
      <Wrapper>
        <ProductCardTitle productTitle={title}/>
        <ProductCardTabs/>
        <ProductCardDescription productDescription={productDescription}/>
      </Wrapper>
    </StyledSection>
  );
}

