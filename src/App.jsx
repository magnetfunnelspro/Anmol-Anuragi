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

  return (
    <div className="w-full h-full text-white bg-dark tracking-wide font-[Delight]">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col overflow-hidden">
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
              <div className="p-1.5 px-2 rounded-xl bg-orange text-white font-medium">
                CF
              </div>

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
                  label: "Portfolio",
                  id: "portfolio",
                },
                {
                  label: "Process",
                  id: "process",
                },
                {
                  label: "Pricing",
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

                  <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-orange transition-all duration-300 group-hover:w-6" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollToSection("book-a-call")}
              className="p-2.5 px-4 rounded-xl text-white bg-orange z-10"
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
              boxShadow: "0 0 25px rgba(234,109,53,0.35)",
            }}
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>
            <span className="text-orange font-medium">Content Specialists</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            A Predictable{" "}
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Sales Pipeline
            </span>{" "}
            Through Content
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl px-4 text-center text-white/80 text-base lg:text-lg leading-relaxed"
          >
            We help founders, coaches and businesses turn social media attention
            into leads, booked meetings and recurring revenue.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex gap-6">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="p-4 px-6 rounded-xl text-white bg-orange"
            >
              View Portfolio
            </button>

            <button
              onClick={() => scrollToSection("book-a-call")}
              className="p-4 px-6 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md"
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
            <span className="text-lightOrange font-medium">
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
                  value: 100,
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
                    className="text-2xl font-medium text-orange"
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
      <section className="w-full p-8 px-4 lg:px-24 xl:px-36">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">How It Works</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Process Behind
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Predictable Sales Pipeline
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-center text-white/75"
          >
            In this quick video, discover how we help founders, coaches and
            businesses turn content into a scalable client acquisition system.
          </motion.p>

          {/* Video */}
          <motion.div
            variants={fadeUp}
            className="relative mt-6 w-full overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_0_25px_rgba(235,110,55,0.08)]"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange/5 via-transparent to-transparent" />

            {/* Video Thumbnail */}
            <VideoCard
              thumbnail="/vsl-thumbnail.webp"
              youtubeId="YOUR_VSL_VIDEO_ID"
              videoType="horizontal"
              title="How It Works"
              className="aspect-video"
              setActiveVideo={setActiveVideo}
            />

            {/* Duration */}
            <div className="absolute bottom-6 right-4 rounded-full border border-white/20 bg-black/50 backdrop-blur-md p-2 px-4">
              <span className="text-sm text-white">5 Min Watch</span>
            </div>
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
                className="rounded-2xl border border-white/20 bg-white/[0.05] p-5 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange">
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
        className="w-full p-12 px-4 lg:px-24 xl:px-36 relative"
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Portfolio Showcase</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Content That
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Delivers Results
            </span>
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-white/80"
          >
            Each piece of content is crafted with one goal: helping the creators
            and brands get more reach, engagement, and conversions.
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
                youtubeId="YzyCJB3riFk"
                videoType="vertical"
                className="aspect-[9/16]"
                setActiveVideo={setActiveVideo}
              />

              <VideoCard
                title="Portfolio Showcase"
                thumbnail="/thumbnails/short2.webp"
                youtubeId="YzyCJB3riFk"
                videoType="vertical"
                className="aspect-[9/16]"
                setActiveVideo={setActiveVideo}
              />

              <VideoCard
                title="Portfolio Showcase"
                thumbnail="/thumbnails/short3.webp"
                youtubeId="YzyCJB3riFk"
                videoType="vertical"
                className="aspect-[9/16]"
                setActiveVideo={setActiveVideo}
              />

              <VideoCard
                title="Portfolio Showcase"
                thumbnail="/thumbnails/short4.webp"
                youtubeId="YzyCJB3riFk"
                videoType="vertical"
                className="aspect-[9/16]"
                setActiveVideo={setActiveVideo}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Process */}
      <section id="process" className="w-full p-12 px-4 lg:px-24 xl:px-36">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Behind The Scenes</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Simple Process.
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Powerful Results.
            </span>
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-white/80"
          >
            From strategy to final delivery, every step is designed to maximize
            content quality and business growth.
          </motion.p>

          {/* Process Cards */}
          <div className="relative mt-10 w-full">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 hidden lg:block h-full w-px bg-gradient-to-b from-orange/50 via-orange/20 to-transparent -translate-x-1/2" />

            <div className="flex flex-col gap-8 lg:gap-16">
              {[
                {
                  number: "01",
                  title: "Strategy & Positioning",
                  description:
                    "We identify your offer, audience, and market positioning to create a content strategy that attracts the right people.",
                },
                {
                  number: "02",
                  title: "Content Production",
                  description:
                    "Our team transforms your ideas into high-converting content designed to build authority and capture attention.",
                },
                {
                  number: "03",
                  title: "Sales Pipeline Setup",
                  description:
                    "We build the systems, funnels, and lead capture mechanisms that turn viewers into qualified prospects.",
                },
                {
                  number: "04",
                  title: "Optimize & Scale",
                  description:
                    "Using performance data, we refine your content and pipeline to generate more leads, meetings, and revenue consistently.",
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
                    <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(235,110,55,0.08)]">
                      {/* Number Glow */}
                      <div className="absolute top-0 right-0 text-[120px] leading-none font-bold text-orange/15 select-none">
                        {step.number}
                      </div>

                      {/* Number Badge */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white font-medium shadow-[0_0_25px_rgba(234,109,53,0.3)]">
                          {step.number}
                        </div>

                        <div className="h-px flex-1 bg-gradient-to-r from-orange/50 to-transparent" />
                      </div>

                      <h4 className="text-2xl font-medium">{step.title}</h4>

                      <p className="mt-3 text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full p-12 px-4 lg:px-24 xl:px-36">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Pricing & Plans</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            The Plans That
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Speed Up Growth
            </span>
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-white/80"
          >
            Whether you're building authority, generating leads, or scaling your
            entire content ecosystem, we have a solution for you.
          </motion.p>

          {/* Pricing Cards */}
          <div className="mt-6 grid w-full gap-6 lg:grid-cols-3">
            {/* Basic */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-8"
            >
              <h4 className="text-2xl font-medium">Basic</h4>

              <div className="mt-4">
                <span className="text-5xl font-medium">$1499</span>

                <span className="text-white/60">/month</span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Unique Video Branding",
                  "Profile Optimization",
                  "Content Formatting",
                  "World-Class Editing",
                  "Dedicated Social Media Manager",
                  "24/7 Chat Support",
                  "Monthly Growth Reports",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <i className="ri-check-line text-orange text-xl" />

                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-white/60">
                Perfect for coaches & consultants looking to build authority and
                convert more clients.
              </p>

              <button
                onClick={() => scrollToSection("book-call")}
                className="mt-8 w-full rounded-xl border border-white/20 bg-white/5 p-4"
              >
                Get Started
              </button>
            </motion.div>

            {/* Growth */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="relative rounded-xl border border-orange/40 bg-white/[0.05] backdrop-blur-xl p-8 shadow-[0_0_45px_rgba(234,109,53,0.15)]"
            >
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-sm">
                Most Popular
              </div>

              <h4 className="text-2xl font-medium">Growth</h4>

              <div className="mt-4">
                <span className="text-5xl font-medium text-orange">$2999</span>

                <span className="text-white/60">/month</span>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  "Everything in Basic",
                  "Organic & Inorganic Lead Generation",
                  "Sales Automation Setup",
                  "Call Booking Assistant",
                  "Personalized Growth Strategy",
                  "Predictable Sales Pipeline",
                  "Weekly Strategy Calls",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <i className="ri-check-line text-orange text-xl" />

                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-white/60">
                Built for consultants who want predictable, qualified leads and
                growth on autopilot.
              </p>

              <button
                onClick={() => scrollToSection("book-call")}
                className="mt-8 w-full rounded-xl bg-orange p-4 text-white"
              >
                Get Started
              </button>
            </motion.div>

            {/* Custom */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-8"
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
                  <i className="ri-star-fill text-orange" />
                  <span>Custom Content Strategy</span>
                </div>

                <div className="mt-4 flex items-start gap-2">
                  <i className="ri-star-fill text-orange" />
                  <span>Dedicated Team</span>
                </div>

                <div className="mt-4 flex items-start gap-2">
                  <i className="ri-star-fill text-orange" />
                  <span>Custom Automation Systems</span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection("book-call")}
                className="mt-8 w-full rounded-xl bg-orange p-4 text-white"
              >
                Book a Call
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Lead Magnet */}
      <section className="w-full p-12 px-4 lg:px-24 xl:px-36">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Free Resource</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Steal Our
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Content Growth Blueprint
            </span>
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-white/80"
          >
            Get the exact framework we use to help creators, coaches, and
            consultants generate attention, authority, and qualified leads
            through content.
          </motion.p>

          {/* Main Card */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -5,
            }}
            className="relative mt-6 w-full max-w-6xl overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[120px]" />

            <div className="relative grid gap-10 p-6 lg:grid-cols-2 lg:p-12">
              {/* Left */}
              <div className="flex flex-col justify-center">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange/20 bg-orange/10 p-2 px-4 text-sm text-orange">
                  <i className="ri-download-cloud-line"></i>
                  Free PDF Guide
                </div>

                <h4 className="text-3xl font-medium">7-Step Content System</h4>

                <p className="mt-4 text-white/80">
                  Learn how to consistently create content that builds
                  authority, attracts qualified leads, and converts viewers into
                  paying clients.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Content positioning framework",
                    "High-converting content formats",
                    "Lead generation strategies",
                    "Content workflow templates",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <i className="ri-check-line text-orange text-xl"></i>

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

                  <div className="mt-6 flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="rounded-xl border border-white/20 bg-white/[0.05] p-4 outline-none focus:border-orange"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="rounded-xl border border-white/20 bg-white/[0.05] p-4 outline-none focus:border-orange"
                    />

                    <button className="rounded-xl bg-orange p-4 font-medium text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,109,53,0.35)]">
                      Get Instant Access
                    </button>
                  </div>

                  <p className="mt-4 text-center text-xs text-white/40">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full p-12 px-4 lg:px-24 xl:px-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.h4
            variants={fadeUp}
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Client Testimonials</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Don't Take
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Our Word For It
            </span>
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-white/80"
          >
            Real results from creators, coaches, and consultants who trusted us
            to transform their content.
          </motion.p>

          {/* Video Testimonials */}
          <motion.div
            variants={fadeUp}
            className="mt-8 w-full flex flex-col gap-6"
          >
            {/* Featured Testimonial */}
            <div className="grid">
              <VideoCard
                title="Client Testimonial"
                thumbnail="/testimonials/featured.webp"
                youtubeId="VIDEO_ID"
                videoType="horizontal"
                className="aspect-video"
                setActiveVideo={setActiveVideo}
              />

              <div className="mt-4 text-center">
                <h4 className="font-medium">Ash Carrim</h4>

                <p className="text-sm text-white/60">Growth Strategist</p>
              </div>
            </div>

            {/* Brands We've Built */}
            <motion.div variants={fadeUp} className="mt-6 w-full">
              <div className="text-center">
                <h4 className="text-2xl font-medium">
                  Brands We've Helped
                  <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
                    Build & Scale
                  </span>
                </h4>

                <p className="mt-2 text-white/60">
                  Personal brands engineered for authority, visibility and lead
                  generation.
                </p>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {[
                  {
                    thumbnail: "/brands/anmol.jpg",
                    username: "anmol_type",
                    niche: "Personal Branding",
                    metric: "Authority Building",
                  },
                  {
                    thumbnail: "/brands/creative-dood.jpg",
                    username: "creative_dood11",
                    niche: "Creative Content",
                    metric: "Audience Growth",
                  },
                  {
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
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

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
                      <div className="absolute top-4 left-4 p-0.5 px-2.5 pb-1.5 tracking-wider rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
                        <span className="text-xs text-white">Brand Built</span>
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
                          className="p-2.5 px-3.5 rounded-xl text-xl text-white bg-orange z-50"
                        >
                          <i className="ri-arrow-right-up-line" />
                        </a>
                      </div>

                      {/* Divider */}
                      <div className="m-4 mx-0 h-px bg-white/5" />

                      {/* Metric */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/60">Focus</span>

                        <span className="text-orange font-medium">
                          {brand.metric}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Testimonials */}
          <div className="mt-8 grid w-full gap-6 lg:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
            >
              <div className="flex gap-0.5 text-orange text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>

              <p className="mt-4 text-white/80 leading-relaxed">
                "The quality of content completely changed the way people
                perceive my brand. Engagement increased and I started getting
                qualified inquiries every week."
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/testimonials/client1.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-medium">Rahul Sharma</h4>

                  <p className="text-sm text-white/60">Business Coach</p>
                </div>
              </div>
            </motion.div>

            {/* Featured Testimonial */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="relative rounded-xl border border-orange/25 bg-white/[0.05] backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(235,110,55,0.12)]"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-sm">
                Featured
              </div>

              <div className="flex gap-0.5 text-orange text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>

              <p className="mt-4 text-white/80 leading-relaxed">
                "Within 90 days, our content started generating consistent
                leads. The editing, strategy, and content positioning were on a
                completely different level compared to anything we tried
                before."
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/testimonials/client2.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-medium">Aman Verma</h4>

                  <p className="text-sm text-white/60">Marketing Consultant</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl p-6"
            >
              <div className="flex gap-1 text-orange text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>

              <p className="mt-4 text-white/80 leading-relaxed">
                "What impressed me most was the consistency. Every video looked
                premium and aligned perfectly with my personal brand."
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/testimonials/client3.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-medium">Priya Kapoor</h4>

                  <p className="text-sm text-white/60">Leadership Coach</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-10 grid w-full gap-6 md:grid-cols-3">
            {[
              ["$50K+", "Revenue Generated"],
              ["100M+", "Views Generated"],
              ["98%", "Client Retention"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-xl border border-white/20 bg-white/[0.02] p-6 text-center"
              >
                <h4 className="text-3xl font-medium text-orange">{value}</h4>

                <p className="mt-2 text-white/60">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founder Note */}
      <section className="w-full p-12 px-4 lg:px-24 xl:px-36">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Founder Note</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            A Personal Message
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
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
            <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-orange/10 blur-[120px]" />

            <div className="relative grid gap-10 p-8 lg:grid-cols-[320px_1fr] lg:p-12">
              {/* Founding Team */}
              <div className="flex justify-center">
                <div className="w-full max-w-[380px]">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        image: "/brands/anmol.jpg",
                        name: "Anmol Anuragi",
                        role: "Co-Founder",
                      },
                      {
                        image: "/brands/creative-dood.jpg",
                        name: "Mohit Kumar",
                        role: "Co-Founder",
                      },
                    ].map((member) => (
                      <div key={member.name} className="group">
                        <div className="relative overflow-hidden rounded-xl border border-white/20">
                          <div className="absolute inset-0 bg-orange/20 blur-2xl" />

                          <img
                            src={member.image}
                            alt={member.name}
                            className="relative aspect-square w-full object-cover"
                          />
                        </div>

                        <div className="mt-2 text-center">
                          <h4 className="text-sm font-medium">{member.name}</h4>

                          <p className="text-xs text-white/60">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-white/20 bg-white/[0.05] p-4 text-center">
                    <p className="text-sm text-white/60">Founding Team</p>

                    <p className="font-medium text-orange">
                      Content Flow Launch
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="flex flex-col">
                <i className="ri-double-quotes-l text-5xl text-orange/60" />

                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  Most content today gets ignored. Not because it's bad—but
                  because it lacks strategy, positioning, and emotional
                  connection.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  That's why we built Content Flow Launch. Our goal isn't just
                  to edit videos. It's to help creators, coaches, and
                  consultants build authority, attract qualified leads, and grow
                  their business through content that works.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  Every project we take on is treated like our own. We focus on
                  quality, consistency, and results— because your success
                  directly reflects ours.
                </p>

                {/* Signature */}
                <div className="mt-8">
                  <h4 className="text-xl font-medium">Anmol & Mohit</h4>

                  <p className="text-white/60">
                    Co-Founders, Content Flow Launch
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Book a Call */}
      <section id="book-a-call" className="w-full p-12 px-4 lg:px-24 xl:px-36">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <button
              data-cal-link="suraj.1cr/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="text-orange font-medium"
            >
              Book a Strategy Call
            </button>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Let's Discuss
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Your Content Goals
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-white/80"
          >
            Get a personalized content growth strategy, actionable
            recommendations, and a clear roadmap tailored to your business.
          </motion.p>

          {/* Main Card */}
          <motion.div
            variants={fadeUp}
            className="relative mt-6 w-full overflow-hidden rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl shadow-[0_0_25px_rgba(235,110,55,0.08)]"
          >
            <div className="relative grid gap-10 p-6 lg:grid-cols-[400px_1fr] lg:p-10">
              <div className="flex flex-col justify-center">
                <div className="w-fit p-2 px-4 rounded-full border border-orange/40 bg-orange/15 text-orange text-sm">
                  Free Consultation
                </div>

                <h4 className="mt-4 text-4xl font-medium leading-tight">
                  Let's Build Your
                  <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
                    Predictable Sales Pipeline
                  </span>
                </h4>

                <p className="mt-4 text-white/80 leading-relaxed">
                  In just 30 minutes, we'll identify what's holding your content
                  back and create a personalized growth roadmap for your brand.
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
                        <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center">
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

                <div className="mt-6 rounded-xl border border-orange/40 bg-orange/15 p-4">
                  <div className="flex items-center gap-3">
                    <i className="ri-time-line text-orange text-xl" />
                    <span className="font-medium">
                      30 Minute Strategy Session
                    </span>
                  </div>

                  <p className="mt-2 text-white/60 text-sm">
                    No sales pressure. Just actionable advice and a personalized
                    roadmap for your content growth.
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="relative flex flex-col justify-center rounded-xl border border-white/20 bg-white/[0.05] p-6 backdrop-blur-xl">
                <div className="absolute top-0 right-0 h-40 w-40 bg-orange/10 blur-[100px]" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <img
                      src="/brands/anmol.jpg"
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

                      <span className="text-orange">Free</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-white/60">Format</span>

                      <span>Google Meet</span>
                    </div>
                  </div>

                  <button
                    data-cal-link="suraj.1cr/30min"
                    data-cal-config='{"theme":"dark"}'
                    className="group mt-8 w-full rounded-xl p-4 text-lg font-medium text-white bg-orange"
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
      <section id="contact" className="w-full p-12 px-4 lg:px-24 xl:px-36">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_25px_rgba(234,110,55,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Contact Us</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-center text-white/80"
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
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[180px]" />

            <div className="relative grid gap-6 p-6 md:grid-cols-3 lg:p-8">
              {/* Email */}
              <a
                href="mailto:hello@contentflowlaunch.com"
                className="rounded-xl border border-white/20 bg-white/[0.05] p-6 transition-all duration-200 hover:border-orange/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange">
                  <i className="ri-mail-line text-2xl text-white"></i>
                </div>

                <h4 className="mt-4 text-xl font-medium">Email</h4>

                <p className="mt-2 text-white/60">
                  hello@contentflowlaunch.com
                </p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/[0.05] p-6 transition-all duration-200 hover:border-orange/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange">
                  <i className="ri-whatsapp-line text-2xl text-white"></i>
                </div>

                <h4 className="mt-4 text-xl font-medium">WhatsApp</h4>

                <p className="mt-2 text-white/60">Quick responses & support</p>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="rounded-xl border border-white/20 bg-white/[0.05] p-6 transition-all duration-200 hover:border-orange/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange">
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
      <footer className="w-full mt-6 px-4 lg:px-24 xl:px-36 pb-8">
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange font-medium">
                  CF
                </div>

                <div>
                  <h4 className="text-lg font-medium">Content Flow Launch</h4>

                  <p className="text-sm text-white/60">Content That Converts</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 text-white/60">
              <a
                onClick={() => scrollToSection("portfolio")}
                className="cursor-pointer"
              >
                Portfolio
              </a>
              <a
                onClick={() => scrollToSection("process")}
                className="cursor-pointer"
              >
                Process
              </a>
              <a
                onClick={() => scrollToSection("pricing")}
                className="cursor-pointer"
              >
                Pricing
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
                  link: "#",
                },
                {
                  icon: "ri-youtube-line",
                  link: "#",
                },
              ].map((item) => (
                <a
                  key={item.icon}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-orange hover:bg-orange hover:text-white"
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

      {/* Portfolio Showcase */}
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
                    <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
                    <div className="w-2 h-2 rounded-full bg-orange"></div>
                  </div>

                  <span className="text-sm text-white/80">
                    {activeVideo?.title}
                  </span>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  className="mt-4 p-1.5 px-2.5 rounded-full border border-white/20 bg-white/5 text-white transition-all duration-500 hover:bg-orange hover:border-orange"
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
  );
};

export default App;
