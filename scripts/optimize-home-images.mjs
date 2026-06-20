import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const publicImagesDir = path.join(process.cwd(), "public", "images");

async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
}

async function optimizeRemote(url, outputName, options = {}) {
  try {
    console.log(`⬇️  Downloading: ${outputName}...`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to download ${url}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    const outputPath = path.join(publicImagesDir, outputName);

    let pipeline = sharp(buffer);

    if (options.width) {
      pipeline = pipeline.resize({
        width: options.width,
        withoutEnlargement: true,
      });
    }

    await pipeline
      .webp({
        quality: options.quality || 82,
        effort: 6,
      })
      .toFile(outputPath);

    const stats = await fs.stat(outputPath);
    const sizeKB = (stats.size / 1024).toFixed(2);

    console.log(`✅ ${outputName} (${sizeKB} KB)`);
  } catch (error) {
    console.error(`❌ Error processing ${outputName}:`, error.message);
  }
}

async function main() {
  await ensureDir(publicImagesDir);

  console.log("\n🍽️ Optimizing Booking Page Images...\n");

  // OG Image للـ booking
  await optimizeRemote(
    "https://res.cloudinary.com/dhebgz7qh/image/upload/v1770471922/96cb5bb4-29e3-410f-ad35-69dd1cbdd203.png",
    "booking-og.webp",
    {
      width: 1200,
      quality: 85,
    },
  );

  // Background image الـ booking form
  await optimizeRemote("/images/booking-bg.webp", "booking-bg.webp", {
    width: 1920,
    quality: 78,
  });

  console.log("\n✨ All done!\n");
}

main().catch((err) => {
  console.error("❌ Script failed:", err);
  process.exit(1);
});
