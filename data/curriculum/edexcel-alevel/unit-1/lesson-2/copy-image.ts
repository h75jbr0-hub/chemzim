import fs from 'fs';
import path from 'path';

export function copyFile() {
  const src = path.join(process.cwd(), 'public/images/edexcel-alevel/unit-1/lesson-1/1.png');
  const dest = path.join(process.cwd(), 'public/images/edexcel-alevel/unit-1/deflection-paths.png');
  fs.copyFileSync(src, dest);
  console.log('Copy complete!');
}
