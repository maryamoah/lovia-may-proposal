"use client";
import { story } from "@/data/story";
export function MobileProgress() {
  return (
    <div className="fixed left-0 right-0 top-0 z-40 flex h-1 lg:hidden">
      {story.progressLabels.map((i) => (
        <button
          aria-label={`Go to ${i.label}`}
          key={i.target}
          onClick={() =>
            document
              .getElementById(i.target)
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex-1 bg-gold/35 first:bg-gold/70"
        />
      ))}
    </div>
  );
}
