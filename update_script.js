const fs = require('fs');
const filePath = 'src/pages/HiddenMarketPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const startStr = `<div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center gap-12 relative z-10">`;
const endStr = `      {/* ===== About Ahmed Nagy ===== */}`;

const replaceWith = `<div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* TEXT COLUMN */}
            <div className="text-right flex flex-col items-start w-full">
              
              {/* Executive Badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full mb-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transform transition-transform hover:scale-105">
                <span className="flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-v2"></span>
                </span>
                <span className="text-white/90 font-bold text-sm tracking-wide">البرنامج التنفيذي الحصري للمحترفين</span>
              </div>

              {/* Logo */}
              <img 
                src="/Logo_Hidden.svg" 
                alt="The Hidden Market Masterclass Logo" 
                className="w-full max-w-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-6" 
              />
              
              {/* Subtitle */}
              <p className="text-white/80 text-xl md:text-3xl font-extrabold text-yellow-v2 mb-4 leading-tight">
               من التنظير.. إلى غرفة العمليات
              </p>
              
              {/* Refined Shorter Copy */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg font-medium">
              اخترق "السوق الخفي" للوظائف، صِد أفضل الفرص قبل الإعلان عنها، واجبر صناع القرار على التفاوض معك بأساليب وتطبيقات عملية (100%).
              </p>

              {/* Core Pillars - Condensed */}
              <div className="grid grid-cols-2 gap-3 mb-10 w-full max-w-lg">
                {[
                  { icon: "fa-solid fa-map-location-dot", text: "خريطة النفوذ والوصول" },
                  { icon: "fa-solid fa-robot", text: "AI Scripting" },
                  { icon: "fa-solid fa-briefcase", text: "محاكاة التفاوض" },
                  { icon: "fa-solid fa-id-card", text: "الهيبة الرقمية" }
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/10 hover:border-yellow/20 transition-all duration-300 shadow-lg">
                    <i className={\`\${item.icon} text-yellow-v2 mt-0.5 text-xl drop-shadow-md\`} />
                    <span className="text-white/90 text-sm font-bold tracking-wide leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <a
                  href="https://wa.me/201097828846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flexitems-center justify-center bg-gradient-to-r from-yellow to-yellow-v2 text-[var(--color-brand-dark)] font-extrabold text-lg px-8 py-3 rounded-xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(239,138,27,0.5)] transition-all duration-300 hover:scale-[1.02] flex-1 text-center flex"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center justify-center gap-3">
                   سجل دلوقتي <i className="fa-brands fa-whatsapp text-xl" />
                  </span>
                </a>
                <button
                  onClick={() => document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })}
                  className="group flex flex-1 items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg px-8 py-3 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                    المحتوى  <i className="fa-solid fa-arrow-down mr-3 text-sm group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
              
            </div>

            {/* IMAGE COLUMN */}
            <div className="hidden lg:flex w-full relative h-[500px] items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-brand-light)] to-[#0c224a] rounded-[2.5rem] transform rotate-3 scale-105 opacity-40 blur-2xl pointer-events-none"></div>
              <div className="absolute inset-0 border-4 border-yellow-v2/30 rounded-[2.5rem] transform -rotate-3 scale-[1.02] pointer-events-none transition-transform hover:rotate-0 hover:scale-100 duration-500"></div>
              
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10 group cursor-pointer">
                <img 
                  src="/images/TV/3.webp" 
                  alt="The Hidden Market Training" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 right-6 left-6 bg-[calc(var(--color-brand-dark)/0.85)] backdrop-blur-md border border-white/10 p-4 rounded-xl transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-bullseye text-2xl text-[var(--color-brand-dark)]"></i>
                    </div>
                    <div>
                      <strong className="block text-white text-lg font-black mb-0.5">٦ ساعات مُركزة</strong>
                      <span className="block text-white/70 text-sm font-medium">خطوة بخطوة نحو صناع القرار</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

`;

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);
if (startIndex !== -1 && endIndex !== -1) {
  content = content.slice(0, startIndex) + replaceWith + content.slice(endIndex);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Replaced successfully');
} else {
  console.log('Could not find start or end string');
}

