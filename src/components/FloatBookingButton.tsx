import { Link } from "react-router-dom";

interface FloatBookingButtonProps {
  to: string;
}

export default function FloatBookingButton({ to }: FloatBookingButtonProps) {
  return (
    <Link
      to={to}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#1c54b3] rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-[#1c54b3] to-[#15418c] text-white font-black text-lg px-8 py-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-10px_rgba(28,84,179,0.6)]">
          <i className="fa-solid fa-rocket text-xl animate-bounce" />
          <span>سجل الآن</span>
          <i className="fa-solid fa-arrow-left text-sm group-hover:-translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
