const fs = require('fs');

const file = 'src/components/ReelsFeedback.tsx';
let data = fs.readFileSync(file, 'utf8');

data = data.replace(
  "const ReelsFeedback = () => {",
  "interface ReelsFeedbackProps { videoLinks?: string[]; isLandscape?: boolean; }\n\nconst ReelsFeedback = ({ videoLinks, isLandscape = false }: ReelsFeedbackProps) => {"
);

data = data.replace(
  "const reels = reelLinks",
  "const activeLinks = videoLinks || reelLinks;\n\n    const reels = activeLinks"
);

data = data.replace(
  "/(?:youtube\\.com\\/shorts\\/|youtu\\.be\\/)([A-Za-z0-9_-]{11})/",
  "/(?:youtube\\.com\\/(?:shorts\\/|watch\\?v=)|youtu\\.be\\/)([A-Za-z0-9_-]{11})/"
);

data = data.replace(
  "aspect-9/16",
  "${isLandscape ? 'aspect-video' : 'aspect-[9/16]'}"
);

fs.writeFileSync(file, data);

