import { TbBrandLinkedin, TbBrandGithub, TbMail } from "react-icons/tb";
import { SiGooglescholar } from "react-icons/si";

export default function SocialBar() {
  return (
    <div className="mt-2 flex">
      <a
        href="https://www.linkedin.com/in/tagnon-45616017b"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbBrandLinkedin className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="https://github.com/privaelo"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbBrandGithub className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="mailto:tagnonprivael@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <TbMail className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
      <a
        href="https://scholar.google.com/citations?user=J24uDc8AAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="basis-10"
      >
        <SiGooglescholar className="h-6 w-6 transition-colors hover:text-slate-200" />
      </a>
    </div>
  );
}
