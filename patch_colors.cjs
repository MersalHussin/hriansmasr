const fs = require('fs');

// 1. HRRoadmapPage.tsx
let hrPage = fs.readFileSync('src/pages/HRRoadmapPage.tsx', 'utf8');
hrPage = hrPage
  .replace(/#0c2657/g, '#1c54b3') // The dark one becomes the requested light blue
  .replace(/from-\[#1c54b3\] to-\[#1c54b3\]/g, 'from-[#1c54b3] to-[#11367a]'); // Fix gradients
fs.writeFileSync('src/pages/HRRoadmapPage.tsx', hrPage);

// 2. Navbar.tsx
let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
nav = nav.replace(/#0c2657/g, '#1c54b3');
fs.writeFileSync('src/components/Navbar.tsx', nav);

// 3. ReelsFeedback.tsx
let reels = fs.readFileSync('src/components/ReelsFeedback.tsx', 'utf8');
reels = reels.replace(
  "interface ReelsFeedbackProps { videoLinks?: string[]; isLandscape?: boolean; }",
  "interface ReelsFeedbackProps { videoLinks?: string[]; isLandscape?: boolean; brandColor?: string; }"
);
reels = reels.replace(
  "const ReelsFeedback = ({ videoLinks, isLandscape = false }: ReelsFeedbackProps) => {",
  "const ReelsFeedback = ({ videoLinks, isLandscape = false, brandColor }: ReelsFeedbackProps) => {\n    const customStyles = brandColor ? { '--color-brand-dark': brandColor, '--color-brand-light': brandColor } as React.CSSProperties : {};"
);
reels = reels.replace(
  '<section className="py-20 bg-white relative overflow-hidden">',
  '<section className="py-20 bg-white relative overflow-hidden" style={customStyles}>'
);
fs.writeFileSync('src/components/ReelsFeedback.tsx', reels);
