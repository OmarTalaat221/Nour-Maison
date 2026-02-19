export function detectMediaType(link) {
  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "webp",
    "svg",
    "jfif",
  ];
  const videoExtensions = [
    "mp4",
    "webm",
    "ogg",
    "mkv",
    "avi",
    "mov",
    "flv",
    "wmv",
  ];

  try {
    let extension;

    if (link.startsWith("http://") || link.startsWith("https://")) {
      const url = new URL(link);
      extension = url.pathname.split(".").pop().toLowerCase();
    } else {
      extension = link.split(".").pop().toLowerCase();
    }

    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  } catch (error) {
    console.error("detectMediaType error:", error, "for link:", link);
    return "image";
  }
}
