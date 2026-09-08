import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    heading: "What We Do",
    links: [
      "Sustainability Services",
      "Strategy Planning and Implementation",
      "Tech Talent Solutions",
      "Training and Development",
      "IT Consulting Services",
      "Social Impact",
      "Talent Recruitment",
    ],
  },
  {
    heading: "Company",
    links: [
      "About",
      "Jobs",
      "Projects",
      "Our Founder",
      "Business Model",
      "The Team",
      "Contact Us",
      "Blog",
      "FAQs",
      "Testimonials",
    ],
  },
  {
    heading: "Solution",
    links: [
      "Tobams Group Academy",
      "Help a Tech Talent",
      "Join Our Platform",
      "Pricing",
      "Book a Consultation",
      "Join Our Slack Community",
    ],
  },
];

const socialLinks = [
  {label:"LinkedIn", icon:"/linkedIn.png" },
  {label: "Instagram", icon:"/instagram.png"},
  {label: "X", icon: "/X.png"}
];


export default function Footer() {


  return (
    <footer className="bg-[#11040e] text-white">
      <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/Seecondary Logo copy 2.png" alt="TOBAMS GROUP logo" width={188} height={72.61} aria-hidden="true" />
            </div>
            <p className="mt-4 md:max-w-xs text-sm text-[#f8f8f8] leading-relaxed">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <ul className="mt-5 flex gap-3" aria-label="Social media links">
              {socialLinks.map((platform) => (
                <li key={platform.label}>
                  <Link href="#"
                    aria-label={`Tobams Group on ${platform.label}`}
                    className="flex h-9 w-9 items-center justify-center bg-white rounded-full border border-white/30 text-xs transition-colors hover:bg-white hover:text-brand-maroon-dark"
                  >
                    <img src={platform.icon} alt={platform.label} className="w-4 text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-sm font-bold text-white lg:text-[20px]">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="transition-colors hover:border-b-1 border-white active:bg-[#22a7f080]">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 md:mt-12 grid gap-8 border-t border-white/10 bg-[#1f131c] rounded-[8px] p-4 md:p-6 py-5 sm:grid-cols-2 lg:grid-cols-[3fr_1fr]  ">
          
          <div>
            <h2 className="text-sm font-bold text-white lg:text-[20px]">Registered Offices</h2>
            
            <div className="lg:flex">
            <p className="mt-3 text-sm">
              <span className="font-medium text-[#ef4353]">United Kingdom</span>
              <br />
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford, Essex, United
              Kingdom, RM1 4QA
            </p>

          
              
            <p className="mt-3 text-sm lg:border-l border-[#444] h-full lg:pl-6 ">
            <span className="font-medium text-[#ef4353]">Nigeria</span>
            <br />
            RC 1048722 (Registered by the Corporate Affairs Commission)
            <br />
            4, Muaz Close, Angwar-Rimi
            </p>
            </div>
            

          </div>



          <div className="lg:border-l border-[#444] h-full md:pl-6">
            <h2 className="text-sm font-bold text-white lg:text-[20px]">
              Contact Information
            </h2>
            <address className="mt-3 space-y-2 text-sm not-italic">
              <p>
                <Link href="mailto:theteam@tobamsgroup.com" className="hover:text-white">
                  <span className="flex gap-3 items-center">
                  <img src="/email.png" alt="email" className="w-4" />
                  theteam@tobamsgroup.com
                  </span>
                </Link>
              </p>
              <p>
                <Link href="tel:+447886600748" className="hover:text-white">
                  <span className="flex gap-3 items-center">
                  <img src="/phone.png" alt="Phone" className="w-4" />
                  +44 7886 600748
                  </span>
                </Link>
              </p>
            </address>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © Tobams Group, {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:border-b-1 border-white active:bg-[#22a7f080]">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:border-b-1 border-white active:bg-[#22a7f080]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:border-b-1 border-white active:bg-[#22a7f080]">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
