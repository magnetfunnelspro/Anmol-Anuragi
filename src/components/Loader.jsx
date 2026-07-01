import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] overflow-hidden text-white bg-dark flex items-center justify-center font-[Delight]"
      >
        {/* Ambient Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute w-[700px] h-[700px] rounded-full bg-orange blur-[180px]"
        />

        {/* Spotlight */}
        <motion.div
          initial={{
            x: "-40vw",
            y: "20vh",
          }}
          animate={{
            x: ["-40vw", "15vw", "-5vw"],
            y: ["20vh", "-15vh", "0vh"],
          }}
          transition={{
            duration: 2.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,.18) 0%, rgba(255,255,255,.06) 35%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center">

          {/* Logo */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-orange blur-3xl opacity-30" />

            <div className="relative w-28 h-28 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center">

              <motion.span
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-4xl font-semibold tracking-wider"
              >
                CF
              </motion.span>

            </div>
          </motion.div>

          {/* Brand */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="mt-8 text-3xl font-medium"
          >
            Content Flow Launch
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.6,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-2 text-white/50 tracking-wide"
          >
            Building Personal Brands
          </motion.p>

          {/* Loading Line */}

          <div className="mt-10 w-64 h-[2px] overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "100%",
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-orange to-transparent"
            />

          </div>

        </div>

        {/* Grain */}

        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/noise.png')",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;