import Image from "next/image";

const highlights = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopmentProgram() {
  return (
    <div className="bg-[#ccc] px-4  md:px-16 py-10 ">
    <section
      aria-labelledby="management-program-heading"
      className="bg-[#2c0922] py-5 md:p-10 rounded-[20px] lg:max-w-7xl  "
    >

        <h2
          id="management-program-heading"
          className="md:hidden text-lg text-center mb-5 font-semibold text-white sm:text-4xl"
        >
          Management Development Program
        </h2>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-0 lg:grid-cols-2 lg:gap-14 lg:px-0 max-w-7xl">
        <Image
          src="/discuss.jpg"
          alt="Corporate leaders reviewing performance results together"
          width={900}
          height={900}
          className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[100%]"
        />

        <div>
          <h2
            id="management-program-heading"
            className="hidden md:block text-2xl font-semibold text-white sm:text-4xl"
          >
            Management Development Program
          </h2>

          <p className="-mt-4 md:mt-4 text-sm leading-relaxed text-white md:text-base">
            Tobams Group offers a comprehensive Management Development
            Program designed to equip corporate organisations with the
            high-performing leaders they need to thrive.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white sm:text-base">
            Our program includes workshops, seminars, coaching sessions,
            online courses, and experiential learning opportunities designed
            to improve leadership, strategic thinking, communication, and
            other essential managerial competencies for corporate
            organisations.
          </p>

          <div className="py-2 px-4">
          <ul className="mt-6 space-y-3 lg:space-y-5">
            {highlights.map((item) => (
              <li key={item}>
                <span className="inline-flex items-center w-full gap-2 bg-[#8F6182] rounded-lg border border-white/30 px-4 py-2 text-sm text-white">
                  <span aria-hidden="true" className="text-[#480f39]">
                    <img src="bulleting-white.png" width={12.44} height={16} />
                  </span>
                  <span className="font-semibold">{item} </span>
                </span>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
