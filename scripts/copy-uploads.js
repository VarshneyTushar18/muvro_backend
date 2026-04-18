const fs = require('fs-extra');
const path = require('path');

async function copyUploads() {
  const root = path.resolve(__dirname, '..');
  const source = path.join(root, 'uploads');
  const dest = path.join(root, 'public', 'uploads');

  const sourceExists = await fs.pathExists(source);
  if (!sourceExists) {
    throw new Error(`Source folder not found: ${source}`);
  }

  await fs.ensureDir(dest);
  await fs.copy(source, dest, {
    overwrite: false,
    errorOnExist: false,
  });

  console.log(`Copied local uploads from ${source} to ${dest}`);
}

copyUploads().catch((err) => {
  console.error('Copy failed:', err.message);
  process.exit(1);
});
