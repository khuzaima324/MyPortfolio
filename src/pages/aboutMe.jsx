import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    id: 1,
    bgColor: "from-[var(--color-secondary)] to-[var(--color-primary)]",
    title: "Hi, I'm Khuzaima",
    description: "A passionate web developer & video editor",
    content: "I create digital experiences that blend technical expertise with creative vision.",
    image: './images/portrait.png'
  },
  {
    id: 2,
    bgColor: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    title: "Experience",
    description: "My professional journey",
    cards: [
      {
        role: "Seo Specialist",
        company: "MAK Developer",
        duration: "Jan 2024 - Jul 2024",
        description: "Boosted website rankings through targeted SEO strategies."
      },
      {
        role: "Web Developer Internee",
        company: "See Biz Pvt. Ltd",
        duration: "Jun 2024 - Aug 2025",
        description: "Developed responsive web applications using Html, Css And Js3, improving and developing my skills."
      },
      {
        role: "Video Editor",
        company: "Self",
        duration: "Jun 2022 - Present",
        description: "Edited videos using Adobe Premiere Pro, delivering high-quality content for client campaigns."
      },
      {
        role: "Freelancing",
        company: "Self-Employed",
        duration: "Mar 2023 - Present",
        description: "Built custom websites for small businesses, integrating modern frameworks and optimizing for SEO."
      }
    ]
  },
  {
    id: 3,
    bgColor: "from-[var(--color-secondary)] to-[var(--color-primary)]",
    title: "My Toolkit",
    description: "Modern technologies & creative software",
    icons: [
      {
        name: "React",
        src: "https://img.icons8.com/color/64/react-native.png",
        alt: "React icon"
      },
      {
        name: "YouTube",
        src: "https://img.icons8.com/color/64/youtube-play.png",
        alt: "YouTube icon"
      },
      {
        name: "Photoshop",
        src: "https://img.icons8.com/color/64/adobe-photoshop.png",
        alt: "Photoshop icon"
      },
      {
        name: "Git",
        src: "https://img.icons8.com/color/64/git.png",
        alt: "Git icon"
      },
      {
        name: "Premiere Pro",
        src: "https://img.icons8.com/color/64/adobe-premiere-pro.png",
        alt: "Premiere Pro icon"
      },
      {
        name: "VS Code",
        src: "https://img.icons8.com/color/64/visual-studio-code-2019.png",
        alt: "VS Code icon"
      },
      {
        name: "HTML",
        src: "https://img.icons8.com/color/64/html-5.png",
        alt: "HTML icon"
      },
      {
        name: "Node.js",
        src: "https://img.icons8.com/color/64/nodejs.png",
        alt: "Node.js icon"
      }
    ]
  },
  {
    id: 4,
    bgColor: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    title: "Let's Connect",
    description: "Get in touch for collaborations",
    content: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    image: null
  }
];

export default function About() {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [lockScroll, setLockScroll] = useState(true);
  const iconSetRef = useRef(null);
  const [iconSetWidth, setIconSetWidth] = useState(1024); // Fallback width (8 icons * 128px)

  useEffect(() => {
    if (lockScroll) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [lockScroll]);

  useEffect(() => {
    let scrollTimeout;
    let lastScroll = 0;

    const handleScroll = (e) => {
      e.preventDefault();
      if (!lockScroll) return;

      const now = Date.now();
      if (now - lastScroll < 500) return;
      lastScroll = now;

      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setScrolling(false), 500);

      const direction = e.deltaY > 0 ? "down" : "up";
      setCurrentPage((prev) => {
        if (direction === "down" && prev < pages.length - 1) {
          return prev + 1;
        } else if (direction === "up" && prev > 0) {
          return prev - 1;
        } else if (direction === "down" && prev === pages.length - 1) {
          setLockScroll(false);
          return prev;
        }
        return prev;
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lockScroll]);

  useEffect(() => {
    const handleScrollUp = (e) => {
      if (!lockScroll && e.deltaY < 0 && window.scrollY === 0) {
        e.preventDefault();
        setLockScroll(true);
        setCurrentPage(pages.length - 1);
      }
    };

    window.addEventListener("wheel", handleScrollUp, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScrollUp);
    };
  }, [lockScroll]);

  useEffect(() => {
    if (lockScroll) {
      window.scrollTo(0, 0);
    }
  }, [currentPage, lockScroll]);

  // Calculate icon set width for seamless loop
  useEffect(() => {
    if (currentPage === 2 && iconSetRef.current) { // Page 3 (id: 3, index: 2)
      const firstIconSet = iconSetRef.current;
      const width = firstIconSet.scrollWidth / 2; // Divide by 2 since icons are duplicated
      console.log("Calculated icon set width:", width);
      setIconSetWidth(width > 0 ? width : 1024); // Fallback to 1024px if width is invalid
    }
  }, [currentPage, iconSetRef.current]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--color-primary)]" style={{ fontFamily: 'var(--font-orbitron)'}}>
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          pages[currentPage]?.bgColor || "from-[var(--color-primary)] to-[var(--color-secondary)]"
        } transition-all duration-1000`}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--color-text)]/10"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? 20 : -20],
              x: [0, Math.random() > 0.5 ? 20 : -20],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={pages[currentPage]?.id || "fallback"}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl w-full">
            {pages[currentPage]?.id === 2 ? (
              // Experience page with scrollable cards
              <div className="flex flex-col items-center">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-text)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {pages[currentPage].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-[var(--color-accent)] mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {pages[currentPage].description}
                </motion.p>
                <div className="overflow-y-auto max-h-[50vh] w-full custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto overflow-hidden">
                    {pages[currentPage].cards?.map((card, index) => (
                      <motion.div
                        key={index}
                        className="bg-[var(--color-secondary)]/80 p-4 rounded-lg shadow-lg border border-[var(--color-accent)]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
                      >
                        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{card.role}</h3>
                        <p className="text-base text-[var(--color-accent)] mb-1">{card.company}</p>
                        <p className="text-sm text-[var(--color-text)]/70 mb-2">{card.duration}</p>
                        <p className="text-sm text-[var(--color-text)]/90">{card.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ) : pages[currentPage]?.id === 3 ? (
              // Toolkit page with infinite scrolling icons
              <div className="flex flex-col items-center">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-text)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {pages[currentPage].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-[var(--color-accent)] mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {pages[currentPage].description}
                </motion.p>
                <div className="w-full max-w-3xl bg-[var(--color-secondary)]/20 py-10 rounded-lg overflow-hidden">
                  <motion.div
                    ref={iconSetRef}
                    className="flex flex-nowrap"
                    animate={{ x: [0, -iconSetWidth] }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                  >
                    {[...pages[currentPage].icons, ...pages[currentPage].icons].map((icon, index) => (
                      <motion.div
                        key={`${icon.name}-${index}`}
                        className="flex-shrink-0 mx-2"
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      >
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          className="w-15 h-15 md:w-28 md:h-28 object-contain  rounded-lg border border-[var(--color-accent)]"
                          style={{ filter: "grayscale(100%)" }}
                          onError={(e) => {
                            console.error(`Failed to load icon: ${icon.src}`);
                            e.target.src = "https://via.placeholder.com/64";
                          }}
                        />
                        <p className="text-base text-[var(--color-text)] mt-3 text-center">{icon.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            ) : pages[currentPage]?.id === 4 ? (
              // Let's Connect page with download button
              <div className="flex flex-col items-center">
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-text)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {pages[currentPage].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-[var(--color-accent)] mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {pages[currentPage].description}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-[var(--color-text)]/90 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {pages[currentPage].content}
                </motion.p>
                <motion.a
                  href="src\assets\KhuzaimaCv.pdf" // Update with actual CV path or URL
                  download="Khuzaima_CV.pdf"
                  className="inline-block bg-[var(--color-accent)] text-[var(--color-text)] font-semibold py-3 px-6 rounded-lg border border-[var(--color-text)]/30 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--color-text)", color: "var(--color-primary)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
                </motion.a>
              </div>
            ) : (
              // Default layout for other pages
              <>
                {pages[currentPage]?.image && (
                  <motion.img
                    src={pages[currentPage].image}
                    alt="Khuzaima's profile picture"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-[var(--color-accent)] shadow-lg object-cover object-top"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
                    onError={(e) => {
                      console.error("Image failed to load:", pages[currentPage].image);
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                )}
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-4 text-[var(--color-text)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {pages[currentPage]?.title || "Loading..."}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-[var(--color-accent)] mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {pages[currentPage]?.description || ""}
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-[var(--color-text)]/90 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {pages[currentPage]?.content || ""}
                </motion.p>
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {pages.map((_, i) => (
          <button
            key={`indicator-${i}`}
            onClick={() => {
              setCurrentPage(i);
              setLockScroll(i !== pages.length - 1);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentPage
                ? "bg-[var(--color-text)] w-6 scale-110"
                : "bg-[var(--color-text)]/30 hover:bg-[var(--color-text)]/50"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>

      {!scrolling && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[var(--color-text)]/80 text-sm mb-1">
            {currentPage === pages.length - 1 ? "Scroll to continue" : "Scroll to navigate"}
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-text)]/50 flex justify-center p-1">
            <motion.div
              className="w-2 h-2 bg-[var(--color-text)]/80 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}