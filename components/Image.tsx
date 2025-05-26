type ImageProps = {
  src: string;
  customClass?: string;
};

export default function Image({ src, customClass = '' }: ImageProps) {
  return (
    <picture className={customClass}>
      <source srcSet={`/img/${src}.webp`} type="image/webp" />
      <img 
        loading="lazy"
        src={`/img/${src}.png`}
        height="800"
        width="800"
        alt={src}
        className="max-w-full h-auto"
      />
    </picture>
  );
}
