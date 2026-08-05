import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getImageUrl } from "../utils/utils";

export interface MediaItem {
  type: "image" | "youtube" | "gdrive-image" | "gdrive-video";
  url: string; // For images: path, for YouTube: video ID, for GDrive: file ID or full sharing link
  caption?: string;
  thumbnail?: string;
}

export interface ProjectDemoProps {
  title: string;
  description: string;
  coverImage?: string;
  tags: string[];
  backLink?: string;
  backLabel?: string;

  // Content sections
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  learnings?: string;

  // Media
  media?: MediaItem[];

  // Technical details
  techStack?: string[];
  teamSize?: number;
  duration?: string;
  role?: string;

  // Links
  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
}

// Helper function to extract Google Drive file ID from various URL formats
function extractGDriveId(url: string): string {
  // If it's already just an ID, return it
  if (!url.includes("/") && !url.includes("?")) {
    return url;
  }

  // Handle various Google Drive URL formats
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/, // /file/d/FILE_ID
    /id=([a-zA-Z0-9_-]+)/, // ?id=FILE_ID
    /\/d\/([a-zA-Z0-9_-]+)/, // /d/FILE_ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return url;
}

export default function ProjectDemo({
  title,
  description,
  coverImage,
  tags,
  backLink = "/projects",
  backLabel = "Back to Projects",
  overview,
  challenge,
  solution,
  results,
  learnings,
  media = [],
  techStack = [],
  teamSize,
  duration,
  role,
  githubUrl,
  liveUrl,
  paperUrl,
}: ProjectDemoProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % media.length);
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const renderMedia = (item: MediaItem, index: number, clickable = true) => {
    if (item.type === "youtube") {
      return (
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${item.url}`}
            title={`Video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full rounded-lg"
          />
          {item.caption && (
            <p className="mt-2 text-center text-sm italic text-slate-400">
              {item.caption}
            </p>
          )}
        </div>
      );
    }

    if (item.type === "gdrive-video") {
      const fileId = extractGDriveId(item.url);
      return (
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            title={`Video ${index + 1}`}
            allow="autoplay"
            className="h-full w-full rounded-lg"
          />
          {item.caption && (
            <p className="mt-2 text-center text-sm italic text-slate-400">
              {item.caption}
            </p>
          )}
        </div>
      );
    }

    if (item.type === "gdrive-image") {
      const fileId = extractGDriveId(item.url);
      // Use thumbnail for carousel, full image for lightbox
      const imageUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;

      return (
        <div className="relative">
          <img
            src={imageUrl}
            alt={item.caption || `Media ${index + 1}`}
            className={`w-full rounded-lg object-cover ${clickable ? "cursor-pointer transition-transform hover:scale-[1.02]" : ""}`}
            onClick={() => clickable && openLightbox(index)}
          />
          {item.caption && (
            <p className="mt-2 text-center text-sm italic text-slate-400">
              {item.caption}
            </p>
          )}
        </div>
      );
    }

    // Regular image
    return (
      <div className="relative">
        <img
          src={getImageUrl(item.url)}
          alt={item.caption || `Media ${index + 1}`}
          className={`w-full rounded-lg object-cover ${clickable ? "cursor-pointer transition-transform hover:scale-[1.02]" : ""}`}
          onClick={() => clickable && openLightbox(index)}
        />
        {item.caption && (
          <p className="mt-2 text-center text-sm italic text-slate-400">
            {item.caption}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24">
      {/* Header */}
      <div className="mb-12">
        <a
          href={backLink}
          className="mb-6 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-slate-200"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          {backLabel}
        </a>

        <h1 className="mb-4 text-4xl font-bold text-slate-200 sm:text-5xl">
          {title}
        </h1>

        <p className="mb-6 text-lg text-slate-400">{description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {(githubUrl || liveUrl || paperUrl) && (
          <div className="flex flex-wrap gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-700"
              >
                View on GitHub
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
              >
                View Live Demo
              </a>
            )}
            {paperUrl && (
              <a
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-700"
              >
                Read Paper
              </a>
            )}
          </div>
        )}
      </div>

      {/* Cover Image */}
      {coverImage && (
        <div className="mb-12">
          <img
            src={getImageUrl(coverImage)}
            alt={title}
            className="w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
      )}

      {/* Project Details Grid */}
      {(techStack.length > 0 || teamSize || duration || role) && (
        <div className="mb-12 grid grid-cols-1 gap-6 rounded-lg bg-slate-800/50 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {role && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Role
              </h3>
              <p className="text-slate-200">{role}</p>
            </div>
          )}
          {duration && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Duration
              </h3>
              <p className="text-slate-200">{duration}</p>
            </div>
          )}
          {teamSize && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Team Size
              </h3>
              <p className="text-slate-200">{teamSize} members</p>
            </div>
          )}
          {techStack.length > 0 && (
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-700 px-2 py-1 text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="space-y-12">
        {overview && (
          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-200">Overview</h2>
            <p className="leading-relaxed text-slate-300">{overview}</p>
          </section>
        )}

        {challenge && (
          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-200">
              The Challenge
            </h2>
            <p className="leading-relaxed text-slate-300">{challenge}</p>
          </section>
        )}

        {/* Media Carousel */}
        {media.length > 0 && (
          <section>
            <h2 className="mb-6 text-2xl font-bold text-slate-200">Media</h2>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                {renderMedia(media[currentMediaIndex], currentMediaIndex)}
              </div>

              {media.length > 1 && (
                <>
                  <button
                    onClick={prevMedia}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-2 text-white transition-colors hover:bg-slate-800"
                    aria-label="Previous media"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextMedia}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 p-2 text-white transition-colors hover:bg-slate-800"
                    aria-label="Next media"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots indicator */}
                  <div className="mt-4 flex justify-center gap-2">
                    {media.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentMediaIndex
                            ? "bg-slate-200"
                            : "bg-slate-600"
                        }`}
                        aria-label={`Go to media ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {solution && (
          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-200">
              The Solution
            </h2>
            <p className="leading-relaxed text-slate-300">{solution}</p>
          </section>
        )}

        {results && (
          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-200">Results</h2>
            <p className="leading-relaxed text-slate-300">{results}</p>
          </section>
        )}

        {learnings && (
          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-200">
              Key Learnings
            </h2>
            <p className="leading-relaxed text-slate-300">{learnings}</p>
          </section>
        )}
      </div>

      {/* Lightbox for images */}
      {isLightboxOpen &&
        (media[lightboxIndex].type === "image" ||
          media[lightboxIndex].type === "gdrive-image") && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-800/80 p-2 text-white transition-colors hover:bg-slate-700"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <div
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  media[lightboxIndex].type === "gdrive-image"
                    ? `https://drive.google.com/thumbnail?id=${extractGDriveId(media[lightboxIndex].url)}&sz=w2000`
                    : getImageUrl(media[lightboxIndex].url)
                }
                alt={
                  media[lightboxIndex].caption || `Media ${lightboxIndex + 1}`
                }
                className="max-h-[90vh] max-w-full rounded-lg object-contain"
              />
              {media[lightboxIndex].caption && (
                <p className="mt-4 text-center text-sm italic text-slate-300">
                  {media[lightboxIndex].caption}
                </p>
              )}
            </div>

            {media.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevLightbox();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/80 p-2 text-white transition-colors hover:bg-slate-700"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextLightbox();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/80 p-2 text-white transition-colors hover:bg-slate-700"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        )}
    </div>
  );
}
