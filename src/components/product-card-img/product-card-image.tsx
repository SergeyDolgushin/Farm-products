type Image = {
  src: string;
  alt: string;
};

export function ProductCardImage({ src, alt }: Image) {
  return (
    <div>
      <img width="248" height="248" src={src} alt={alt} />
    </div>
  );
}
