type ProductDescription = {
  productDescription: string;
}


export function ProductCardDescription({ productDescription }: ProductDescription) {
  return (
    <p>{productDescription}</p>
  );
}
