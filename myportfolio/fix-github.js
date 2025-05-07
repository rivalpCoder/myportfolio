const fs = require('fs');
const path = require('path');

// Read the current Git config
const gitConfigPath = path.join(__dirname, '..', '.git', 'config');
const gitConfig = fs.readFileSync(gitConfigPath, 'utf8');

// Fix the repository URL if it contains a typo
const fixedConfig = gitConfig.replace(
  'https://github.com/rivalpCoder/myprotfolio',
  'https://github.com/rivalpCoder/myportfolio'
);

// Write the fixed config back
fs.writeFileSync(gitConfigPath, fixedConfig);

console.log('Git repository URL has been fixed.');