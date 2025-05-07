const fs = require('fs');
const path = require('path');

// Function to fix paths in index.html
function fixIndexHtmlPaths() {
  const buildIndexPath = path.join(__dirname, 'build', 'index.html');
  
  try {
    // Read the build index.html
    let indexContent = fs.readFileSync(buildIndexPath, 'utf8');
    
    // Replace absolute paths with relative paths
    indexContent = indexContent.replace(/href="\/myportfolio\//g, 'href="./');
    indexContent = indexContent.replace(/src="\/myportfolio\//g, 'src="./');
    
    // Write the modified content back
    fs.writeFileSync(buildIndexPath, indexContent);
    console.log('Successfully fixed paths in build/index.html');
    
    // Also copy to root directory with fixed paths
    const rootIndexPath = path.join(__dirname, '..', 'index.html');
    fs.writeFileSync(rootIndexPath, indexContent);
    console.log('Successfully copied fixed index.html to root directory');
  } catch (error) {
    console.error('Error fixing paths in index.html:', error);
  }
}

// Function to copy all static assets to root
function copyStaticAssetsToRoot() {
  const buildDir = path.join(__dirname, 'build');
  const rootDir = path.join(__dirname, '..');
  
  try {
    // Create static directory in root if it doesn't exist
    const rootStaticDir = path.join(rootDir, 'static');
    if (!fs.existsSync(rootStaticDir)) {
      fs.mkdirSync(rootStaticDir, { recursive: true });
    }
    
    // Copy static directory recursively
    copyFolderRecursiveSync(path.join(buildDir, 'static'), rootDir);
    console.log('Successfully copied static assets to root directory');
    
    // Copy manifest.json to root
    fs.copyFileSync(
      path.join(buildDir, 'manifest.json'),
      path.join(rootDir, 'manifest.json')
    );
    console.log('Successfully copied manifest.json to root directory');
    
    // Copy favicon.png to root
    fs.copyFileSync(
      path.join(buildDir, 'favicon.png'),
      path.join(rootDir, 'favicon.png')
    );
    console.log('Successfully copied favicon.png to root directory');
  } catch (error) {
    console.error('Error copying static assets to root:', error);
  }
}

// Helper function to copy a folder recursively
function copyFolderRecursiveSync(source, target) {
  const targetFolder = path.join(target, path.basename(source));
  
  // Create target folder if it doesn't exist
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }
  
  // Copy all files and subfolders
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    files.forEach(function(file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        fs.copyFileSync(curSource, path.join(targetFolder, file));
      }
    });
  }
}

// Run the functions
fixIndexHtmlPaths();
copyStaticAssetsToRoot();