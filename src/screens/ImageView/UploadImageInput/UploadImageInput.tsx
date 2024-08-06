import "./UploadImageInput.scss";
import { BiRegularImageAdd } from "solid-icons/bi";
import { input } from "../ImageViewLogic";

const IMAGE_INPUT = "upload-image-input";

export default function UploadImageInput() {
  return (
    <div class={IMAGE_INPUT}>
      <BiRegularImageAdd size={100} />
      <h1>add image</h1>
      <input
        type="file"
        name="imageData"
        onChange={input.onImageUpload}
        accept="image/*"
      />
    </div>
  );
}
