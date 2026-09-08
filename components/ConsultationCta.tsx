import Link from "next/link";

export default function ConsultationCta() {
  return (
    <section aria-labelledby="cta-heading" className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#571244] px-6 py-10 text-center sm:flex-col sm:justify-between sm:text-left">
        <h2 id="cta-heading" className="hidden md:block text-lg font-semibold text-white leading-[150%] tracking-[1.2px] text-center sm:text-[20px]">
          Want to accelerate professional growth and development at your
          organisation?
          <span className="block text-white">See how we can help.</span>
        </h2>

        <h2 id="cta-heading" className="md:hidden text-medium text-white leading-[150%] tracking-[1.2px] text-center">
          Don't just dream it &mdash; let's build it it! Click now and start your journey with Tobams group. Your journey to digital excellence begins here.
        </h2>
        <Link
          href="/book-a-consultation"
          className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#571244] transition-colors hover:bg-brand-pink hover:text-white"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
