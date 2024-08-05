import { getPixelScale } from "pixel-scale";
import "./ImageView.scss";
import { JSX, Show } from "solid-js";
import { createSignal } from "solid-js";

type UploadImageProps = {
  onUploadImage: JSX.EventHandler<HTMLInputElement, Event>;
};

function UploadImageInput({ onUploadImage }: UploadImageProps) {
  return (
    <input
      type="file"
      name="imageData"
      onChange={onUploadImage}
      accept="image/*"
    />
  );
}

export default function ImageView() {
  const [imageDataStr, setImageDataStr] = createSignal<string | null>(null);

  function onImageUpload(ev: Event & { currentTarget: HTMLInputElement }) {
    const imageFile = ev.currentTarget?.files?.[0];

    const reader = new FileReader();

    reader.onload = () => {
      const imgElement = new Image();

      imgElement.src = reader.result as string;

      imgElement.onload = () => {
        const canvas = document.createElement("canvas");

        canvas.width = imgElement.width;
        canvas.height = imgElement.height;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(imgElement, 0, 0);

          const imageData = ctx.getImageData(
            0,
            0,
            imgElement.width,
            imgElement.height
          );

          console.log(imageData);
          debugger;

          const imagePixelData = getPixelScale(imageData);

          console.log(imagePixelData);
          debugger;
        }
      };
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }

    setImageDataStr("jheyy");
  }

  return (
    <div class="image-view">
      <Show
        when={imageDataStr()}
        fallback={<UploadImageInput onUploadImage={onImageUpload} />}
      >
        <h2>{`image string: ${imageDataStr()}`}</h2>
      </Show>
    </div>
  );
}
