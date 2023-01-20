import html2canvas from "html2canvas";

// Get required elements:
const downloadButton = document.getElementById("download") as HTMLElement;
const imageResult = document.getElementById("image-result") as HTMLElement;
const codePreview = document.getElementById("code-preview") as HTMLElement;
const codeTextarea = document.getElementById("code") as HTMLTextAreaElement;

// Add event listener:
if (codeTextarea) {
  textToElement(codeTextarea.value);

  codeTextarea.addEventListener("input", () => {
    textToElement(codeTextarea.value);
  });
}

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    elementToImage(codePreview, imageResult);
  });
}

// Functions:
export async function elementToImage(element: HTMLElement, destination: HTMLElement): Promise<void> {
  const react = element.getBoundingClientRect();
  const canvas = await html2canvas(element, { height: react.height, width: react.width, scale: 1 });
  const image = canvas.toDataURL("image/png");

  destination.innerHTML = `<img src="${image}" alt="generated image" />`;
}

// Elements from a textarea to div
export function textToElement(text: string) {
  codePreview.innerHTML = text;
}