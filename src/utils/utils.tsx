const imageModules = import.meta.glob<{ default: string }>(
  "../assets/**/*.{png,jpg,jpeg,gif,svg,webp}",
  { eager: true },
);

function getImageUrl(name: string | undefined): string | undefined {
  if (!name) return undefined;
  if (/^(https?:)?\/\//.test(name) || name.startsWith("data:")) {
    return name;
  }
  const module = imageModules[`../assets/${name}`];
  if (!module) {
    console.warn(`getImageUrl: no asset found for "${name}"`);
    return undefined;
  }
  return module.default;
}

export { getImageUrl };

import { useEffect } from "react";

function DocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
export { DocumentTitle };
