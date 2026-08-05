interface ExperienceCardData {
  title: string;
  company?: string;
  location?: string;
  description?: string;
  dates?: string;
  tags?: string[];
  xlink?: string;
}

interface TagDetails {
  name: string;
}

export default function ExperienceCard(props: ExperienceCardData) {
  return (
    <a href={props.xlink} target="_blank" rel="noopener noreferrer">
      <section className="mb-2 max-w-lg rounded-lg bg-slate-50 bg-opacity-0 p-4 backdrop-blur transition-all hover:bg-opacity-5 hover:shadow-lg hover:ring-1 hover:ring-black/10">
        <p className="font-bold text-slate-200">{props.title}</p>
        <p className="font-semibold">
          {props.company}
          {props.dates && (
            <span className="font-normal text-slate-400">
              {" "}
              ({props.dates})
            </span>
          )}
        </p>
        {props.location && (
          <p className="text-sm text-slate-500">{props.location}</p>
        )}

        <p className="mt-1 text-sm">{props.description}</p>
        {props.tags && props.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-y-2">
            {props.tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        )}
      </section>
    </a>
  );
}

function Tag(props: TagDetails) {
  return (
    <span className="mr-1.5 text-nowrap rounded-2xl bg-slate-300 bg-opacity-15 px-2.5 py-1 text-xs text-slate-300">
      {props.name}
    </span>
  );
}
