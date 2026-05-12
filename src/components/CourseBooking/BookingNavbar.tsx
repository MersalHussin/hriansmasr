import { useNavigate } from "react-router-dom";

interface BookingNavbarProps {
  courseName: string;
}

export default function BookingNavbar({ courseName }: BookingNavbarProps) {
  const navigate = useNavigate();
  const isHiddenMarket = courseName === "The Hidden Market";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-[90px] flex items-center transition-colors ${isHiddenMarket ? 'bg-brand-dark border-b border-white/5' : 'bg-[#1c54b3] border-b border-white/5'}`}>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate('/')}>
          {isHiddenMarket ? (
            <img src="/Logo_Hidden.svg" className='h-8 md:h-12 object-contain' alt="The Hidden Market Masterclass" />
          ) : (
            <img src="/hr-roadmap.png" className='h-8 md:h-12 object-contain' alt="HR Roadmap" />
          )}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className={`flex items-center gap-2 px-4 py-2 rounded font-bold transition-colors ${isHiddenMarket ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white/10 text-white hover:bg-white/20'}`}
        >
          <span className="hidden sm:inline">رجوع</span>
          <i className="fa-solid fa-arrow-left" />
        </button>

      </div>
    </header>
  );
}