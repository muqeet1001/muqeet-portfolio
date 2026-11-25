import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Project } from "@/config/site";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  const [showDetails, setShowDetails] = useState(false);
  const detailsId = useId();

  return (
    <article className="flex h-full flex-col rounded-xl border border-[var(--line)] bg-[var(--card)] p-5 shadow-sm transition-colors hover:border-[var(--soft)]">
      {project.image && (
        <div className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-[11px] border-b border-[var(--line)] bg-[var(--chip)]">
          <img
            src={project.image}
            alt={project.imageAlt ?? ""}
            width={1120}
            height={560}
            loading="lazy"
            decoding="async"
            className="aspect-[2/1] w-full object-cover"
          />
        </div>
      )}
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-serif text-2xl text-[var(--fg)]">{project.title}</h3>
        <span className="font-mono text-xs text-[var(--soft)]">{project.year}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.blurb}</p>

      {project.story && (
        <div className="mt-3">
          <button
            type="button"
            aria-expanded={showDetails}
            aria-controls={detailsId}
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-1 rounded font-mono text-xs text-[var(--muted)] hover:text-[var(--fg)]"
          >
            {showDetails ? "Hide details" : "Project details"}
            {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          <div id={detailsId}>
            <AnimatePresence initial={false}>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 border-l-2 border-[var(--line)] pl-3 text-sm leading-relaxed text-[var(--muted)]">
                    {project.story}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      <div className="mt-auto pt-5">
        <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded border border-[var(--line)] bg-[var(--chip)] px-2 py-0.5 font-mono text-xs text-[var(--muted)]"
            >
              {tech}
            </li>
          ))}
        </ul>
        {project.links.source && (
          <div className="mt-4 border-t border-[var(--line)] pt-3">
            <a
              href={project.links.source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="inline-flex items-center gap-2 rounded text-sm font-medium text-[var(--fg)] hover:underline"
            >
              <GitHubIcon className="size-4" /> View on GitHub
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
