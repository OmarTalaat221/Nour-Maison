export function detectMediaType(link) {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
  const videoExtensions = ['mp4', 'webm', 'ogg', 'mkv', 'avi', 'mov', 'flv', 'wmv'];

  try {
      const url = new URL(link);
      const extension = url.pathname.split('.').pop().toLowerCase();
      if (imageExtensions.includes(extension)) {
          return 'image';
      } else if (videoExtensions.includes(extension)) {
          return 'video';
      } else {
          return 'unknown';
      }
  } catch (error) {
      return 'invalid link';
  }
}

