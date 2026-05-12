import { Link } from 'react-router-dom';

interface BookButtonProps {
  to: string;
  variant?: 'yellow' | 'blue' | 'orange';
  text?: string;
  className?: string;
}

export const BookButton = ({ 
  to, 
  variant = 'blue', 
  text = 'سجل الآن',
  className = ''
}: BookButtonProps) => {
  const baseStyles = "group relative inline-flex items-center justify-center gap-3 font-black text-xl px-12 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl";
  
  const variantStyles = {
    yellow: "bg-yellow-v2 text-[var(--color-brand-dark)] hover:shadow-yellow-v2/20",
    blue: "bg-[var(--color-brand-dark)] text-white hover:bg-[var(--color-brand-light)]",
    orange: "bg-[#ee8a1c] text-white hover:bg-[var(--color-brand-light)]"
  };

  return (
    <div className='m-auto w-fit'>

    <Link
      to={to}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
      {text} <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
    </Link>
        </div>
  );
};

export default BookButton;