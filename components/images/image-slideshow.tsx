"use client";

import { FC, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";



interface ImageType {
  image: StaticImageData,
  alt: string
}

const images: ImageType[] = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];


const ImageSlideShow: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 transform scale-110 -translate-x-4 -rotate-3 transition-all duration-500 ease-in-out ${index === currentImageIndex ? "z-[1] opacity-100 scale-100 translate-x-0 rotate-0" : ""}`}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default ImageSlideShow;