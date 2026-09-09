"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/#" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Jobs", href: "/#jobs" },
  { label: "Projects", href: "/#projects" },
  { label: "TG Academy", href: "/#tg-academy" },
  { label: "Strategic Partnership", href: "/#strategic-partnership" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book a Consultation", href: "/#book-a-consultation" },

];

export default function Navbar() {

  const pathname = usePathname()

 const [isMenuOpen, setIsMenuOpen] = useState(false)
 const [scrollUp, setscrollUp] = useState(true) 
 const prevScroll = useRef(0)


// Scroll Lock regardless of which element controls scroll
 useEffect(() => {
   // This is genuinely the standard, defensive way scroll-lock is implemented in production apps for exactly this reason — targeting only body is a common gotcha once html/body have their own overflow rules in play. 
   // Locking both removes the ambiguity about which one the browser considers "the" scrolling element, 
   // so it works consistently regardless of that browser-level detail.
  const root = document.documentElement; // <html>

  if (isMenuOpen) {
    root.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
  } else {
    root.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    root.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
  };
}, [isMenuOpen]);


 useEffect(() => {

  const  handleScroll=() => {
  const verticalScroll = window.scrollY

  if(verticalScroll>prevScroll.current && verticalScroll>100){
    setscrollUp(false)
  }else{
    setscrollUp(true)
  }

  prevScroll.current = verticalScroll
}

  window.addEventListener("scroll", handleScroll)
  return () => {
  window.removeEventListener("scroll", handleScroll)
  }

 }, []) 

  

  return (
    <>
    <header className={`hidden lg:block sticky top-0 z-50 border-b border-brand-blush bg-white ${scrollUp? "translate-y-0":"-translate-y-full"} transition-transform duration-300`}>
      
      <div className=" relative z-20 bg-white flex items-center justify-between px-16 py-6 w-full h-[104px] shadow-lg ">
        
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image src="/Seecondary Logo copy 2.png" alt="Tobams Group home" width={165.71} height={64} priority   />
        </Link>
        
        <div className="hidden sm:flex items-center gap-4 ">
          <Link href="/account" >
          <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#571244]  text-sm font-semibold text-white transition-colors hover:bg-brand-maroon">
            <div className="text-white rounded-full bg-white" >
            <Image src="/Mini Button.png" alt="consultation buton" width={24} height={24} priority className="mx-auto my-auto" />
            </div>
            <span>Account</span>
            <span>
              <Image src="/ChevronDown.png" alt="Chevron down icon" width={20} height={20} className="rotation-90" />
            </span>
          </button>
          </Link>

          <Link href="/take-assessment" >
          <button className="flex items-center gap-2 rounded-lg px-4 py-2 bg-[#ef4353]  text-sm font-semibold text-white transition-colors hover:bg-brand-pink ">
            <span>Take Assessment</span>
          </button>
          </Link>

        </div>
        
      </div>

      
      <div className="border-t border-gray-200" />

      
      
      <nav aria-label="Primary" className={`mx-auto flex max-w-7xl shadow-lg items-center justify-between transition-all duration-300 gap-4 px-16 py-5 sm:px-6 lg:px-8`}
      >
      
        <div className="mx-auto">
        <ul className="hidden items-center gap-6 text-sm font-medium text-ink lg:flex justify-between">
          {navLinks.map((link) => (
            <li key={link.label} className={`${pathname===link.href? "border-b-2 border-black":"border-b-2 border-transparent"}`}
            >
              <Link
                href={link.href}
                className={`transition-colors ${pathname===link.href&& "text-[#571244]"} hover:text-brand-pink`}
              >

              <button className="flex gap-1 items-center">
              <span className={`text-[18px] ${pathname===link.href? "font-bold leading-[150%]":"font-normal leading-[27px]"} `} >
                {link.label} 
                </span>
              <div>
              <img src="/Vector.png" alt="Chevron down icon"   />
              </div>
            </button>
              </Link>
            </li>
          ))}
        </ul>
        </div>

     
      </nav> 
    </header>


    <header className="lg:hidden sticky top-0 z-50 border-b border-brand-blush bg-white ">
      <div className="relative z-20 bg-white flex items-center justify-between px-6 py-4.5 w-full shadow-lg ">        
      <Link href="/" >
        <Image src="/Seecondary Logo copy 2.png" alt="Tobams Group home" width={123.85} height={42} priority   />
      </Link>
      
      <div className="w-[26.7px] h-[26.67px]">
        <button onClick={()=>setIsMenuOpen(prev=>!prev)} className="rounded-lg  active:bg-brand-pink">
          <span>
            <img src="/hamburger-menu.png" className="scale-120" />
          </span>
        </button>
      </div>
{/* 
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-maroon lg:hidden"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button> */}
    </div>
    </header>




      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-brand-maroon-dark/50 transition-opacity lg:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-4/5 max-w-xs transform flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between border-b border-brand-blush px-4 py-3">
          <Link href="/" >
            <Image src="/Seecondary Logo copy 2.png" alt="Tobams Group home" width={103.85} height={22} priority   />
          </Link>

        
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-maroon active:bg-brand-pink"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        
        </div>

        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6 text-base font-medium text-ink">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-2 py-3 transition-colors hover:bg-brand-blush hover:text-brand-pink  active:bg-[#571244] active:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 border-t border-brand-blush px-4 py-4 ">
          <a
            href="#/book-a-consultation"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full border border-brand-maroon px-4 py-2 text-center text-sm font-medium text-brand-maroon"
          >
            Book a Consultation
          </a>
          <a
            href="#/assessment"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full bg-brand-pink px-4 py-2 text-center text-sm font-semibold text-white  " 
          >
            Take Assessment
          </a>
        </div>
      </div>

    </>
  );
}
