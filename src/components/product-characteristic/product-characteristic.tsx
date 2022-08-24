import { CharacteristicsItem, CharacteristicsList } from './styled';

type ProductCharacteristicType = {
  weight: number;
  minWeight: number;
  maxWeight: number;
  expired: number;
  type: string;
  placeOfOrigin: string;
}

export function ProductCharacteristic({ weight, minWeight, maxWeight, expired, type, placeOfOrigin}: ProductCharacteristicType) {
  return (
    <CharacteristicsList>
      <CharacteristicsItem><b>Масса:</b> {weight} кг. ({minWeight}-{maxWeight} г.)</CharacteristicsItem>
      <CharacteristicsItem><b>Срок годности:</b> {expired} суток</CharacteristicsItem>
      <CharacteristicsItem><b>Порода:</b> {type}</CharacteristicsItem>
      <CharacteristicsItem><b>Место происхождения:</b> {placeOfOrigin}</CharacteristicsItem>
    </CharacteristicsList>
  );
}
