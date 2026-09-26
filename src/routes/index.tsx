import { createFileRoute } from "@tanstack/react-router";
import { Bolt, Check, Heart, X } from "lucide-react";
import { useEffect, useState } from "react";

import profileAvatar from "@/assets/profile-avatar.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Social Media Manager Opportunity" },
      {
        name: "description",
        content: "Apply for a remote social media manager opportunity with flexible hourly rates.",
      },
      { property: "og:title", content: "Social Media Manager Opportunity" },
      {
        property: "og:description",
        content: "A remote social media manager role paying $150–$200 per hour.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-12">
      <div className="job-card-stack relative w-full max-w-[340px]">
        <article className="card-hover relative z-10 rounded-card border border-border bg-card p-5 shadow-card">
          <header className="flex items-center gap-3">
            <img
              src={josephAvatar}
              alt="Joseph Anderson"
              width={512}
              height={512}
              className="size-10 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-[13px] font-semibold leading-tight text-card-foreground">
                Joseph Anderson
              </h1>
              <p className="mt-0.5 text-[11px] leading-none text-muted-foreground">Posted 2h ago</p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label={saved ? "Remove from saved jobs" : "Save job"}
              aria-pressed={saved}
              onClick={() => setSaved((value) => !value)}
              className="size-9 shrink-0 rounded-md border border-border bg-card text-foreground shadow-control hover:bg-muted data-[saved=true]:text-primary"
              data-saved={saved}
            >
              <Heart className={saved ? "fill-current" : ""} />
            </Button>
          </header>

          <section className="mt-5">
            <h2 className="max-w-[285px] text-[19px] font-semibold leading-[1.22] text-card-foreground">
              Looking for SM manager to create posts across various platforms
            </h2>
            <p className="mt-2 truncate text-xs text-muted-foreground">
              We&apos;re seeking a skilled Social Media Manager to grow our presence.
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Required skills">
              {["SMM", "Growth Strategy", "Startup", "Brand"].map((skill) => (
                <li key={skill} className="rounded-sm bg-tag px-2 py-1 text-[10px] font-medium leading-none text-tag-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <div className="my-5 h-px bg-border" />

          <section>
            <p className="text-[24px] font-semibold leading-none text-card-foreground">$150 – $200/h</p>
            <p className="mt-2 text-[11px] text-muted-foreground">Hourly rate&nbsp; • &nbsp;100% Remote</p>
          </section>

          <Button
            type="button"
            variant="job"
            size="job"
            onClick={() => setApplied(true)}
            disabled={applied}
            className="mt-5 w-full disabled:opacity-100"
          >
            {applied ? <Check aria-hidden="true" /> : <Bolt aria-hidden="true" className="fill-current" />}
            {applied ? "Applied" : "Apply"}
          </Button>
        </article>
      </div>
    </main>
  );
}
