import FeatureRow from "./FeatureRow";

const bullets = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export default function CorporateTrainings() {
  return (
    <section aria-labelledby="corporate-heading" className="py-8 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 id="corporate-heading" className="sr-only">
          Corporate Trainings
        </h2>
        <FeatureRow
          heading="Corporate Trainings"
          description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
          bullets={bullets}
          imageSrc="/board.jpg"
          imageAlt="Facilitator leading a corporate training workshop around a whiteboard"
          imageSide="right"
        />
      </div>
    </section>
  );
}
