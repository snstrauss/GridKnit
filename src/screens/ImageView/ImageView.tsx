import "./ImageView.scss";
import ImageViewer from "./ImageViewer/ImageViewer";
import ColorPalette from "./ColorPalette/ColorPalette";

const IMAGE_VIEW = "image-view";

export default function ImageView() {
  return (
    <div class={IMAGE_VIEW}>
      <ImageViewer />
      <ColorPalette />
    </div>
  );
}
