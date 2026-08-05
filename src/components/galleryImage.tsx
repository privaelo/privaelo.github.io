import { useState } from "react";
import { getImageUrl } from "../utils/utils";
import { motion } from "framer-motion";

interface GalleryImageProps {
  photoname: string;
  alt: string;
  aspectRatio?: number;
  index: number;
}

export default function GalleryImage({
  photoname,
  alt,
  aspectRatio = 1.5,
  index,
}: GalleryImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  const thumbnailSrc = getImageUrl(`photogallery/thumbnails/${photoname}`);
  const fullSrc = getImageUrl(`photogallery/full/${photoname}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="group relative overflow-hidden rounded-lg"
      style={{ aspectRatio: aspectRatio }}
    >
      <div className="absolute inset-0">
        <img
          src={thumbnailSrc}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover blur-xl transition-opacity duration-700 ${
            thumbnailLoaded && !imageLoaded ? "opacity-100" : "opacity-100"
          }`}
          onLoad={() => setThumbnailLoaded(true)}
          aria-hidden="true"
        />

        <img
          src={fullSrc}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
            imageLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          draggable={false}
        />

        {!thumbnailLoaded && (
          <div className="absolute inset-0 animate-pulse bg-white/5" />
        )}
      </div>
    </motion.div>
  );
}
