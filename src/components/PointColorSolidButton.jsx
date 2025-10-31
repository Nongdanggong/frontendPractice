function PointColorSolidButton({ size, text }) {
  const sizeClasses = {
    md: 'text-sm font-light px-5 py-2.5',
  };

  const sizeStyle = sizeClasses[size];

  const hoverStyle =
    'hover:bg-transparent hover:border-white hover:text-floral-white hover:cursor-pointer';

  return (
    <button
      className={`${hoverStyle} bg-point text-white border-point border ${sizeStyle} transition-all duration-500`}
    >
      <p>{text}</p>
    </button>
  );
}

export default PointColorSolidButton;
