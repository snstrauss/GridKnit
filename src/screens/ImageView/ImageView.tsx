import "./ImageView.scss";
import UploadImageInput from "./UploadImageInput/UploadImageInput";
import ImageViewer from "./ImageViewer/ImageViewer";
import { Show } from "solid-js";
import { imageData } from "./ImageViewLogic";

const IMAGE_VIEW = "image-view";

export default function ImageView() {
  return (
    <div class={IMAGE_VIEW}>
      <ImageViewer />
      <Show when={!imageData()}>
        <UploadImageInput />
      </Show>
    </div>
  );
}
