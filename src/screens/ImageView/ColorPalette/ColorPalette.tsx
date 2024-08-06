import "./ColorPalette.scss";
import { createEffect, createSignal, For, Show } from "solid-js";
import ColorThief from "colorthief";
import { imageData, imageElement } from "../ImageViewLogic";
import { ColorTranslator } from "colortranslator";

const { getPalette } = new ColorThief();

const PALETTE = "color-palette";

const [imageColors, setImageColors] = createSignal<string[]>([]);

createEffect(function getImageColors() {
  if (imageData()) {
    const colors = getPalette(imageElement);

    const colorsSet: Set<string> = new Set(
      colors.map((colorArr: number[]) => JSON.stringify(colorArr))
    );

    const hslStrings = [...colorsSet]
      .map((colorArrStr) => {
        const colorArr: number[] = JSON.parse(colorArrStr);
        const colorRgbStr = `rgb(${colorArr.join(",")})`;

        const { HSLObject } = new ColorTranslator(colorRgbStr);

        return HSLObject;
      })
      .sort((hsl1, hsl2) => hsl1.L - hsl2.L)
      .map(({ H, S, L }) => `hsl(${H} ${S} ${L})`);

    setImageColors(hslStrings);
  }
});

export default function ColorPalette() {
  return (
    <Show when={imageColors().length}>
      <div class={PALETTE}>
        <For each={imageColors()}>
          {(hslStr) => (
            <div class={`${PALETTE}__color`} style={{ "--color": hslStr }} />
          )}
        </For>
      </div>
    </Show>
  );
}
