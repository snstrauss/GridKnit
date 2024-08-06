import "./ImageViewer.scss";
import { viewer } from "../ImageViewLogic";

const VIEWER = "image-viewer";

export default function ImageViewer() {
  return <canvas class={VIEWER} ref={(ref) => viewer.setViewerRef(ref)} />;
}
