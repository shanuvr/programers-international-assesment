const fs = require('fs');
const files = [
  'src/app/page.tsx',
  'src/components/Navbar.tsx',
  'src/components/ProductCard.tsx'
];

const replacements = {
  'xs': '1',
  'sm': '2',
  'md': '4',
  'lg': '6',
  'xl': '8',
  '2xl': '12'
};

const prefixes = ['m', 'mt', 'mb', 'ml', 'mr', 'mx', 'my', 'p', 'pt', 'pb', 'pl', 'pr', 'px', 'py', 'gap', 'top', 'bottom', 'left', 'right'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const regex = new RegExp(`\\b(${prefixes.join('|')})-(xs|sm|md|lg|xl|2xl)\\b`, 'g');
    content = content.replace(regex, (match, prefix, suffix) => {
      return `${prefix}-${replacements[suffix]}`;
    });
    fs.writeFileSync(file, content);
  }
});
console.log('Replaced custom spacing classes.');
