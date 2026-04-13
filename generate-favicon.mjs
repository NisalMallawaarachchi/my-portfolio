import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputImage = join(__dirname, 'assets', 'profile-img.png');

async function generateFavicons() {
  const image = sharp(inputImage);
  const metadata = await image.metadata();
  
  // Determine crop area for center square
  const size = Math.min(metadata.width, metadata.height);
  const left = Math.floor((metadata.width - size) / 2);
  const top = Math.floor((metadata.height - size) / 2);

  const squareImage = sharp(inputImage)
    .extract({ left, top, width: size, height: size });

  // Generate favicon.ico (32x32 PNG, then we'll use it as ico)
  // Actually, Next.js supports favicon.ico or icon.png
  // Let's generate icon.png at multiple sizes

  // 32x32 for favicon
  await squareImage.clone()
    .resize(32, 32)
    .png()
    .toFile(join(__dirname, 'app', 'icon-32.png'));

  // 192x192 for Android/PWA  
  await squareImage.clone()
    .resize(192, 192)
    .png()
    .toFile(join(__dirname, 'app', 'icon.png'));

  // 180x180 for Apple Touch Icon
  await squareImage.clone()
    .resize(180, 180)
    .png()
    .toFile(join(__dirname, 'app', 'apple-icon.png'));

  // Also create a profile photo in public/ for structured data
  await squareImage.clone()
    .resize(400, 400)
    .jpeg({ quality: 90 })
    .toFile(join(__dirname, 'public', 'profile-photo.jpg'));

  console.log('✅ Generated:');
  console.log('  - app/icon.png (192x192)');
  console.log('  - app/icon-32.png (32x32)');
  console.log('  - app/apple-icon.png (180x180)');
  console.log('  - public/profile-photo.jpg (400x400)');
}

generateFavicons().catch(console.error);
