// src/data/imageMap.ts

import img1 from '@/assets/2.jpg' // the problem is from the referencing, you were referencing /src/data/assets/.. instead of /src/assets/..
import img2 from '@/assets/CB150P.png'; // ../../assets/.. solves the problem too
import img3 from '@/assets/CB250P.png';
import img4 from '@/assets/CB450P.png';
import img5 from '@/assets/CB650P.png';
import img6 from '@/assets/CT226.jpg';
import img7 from '@/assets/GT325.jpg';
import img8 from '@/assets/GT325-L.jpg';
import img9 from '@/assets/GT325-PRO.jpg';
import img10 from '@/assets/GT325-R.jpg';
import img11 from '@/assets/GT525-SE.jpg';
import img12 from '@/assets/GT526.jpg';
import img13 from '@/assets/GT526-PRO.jpg';
import img14 from '@/assets/GT526-SE.jpg';
import img15 from '@/assets/V7120.png';
import img16 from '@/assets/V9120.png';
import img17 from '@/assets/V9220.jpg';

// This file maps product image filenames to their respective imported image assets.
export const imageMap: Record<string, string> = {
  '2.jpg': img1,
  'CB150P.png': img2,
  'CB250P.png': img3,
  'CB450P.png': img4,
  'CB650P.png': img5,
  'CT226.jpg': img6,
  'GT325.jpg': img7,
  'GT325-L.jpg': img8,
  'GT325-PRO.jpg': img9,
  'GT325-R.jpg': img10,
  'GT525-SE.jpg': img11,
  'GT526.jpg': img12,
  'GT526-PRO.jpg': img13,
  'GT526-SE.jpg': img14,
  'V7120.png': img15,
  'V9120.png': img16,
  'V9220.jpg': img17,
  
};


