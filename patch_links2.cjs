const fs = require('fs');
const filePath = 'src/pages/HiddenMarketPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add FORM_LINK
if (!content.includes('FORM_LINK = "https://docs.google.com/forms')) {
  content = content.replace('const outcomes = [', 'const FORM_LINK = "https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true";\n\nconst outcomes = [');
}

// 2. Center hero section
content = content.replace(
  '<div className="text-right flex flex-col items-start w-full">',
  '<div className="text-center lg:text-right flex flex-col items-center lg:items-start w-full">'
);

// 3. Update Hero Button WA link -> Form Link + Change icon
content = content.replace(
  /href="https:\/\/wa.me\/201097828846"[^>]*?>\s*<div[^>]*><\/div>\s*<span[^>]*>\s*سجل دلوقتي <i className="fa-brands fa-whatsapp text-xl" \/>\s*<\/span>\s*<\/a>/s,
  `href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="group relative flexitems-center justify-center bg-gradient-to-r from-yellow to-yellow-v2 text-[var(--color-brand-dark)] font-extrabold text-lg px-8 py-3 rounded-xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(239,138,27,0.5)] transition-all duration-300 hover:scale-[1.02] flex-1 text-center flex"><div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" /><span className="relative flex items-center justify-center gap-3">سجل دلوقتي <i className="fa-solid fa-arrow-left text-xl" /></span></a>`
);

// 4. Update Footer CTA WA link -> Form Link + Change icon
content = content.replace(
  /href="https:\/\/wa.me\/201097828846"[^>]*?>\s*<i className="fa-brands fa-whatsapp text-4xl text-\[#25D366\]" \/>\s*احجز مقعدك الآن\s*<i className="fa-solid fa-arrow-left text-lg opacity-50 group-hover:-translate-x-3 transition-transform" \/>\s*<\/a>/s,
  `href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-4 bg-yellow-v2 text-[var(--color-brand-dark)] font-black text-2xl px-14 py-6 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_30px_-10px_rgba(239,182,27,0.4)] hover:bg-yellow"><i className="fa-solid fa-file-signature text-3xl" />احجز مقعدك الآن<i className="fa-solid fa-arrow-left text-lg opacity-50 group-hover:-translate-x-3 transition-transform" /></a>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update finished.');
