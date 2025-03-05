interface ButtonProps {
  className?: string;
  cta: string;
  onclick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className = "", cta , onclick}) => {
  return (
    <button
      onClick={onclick}
      className={`px-4 py-2  text-sm  rounded-lg  hover:opacity-85 ${className}`}
    >
      {cta}
    </button>
  );
};

export default Button;
