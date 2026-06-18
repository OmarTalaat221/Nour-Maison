import fs from "fs/promises";
import path from "path";
import { spawn } from "child_process";
import ffmpegPath from "ffmpeg-static";

const publicVideosDir = path.join(process.cwd(), "public", "videos");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, args, {
      stdio: "inherit",
    });

    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });
}

async function downloadRemote(url, outputPath) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outputPath, buffer);
}

async function optimizeRemoteVideo(url, outputName, options = {}) {
  await ensureDir(publicVideosDir);

  const tempInput = path.join(publicVideosDir, "__temp-input.mp4");
  const outputPath = path.join(publicVideosDir, outputName);

  await downloadRemote(url, tempInput);

  const width = options.width || 1280;
  const crf = options.crf || 34;

  await runFfmpeg([
    "-y",
    "-i",
    tempInput,
    "-vf",
    `scale='min(${width},iw)':-2`,
    "-c:v",
    "libvpx-vp9",
    "-b:v",
    "0",
    "-crf",
    String(crf),
    "-row-mt",
    "1",
    "-an",
    outputPath,
  ]);

  await fs.rm(tempInput, { force: true });

  console.log(`video -> ${outputName}`);
}

await optimizeRemoteVideo(
  "https://camp-coding.tech/nour_maison/Nour-opening-1.mp4",
  "nour-opening-1.webm",
  {
    width: 1280,
    crf: 34,
  },
);
