const fs = require('fs');
const filePath = 'src/pages/HiddenMarketPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const formLinkDefinition = `
const FORM_LINK = "https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true";
`;

// Insert the form link variable after the imports
content = content.replace(/const outcomes = \[/, formLinkDefinition + '\nconst outcomes = [');

// Update Hero column classes for centering
content = content.replace(
  '<div className="text-right flex flex-col items-start w-full">',
  '<div className="text-center lg:text-right flex flex-col items-center lg:items-start w-full">'
);

// Update Hero CTA
const oldHeroCTA = `<a
                  href="https://wa.me/201097828846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flexitems-center justify-center bg-gradient-to-r from-yellow to-yellow-v2 text-[var(--color-brand-dark)] font-extrabold text-lg px-8 py-3 rounded-xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(239,138,27,0.5)] transition-all duration-300 hover:scale-[1.02] flex-1 text-center flex"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center justify-center gap-3">
                   سجل دلوقتي <i className="fa-brands fa-whatsapp text-xl" />
                  </span>
                </a>`;

const newHeroCTA = `<a
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center bg-gradient-to-r from-yellow to-yellow-v2 text-[var(--color-brand-dark)] font-extrabold text-lg px-8 py-3 rounded-xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(239,138,27,0.5)] transition-all duration-300 hover:scale-[1.02] flex-1 text-center"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center justify-center gap-3">
                   سجل دلوقتي <i className="fa-solid fa-arrow-left text-xl" />
                  </span>
                </a>`;

content = content.replace(oldHeroCTA, newHeroCTA);


// Update Final CTA at the bottom 
const oldFinalCTA = `<a
              href="https://wa.me/201097828846"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-4 bg-yellow-v2 text-[var(--color-brand-dark)] font-black text-2xl px-14 py-6 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_-10px_rgba(239,182,27,0.4)] hover:bg-yellow"
            >
              <i className="fa-brands fa-whatsapp text-4xl text-[#25D366]" />
              احجز مقعدك الآن
              <i className="fa-solid fa-arrow-left text-lg opacity-50 group-hover:-translate-x-3 transition-transform" />
            </a>`;

const newFinalCTA = `<a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-4 bg-yellow-v2 text-[var(--color-brand-dark)] font-black text-2xl px-14 py-6 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_-10px_rgba(239,182,27,0.4)] hover:bg-yellow"
            >
              <i className="fa-solid fa-file-signature text-3xl" />
              احجز مقعدك الآن
              <i className="fa-solid fa-arrow-left text-lg opacity-50 group-hover:-translate-x-3 transition-transform" />
            </a>`;

content = content.replace(oldFinalCTA, newFinalCTA);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update finished.');
