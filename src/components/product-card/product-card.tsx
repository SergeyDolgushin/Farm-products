import { ProductCardDescription } from '../product-card-description/product-card-decription';
import { ProductCardImage } from '../product-card-img/product-card-image';
import { ProductCardPrice } from '../product-card-price/product-card-price';
import { ProductCardTabs } from '../product-card-tabs/product-card-tabs';
import { ProductCardTitle } from '../product-card-title/product-card-title';
import { StyledSection } from './styled';

type Product = {
  productDescription: {
    imgSrc: string;
    title: string;
    description: string;
    price: number;
    weight: number;
    minWeight: number;
    maxWeight: number;
    expired: number;
    type: string;
    placeOfOrigin: string;
    calEnergy: number;
    djEnergy: number;
    proteins: number;
    fats: number;
    carbohydrate: number;
  }
};

export function ProductCard({ productDescription }: Product) {
  const {title, imgSrc, description, price, weight} = productDescription;
  return (
    <StyledSection>
      <ProductCardImage src={imgSrc} alt={title}/>
      <div>
        <ProductCardTitle productTitle={title}/>
        <ProductCardTabs/>
        <ProductCardDescription productDescription={description}/>
        <ProductCardPrice productPrice={price} productWeight={weight}/>
      </div>
    </StyledSection>
  );
}

