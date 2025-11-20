const handleShare = (textToShare) => {
  if (navigator.share) {
    navigator
      .share({
        text: textToShare,
      })
      .then(() => console.log("Shared successfully"))
      .catch((error) => console.error("Sharing failed:", error));
  } else {
    navigator.clipboard
      .writeText(textToShare)
      .then(() => alert("Sharing not supported. Text copied to clipboard!"))
      .catch((err) => console.error("Copy failed:", err));
  }
};


export default handleShare