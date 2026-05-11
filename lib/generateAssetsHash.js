// lib/generateAssetsHash.js
import { readdirSync, statSync, existsSync } from "fs";
import { join } from "path";
import { createHash } from "crypto";

/**
 * يعمل scan recursive لكل الفايلات في فولدر معين
 */
function getAllFilesRecursive(dir, fileList = []) {
  if (!existsSync(dir)) return fileList;

  try {
    const files = readdirSync(dir);

    files.forEach((file) => {
      const filePath = join(dir, file);
      const stats = statSync(filePath);

      if (stats.isDirectory()) {
        getAllFilesRecursive(filePath, fileList);
      } else {
        const ext = file.toLowerCase().split(".").pop();
        const allowedExtensions = [
          // صور
          "jpg",
          "jpeg",
          "png",
          "webp",
          "gif",
          "svg",
          "avif",
          // فيديوهات
          "mp4",
          "webm",
          "mov",
          "avi",
        ];

        if (allowedExtensions.includes(ext)) {
          fileList.push(`${file}-${stats.size}-${stats.mtimeMs}`);
        }
      }
    });
  } catch (err) {
    console.warn(`Could not read directory: ${dir}`);
  }

  return fileList;
}

/**
 * بيعمل hash فريد لكل الصور والفيديوهات في public
 */
export function generateAssetsHash() {
  try {
    const publicDir = join(process.cwd(), "public");
    const allAssets = getAllFilesRecursive(publicDir);

    if (allAssets.length === 0) {
      return `empty-${Date.now()}`;
    }

    const sortedAssets = allAssets.sort().join("|");

    const hash = createHash("md5")
      .update(sortedAssets)
      .digest("hex")
      .substring(0, 12);

    console.log(
      `✅ Assets Hash Generated: ${hash} (${allAssets.length} files)`
    );

    return hash;
  } catch (err) {
    console.error("Error generating assets hash:", err);
    return `fallback-${Date.now()}`;
  }
}
