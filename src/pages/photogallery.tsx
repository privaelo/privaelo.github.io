import { DocumentTitle } from "../utils/utils";
import GalleryImage from "../components/galleryImage";

interface Photo {
  src: string;
  alt: string;
  aspectRatio?: number; // width/height, helps prevent layout shift
}

export default function GalleryPage() {
  DocumentTitle("Life | Tagnon Okoumassoun");

  // No photos yet — add entries here (and the matching thumbnail/full images
  // under src/assets/photogallery/) whenever you're ready.
  const photos: Photo[] = [];

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24">
      <h1 className="mb-8 ml-4 mt-8 text-4xl font-bold text-slate-200 sm:text-5xl">
        Life
      </h1>

      {photos.length === 0 ? (
        <p className="ml-4 text-slate-400">
          Nothing here yet — check back soon.
        </p>
      ) : (
        <div className="columns-1 gap-6 py-16 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <div key={index} className="mb-6 break-inside-avoid">
              <GalleryImage
                key={index}
                photoname={photo.src}
                alt={photo.alt}
                aspectRatio={photo.aspectRatio}
                index={index}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
