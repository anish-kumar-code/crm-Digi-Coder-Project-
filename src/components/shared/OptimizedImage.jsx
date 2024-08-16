/* eslint-disable react/prop-types */


const OptimizedImage = ({ src, alt, width, height,className }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={className}
      />
    </div>
  );
};

export default OptimizedImage;
