import { PriceTag } from './styled';

type ProductDescriptionType = {
  description: string;
  price: number;
  weight: number;
}

export function ProductDescription({ description, price, weight}: ProductDescriptionType) {
  return (
    <>
      <p>{description}</p>
      <div>
        <PriceTag>{price} руб./ {weight} гр</PriceTag>
      </div>
    </>
  );
}
