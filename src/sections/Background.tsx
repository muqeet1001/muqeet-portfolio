import { SectionHeader, Shell } from "@/components/Layout";
import { site } from "@/config/site";

export function Background() {
  return (
    <>
      <section id="achievements">
        <SectionHeader title="Achievements" />
        <Shell className="px-6 py-6 sm:px-8">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--soft)]">
            {site.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
          </ul>
        </Shell>
      </section>

      <section id="education">
        <SectionHeader title="Education" />
        <Shell className="divide-y divide-[var(--line)]">
          {site.education.map((school) => (
            <article key={school.institution} className="px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-[var(--fg)]">{school.institution}</h3>
                <span className="font-mono text-xs text-[var(--muted)]">{school.period}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                {school.qualification} · {school.result}
              </p>
              <p className="mt-1 font-mono text-xs text-[var(--muted)]">{school.location}</p>
            </article>
          ))}
        </Shell>
      </section>

      <section id="certifications">
        <SectionHeader title="Certifications" />
        <Shell className="divide-y divide-[var(--line)]">
          {site.certifications.map((certificate) => (
            <article key={certificate.course} className="px-6 py-5 sm:px-8">
              <h3 className="text-base font-semibold text-[var(--fg)]">{certificate.course}</h3>
              <p className="mt-1 font-mono text-xs text-[var(--muted)]">{certificate.provider}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{certificate.topics}</p>
            </article>
          ))}
        </Shell>
      </section>
    </>
  );
}
