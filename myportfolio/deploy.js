const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Create .nojekyll file in the build directory
const nojekyllPath = path.join(__dirname, 'build', '.nojekyll');
fs.writeFileSync(nojekyllPath, '');

console.log('Deploying to GitHub Pages...');

ghpages.publish('build', {
  branch: 'gh-pages',
  dotfiles: true, // Ensure .nojekyll is included
  message: 'Auto-deploy from deploy.js script'
}, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    process.exit(1);
  } else {
    console.log('Deployment successful!');
    console.log('Your site should be available at: https://rivalpCoder.github.io/myportfolio');
  }
});