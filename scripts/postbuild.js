const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'out');
const destDir = path.join(__dirname, '..', '.next');

if (fs.existsSync(srcDir)) {
  fs.cpSync(srcDir, destDir, { recursive: true, force: true });
  console.log('✓ Successfully mirrored out/ into .next/ for Cloudflare Pages compatibility.');
}

