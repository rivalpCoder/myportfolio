const fs = require('fs');
const path = require('path');

// Function to copy index.html to the root directory
function copyIndexToRoot() {
  const buildIndexPath = path.join(__dirname, 'build', 'index.html');
  const rootIndexPath = path.join(__dirname, '..', 'index.html');
  
  try {
    // Read the build index.html
    const indexContent = fs.readFileSync(buildIndexPath, 'utf8');
    
    // Write to root directory
    fs.writeFileSync(rootIndexPath, indexContent);
    console.log('Successfully copied index.html to root directory');
  } catch (error) {
    console.error('Error copying index.html to root:', error);
  }
}

// Function to ensure .nojekyll exists in both build and root
function createNojekyllFiles() {
  const buildNojekyllPath = path.join(__dirname, 'build', '.nojekyll');
  const rootNojekyllPath = path.join(__dirname, '..', '.nojekyll');
  
  try {
    // Create .nojekyll in build directory
    fs.writeFileSync(buildNojekyllPath, '');
    console.log('Created .nojekyll in build directory');
    
    // Create .nojekyll in root directory
    fs.writeFileSync(rootNojekyllPath, '');
    console.log('Created .nojekyll in root directory');
  } catch (error) {
    console.error('Error creating .nojekyll files:', error);
  }
}

// Run the functions
copyIndexToRoot();
createNojekyllFiles();