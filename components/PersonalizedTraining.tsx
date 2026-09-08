import FeatureRow from "./FeatureRow";

const bullets = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export default function PersonalizedTraining() {
  return (
    <section aria-labelledby="individual-training-heading" className=" py-0 md:py-10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 id="individual-training-heading" className="sr-only">
          Personalised Individual Training
        </h2>
        <FeatureRow
          heading="Personalised Individual Training"
          description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
          bullets={bullets}
          imageSrc="/meeting.jpg"
          imageAlt="Consultant delivering a one-on-one individual training session"
          imageSide="left"
        />
      </div>
    </section>
  );
}
