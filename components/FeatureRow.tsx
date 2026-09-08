import Image from "next/image";

type FeatureRowProps = {
  heading: string;
  description?: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageSide?: "left" | "right";
};

export default function FeatureRow({
  heading,
  description,
  bullets,
  imageSrc,
  imageAlt,
  imageSide = "right",
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-16">

      <h2 className="md:hidden text-xl font-semibold text-[#151515] sm:text-4xl">
          {heading}
        </h2>
      
      <div className={imageSide === "left" ? "lg:order-1" : "lg:order-2"}>
        <Image src={imageSrc} alt={imageAlt} width={602} height={346}
          className="h-64 w-full rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]  object-cover sm:h-80 lg:h-[346px] w-[602px]"
        />
      </div>

      <div className={imageSide === "left" ? "lg:order-2" : "lg:order-1"}>
        <h2 className="hidden md:block text-2xl font-semibold text-[#151515] sm:text-4xl">
          {heading}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-muted leading-[150%] sm:text-base">
            {description}
          </p>
        ) : null}
        <ul className="mt-5 ml-0 space-y-2 text-sm text-ink md:text-base md:ml-5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-1 text-[#480f39]">
                <img src="bulleting.png" width={12.44} height={16} />
              </span>
              <span className="text-[#696969]"> {bullet} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
