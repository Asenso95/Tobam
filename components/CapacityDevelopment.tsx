import FeatureRow from "./FeatureRow";

const bullets = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function CapacityDevelopment() {
  return (
    <section aria-labelledby="capacity-heading" className="py-8 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 id="capacity-heading" className="sr-only">
          Capacity Development
        </h2>
        <FeatureRow
          heading="Capacity Development"
          description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success."
          bullets={bullets}
          imageSrc="/marketing.jpg"
          imageAlt="Team members collaborating around a strategy board in a workshop"
          imageSide="right"
        />
      </div>
    </section>
  );
}
