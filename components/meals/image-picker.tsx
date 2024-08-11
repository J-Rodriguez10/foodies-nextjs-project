"use client";

import Image from "next/image";
import { FC, useRef, useState } from "react";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker: FC<ImagePickerProps> = ({ label, name }) => {
  // state to hold the url of the user's picked image, if null = no selected image
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  // reference for the image input element
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null)
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    // picker container
    <div className="">
      <label htmlFor={name}>{label}</label>
      {/* controls */}
      <div className="flex items-start gap-6 mb-4">
        {/* preview image for the user selected meal*/}
        <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!pickedImage && <p className="m-0 p-4">No image picked yet </p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* user image input */}
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className="border-0 py-2 px-6 text-black bg-[#a4abb9] rounded-sm cursor-pointer hover:bg-[#b3b9c6] focus:bg-[#b3b9c6] font-quicksand font-normal l-spacing-s"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
