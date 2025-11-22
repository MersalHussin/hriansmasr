import { ArrowRight } from 'lucide-react'; 
import type { ElementType } from 'react';

interface IProps {
    image: string;
    titleEn: string;
    titleAr: string;
    Icon?: ElementType;
}

const ServiceCard = ({ image, titleEn, titleAr, Icon }: IProps) => {
  return (
    // التغيير هنا: استبدلنا h-96 بـ aspect-square
    <div className="group border-4 border-primary relative w-100 aspect-square rounded-3xl overflow-hidden shadow-xl cursor-pointer">
      
      {/* 1. صورة الخلفية المتغيرة */}
      <img 
        src={image} 
        alt={titleEn} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* 2. طبقة الـ Overlay */}
      {/* ملاحظة: تأكد أنك تستخدم Tailwind v4 للكلاس bg-linear-to-b وإلا استخدم bg-gradient-to-b */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary 
                      group-hover:from-primary/80 group-hover:to-primary
                      group-hover:opacity-95 transition-all duration-500 ease-in-out">
      </div>

      {/* 3. أيقونة الخدمة */}
      <div className="absolute top-10 left-0 right-0 flex justify-center transition-all duration-500 group-hover:translate-y-2 opacity-60 group-hover:opacity-100">
         {Icon && <Icon className="text-white w-16 h-16 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />}
      </div>
      
      {/* عناصر ديكورية */}
      <div className="absolute top-24 left-8 w-2 h-2 bg-white/30 rounded-full group-hover:scale-150 transition-all duration-700"></div>
      <div className="absolute top-16 right-12 w-4 h-4 border border-white/20 rounded rotate-45 group-hover:rotate-90 transition-all duration-700"></div>


      {/* 4. النصوص والمحتوى */}
      <div className="absolute left-0 right-0 px-4 flex flex-col items-center text-center text-white
                      bottom-10 transition-all duration-500 ease-out
                      group-hover:bottom-1/2 group-hover:translate-y-1/2">
        
        <h3 className="text-xl md:text-3xl font-extrabold mb-2 drop-shadow-lg uppercase tracking-wide">
          {titleEn}
        </h3>
        
        <p className="text-lg md:text-xl font-medium text-blue-100" dir="rtl">
          {titleAr}
        </p>
        
        {/* الزر */}
        <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 delay-75 mt-0 group-hover:mt-6">
          <button className="flex items-center gap-2 bg-white text-blue-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-50 transition-colors">
            <span>تفاصيل الخدمة</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default ServiceCard;