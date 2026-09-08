import Image from "next/image";
import Link from "next/link";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];



export default function LearningManagementSystem() {
  return (
    <section aria-labelledby="lms-heading" className="mt-8 bg-[#e9e2e7] py-6 px-1 md:py-12 md:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-2 px-4 md:gap-10 px-6 lg:grid-cols-[2fr_3fr] lg:gap-[80px] lg:px-8 max-w-7xl">
        
          <h2 id="lms-heading" className="md:hidden text-xl mb-4 text-center font-bold text-[#571244]"
          >
            Learning Management System
          </h2>
        
        <div className="mx-auto h-84 w-84  overflow-hidden rounded-full md:h-130 md:w-130">
          <img src="/management.jpg" alt="Two Tobams Group training consultants smiling together" width={320} height={320}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 id="lms-heading" className="hidden md:block text-2xl font-semibold text-[#571244] md:text-4xl leading-[150%] tracking-[1.2px]"
          >
            Learning Management System
          </h2>

          <div className="mt-4 bg-[#dacdd6] p-6 rounded-lg">
          <p className=" text-sm leading-relaxed text-[#151515] sm:text-base">
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers
            a wide range of resources to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today&apos;s competitive
            tech landscape.
          </p>

          <p className="mt-6 text-[18px] font-bold text-[#571244]">
            Some of our courses include:
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-ink sm:grid-cols-2">
            {courses.map((course) => (
              <li key={course} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0 text-[#151515]">
                  ◆
                </span>
                <span className="text-[16px] text-[#151515] " >{course}</span>
              </li>
            ))}
          </ul>


          <Link href="/tg-academy">
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
  );
}
