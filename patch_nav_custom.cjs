const fs = require('fs');

let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Add scrollToTop function
nav = nav.replace(
  "  const isHiddenMarket = location.pathname === '/hidden-market-masterclass'\n  const isHrRoadmap = location.pathname === '/hr-roadmap'",
  "  const isHiddenMarket = location.pathname === '/hidden-market-masterclass'\n  const isHrRoadmap = location.pathname === '/hr-roadmap'\n\n  const scrollToTop = (e: React.MouseEvent) => {\n    e.preventDefault()\n    closeMenu()\n    window.scrollTo({ top: 0, behavior: 'smooth' })\n  }\n\n  const hoverClass = isHrRoadmap ? 'hover:text-[#ee8a1c]' : 'hover:text-yellow-v2'"
);

// Logo clicks
nav = nav.replace(
  /<Link to="\/" onClick=\{closeMenu\}>\s*<img src="\/Logo_Hidden\.svg" className='h-8 md:h-12 cursor-pointer object-contain' alt="The Hidden Market Masterclass" \/>\s*<\/Link>/g,
  `<a href="#" onClick={scrollToTop}>\n            <img src="/Logo_Hidden.svg" className='h-8 md:h-12 cursor-pointer object-contain' alt="The Hidden Market Masterclass" />\n          </a>`
);

nav = nav.replace(
  /<Link to="\/" onClick=\{closeMenu\}>\s*<img src="\/hr-roadmap\.png" className='h-8 md:h-12 cursor-pointer object-contain' alt="HR Roadmap" \/>\s*<\/Link>/g,
  `<a href="#" onClick={scrollToTop}>\n            <img src="/hr-roadmap.png" className='h-8 md:h-12 cursor-pointer object-contain' alt="HR Roadmap" />\n          </a>`
);

// Mobile Logo clicks
nav = nav.replace(
  /<img src="\/Logo_Hidden\.svg" className='h-8 cursor-pointer object-contain' alt="The Hidden Market Masterclass" onClick=\{closeMenu\} \/>/g,
  `<img src="/Logo_Hidden.svg" className='h-8 cursor-pointer object-contain' alt="The Hidden Market Masterclass" onClick={scrollToTop} />`
);
nav = nav.replace(
  /<img src="\/hr-roadmap\.png" className='h-8 cursor-pointer object-contain' alt="HR Roadmap" onClick=\{closeMenu\} \/>/g,
  `<img src="/hr-roadmap.png" className='h-8 cursor-pointer object-contain' alt="HR Roadmap" onClick={scrollToTop} />`
);


// Desktop activePageLinks
const desktopOld = `              <li>
                <Link to="/" className={\`hover:text-[#ee8a1c] px-3 py-2 font-bold rounded transition-colors\`}>
                  الرئيسية
                </Link>
              </li>
              {activePageLinks.map(link => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    onClick={(e) => handleScroll(e, link.to)}
                    className="hover:text-[#ee8a1c] px-3 py-2 font-bold rounded transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}`;

const desktopNew = `              <li>
                <a href="#" onClick={scrollToTop} className={\`\${hoverClass} px-3 py-2 font-bold rounded transition-colors cursor-pointer\`}>
                  الرئيسية
                </a>
              </li>
              {activePageLinks.map(link => (
                <li key={link.to}>
                  <a
                    href={link.to}
                    onClick={(e) => handleScroll(e, link.to)}
                    className={\`\${hoverClass} px-3 py-2 font-bold rounded transition-colors cursor-pointer\`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/" onClick={closeMenu} className={\`\${hoverClass} px-3 py-2 font-bold rounded transition-colors\`}>
                  دورات أخرى
                </Link>
              </li>`;

nav = nav.replace(desktopOld, desktopNew);

// Mobile activePageLinks
const mobileOld = `              <>
                <li>
                  <Link to="/" onClick={closeMenu} className="block px-3 py-2 font-bold rounded transition-colors hover:text-[#ee8a1c]">
                    الرئيسية
                  </Link>
                </li>
                {activePageLinks.map(link => (
                  <li key={link.to}>
                    <a
                      href={link.to}
                      onClick={(e) => handleScroll(e, link.to)}
                      className="block px-3 py-2 font-bold rounded transition-colors hover:text-[#ee8a1c] cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </>`;

const mobileNew = `              <>
                <li>
                  <a href="#" onClick={scrollToTop} className={\`block px-3 py-2 font-bold rounded transition-colors \${hoverClass}\`}>
                    الرئيسية
                  </a>
                </li>
                {activePageLinks.map(link => (
                  <li key={link.to}>
                    <a
                      href={link.to}
                      onClick={(e) => handleScroll(e, link.to)}
                      className={\`block px-3 py-2 font-bold rounded transition-colors \${hoverClass} cursor-pointer\`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link to="/" onClick={closeMenu} className={\`block px-3 py-2 font-bold rounded transition-colors \${hoverClass}\`}>
                    دورات أخرى
                  </Link>
                </li>
              </>`;

nav = nav.replace(mobileOld, mobileNew);

fs.writeFileSync('src/components/Navbar.tsx', nav);
