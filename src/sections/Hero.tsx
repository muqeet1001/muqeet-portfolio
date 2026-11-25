import { useState } from "react";
import { Download, MapPin, RotateCw, Search } from "lucide-react";
import { Shell } from "@/components/Layout";
import { site } from "@/config/site";

export function Hero({ onOpenPalette }: { onOpenPalette?: () => void }) {
  const [imgIndex, setImgIndex] = useState(0);

  function nextProfileImage() {
    const next = (imgIndex + 1) % site.profileImages.length;
    setImgIndex(next);
    window.dispatchEvent(new CustomEvent("profileImageChanged", { detail: next }));
  }

  return (
    <section aria-labelledby="profile-heading">
      <Shell className="px-5 py-6 sm:px-8 sm:py-9">
        <div className="flex items-start gap-3.5 sm:gap-4">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--chip)] sm:size-[68px]">
            <img
              src={site.profileImages[imgIndex]}
              alt=""
              width={68}
              height={68}
              className="h-full w-full object-cover"
            />
            {site.profileImages.length > 1 && (
              <button
                type="button"
                onClick={nextProfileImage}
                aria-label="Switch profile image"
                className="absolute inset-0 flex items-end justify-end p-1.5 text-white"
              >
                <RotateCw size={14} aria-hidden="true" />
              </button>
            )}
          </div>
          <div className="min-w-0">
            <h1 id="profile-heading" className="font-serif text-[38px] leading-none tracking-tight text-[var(--fg)] sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-1.5 font-mono text-sm text-[var(--fg)]">{site.role}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-[var(--muted)]">
              <MapPin size={13} aria-hidden="true" /> {site.location}
            </p>
          </div>
          {onOpenPalette && (
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
              className="ml-auto hidden items-center gap-1.5 rounded-lg border border-[var(--line)] px-2.5 py-1.5 font-mono text-xs text-[var(--muted)] hover:text-[var(--fg)] sm:flex"
            >
              <Search size={13} aria-hidden="true" /> ⌘K
            </button>
          )}
        </div>

        <div className="mt-5 grid gap-5 sm:mt-7 sm:grid-cols-[1.3fr_1fr] sm:items-center sm:gap-7">
          <div>
            <p className="text-[17px] leading-relaxed text-[var(--muted)] sm:text-lg">
              At Twinnie, I automated 3D garment creation and cut production time from{" "}
              <strong className="font-semibold text-[var(--fg)]">one day to about 30 minutes.</strong>
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                href="#projects"
                className="inline-flex min-h-10 items-center rounded-md bg-[var(--fg)] px-3 text-[13px] font-semibold text-[var(--bg)] hover:opacity-80"
              >
                See my work
              </a>
              <a
                href={site.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center text-[13px] font-medium text-[var(--fg)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-current"
              >
                View résumé
              </a>
              <a
                href={site.socials.resume}
                download
                className="inline-flex min-h-10 items-center gap-1.5 text-[13px] font-medium text-[var(--fg)] underline decoration-[var(--line)] underline-offset-4 hover:decoration-current"
              >
                <Download size={14} aria-hidden="true" /> Download résumé
              </a>
            </div>
          </div>

          <figure className="rounded-xl border border-[#385548] bg-[#112b26] px-4 py-4 text-[#f1f7f0] sm:px-5 sm:py-5">
            <figcaption className="font-serif text-[21px] leading-tight">Cost per garment</figcaption>
            <dl className="mt-3.5 space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                <dt className="text-[13px] text-[#c0d3c7]">Before automation</dt>
                <dd className="font-mono text-sm tabular-nums">$150–$300</dd>
                <dd aria-hidden="true" className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full bg-gradient-to-r from-[#8ea69b] from-50% to-[#607d70] to-50%" />
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                <dt className="text-[13px] text-[#c0d3c7]">After automation</dt>
                <dd className="font-mono text-sm tabular-nums text-[#c7f291]">$15–$30</dd>
                <dd aria-hidden="true" className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[10%] rounded-r-full bg-gradient-to-r from-[#c7f291] from-50% to-[#96ba6a] to-50%" />
                </dd>
              </div>
            </dl>
          </figure>
        </div>
      </Shell>
    </section>
  );
}
