const fs = require('fs');

const builtHtmlFilePath = './dist/index.html';

const gitCommitHash = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()
  .slice(0, 7);

const htmlFile = fs.readFileSync(builtHtmlFilePath, 'utf8');

const updatedHtmlFile = htmlFile.replace(
  '</head>',
  `  <meta name="git-commit" content="${gitCommitHash}">
</head>`
);

fs.writeFileSync(builtHtmlFilePath, updatedHtmlFile, 'utf8');
