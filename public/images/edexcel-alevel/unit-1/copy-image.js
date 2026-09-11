const fs = require('fs');
fs.copyFileSync(
  'public/images/edexcel-alevel/unit-1/lesson-1/1.png',
  'public/images/edexcel-alevel/unit-1/deflection-paths.png'
);
console.log('Copy successful!');
