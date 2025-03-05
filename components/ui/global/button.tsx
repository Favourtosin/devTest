interface ButtonProps {
  className?: string;
  cta: string;
}

const Button: React.FC<ButtonProps> = ({ className = "", cta }) => {
  return (
    <button
      className={`px-4 py-2  t3ext-sm  rounded-lg  opacity-85 ${className}`}
    >
      {cta}
    </button>
  );
};

export default Button;
