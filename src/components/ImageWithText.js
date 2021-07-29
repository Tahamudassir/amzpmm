import React, { useEffect } from "react";
import "./styles.css";

const ImageWithText = (props) => {
  const { width, height, url } = props;

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const img = new Image();
    img.src = url;
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      canvas.width = 300;
      canvas.height = 300;
      const ctx = canvas.getContext("2d");
      ctx.font = "20px Arial";
      ctx.textAlign = "center";
      ctx.drawImage(img, 0, 0, 300, 300);
      ctx.fillText("textAlign=center", canvas.width / 2, canvas.height / 2);
    };
  }, [url]);

  return (
    <div style={{ width: width, height: height }}>
      <canvas id="canvas" width={300} height={300} />
    </div>
  );
};

export default ImageWithText;
