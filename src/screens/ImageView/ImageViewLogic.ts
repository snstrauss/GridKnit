import { createSignal } from "solid-js";

export const VIEWER_ID = "image-viewer";

let viewerRef: HTMLCanvasElement;
let viewerCtx: CanvasRenderingContext2D;

export const [imageData, setImageData] = createSignal<ImageData | null>(null);

function setViewerRef(canvasRef: HTMLCanvasElement) {
  viewerRef = canvasRef;
  const ctx = viewerRef.getContext("2d");
  if (ctx) {
    viewerCtx = ctx;
  }
}

const fileReader = new FileReader();
export const imageElement = new Image();

function getImageDataFromCanvas() {
  const { width: imgWidth, height: imgHeight } = imageElement;

  if (viewerCtx) {
    viewerCtx.drawImage(imageElement, 0, 0);

    const imageData = viewerCtx.getImageData(0, 0, imgWidth, imgHeight);

    setImageData(imageData);
  }
}

function processImageDataURL() {
  imageElement.src = fileReader.result as string;

  imageElement.onload = getImageDataFromCanvas;
}

fileReader.onload = processImageDataURL;

function onImageUpload(ev: Event & { currentTarget: HTMLInputElement }) {
  const imageFile = ev.currentTarget?.files?.[0];

  if (imageFile) {
    fileReader.readAsDataURL(imageFile);
  }
}

export const viewer = {
  setViewerRef,
};

export const input = {
  onImageUpload,
};
