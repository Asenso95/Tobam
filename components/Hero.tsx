import Image from "next/image";
import Link from "next/link";



export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden w-full" aria-labelledby="hero-heading" >
      <Image
        src="/training.jpg"
        alt="Consultant leading a training session with a group of professionals"
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto px-8 flex max-w-4xl flex-col items-center  text-center sm:px-6 sm:py-32 lg:py-40 max-w-6xl md:px-16 py-[112px]">
        {/* <span className="rounded-full border border-white/40 px-4 py-1 text-xs font-medium tracking-wide text-white/90">
          What We Do
        </span> */}
        <button className="rounded-[50px] px-12 py-3 bg-[#2c2827] text-sm font-semibold text-white transition-colors hover:bg-[#121212] lg:text-[14px] ">
          <span>What We Do</span>
        </button>
          


        <h1 id="hero-heading" className="mt-6 text-2xl font-semibold text-white sm:text-5xl lg:text-[56px] font-bold"
        >
          <span className="hidden md:block">Training and Development</span>
          <span className="md:hidden">Learning and Development</span> 
        </h1>
        <p className="mt-5 font-semibold max-w-xl text-sm text-white/80 md:text-[18px] lg:max-w-6xl">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>
        <Link
          href="/book-a-consultation"
          className="mt-8 rounded bg-[#571244] px-6 py-3  font-semibold text-white transition-colors hover:bg-white hover:text-brand-maroon lg:text-[18px]"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
