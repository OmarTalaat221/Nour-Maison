import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const publicImagesDir = path.join(process.cwd(), "public", "images");

async function optimizeLocal(inputName, outputName, options = {}) {
  const inputPath = path.join(publicImagesDir, inputName);
  const outputPath = path.join(publicImagesDir, outputName);

  let pipeline = sharp(inputPath);

  if (options.width) {
    pipeline = pipeline.resize({
      width: options.width,
      withoutEnlargement: true,
    });
  }

  await pipeline
    .webp({
      quality: options.quality || 78,
      effort: 6,
    })
    .toFile(outputPath);

  console.log(`${inputName} -> ${outputName}`);
}

async function optimizeRemote(url, outputName, options = {}) {
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
      quality: options.quality || 80,
      effort: 6,
    })
    .toFile(outputPath);

  console.log(`remote -> ${outputName}`);
}

await optimizeRemote(
  "https://res.cloudinary.com/dhebgz7qh/image/upload/v1767445430/nour_25_1_11zon_gxbeb1.png",
  "homa-roast-menu.webp",
  {
    width: 1250,
    quality: 80,
  }
);

await optimizeLocal("pngegg.png", "pngegg.webp", {
  width: 700,
  quality: 76,
});

await optimizeLocal("download (7).jfif", "download-7.webp", {
  width: 1100,
  quality: 78,
});

await optimizeLocal("2.png", "2.webp", {
  quality: 75,
});