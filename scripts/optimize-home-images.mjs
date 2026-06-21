import fs from "fs/promises";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const FILES_TO_CHECK = [
  {
    webm: "public/videos/booking-home-about.webm",
    mp4: "public/videos/booking-home-about.mp4",
  },
  {
    webm: "public/images/IMG_9871.webm",
    mp4: "public/images/IMG_9871.mp4",
  },
];

async function fileExists(filePath) {
  try {
    await fs.access(path.join(process.cwd(), filePath));
    return true;
  } catch {
    return false;
  }
}

async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(path.join(process.cwd(), filePath));
    return (stats.size / 1024 / 1024).toFixed(2);
  } catch {
    return "N/A";
  }
}

async function convertToIOSCompatibleMP4(inputPath, outputPath) {
  const fullInput = path.join(process.cwd(), inputPath);
  const fullOutput = path.join(process.cwd(), outputPath);

  console.log(`🎬 Converting ${inputPath} → ${outputPath}...`);

  // ✅ Settings ضرورية لـ iOS:
  // - libx264 codec
  // - baseline profile
  // - level 3.0
  // - yuv420p pixel format
  // - faststart للـ progressive download
  // - bitrate محدود عشان حجم معقول
  const command = `ffmpeg -y -i "${fullInput}" \
    -c:v libx264 \
    -profile:v baseline \
    -level 3.0 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -vf "scale='min(1280,iw)':-2" \
    -crf 28 \
    -preset slow \
    -maxrate 2M \
    -bufsize 4M \
    -an \
    "${fullOutput}"`;

  try {
    await execAsync(command);
    const size = await getFileSize(outputPath);
    console.log(`✅ Done! Size: ${size} MB`);
    return true;
  } catch (err) {
    console.error(`❌ Failed:`, err.message);
    return false;
  }
}

async function verifyMP4Compatibility(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  try {
    const command = `ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,profile,pix_fmt -of csv=p=0 "${fullPath}"`;
    const { stdout } = await execAsync(command);
    const info = stdout.trim();
    console.log(`📋 ${filePath}: ${info}`);

    // تأكد إنها H.264 baseline + yuv420p
    const isCompatible =
      info.includes("h264") &&
      info.toLowerCase().includes("baseline") &&
      info.includes("yuv420p");

    return isCompatible;
  } catch (err) {
    return false;
  }
}

async function main() {
  console.log("\n🔍 Checking video files for iOS compatibility...\n");

  for (const file of FILES_TO_CHECK) {
    console.log(`\n━━━ ${file.mp4} ━━━`);

    const mp4Exists = await fileExists(file.mp4);
    const webmExists = await fileExists(file.webm);

    if (!webmExists) {
      console.log(`⚠️  WebM source not found: ${file.webm}`);
      continue;
    }

    if (!mp4Exists) {
      console.log(`❌ MP4 NOT FOUND - converting from WebM...`);
      await convertToIOSCompatibleMP4(file.webm, file.mp4);
    } else {
      const compatible = await verifyMP4Compatibility(file.mp4);
      if (!compatible) {
        console.log(`⚠️  MP4 exists but NOT iOS compatible - reconverting...`);
        await convertToIOSCompatibleMP4(file.webm, file.mp4);
      } else {
        console.log(`✅ MP4 is iOS compatible`);
      }
    }
  }

  console.log("\n✨ All done!\n");
}

main().catch((err) => {
  console.error("❌ Script failed:", err);
  process.exit(1);
});
