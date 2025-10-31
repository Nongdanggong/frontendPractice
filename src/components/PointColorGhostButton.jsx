function PointColorGhostButton({ size, text }) {
  const sizeClasses = {
    md: 'text-xs px-5 py-2.5 tracking-wider',
    lg: 'px-12.5 py-4.5',
  };

  const sizeStyle = sizeClasses[size];

  const hoverStyle =
    'hover:bg-point hover:border-floral-white hover:text-floral-white hover:cursor-pointer';

  return (
    <button
      className={`${hoverStyle} bg-transparent text-point border-point border ${sizeStyle} transition-all duration-500`}
    >
      <p>{text}</p>
    </button>
  );
}

export default PointColorGhostButton;
