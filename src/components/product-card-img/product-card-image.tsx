import { StyledPicture } from './styled';

type Image = {
  src: string;
  alt: string;
};

export function ProductCardImage({ src, alt }: Image) {
  return (
    <StyledPicture>
      <img width="248" height="248" src={src} alt={alt} />
    </StyledPicture>
  );
}
