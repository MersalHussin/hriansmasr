const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf-8');

const FORM_LINK = "https://docs.google.com/forms/d/1XBIyFfwF98HRQexWtOojaZNTxd5RDwuqP63GetjF-N0/viewform?chromeless=1&edit_requested=true";

// Replace Topbar ribbon link
content = content.replace(
  /<a\s+href="https:\/\/wa\.me\/201097828846"[^>]*?className="flex items-center gap-1\.5 bg-\[var\(--color-brand-dark\)\] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md hover:bg-\[var\(--color-brand-light\)\] hover:scale-105 transition-all justify-center w-full sm:w-auto">\s*احجز مقعدك <i className="fa-brands fa-whatsapp text-base" \/>\s*<\/a>/s,
  `<a\n            href="${FORM_LINK}"\n            target="_blank"\n            rel="noopener noreferrer"\n            className="flex items-center gap-1.5 bg-[var(--color-brand-dark)] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md hover:bg-[var(--color-brand-light)] hover:scale-105 transition-all justify-center w-full sm:w-auto"\n          >\n            احجز مقعدك <i className="fa-solid fa-file-signature text-base" />\n          </a>`
);

// Replace Desktop CTA
content = content.replace(
  /<a\s+href="https:\/\/wa\.me\/201097828846"\s+target="_blank"\s+rel="noopener noreferrer"\s+className='bg-yellow text-white px-4 py-2 rounded cursor-pointer text-base font-bold hover:bg-yellow-v2 transition-colors'\s*>\s*سجّل دلوقتي\s*<\/a>/s,
  `<a\n            href="${FORM_LINK}"\n            target="_blank"\n            rel="noopener noreferrer"\n            className='bg-yellow text-white px-4 py-2 rounded cursor-pointer text-base font-bold hover:bg-yellow-v2 transition-colors'\n          >\n            سجّل دلوقتي\n          </a>`
);

// Replace Mobile Menu CTA
content = content.replace(
  /<a\s+href="https:\/\/wa\.me\/201097828846"\s+target="_blank"\s+rel="noopener noreferrer"\s+onClick=\{closeMenu\}\s+className='bg-yellow text-white px-6 py-2 rounded font-bold hover:bg-yellow-v2 transition-colors w-full block text-center'\s*>\s*سجّل دلوقتي\s*<\/a>/s,
  `<a\n                href="${FORM_LINK}"\n                target="_blank"\n                rel="noopener noreferrer"\n                onClick={closeMenu}\n                className='bg-yellow text-white px-6 py-2 rounded font-bold hover:bg-yellow-v2 transition-colors w-full block text-center'\n              >\n                سجّل دلوقتي\n              </a>`
);

fs.writeFileSync('src/components/Navbar.tsx', content);
