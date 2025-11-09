import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return undefined;

    const tween = gsap.fromTo(
      navbar,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      }
    );

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="navbar pointer-events-none fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-3 bg-[#07080A]/70 backdrop-blur-md border-b border-white/5 opacity-0"
    >
      <div className="flex items-center gap-3">
        {/* Spacer for animated logo docking */}
        <div className="h-10 w-24" />
      </div>

      <div className="pointer-events-auto flex items-center gap-3">
        <a
          href="https://app.sproxx.io"
          className="rounded-full bg-gradient-to-r from-[#6C63FF] to-[#4FC3F7] px-5 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
        >
          Launch App
        </a>
        <a
          href="#features"
          className="rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-semibold text-cyan-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-400/10"
        >
          Explore
        </a>
      </div>
    </header>
  );
}
