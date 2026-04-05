const regexStr = "/(?:youtube\\.com\\/(?:shorts\\/|watch\\?v=)|youtu\\.be\\/)([A-Za-z0-9_-]{11})/";
console.log(regexStr);
const regex = /(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
console.log(regex.exec("https://www.youtube.com/watch?v=dcPAnppg1Ns&list=PLYDxevzgna4TGPzVbnFuHl2NjQdGHTa0R")[1]);
