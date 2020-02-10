/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
let doc = fs.readFileSync(path.join(__dirname, '..', 'dist', 'video-js.css'), 'utf8');

doc = `:global {\n${doc}\n}\n`;
fs.writeFileSync(path.join(__dirname, '..', 'dist', 'video-js-global.scss'), doc, 'utf8');
