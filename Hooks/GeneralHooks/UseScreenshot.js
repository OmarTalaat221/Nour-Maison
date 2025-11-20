import html2canvas from "html2canvas";

const useScreenShoot = () => {
  const exportAsPicture = (elementId) => {
    const data = document.getElementById(elementId);
    if (!data) {
      console.error(`Element with ID "${elementId}" not found.`);
      return;
    }

    const html = document.documentElement;
    const body = document.body;

    const htmlWidth = html.clientWidth;
    const bodyWidth = body.clientWidth;

    const newWidth = data.scrollWidth - data.clientWidth;

    if (newWidth > data.clientWidth) {
      html.style.width = htmlWidth + newWidth + "px";
      body.style.width = bodyWidth + newWidth + "px";
    }

    html2canvas(data).then((canvas) => {
      const image = canvas.toDataURL("image/png", 1.0);
      saveAs(image, "exported-vis.png");

      // Reset styles after capturing
      html.style.width = "";
      body.style.width = "";
    });
  };

  const saveAs = (blob, fileName) => {
    const elem = document.createElement("a");
    elem.href = blob;
    elem.download = fileName;
    elem.style.display = "none";
    document.body.appendChild(elem);

    elem.click();
    document.body.removeChild(elem);
  };

  return exportAsPicture;
};

export default useScreenShoot;
