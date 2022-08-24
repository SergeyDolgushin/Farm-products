export type ImageProps = {
  maxWidth: number;
};

export type Feature = {
  id: number;
  title: string;
  owner: string;
  isNegative: boolean,
  image: string;
  about: string;
};

export type Product = {
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
