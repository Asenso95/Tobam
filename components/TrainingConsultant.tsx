import Link from "next/link";
import Image from "next/image";


const cards = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultant() {
  return (
    <div className="bg-[#f2f2f2] pt-6 md:pt-10 ">
    <section aria-labelledby="training-consultant-heading" className="py-6 px-4 md:py-12 md:px-16 bg-[#e9e2e7]">
      <div className="mx-auto max-w-6xl md:px-6 lg:px-0 max-w-7xl">
        <h2
          id="training-consultant-heading"
          className="text-2xl font-bold md:font-semibold text-[#571244] sm:text-3xl lg:text-[40px]"
        >
          Training The Consultant
        </h2>
        <p className="mt-2 text-lg font-bold md:font-semibold text-[#571244] sm:text-base lg:text-[18px]">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#151515] sm:text-base max-w-7xl">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified
          training consultant. Learn from professionals in the field,
          immerse yourself in a thorough curriculum, and hone your training
          methods through interactive workshops. Participating in our
          program will enable you to gain expertise in diverse courses while
          also developing the abilities to mentor and encourage others in
          their career advancement.
        </p>

        <div className="bg-[#571244] p-6 mt-6 rounded-[8px]">
        <ul className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, index) => (
            <li
              key={card.title}
              className="text-white"
            >
              <p className="font-bold">{card.title}</p>
              <p className="mt-2 text-sm text-white/70">{card.description}</p>
            </li>
          ))}
        </ul>
        </div>

         <div className="w-fit">
         <Link href="/transformation-hub"  >
          <button className="mt-6 flex items-center gap-2 rounded-lg px-4 py-2 bg-[#571244]  text-sm font-semibold text-white transition-colors hover:bg-brand-maroon">
            <span className="text-[18px]">Learn More</span>
            <span>
              <Image src="/arrow-up-right.png" alt="Chevron arrow up icon" width={20} height={20} className="rotation-270" />
            </span>
          </button>
          </Link>
          </div>
      </div>
    </section>
    </div>
  );
}
