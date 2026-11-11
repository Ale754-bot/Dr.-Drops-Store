// optimize-images.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INDIR = path.join(__dirname, 'public', 'INDUMENTARIA');
const JSON_PATH = path.join(__dirname, 'src', 'data', 'products.json');

async function processImagesAndJson() {
  console.log('🚀 Iniciando optimización y conversión a WebP...');

  if (!fs.existsSync(JSON_PATH)) {
    console.error('❌ No se encontró el archivo products.json en src/data/products.json');
    return;
  }

  let rawData = fs.readFileSync(JSON_PATH, 'utf8');
  let products = JSON.parse(rawData);

  async function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await walkDir(fullPath);
      } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
        const ext = path.extname(entry.name);
        const nameWithoutExt = path.basename(entry.name, ext);
        const webpFilename = `${nameWithoutExt}.webp`;
        const webpFullPath = path.join(dir, webpFilename);

        console.log(`⚡ Procesando: ${entry.name} -> ${webpFilename}`);

        try {
          await sharp(fullPath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(webpFullPath);
        } catch (err) {
          console.error(`❌ Error procesando ${entry.name}:`, err);
        }
      }
    }
  }

  await walkDir(INDIR);

  console.log('🔄 Actualizando rutas en products.json...');

  products = products.map(product => {
    if (product.image && /\.(jpg|jpeg|png)$/i.test(product.image)) {
      product.image = product.image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }

    if (product.images && Array.isArray(product.images)) {
      product.images = product.images.map(img => {
        if (/\.(jpg|jpeg|png)$/i.test(img)) {
          return img.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        }
        return img;
      });
    }

    return product;
  });

  fs.writeFileSync(JSON_PATH, JSON.stringify(products, null, 2), 'utf8');
  console.log('✅ ¡Listo! Imágenes optimizadas a WebP y products.json actualizado con éxito.');
}

processImagesAndJson();