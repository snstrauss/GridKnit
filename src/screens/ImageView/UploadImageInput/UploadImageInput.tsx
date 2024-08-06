import "./UploadImageInput.scss";
import { BiRegularImageAdd } from "solid-icons/bi";
import { input } from "../ImageViewLogic";

const IMAGE_INPUT = "upload-image-input";

export default function UploadImageInput() {
  return (
    <div class={IMAGE_INPUT}>
      <BiRegularImageAdd />
      <h2>add image</h2>
      <input
        type="file"
        name="imageData"
        onChange={input.onImageUpload}
        accept="image/*"
      />
    </div>
  );
}
