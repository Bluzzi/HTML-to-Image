import html2canvas from "html2canvas";

// Get required elements:
const downloadButton = document.getElementById("download");
const imageContent = document.getElementById("image-content");
const imageResult = document.getElementById("image-result");

// Add event listener:
if (downloadButton && imageContent && imageResult) {
  downloadButton.addEventListener("click", () => elementToImage(imageContent, imageResult));
} else {
  alert("Invalid page");
}

// Functions:
export async function elementToImage(element: HTMLElement, destination: HTMLElement): Promise<void> {
  const react = element.getBoundingClientRect();
  const canvas = await html2canvas(element, { height: react.height, width: react.width, scale: 1 });
  const image = canvas.toDataURL("image/png");

  destination.innerHTML = `<img src="${image}" alt="generated image" />`;
}