import "./ImageViewer.scss";
import { imageData, viewer } from "../ImageViewLogic";
import { Show } from "solid-js";
import UploadImageInput from "../UploadImageInput/UploadImageInput";

const VIEWER = "image-viewer";

export default function ImageViewer() {
  return (
    <div class={VIEWER}>
      <canvas
        classList={{ "has-image": Boolean(imageData()) }}
        ref={(ref) => viewer.setViewerRef(ref)}
      />
      <Show when={!imageData()}>
        <UploadImageInput />
      </Show>
    </div>
  );
}
