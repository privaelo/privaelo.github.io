import Hero from "../components/sections/hero";
import Infograph from "../components/sections/infograph";
import { DocumentTitle } from "../utils/utils";

export default function Home() {
  DocumentTitle("Home | Tagnon Okoumassoun");
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <Hero></Hero>
        <Infograph></Infograph>
      </div>
    </div>
  );
}
