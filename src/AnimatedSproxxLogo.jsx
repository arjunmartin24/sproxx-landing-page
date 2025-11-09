import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSproxxLogo() {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;

    if (!logo) return undefined;

    const tween = gsap.fromTo(
      logo,
      {
        scale: 1,
        xPercent: -50,
        yPercent: -50,
        top: "50%",
        left: "50%",
        opacity: 1,
        filter: "drop-shadow(0 0 25px rgba(79, 195, 247, 0.8))",
      },
      {
        scale: 0.25,
        top: "1.5rem",
        left: "2rem",
        xPercent: 0,
        yPercent: 0,
        opacity: 0.85,
        filter: "drop-shadow(0 0 8px rgba(79, 195, 247, 0.35))",
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "top center",
          scrub: 0.5,
          onLeave: () => {
            gsap.to(logo, {
              scale: 0.27,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: "power1.out",
            });
          },
        },
      }
    );

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  return (
    <div
      ref={logoRef}
      className="fixed z-50 text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-extrabold bg-gradient-to-r from-[#7C4DFF] via-[#4FC3F7] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-[0_0_25px_#4FC3F7]"
      style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      Sproxx
    </div>
  );
}
