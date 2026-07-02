import Lenis from "lenis";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cal from "@calcom/embed-react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "remixicon/fonts/remixicon.css";

// Components
import Counter from "./components/Counter";
import VideoCard from "./components/VideoCard";

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section || !lenisRef.current) return;

    lenisRef.current.scrollTo(section, {
      duration: 1.5,
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const message = `
🆕 New Freebie Download

👤 Name: ${name}
📧 Email: ${email}
`;

    await fetch(
      `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
          text: message,
        }),
      },
    );

    window.open(
      "https://app.notion.com/p/FREE-BIE-38f0621d100e800b91cac6c89707c555",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const [activeVideo, setActiveVideo] = useState(null);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
      });
    })();
  }, []);

  const caseStudies = [
    {
      metric: "200K+",
      label: "Views Generated",
      title: "Personal Brand Growth",
      description:
        "Sagar from Unseen Creates wanted to grow his personal brand and consistently reach more people. We built a strategic content system that helped one of his videos cross 200K+ views within 14 months while creating steady audience growth.",
      client: "Unseen Creates",
      logo: "/brands/unseen-create.jpeg",
    },
    {
      metric: "50+",
      label: "Qualified Leads",
      title: "Client Acquisition System",
      description:
        "Mohit Kumar needed a predictable way to attract high-quality clients. We built a complete personal branding and content system that consistently generates qualified leads, helping him acquire 50+ potential clients.",
      client: "Mohit Kumar",
      logo: "/brands/mohit.webp",
      featured: true,
    },
    {
      metric: "Long-Term",
      label: "Brand Authority",
      title: "Content Engine",
      description:
        "Ash Carrim wanted a long-term content strategy instead of random viral posts. We crafted a repeatable content style aligned with his personality, helping him build authority, attract qualified leads, and create a sustainable content system.",
      client: "Ash Carrim",
      logo: "/brands/ash.jpg",
    },
  ];

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-0 overflow-hidden bg-[#040608]">
        {/* Main Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
        radial-gradient(circle at 18% 20%, rgba(28,179,170,.10), transparent 32%),
        radial-gradient(circle at 82% 18%, rgba(104,215,210,.08), transparent 36%),
        radial-gradient(circle at 50% 82%, rgba(28,179,170,.06), transparent 40%),
        linear-gradient(
          135deg,
          #030506 0%,
          #060B0E 25%,
          #070C10 60%,
          #020304 100%
        )
      `,
          }}
        />

        {/* Left Aurora */}
        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      left-[-260px]
      top-[-220px]
      h-[720px]
      w-[720px]
      rounded-full
      bg-[#1CB3AA]/12
      blur-[240px]
    "
        />

        {/* Right Aurora */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 70, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      absolute
      right-[-260px]
      bottom-[-220px]
      h-[760px]
      w-[760px]
      rounded-full
      bg-[#68D7D2]/10
      blur-[260px]
    "
        />

        {/* Center Ambient Glow */}
        <div
          className="
      absolute
      left-1/2
      top-1/2
      h-[900px]
      w-[900px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#1CB3AA]/4
      blur-[300px]
    "
        />
      </div>

      <div className="w-full h-full text-white bg-dark tracking-wide font-[Delight]">
        {/* Grid */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
        bg-[size:80px_80px]
        opacity-40
        animate-grid"
          />
        </div>

        {/* Hero Section */}
        <section className="w-full min-h-screen flex flex-col overflow-hidden z-50">
          {/* Hero Navbar */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full p-4 px-4 lg:px-24 xl:px-36"
          >
            <nav className="relative mx-auto flex items-center justify-between rounded-xl border border-white/20 bg-white/[0.02] backdrop-blur-xl p-2">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src="/Logo.webp" alt="" className="h-10" />

                <div>
                  <h2 className="text-base font-medium leading-none">
                    Content Flow Launch
                  </h2>
                  <p className="text-xs leanon text-white/40">
                    Content That Converts
                  </p>
                </div>
              </div>

              {/* Nav Links */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden xl:flex items-center gap-8">
                {[
                  {
                    label: "Work",
                    id: "portfolio",
                  },
                  {
                    label: "System",
                    id: "process",
                  },
                  {
                    label: "Deliverables",
                    id: "pricing",
                  },
                  {
                    label: "Testimonials",
                    id: "testimonials",
                  },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative text-white/80 hover:text-white transition-all duration-300"
                  >
                    {item.label}

                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-prime transition-all duration-300 group-hover:w-6" />
                  </button>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToSection("book-a-call")}
                className="p-2 px-3.5 rounded-lg text-white bg-prime/85"
              >
                Book a Call
              </button>
            </nav>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="w-full max-w-7xl mx-auto px-4 lg:px-24 xl:px-36 flex-1 flex flex-col items-center justify-center gap-6 relative"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                boxShadow: "0_15px_80px_rgba(28,175,170,0.08)",
              }}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>
              <span className="text-prime font-medium">
                Content Specialists
              </span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Organic
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Leads Acquisition
              </span>
              Made Simple
            </motion.h2>

            {/* Sub Heading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl px-4 text-center text-white/80 text-base lg:text-lg leading-relaxed"
            >
              We help founders, coaches and businesses turn social media
              attention into leads, booked meetings and recurring revenue.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex gap-6">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="p-4 px-6 rounded-lg text-white bg-prime/85"
              >
                Our Work
              </button>

              <button
                onClick={() => scrollToSection("book-a-call")}
                className="p-4 px-6 rounded-lg border border-white/15 bg-white/5 backdrop-blur-md"
              >
                Book a Call
              </button>
            </motion.div>

            {/* Trust */}
            <motion.div
              variants={fadeUp}
              className="mt-6 text-sm flex items-center gap-[4px] text-white/60"
            >
              <span>Built over</span>{" "}
              <span className="text-accent font-medium">
                20+ Unique Brand Identities
              </span>
            </motion.div>

            {/* Stats */}
            <div className="w-full rounded-xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-sm">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="flex gap-6"
              >
                {[
                  {
                    value: 20,
                    suffix: "+",
                    label: "Brands Served",
                  },
                  {
                    value: 300,
                    suffix: "M+",
                    label: "Views Generated",
                  },
                  {
                    value: 4,
                    suffix: "+",
                    label: "Years Experience",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                        },
                      },
                    }}
                    className="w-full text-center"
                  >
                    <motion.h4
                      initial={{ scale: 0.8 }}
                      animate={{
                        scale: [0.8, 1.1, 1],
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="text-2xl font-medium text-prime"
                    >
                      <Counter end={item.value} suffix={item.suffix} />
                    </motion.h4>

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.5,
                      }}
                      className="text-white/60"
                    >
                      {item.label}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* VSL Section */}
        <section className="w-full p-8 px-4 lg:px-24 xl:px-36 z-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">How It Works</span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Process Behind{" "}
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Client Acquisition System
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="max-w-3xl text-center text-white/75 z-50"
            >
              In this quick video, discover how we help founders, coaches and
              businesses turn content into a scalable client acquisition system.
            </motion.p>

            {/* Video */}
            <motion.div
              variants={fadeUp}
              className="relative mt-6 w-full overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_15px_80px_rgba(28,179,170,0.08)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-prime/5 via-transparent to-transparent" />

              {/* Video Thumbnail */}
              <VideoCard
                thumbnail="/thumbnails/vsl.webp"
                youtubeId="9hpFGAexXJ4"
                videoType="horizontal"
                title="How It Works"
                className="aspect-video"
                setActiveVideo={setActiveVideo}
              />
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={fadeUp}
              className="grid w-full gap-4 md:grid-cols-3 mt-4"
            >
              {[
                {
                  icon: "ri-user-search-line",
                  title: "Attract Qualified Leads",
                  desc: "Stop chasing clients and start attracting them.",
                },
                {
                  icon: "ri-building-line",
                  title: "Build Authority",
                  desc: "Position yourself as the obvious choice.",
                },
                {
                  icon: "ri-line-chart-line",
                  title: "Scale Consistently",
                  desc: "Create a repeatable growth system.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-2xl border border-white/20 bg-white/[0.05] p-6 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-prime">
                    <i className={`${item.icon} text-xl text-white`} />
                  </div>

                  <h4 className="mt-4 text-lg font-medium">{item.title}</h4>

                  <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50 relative"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">Portfolio Showcase</span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Content That
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Delivers Results
              </span>
            </motion.h2>

            {/* Sub Heading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-center text-white/80 z-50"
            >
              Each piece of content is crafted with one goal: helping the
              coaches, consultants and brands get more reach, leads, and
              conversions.
            </motion.p>

            {/* Videos */}
            <motion.div
              variants={fadeUp}
              className="mt-6 w-full flex flex-col gap-6"
            >
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
                <VideoCard
                  title="Portfolio Showcase"
                  thumbnail="/thumbnails/short1.webp"
                  youtubeId="oRpC83TP5Sw"
                  videoType="vertical"
                  className="aspect-[9/16]"
                  setActiveVideo={setActiveVideo}
                />

                <VideoCard
                  title="Portfolio Showcase"
                  thumbnail="/thumbnails/short2.webp"
                  youtubeId="Lzo4CtLHM2k"
                  videoType="vertical"
                  className="aspect-[9/16]"
                  setActiveVideo={setActiveVideo}
                />

                <VideoCard
                  title="Portfolio Showcase"
                  thumbnail="/thumbnails/short3.webp"
                  youtubeId="rPzI6U87zbs"
                  videoType="vertical"
                  className="aspect-[9/16]"
                  setActiveVideo={setActiveVideo}
                />

                <VideoCard
                  title="Portfolio Showcase"
                  thumbnail="/thumbnails/short4.webp"
                  youtubeId="ItjMSyJrqmo"
                  videoType="vertical"
                  className="aspect-[9/16]"
                  setActiveVideo={setActiveVideo}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">Behind The Scenes</span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Simple Process.
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Powerful Results.
              </span>
            </motion.h2>

            {/* Sub Heading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-center text-white/80 z-50"
            >
              From strategy to final delivery, every step is designed to
              maximize content quality and business growth.
            </motion.p>

            {/* Process Cards */}
            <div className="relative mt-10 w-full">
              {/* Center Line */}
              <div className="absolute left-1/2 top-0 hidden lg:block h-full w-px bg-gradient-to-b from-prime/50 via-prime/20 to-transparent -translate-x-1/2" />

              <div className="flex flex-col gap-8 lg:gap-16">
                {[
                  {
                    number: "01",
                    title: "Onboarding Call",
                    description:
                      "We identify your offer, audience, and market positioning to create a content strategy that attracts the right people.",
                    process: ["ICP clarity", "Offers", "Value ladder"],
                  },
                  {
                    number: "02",
                    title: "Content Production",
                    description:
                      "Our team transforms your ideas into high-converting content designed to build authority and capture attention.",
                    process: [
                      "Optimization",
                      "Strategic Formatting",
                      "Branding",
                      "Scripting",
                      "Editing",
                      "Posting",
                    ],
                  },
                  {
                    number: "03",
                    title: "Client Acquisition",
                    description:
                      "We build the systems, funnels, and lead capture mechanisms that turn viewers into qualified prospects.",
                    process: [
                      "Landing Page",
                      "Lead Magnet",
                      "CRM",
                      "DM Automation",
                      "Call Booking",
                    ],
                  },
                  {
                    number: "04",
                    title: "Optimize & Scale",
                    description:
                      "Using performance data, we refine your content and pipeline to generate more leads, meetings, and revenue consistently.",
                    process: [
                      "Analytics",
                      "Optimization",
                      "Growth Report",
                      "Scaling",
                    ],
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    whileHover={{
                      y: -5,
                    }}
                    className={`flex ${
                      index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <div className="w-full lg:w-[48%]">
                      <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6">
                        {/* Number Glow */}
                        <div className="absolute top-0 right-0 text-[120px] leading-none font-bold text-prime/15 select-none">
                          {step.number}
                        </div>

                        {/* Number Badge */}
                        <div className="mb-4 flex items-center gap-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-prime text-white font-medium shadow-[0_15px_80px_rgba(28,179,170,0.08)]">
                            {step.number}
                          </div>

                          <div className="h-px flex-1 bg-gradient-to-r from-prime/50 to-transparent" />
                        </div>

                        <h4 className="text-2xl font-medium">{step.title}</h4>

                        <p className="mt-2 text-white/80 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Process Flow */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {step.process.map((item, i) => (
                            <React.Fragment key={item}>
                              <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-4 p-2 text-sm text-white/60">
                                {item}
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">Our Deliverables</span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Choose The Right
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Engagement Model
              </span>
            </motion.h2>

            {/* Sub Heading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-center text-white/80 z-50"
            >
              Every business is different. We tailor our approach based on your
              current stage, growth goals, and the level of support you need.
            </motion.p>

            {/* Pricing Cards */}
            <div className="mt-6 grid w-full gap-6 lg:grid-cols-3">
              {/* Basic */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
              >
                <h4 className="text-2xl font-medium">Basic</h4>

                <div className="mt-4">
                  <span className="text-3xl font-medium">
                    Build Your Brand Foundation
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Unique Video Branding",
                    "Profile Optimization",
                    "Content Formatting",
                    "Funnel Setup",
                    "World-Class Editing",
                    "Dedicated Social Media Manager",
                    "24/7 Chat Support",
                    "Monthly Growth Reports",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <i className="ri-check-line text-prime text-xl" />

                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm text-white/60">
                  Perfect for coaches & consultants looking to build authority
                  and convert more clients.
                </p>

                <button
                  onClick={() => scrollToSection("book-a-call")}
                  className="mt-8 w-full rounded-lg border border-white/20 bg-white/5 p-4"
                >
                  Book a Call
                </button>
              </motion.div>

              {/* Growth */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="relative rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
              >
                {/* Popular Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-prime p-1.5 px-4 text-sm">
                  Most Popular
                </div>

                <h4 className="text-2xl font-medium">Growth</h4>

                <div className="mt-4">
                  <span className="text-3xl font-medium text-prime">
                    Complete Client Acquisition
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Everything in Basic",
                    "Organic & Inorganic Lead Generation",
                    "Advance Funnel Setup",
                    "AI Call Booking Assistant",
                    "Personalized Growth Strategy",
                    "Personal Branding",
                    "DM Conversion Engine",
                    "Weekly Strategy Calls",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <i className="ri-check-line text-prime text-xl" />

                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm text-white/60">
                  Built for consultants who want predictable, qualified leads
                  and growth on autopilot.
                </p>

                <button
                  onClick={() => scrollToSection("book-a-call")}
                  className="mt-8 w-full rounded-lg bg-prime/85 p-4 text-white"
                >
                  Book a Call
                </button>
              </motion.div>

              {/* Custom */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
              >
                <h4 className="text-2xl font-medium">Custom</h4>

                <div className="mt-4">
                  <span className="text-3xl font-medium">
                    Need Something Unique?
                  </span>
                </div>

                <p className="mt-6 text-white/80">
                  Get a fully customized content and growth system tailored
                  specifically to your business.
                </p>

                <div className="mt-8 rounded-xl border border-white/20 bg-white/[0.02] p-6">
                  <div className="flex items-start gap-2">
                    <i className="ri-star-fill text-prime" />
                    <span>Custom Content Strategy</span>
                  </div>

                  <div className="mt-4 flex items-start gap-2">
                    <i className="ri-star-fill text-prime" />
                    <span>Dedicated Team</span>
                  </div>

                  <div className="mt-4 flex items-start gap-2">
                    <i className="ri-star-fill text-prime" />
                    <span>Custom Automation Systems</span>
                  </div>
                </div>

                <button
                  onClick={() => scrollToSection("book-a-call")}
                  className="mt-8 w-full rounded-lg bg-prime/85 p-4 text-white"
                >
                  Book a Call
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Lead Magnet */}
        <section className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">Free Resource</span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Steal Our
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Content Growth Blueprint
              </span>
            </motion.h2>

            {/* Sub Heading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-center text-white/80 z-50"
            >
              Get the exact framework we use to help creators, coaches, and
              consultants generate attention, authority, and qualified leads
              through content.
            </motion.p>

            {/* Main Card */}
            <motion.div
              variants={fadeUp}
              className="relative mt-6 w-full max-w-6xl overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl"
            >
              <div className="relative grid gap-10 p-6 lg:grid-cols-2 lg:p-12">
                {/* Left */}
                <div className="flex flex-col justify-center">
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-prime/20 bg-prime/10 p-2 px-4 text-sm text-prime">
                    <i className="ri-download-cloud-line"></i>
                    Free Notion Template
                  </div>

                  <h4 className="text-3xl font-medium">What's Inside?</h4>

                  <p className="mt-4 text-white/80">
                    Access the exact resources our team uses to build premium
                    personal brands and create content that attracts qualified
                    clients.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "3 Scripting Formats & Templates",
                      "Creative Direction Deck",
                      "Build Your Unique Content Style",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <i className="ri-check-line text-prime text-xl"></i>

                        <span className="text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-center">
                  <div className="rounded-xl border border-white/20 bg-black/20 p-6 backdrop-blur-xl">
                    <h4 className="text-xl font-medium">Download Free Guide</h4>

                    <p className="mt-2 text-sm text-white/60">
                      Enter your email and get instant access.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 flex flex-col gap-4"
                    >
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="rounded-xl border border-white/15 bg-white/[0.04] p-4 outline-none"
                      />

                      <input
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="rounded-xl border border-white/15 bg-white/[0.04] p-4 outline-none"
                      />

                      <button
                        type="submit"
                        className="rounded-xl p-4 font-medium text-white bg-prime/85"
                      >
                        Get Instant Access
                      </button>
                    </form>

                    <p className="mt-4 text-center text-xs text-white/40">
                      Secure. No Spam. Instant Access.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">
                Client Testimonials
              </span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Don't Take
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Our Word For It
              </span>
            </motion.h2>

            {/* Sub Heading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-center text-white/80 z-50"
            >
              Real results from businesses, coaches, and consultants who trusted
              us to transform their content.
            </motion.p>

            {/* Testimonials */}
            <motion.div
              variants={fadeUp}
              className="mt-8 w-full flex flex-col gap-6"
            >
              {/* Featured Testimonial */}
              <div className="grid">
                <VideoCard
                  title="Client Testimonial"
                  thumbnail="/thumbnails/testimonial.webp"
                  youtubeId="voxCsKAK2Eo"
                  videoType="horizontal"
                  className="aspect-video"
                  setActiveVideo={setActiveVideo}
                />

                <div className="mt-4 text-center z-50">
                  <h4 className="font-medium">Ash Carrim</h4>

                  <p className="text-sm text-white/60">Growth Strategist</p>
                </div>
              </div>

              {/* Brands We've Built */}
              <motion.div variants={fadeUp} className="mt-6 w-full z-50">
                <div className="text-center">
                  <h4 className="text-2xl font-medium">
                    Brands We've Helped
                    <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                      Build & Scale
                    </span>
                  </h4>

                  <p className="mt-2 text-white/60">
                    Personal brands engineered for authority, visibility and
                    lead generation.
                  </p>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-3">
                  {[
                    {
                      best: "28.6K+ followers",
                      thumbnail: "/brands/anmol.jpg",
                      username: "anmol_type",
                      niche: "Creative Content",
                      metric: "Personal Branding",
                    },
                    {
                      best: "18.9K+ followers",
                      thumbnail: "/brands/creative-dood.jpg",
                      username: "creative_dood11",
                      niche: "Creative Content",
                      metric: "Client Acquisition",
                    },
                    {
                      best: "280+ qualified leads",
                      thumbnail: "/brands/ash.jpg",
                      username: "ashcarrim",
                      niche: "Business & Marketing",
                      metric: "Lead Generation",
                    },
                  ].map((brand) => (
                    <motion.div
                      key={brand.username}
                      className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl"
                    >
                      {/* Glow */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-prime/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                      {/* Thumbnail */}
                      <div className="relative overflow-hidden">
                        <img
                          src={brand.thumbnail}
                          alt={brand.username}
                          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        {/* Badge */}
                        <div className="absolute top-4 left-4 p-0.5 px-2.5 pb-1.5 tracking-wider rounded-lg border border-white/20 bg-black/40 backdrop-blur-md">
                          <span className="text-xs text-white">
                            {brand.best}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-xl font-medium">
                              @{brand.username}
                            </h4>
                            <p className="mt-0.5 text-sm text-white/60">
                              {brand.niche}
                            </p>
                          </div>

                          <a
                            href={`https://www.instagram.com/${brand.username}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 px-3.5 rounded-lg text-xl text-white bg-prime/85 z-50"
                          >
                            <i className="ri-arrow-right-up-line" />
                          </a>
                        </div>

                        {/* Divider */}
                        <div className="m-4 mx-0 h-px bg-white/5" />

                        {/* Metric */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Focus</span>

                          <span className="text-prime font-medium">
                            {brand.metric}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Text Testimonials */}
            <div className="mt-8 grid w-full gap-6 lg:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
              >
                <div className="flex gap-0.5 text-prime text-lg">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill" />
                  ))}
                </div>

                <p className="mt-4 text-white/80 leading-relaxed">
                  "Working with Anmol has been an excellent experience.
                  Communication was smooth, the process was professional, and
                  I'm excited to continue working together. Looking forward to
                  creating great content together!"
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-prime/40 bg-prime/15 text-lg font-medium text-prime">
                    C
                  </div>

                  <div>
                    <h4 className="font-medium">Chinmay</h4>

                    <p className="text-sm text-white/60">Verified Client</p>
                  </div>
                </div>
              </motion.div>

              {/* Featured Testimonial */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="relative rounded-xl border border-prime/25 bg-white/[0.05] backdrop-blur-xl p-6"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-prime px-4 py-1 text-sm">
                  Featured
                </div>

                <div className="flex gap-0.5 text-prime text-lg">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill" />
                  ))}
                </div>

                <p className="mt-4 text-white/80 leading-relaxed">
                  "Working with Anmol was a great experience. The final edit
                  exceeded my expectations and the quality was outstanding. He
                  understood exactly what I wanted, delivered on time, and the
                  result was excellent. Highly recommended!"
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-prime/40 bg-prime/15 text-lg font-medium text-prime">
                    J
                  </div>

                  <div>
                    <h4 className="font-medium">Joey Colangelo</h4>

                    <p className="text-sm text-white/60">Trusted Client</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
              >
                <div className="flex gap-1 text-prime text-lg">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill" />
                  ))}
                </div>

                <p className="mt-4 text-white/80 leading-relaxed">
                  "Really happy with how the video turned out. Thanks bro,
                  appreciate it!"
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-prime/40 bg-prime/15 text-lg font-medium text-prime">
                    I
                  </div>

                  <div>
                    <h4 className="font-medium">Ishaan</h4>

                    <p className="text-sm text-white/60">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Case Studies */}
            <div className="grid gap-6 lg:grid-cols-3 mt-8">
              {caseStudies.map((study) => (
                <motion.div
                  key={study.title}
                  className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all ${
                    study.featured
                      ? "border-prime/40 bg-white/[0.06]"
                      : "border-white/15 bg-white/[0.04]"
                  }`}
                >
                  {/* Metric */}
                  <div className="inline-flex rounded-full border border-prime/30 bg-prime/10 px-4 p-2 text-xs uppercase tracking-[0.2em] text-prime">
                    {study.metric} {study.label}
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-white/75">
                    {study.description}
                  </p>

                  <div className="mt-10 flex items-center gap-4">
                    <img
                      src={study.logo}
                      className="h-10 w-10 rounded-full object-cover border border-white/10"
                    />

                    <div>
                      <h4 className="font-medium">{study.client}</h4>

                      <p className="text-sm text-white/50">{study.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof Stats */}
            <div className="mt-10 grid w-full gap-6 md:grid-cols-3">
              {[
                ["50+", "High-Ticket Conversion"],
                ["300M+", "Views Generated"],
                ["98%", "Client Retention"],
              ].map(([value, label]) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="relative overflow-hidden text-center rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
                >
                  <h4 className="text-3xl font-medium text-prime">{value}</h4>

                  <p className="mt-2 text-white/60">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Founder Note */}
        <section className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">Founder Note</span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              A Personal Message
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                From The Founder
              </span>
            </motion.h2>

            {/* Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="relative mt-6 w-full max-w-6xl overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl"
            >
              {/* Glow */}
              <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-prime/10 blur-[120px]" />

              <div className="relative grid gap-10 p-8 lg:grid-cols-[320px_1fr] lg:p-12">
                {/* Founding Team */}
                <div className="flex justify-center">
                  <div className="w-full max-w-[380px]">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          image: "/brands/anmol.webp",
                          name: "Anmol Anuragi",
                          role: "Founder",
                        },
                        {
                          image: "/brands/mohit.webp",
                          name: "Mohit Kumar",
                          role: "Co-Founder",
                        },
                      ].map((member) => (
                        <div key={member.name} className="group">
                          <div className="relative overflow-hidden rounded-xl border border-white/20">
                            <div className="absolute inset-0 bg-prime/20 blur-2xl" />

                            <img
                              src={member.image}
                              alt={member.name}
                              className="relative aspect-square w-full object-cover"
                            />
                          </div>

                          <div className="mt-2 text-center">
                            <h4 className="text-sm font-medium">
                              {member.name}
                            </h4>

                            <p className="text-xs text-white/60">
                              {member.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-white/20 bg-white/[0.05] p-4 text-center">
                      <p className="text-sm text-white/60">Founding Team</p>

                      <p className="font-medium text-prime">
                        Content Flow Launch
                      </p>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="flex flex-col">
                  <i className="ri-double-quotes-l text-5xl text-prime/60" />

                  <p className="mt-2 text-lg leading-relaxed text-white/80">
                    Most businesses don't have a client problem—they have a
                    positioning problem. When people don't know, trust, or
                    remember your brand, opportunities are lost.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-white/80">
                    That's why we built Content Flow Launch. We help founders,
                    coaches, consultants, and service businesses build authority
                    through personal branding and client acquisition systems
                    that consistently attract qualified leads.
                  </p>

                  <p className="mt-4 text-lg leading-relaxed text-white/80">
                    Every brand we work with is treated like our own. We focus
                    on strategy, execution, and measurable results—because your
                    growth is our success.
                  </p>

                  {/* Signature */}
                  <div className="mt-8">
                    <h4 className="text-xl font-medium">Anmol & Mohit</h4>

                    <p className="text-white/60">Content Flow Launch</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Book a Call */}
        <section
          id="book-a-call"
          className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <button
                data-cal-link="suraj.1cr/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                className="text-prime font-medium"
              >
                Book a Strategy Call
              </button>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Let's Discuss
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Your Content Goals
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-center text-white/80 z-50"
            >
              Get a personalized content growth strategy, actionable
              recommendations, and a clear roadmap tailored to your business.
            </motion.p>

            {/* Main Card */}
            <motion.div
              variants={fadeUp}
              className="relative mt-6 w-full overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_15px_80px_rgba(28,179,170,0.08)]"
            >
              <div className="relative grid gap-10 p-6 lg:grid-cols-[400px_1fr] lg:p-10">
                <div className="flex flex-col justify-center">
                  <div className="w-fit p-2 px-4 rounded-full border border-prime/40 bg-prime/15 text-prime text-sm">
                    Free Consultation
                  </div>

                  <h4 className="mt-4 text-4xl font-medium leading-tight">
                    Let's Build Your
                    <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                      Predictable Sales Pipeline
                    </span>
                  </h4>

                  <p className="mt-4 text-white/80 leading-relaxed">
                    In just 30 minutes, we'll identify what's holding your
                    content back and create a personalized growth roadmap for
                    your brand.
                  </p>

                  <div className="mt-6 grid gap-4">
                    {[
                      {
                        icon: "ri-line-chart-line",
                        title: "Growth Audit",
                        desc: "Discover hidden growth opportunities.",
                      },
                      {
                        icon: "ri-user-star-line",
                        title: "Brand Positioning",
                        desc: "Stand out from competitors.",
                      },
                      {
                        icon: "ri-rocket-line",
                        title: "Action Plan",
                        desc: "Get a clear roadmap to scale.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/20 bg-white/[0.05] p-4 backdrop-blur-sm"
                      >
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-xl bg-prime flex items-center justify-center">
                            <i className={`${item.icon} text-xl text-white`} />
                          </div>

                          <div>
                            <h4 className="font-medium">{item.title}</h4>

                            <p className="mt-1 text-sm text-white/60">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-prime/40 bg-prime/15 p-4">
                    <div className="flex items-center gap-3">
                      <i className="ri-time-line text-prime text-xl" />
                      <span className="font-medium">
                        30 Minute Strategy Session
                      </span>
                    </div>

                    <p className="mt-2 text-white/60 text-sm">
                      No sales pressure. Just actionable advice and a
                      personalized roadmap for your content growth.
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="relative flex flex-col justify-center rounded-xl border border-white/20 bg-white/[0.05] p-6 backdrop-blur-xl">
                  <div className="absolute top-0 right-0 h-40 w-40 bg-prime/10 blur-[100px]" />

                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <img
                        src="/brands/anmol.webp"
                        alt=""
                        className="h-16 w-16 rounded-xl object-cover border border-white/20"
                      />

                      <div>
                        <h4 className="font-medium text-lg">Anmol Anuragi</h4>

                        <p className="text-white/60 text-sm">
                          Founder, Content Flow Launch
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 rounded-xl border border-white/20 bg-black/20">
                      <div className="flex items-center justify-between">
                        <span className="text-white/60">Duration</span>

                        <span>30 Minutes</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-white/60">Cost</span>

                        <span className="text-prime">Free</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-white/60">Format</span>

                        <span>Google Meet</span>
                      </div>
                    </div>

                    <button
                      data-cal-link="anmol-type-business-grmo2i/discover-call"
                      data-cal-config='{"theme":"dark"}'
                      className="group mt-8 w-full rounded-xl p-4 text-lg font-medium text-white bg-prime"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Schedule a Free Call
                        <i className="ri-arrow-right-line " />
                      </span>
                    </button>

                    <p className="mt-4 text-center text-sm text-white/40">
                      Typically responds within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="w-full p-12 px-4 lg:px-24 xl:px-36 z-50"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.h4
              variants={fadeUp}
              className="p-2 px-4 rounded-full border-2 border-prime flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_15px_80px_rgba(28,179,170,0.08)] z-50"
            >
              <div className="relative flex items-center">
                <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-prime"></div>
              </div>

              <span className="text-prime font-medium">Contact Us</span>
            </motion.h4>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl z-50"
            >
              Let's Build Something
              <span className="block bg-gradient-to-r from-prime to-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-center text-white/80 z-50"
            >
              Have a question, project idea, or just want to explore how we can
              help? We'd love to hear from you.
            </motion.p>

            {/* Contact Card */}
            <motion.div
              variants={fadeUp}
              className="relative mt-6 w-full max-w-5xl overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl"
            >
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-prime/10 blur-[180px]" />

              <div className="relative grid gap-6 p-6 md:grid-cols-3 lg:p-8">
                {/* Email */}
                <a
                  href="mailto:anmoltypebusiness@gmail.com"
                  className="rounded-xl border border-white/20 bg-white/[0.05] p-6 transition-all duration-200 hover:border-prime/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-prime">
                    <i className="ri-mail-line text-2xl text-white"></i>
                  </div>

                  <h4 className="mt-4 text-xl font-medium">Email</h4>

                  <p className="mt-2 text-white/60">
                    anmoltypebusiness@gmail.com
                  </p>
                </a>

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/anmol-anuragi-074821368/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/20 bg-white/[0.05] p-6 transition-all duration-200 hover:border-prime/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-prime">
                    <i className="ri-linkedin-fill text-2xl text-white"></i>
                  </div>

                  <h4 className="mt-4 text-xl font-medium">Linkedin</h4>

                  <p className="mt-2 text-white/60">
                    Quick responses & support
                  </p>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/contentflowlaunch"
                  className="rounded-xl border border-white/20 bg-white/[0.05] p-6 transition-all duration-200 hover:border-prime/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-prime">
                    <i className="ri-instagram-line text-2xl text-white"></i>
                  </div>

                  <h4 className="mt-4 text-xl font-medium">Instagram</h4>

                  <p className="mt-2 text-white/60">Follow our journey</p>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-6 px-4 lg:px-24 xl:px-36 pb-8 relative z-50">
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between z-50">
              {/* Logo */}
              <div>
                <div className="flex items-center gap-3">
                  <img src="/Logo.webp" alt="" className="h-12" />

                  <div>
                    <h4 className="text-lg font-medium">Content Flow Launch</h4>

                    <p className="text-sm text-white/60">
                      Content That Converts
                    </p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-6 text-white/60">
                <a
                  onClick={() => scrollToSection("portfolio")}
                  className="cursor-pointer"
                >
                  Work
                </a>
                <a
                  onClick={() => scrollToSection("process")}
                  className="cursor-pointer"
                >
                  System
                </a>
                <a
                  onClick={() => scrollToSection("pricing")}
                  className="cursor-pointer"
                >
                  Deliverables
                </a>
                <a
                  onClick={() => scrollToSection("testimonials")}
                  className="cursor-pointer"
                >
                  Testimonials
                </a>
                <a
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer"
                >
                  Contact
                </a>
              </div>

              {/* Socials */}
              <div className="flex items-center justify-center gap-3">
                {[
                  {
                    icon: "ri-instagram-line",
                    link: "https://instagram.com/contentflowlaunch",
                  },
                  {
                    icon: "ri-linkedin-line",
                    link: "https://www.linkedin.com/in/anmol-anuragi-074821368/",
                  },
                  {
                    icon: "ri-youtube-line",
                    link: "https://www.youtube.com/channel/UCIW7gdmrMpP3VOCXwuZFbng",
                  },
                ].map((item) => (
                  <a
                    key={item.icon}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-prime hover:bg-prime hover:text-white"
                  >
                    <i className={item.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 border-t border-white/20 pt-6 text-sm text-center text-white/40 ">
              <p>
                Built & Designed for performance{" "}
                <a
                  href="https://instagram.com/magnetfunnelspro/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60"
                >
                  @magnetfunnelspro
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* Video Showcase */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 fixed inset-0 flex items-center justify-center z-[100]"
              onClick={() => setActiveVideo(null)}
            >
              {/* Background */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

              <motion.div
                layout
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={(e) => e.stopPropagation()}
                className={`relative z-10 overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_0_25px_rgba(234,109,53,0.15)]
          ${
            activeVideo?.type === "vertical"
              ? "w-[90vw] max-w-[420px] aspect-[9/16]"
              : "w-full max-w-6xl aspect-video"
          }
        `}
              >
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-0 px-4 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="relative flex items-center">
                      <div className="absolute w-2 h-2 rounded-full bg-prime animate-ping"></div>
                      <div className="w-2 h-2 rounded-full bg-prime"></div>
                    </div>

                    <span className="text-sm text-white/80">
                      {activeVideo?.title}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveVideo(null)}
                    className="mt-4 p-1.5 px-2.5 rounded-full border border-white/20 bg-white/5 text-white transition-all duration-500 hover:bg-prime hover:border-prime"
                  >
                    <i className="ri-close-line text-xl" />
                  </button>
                </div>

                {/* Video */}
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                  title="Portfolio Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
