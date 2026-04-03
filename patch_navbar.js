const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');

// The replacement for Navbar top ribbon
const oldRibbon = `<div className="bg-gradient-to-r from-yellow-300 to-yellow-500 py-1.5 sm:py-2 px-4 w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 shadow-sm border-b border-yellow-600/20 z-[60]">
          <div className="flex items-center gap-2 text-[var(--color-brand-dark)] text-xs sm:text-sm font-black text-center">
            <span className="flex items-center gap-1.5 flex-wrap justify-center">
              <i className="fa-solid fa-clock text-base animate-pulse" />
              <p className='text-sm'>
               الكورس يوم واحد لمدة 6 ساعات متواصلة. الدفعة القادمة هتبدأ يوم 
              </p>
              <span className="bg-white/50 px-2 py-0.5 rounded text-[var(--color-brand-dark)] font-black">18 أبريل</span>
            </span>
          </div>
          <a
            href="https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[var(--color-brand-dark)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md hover:bg-[var(--color-brand-light)] hover:scale-105 transition-all justify-center w-full sm:w-auto"
          >
            احجز مقعدك <i className="fa-solid fa-file-signature text-base" />
          </a>
        </div>`;

const newRibbon = `<div className="bg-gradient-to-r from-yellow-300 to-yellow-500 py-1.5 sm:py-2 px-2 sm:px-4 w-full flex items-center justify-center gap-2 sm:gap-4 shadow-sm border-b border-yellow-600/20 z-[60] overflow-hidden whitespace-nowrap truncate">
          <div className="flex items-center gap-1 sm:gap-2 text-[var(--color-brand-dark)] text-[10px] sm:text-sm font-black text-center mx-auto">
            <span className="flex items-center gap-1 sm:gap-1.5 justify-center">
              <i className="fa-solid fa-clock text-xs sm:text-base animate-pulse hidden sm:inline-block" />
              <p className='text-[10px] sm:text-sm'>
               الكورس يوم واحد لمدة 6 ساعات متواصلة. الدفعة القادمة هتبدأ يوم 
              </p>
              <span className="bg-white/50 px-1 sm:px-2 py-0.5 rounded text-[var(--color-brand-dark)] font-black text-[10px] sm:text-sm">18 أبريل</span>
            </span>
          </div>
          <a
            href="https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-[var(--color-brand-dark)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md hover:bg-[var(--color-brand-light)] hover:scale-105 transition-all justify-center w-auto"
          >
            احجز مقعدك <i className="fa-solid fa-file-signature text-base" />
          </a>
        </div>`;

content = content.replace(oldRibbon, newRibbon);
fs.writeFileSync('src/components/Navbar.tsx', content);
