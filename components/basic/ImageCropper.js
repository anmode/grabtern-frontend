import React, { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";
import Slider from "./Slider.js";
import { FiRotateCcw, FiRotateCw } from "react-icons/fi";

const ImageCropper = ({ imageSrc, changeImageSrc }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImg = async (
    imageSrc,
    pixelCrop,
    rotation = 0,
    flip = { horizontal: false, vertical: false },
  ) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return null;
    }

    const rotRad = getRadianAngle(rotation);

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
      image.width,
      image.height,
      rotation,
    );

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);

    // draw rotated image
    ctx.drawImage(image, 0, 0);

    // croppedAreaPixels values are bounding box relative
    // extract the cropped image using these values
    const data = ctx.getImageData(
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
    );

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // paste generated rotate image at the top left corner
    ctx.putImageData(data, 0, 0);

    // As Base64 string
    // return canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
      canvas.toBlob((file) => {
        resolve(URL.createObjectURL(file));
      }, "image/jpeg");
    });
  };

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
      image.src = url;
    });

  const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180;
  };

  const rotateSize = (width, height, rotation) => {
    const rotRad = getRadianAngle(rotation);

    return {
      width:
        Math.abs(Math.cos(rotRad) * width) +
        Math.abs(Math.sin(rotRad) * height),
      height:
        Math.abs(Math.sin(rotRad) * width) +
        Math.abs(Math.cos(rotRad) * height),
    };
  };

  const handleCancel = async () => {
    setCroppedImage(null);
    changeImageSrc("");
  };

  const handleOK = async () => {
    const res = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
    changeImageSrc(res);
  };

  const increaseZoom = () => {
    if (zoom >= 3) return;
    setZoom(zoom + 0.1);
  };

  const decreaseZoom = () => {
    if (zoom <= 1) return;
    setZoom(zoom - 0.1);
  };

  const increaseRotation = () => {
    if (rotation >= 180) return;
    setRotation(rotation + 1);
  };

  const decreaseRotation = () => {
    if (rotation <= -180) return;
    setRotation(rotation - 1);
  };

  return (
    <div className="tw-fixed tw-flex tw-justify-center tw-items-center tw-bg-black/40 tw-inset-0 tw-z-[1000]">
      <div className="tw-flex tw-flex-col tw-w-[300px] min-[450px]:tw-w-[350px] sm:tw-w-[400px] md:tw-w-[450px] tw-bg-white tw-rounded-md">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-px-8 tw-py-4 tw-font-medium">
          <div>Edit Image</div>
          <button
            type="button"
            className="tw-text-gray-500 hover:tw-text-gray-800"
            onClick={handleCancel}
          >
            x
          </button>
        </div>
        <div className="tw-relative tw-h-[35vh] tw-m-8 tw-mb-0">
          <Cropper
            image={imageSrc}
            crop={crop}
            rotation={rotation}
            zoom={zoom}
            onCropChange={setCrop}
            onRotationChange={setRotation}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            cropShape="round"
            aspect={1 / 1}
          />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-4 tw-items-center tw-p-8 tw-border-b">
          <div className="tw-flex tw-items-center tw-gap-6">
            <button type="button" onClick={decreaseZoom}>
              -
            </button>
            <Slider min={1} max={3} step={0.1} val={zoom} setVal={setZoom} />
            <button type="button" onClick={increaseZoom}>
              +
            </button>
          </div>
          <div className="tw-flex tw-items-center tw-gap-6">
            <button type="button" onClick={decreaseRotation}>
              <FiRotateCcw />
            </button>
            <Slider
              min={-180}
              max={180}
              step={1}
              val={rotation}
              setVal={setRotation}
            />
            <button type="button" onClick={increaseRotation}>
              <FiRotateCw />
            </button>
          </div>
        </div>
        <div className="tw-flex tw-p-4 tw-justify-end tw-gap-4">
          <button
            type="button"
            className="tw-border tw-rounded-md tw-border-gray-400 px-4 py-2 tw-text-gray-500 hover:tw-text-[#7f66ff] hover:tw-border-[#7f66ff]"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="tw-border tw-rounded-md px-4 py-2 tw-bg-[#7f66ff] tw-text-white"
            onClick={handleOK}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
