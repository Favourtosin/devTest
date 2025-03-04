interface ButtonProps {
  className?: string;
  cta: string;
}

const Button: React.FC<ButtonProps> = ({ className = "", cta }) => {
  return (
    <button
      className={`px-4 py-2 bg-purpleDeep shadow-[0px_1px_2px_0px_#2E125E66] text-white rounded-lg hover:bg-purple-700 ${className}`}
    >
      cta
    </button>
  );
};

export default Button;
