const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// First run the fix-paths script
require('./fix-paths');

console.log('Deploying to GitHub Pages...');

ghpages.publish('build', {
  branch: 'gh-pages',
  dotfiles: true, // Ensure .nojekyll is included
  message: 'Auto-deploy with fixed paths'
}, function(err) {
  if (err) {
    console.error('Deployment error:', err);
    process.exit(1);
  } else {
    console.log('Deployment successful!');
    console.log('Your site should be available at: https://rivalpCoder.github.io/myportfolio');
    
    // Additional instructions
    console.log('\nIMPORTANT: After deployment, please check your GitHub repository settings:');
    console.log('1. Go to your GitHub repository');
    console.log('2. Click on "Settings"');
    console.log('3. Scroll down to "GitHub Pages" section');
    console.log('4. Make sure it\'s set to use the "gh-pages" branch');
    console.log('5. If you have a custom domain, make sure it\'s properly configured');
  }
});