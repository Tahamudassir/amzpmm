import Resizer from "react-image-file-resizer";

export const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      900,
      400,
      "WEBP",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });
