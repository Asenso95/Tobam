import Image from "next/image";
import Link from "next/link";

const topics = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <div className="bg-[#f9f9f9] py-5 px-4 md:px-16 md:py-10 ">
    <section aria-labelledby="transformation-hub-heading"
      className="bg-[#ef4353]/20 py-5 md:p-10 rounded-[20px] "
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-0 lg:px-0">
        <p className="text-sm font-semibold md:text-[20px] md:italic md:font-medium text-[#1671d9]">
          Learning With Our CEO:
        </p>
        <h2
          id="transformation-hub-heading"
          className="mt-1 text-xl leading-[130%] font-semibold italic text-[#571244] md:text-[32px]"
        >
          Transformation Hub With Jite Newton
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#151515] sm:text-base max-w-7xl">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event
          offers invaluable insights and strategies for personal and
          professional growth. Whether you&apos;re seeking to advance your
          career or enhance your leadership skills, the Transformation Hub
          provides a transformative learning experience to unlock your full
          potential and drive success in your endeavours.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start gap-8 ">
          <div className="min-h-0">
          <Image src="/transformation.jpg" alt="Dr. Jite Newton presenting during a Transformation Hub webinar"
            width={560} height={340} className="h-64 w-full rounded-[8px] object-cover sm:h-80 lg:h-[100%] max-h-[310px]"
          />
          </div>

          <div className="py-8 px-5 bg-[#ffffff]/20 rounded-[8px]">
            <ul className="grid grid-cols-1 gap-3 text-sm text-ink sm:grid-cols-2 gap-x-6">
              {topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 bg-[#ffffff] rounded-[12px] p-4">
                  <span aria-hidden="true" className="text-[#480f39]">
                    <img src="/bulleting-pink.png" width={12.44} height={16} />
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
  

            <Link href="//transformation-hub">
            <button className="mt-6 flex items-center gap-2 rounded-lg px-4 py-2 bg-[#571244]  text-sm font-semibold text-white transition-colors hover:bg-brand-maroon">
              <span className="text-[18px]">Learn More</span>
              <span>
                <Image src="/arrow-up-right.png" alt="Chevron arrow up icon" width={20} height={20} className="rotation-270" />
              </span>
            </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
