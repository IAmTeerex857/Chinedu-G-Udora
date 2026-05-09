const fs = require('fs');
const path = require('path');

const articlesDir = '/Users/casper/Chinedu G Udora/Articles';
const publicInsightsDir = '/Users/casper/Chinedu G Udora/westbridge/public/insights';

if (!fs.existsSync(publicInsightsDir)) {
  fs.mkdirSync(publicInsightsDir, { recursive: true });
}

const files = fs.readdirSync(articlesDir);
const mdFiles = files.filter(f => f.endsWith('.md'));

const blogPosts = [];

for (const mdFile of mdFiles) {
  const baseName = path.basename(mdFile, '.md');
  const imgFile = files.find(f => f.startsWith(baseName) && f.endsWith('.jpeg'));
  
  if (imgFile) {
    fs.copyFileSync(path.join(articlesDir, imgFile), path.join(publicInsightsDir, imgFile));
  }

  const content = fs.readFileSync(path.join(articlesDir, mdFile), 'utf8');
  
  // Try to extract title from the first line or just use the baseName
  let title = baseName;
  let date = 'May 7, 2026';
  
  // Generate a simple slug
  const slug = baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  const contentEscaped = content.replace(/`/g, '\\`').replace(/\$/g, '\\$');

  blogPosts.push({
    slug,
    title,
    date,
    image: imgFile ? `/insights/${imgFile}` : '',
    content: content
  });
}

const jsContent = `export const blogPosts = [\n` + blogPosts.map(post => `  {
    slug: '${post.slug}',
    title: \`${post.title}\`,
    date: '${post.date}',
    image: '${post.image}',
    content: \`${post.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
  },`).join('\n') + `\n];`;

fs.writeFileSync('/Users/casper/Chinedu G Udora/westbridge/blogPosts_gen.js', jsContent);
console.log('Generated blogPosts_gen.js');
