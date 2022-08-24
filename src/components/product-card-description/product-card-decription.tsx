import { useAppSelector } from '../../hooks';
import { Product } from '../../types/types';
import { Filter } from '../../utils/const';
import { ProductCharacteristic } from '../product-characteristic/product-characteristic';
import { ProductDescription } from '../product-description/product-description';
import { ProductProperties } from '../product-properties/product-properties';


export function ProductCardDescription({ productDescription }: Product) {
  const currentState = useAppSelector((state) => state.currentStateCard) as (keyof typeof Filter);

  if (Filter.description === Filter[currentState]) {

    return (
      <ProductDescription
        description={productDescription.description}
        price={productDescription.price}
        weight={productDescription.weight}
      />
    );
  }

  if (Filter.characteristics === Filter[currentState]) {

    return (
      <ProductCharacteristic
        weight={productDescription.weight}
        minWeight={productDescription.minWeight}
        maxWeight={productDescription.maxWeight}
        expired={productDescription.expired}
        placeOfOrigin={productDescription.placeOfOrigin}
        type={productDescription.type}
      />
    );
  }

  if (Filter.properties === Filter[currentState]) {

    return (
      <ProductProperties
        calEnergy={productDescription.calEnergy}
        proteins={productDescription.proteins}
        djEnergy={productDescription.djEnergy}
        fats={productDescription.fats}
        carbohydrate={productDescription.carbohydrate}
      />
    );
  } else {

    return null;
  }
}
