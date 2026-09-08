import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section aria-labelledby="get-in-touch-heading" className="relative isolate overflow-hidden bg-[#1d0617]">
      {/* <Image
        src="/get-in-touch-bg.svg"
        alt="Tobams Group team collaborating in the office"
        fill
        className="-z-10 object-cover"
      /> */}
      {/* <div className="absolute inset-0 -z-10 bg-brand-maroon-dark/80" /> */}

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm text-white/70">
            Ready to be a part of something extraordinary?
          </p>
          <h2
            id="get-in-touch-heading"
            className="mt-4 md:mt-1 text-xl md:font-semibold text-white sm:text-3xl"
          >
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex w-fit shrink-0 items-center rounded-md bg-[#571244] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-maroon-dark"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
