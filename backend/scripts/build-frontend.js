const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const src = path.join(__dirname, '..', '..', 'frontend');
const dest = path.join(__dirname, '..', 'dist');

fse.copySync(src, dest, { overwrite: true });
console.log('Frontend built to backend/dist');
