type ProductPrice = {
  productPrice: number;
  productWeight: number;
}


export function ProductCardPrice({ productPrice, productWeight }: ProductPrice) {
  return (
    <p>400руб/700гр</p>
  );
}
