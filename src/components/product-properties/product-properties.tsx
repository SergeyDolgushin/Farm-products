import { CharacteristicsItem, CharacteristicsList } from '../product-characteristic/styled';

type ProductPropertiesType = {
  calEnergy: number;
  djEnergy: number;
  proteins: number;
  fats: number;
  carbohydrate: number;
}

export function ProductProperties({calEnergy, djEnergy, proteins, fats, carbohydrate }: ProductPropertiesType) {
  return (
    <CharacteristicsList>
      <CharacteristicsItem><b>Энергетическая ценность:</b> {calEnergy} ккал./{djEnergy} кДж.</CharacteristicsItem>
      <CharacteristicsItem><b>Пищевая ценность:</b> белки - {proteins} г., жиры - {fats} г., углеводы - {carbohydrate} г.; на 100 г.</CharacteristicsItem>
    </CharacteristicsList>
  );
}
