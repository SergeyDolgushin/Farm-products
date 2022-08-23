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
