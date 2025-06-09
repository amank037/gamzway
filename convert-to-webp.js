import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import { readdir, stat, readFile, writeFile } from 'fs/promises';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function convertPngsToWebpInPlace(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertPngsToWebpInPlace(fullPath);
    } else if (extname(entry.name).toLowerCase() === '.png') {
      const image = await readFile(fullPath);
      const webpBuffer = await imagemin.buffer(image, {
        plugins: [imageminWebp({ quality: 90 })],
      });

      const webpPath = fullPath.replace(/\.png$/, '.webp');
      await writeFile(webpPath, webpBuffer);
      console.log(`✅ Converted: ${fullPath} → ${webpPath}`);
    }
  }
}

async function main() {
  await convertPngsToWebpInPlace(join(__dirname, 'public'));
  await convertPngsToWebpInPlace(join(__dirname, 'src'));
}

main().catch(console.error);
