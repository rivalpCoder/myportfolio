const fs = require('fs');
const path = require('path');

// Fix for React 18 rendering
const indexPath = path.join(__dirname, 'src', 'index.js');
const indexContent = `import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
`;

fs.writeFileSync(indexPath, indexContent);
console.log('Fixed index.js for React 18 rendering');

// Fix for PDF.js worker
const resumePath = path.join(__dirname, 'src', 'components', 'Resume', 'ResumeNew.js');
let resumeContent = fs.readFileSync(resumePath, 'utf8');
resumeContent = resumeContent.replace(
  /import pdfjsWorker from "pdfjs-dist\/build\/pdf.worker.entry";/,
  ''
);
resumeContent = resumeContent.replace(
  /pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;/,
  'pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;'
);
fs.writeFileSync(resumePath, resumeContent);
console.log('Fixed ResumeNew.js for PDF.js worker');

console.log('All fixes applied successfully!');