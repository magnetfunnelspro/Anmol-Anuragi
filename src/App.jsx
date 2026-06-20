import React from "react";
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
          <nav className="relative mx-auto flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-2">
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

            {/* Truly Centered Nav */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden xl:flex items-center gap-8">
              {["Portfolio", "Process", "Pricing", "Testimonials"].map(
                (item) => (
                  <button
                    key={item}
                    className="group relative text-white/80 hover:text-white transition-all duration-300"
                  >
                    {item}

                    <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-orange transition-all duration-300 group-hover:w-6"></span>
                  </button>
                ),
              )}
            </div>

            {/* CTA */}
            <button className="p-2.5 px-4 rounded-xl text-white bg-orange z-10">
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
              boxShadow: "0 0 30px rgba(234,109,53,0.35)",
            }}
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>
            <span className="text-orange font-medium">Content Specialist</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[42px] md:text-5xl font-medium text-center leading-[1.05] max-w-5xl"
          >
            Your Content{" "}
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              Deserves Better
            </span>{" "}
            Than Just Editing
          </motion.h2>

          {/* Sub Heading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl px-4 text-center text-white/80 text-base lg:text-lg leading-relaxed"
          >
            Our creative team works on creating content that not just look god
            but also work as client conversion machine.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex gap-6">
            <button className="p-4 px-6 rounded-xl text-white bg-orange">
              View Portfolio
            </button>

            <button className="p-4 px-6 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md text-white transition-all duration-200 hover:bg-white/10">
              Book a Call
            </button>
          </motion.div>

          {/* Trust */}
          <motion.div
            variants={fadeUp}
            className="mt-6 text-sm flex items-center gap-[4px] text-white/50"
          >
            <span>Trusted by</span>{" "}
            <span className="text-lightOrange font-medium">
              50+ creators & brands
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
                  value: 50,
                  suffix: "+",
                  label: "Creators Served",
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

      {/* Portfolio */}
      <section className="w-full p-12 px-4 lg:px-24 xl:px-36 relative">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Our Portfolio</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-center text-5xl font-medium"
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
            {/* Main Video */}
            <VideoCard
              thumbnail="/portfolio/main-thumbnail.jpg"
              youtubeId="dQw4w9WgXcQ"
              videoType="horizontal"
              className="aspect-video"
              setActiveVideo={setActiveVideo}
            />

            {/* Shorts */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
              <VideoCard
                thumbnail="/thumbnails/short1.webp"
                youtubeId="YzyCJB3riFk"
                videoType="vertical"
                className="aspect-[9/16]"
                setActiveVideo={setActiveVideo}
              />

              <VideoCard
                thumbnail="/thumbnails/short2.webp"
                youtubeId="YzyCJB3riFk"
                videoType="vertical"
                className="aspect-[9/16]"
                setActiveVideo={setActiveVideo}
              />

              <VideoCard
                thumbnail="/thumbnails/short3.webp"
                youtubeId="YzyCJB3riFk"
                videoType="vertical"
                className="aspect-[9/16]"
                setActiveVideo={setActiveVideo}
              />

              <VideoCard
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
          >
            <div className="relative flex items-center">
              <div className="absolute w-2 h-2 rounded-full bg-orange animate-ping"></div>
              <div className="w-2 h-2 rounded-full bg-orange"></div>
            </div>

            <span className="text-orange font-medium">Our Process</span>
          </motion.h4>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-center text-4xl md:text-5xl font-medium"
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
                  title: "Discovery Call",
                  description:
                    "We understand your goals, audience, content style, and growth strategy.",
                },
                {
                  number: "02",
                  title: "Content Planning",
                  description:
                    "Our team creates a content roadmap focused on engagement and conversions.",
                },
                {
                  number: "03",
                  title: "Editing & Optimization",
                  description:
                    "We edit, enhance, and optimize every piece of content for maximum performance.",
                },
                {
                  number: "04",
                  title: "Delivery & Growth",
                  description:
                    "Receive ready-to-publish content that helps grow your audience and business.",
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
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-[0_0_25px_rgba(234,109,53,0.08)]">
                      {/* Number Glow */}
                      <div className="absolute top-0 right-0 text-[120px] leading-none font-bold text-orange/5 select-none">
                        {step.number}
                      </div>

                      {/* Number Badge */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange text-white font-medium shadow-[0_0_20px_rgba(234,109,53,0.3)]">
                          {step.number}
                        </div>

                        <div className="h-px flex-1 bg-gradient-to-r from-orange/50 to-transparent" />
                      </div>

                      <h3 className="text-2xl font-medium">{step.title}</h3>

                      <p className="mt-3 text-white/70 leading-relaxed">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
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
            className="text-center text-4xl md:text-5xl font-medium"
          >
            Choose The Plan
            <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
              That Fits Your Growth
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
          <div className="mt-8 grid w-full gap-6 lg:grid-cols-3">
            {/* Basic */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              <h3 className="text-2xl font-medium">Basic</h3>

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

              <p className="mt-8 text-sm text-white/50">
                Perfect for coaches & consultants looking to build authority and
                convert more clients.
              </p>

              <button className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 py-3">
                Get Started
              </button>
            </motion.div>

            {/* Growth */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="relative rounded-xl border border-orange/40 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(234,109,53,0.15)]"
            >
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-sm">
                Most Popular
              </div>

              <h3 className="text-2xl font-medium">Growth</h3>

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
                  "Weekly Strategy Calls",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <i className="ri-check-line text-orange text-xl" />

                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-white/50">
                Built for consultants who want predictable, qualified leads and
                growth on autopilot.
              </p>

              <button className="mt-8 w-full rounded-xl bg-orange py-3 text-white">
                Get Started
              </button>
            </motion.div>

            {/* Custom */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              <h3 className="text-2xl font-medium">Custom</h3>

              <div className="mt-4">
                <span className="text-3xl font-medium">
                  Need Something Unique?
                </span>
              </div>

              <p className="mt-6 text-white/70">
                Get a fully customized content and growth system tailored
                specifically to your business.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3">
                  <i className="ri-star-fill text-orange" />
                  <span>Custom Content Strategy</span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <i className="ri-star-fill text-orange" />
                  <span>Dedicated Team</span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <i className="ri-star-fill text-orange" />
                  <span>Custom Automation Systems</span>
                </div>
              </div>

              <button className="mt-8 w-full rounded-xl bg-orange py-3 text-white">
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
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
            className="text-center text-4xl md:text-5xl font-medium"
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
            className="relative mt-6 w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[120px]" />

            <div className="relative grid gap-10 p-8 lg:grid-cols-2 lg:p-12">
              {/* Left */}
              <div className="flex flex-col justify-center">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-4 py-2 text-sm text-orange">
                  <i className="ri-download-cloud-line"></i>
                  Free PDF Guide
                </div>

                <h3 className="text-3xl font-medium">7-Step Content System</h3>

                <p className="mt-4 text-white/70">
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
                <div className="rounded-xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                  <h4 className="text-xl font-medium">Download Free Guide</h4>

                  <p className="mt-2 text-sm text-white/60">
                    Enter your email and get instant access.
                  </p>

                  <div className="mt-6 flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 outline-none focus:border-orange"
                    />

                    <input
                      type="email"
                      placeholder="Your Email"
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 outline-none focus:border-orange"
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
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
            className="text-center text-4xl md:text-5xl font-medium"
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
                thumbnail="/testimonials/featured.webp"
                youtubeId="VIDEO_ID"
                videoType="horizontal"
                className="aspect-video"
                setActiveVideo={setActiveVideo}
              />

              <div className="mt-4 text-center">
                <h4 className="font-medium">Sharthak Sharma</h4>

                <p className="text-sm text-white/50">E-commerce business</p>
              </div>
            </div>

            {/* Small Testimonials */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  thumbnail: "/testimonials/client1.webp",
                  youtubeId: "VIDEO_ID_1",
                  name: "Rahul Sharma",
                  role: "Business Coach",
                },
                {
                  thumbnail: "/testimonials/client2.webp",
                  youtubeId: "VIDEO_ID_2",
                  name: "Aman Verma",
                  role: "Marketing Consultant",
                },
                {
                  thumbnail: "/testimonials/client3.webp",
                  youtubeId: "VIDEO_ID_3",
                  name: "Priya Kapoor",
                  role: "Leadership Coach",
                },
              ].map((item) => (
                <div key={item.name}>
                  <VideoCard
                    thumbnail={item.thumbnail}
                    youtubeId={item.youtubeId}
                    videoType="horizontal"
                    className="aspect-video"
                    setActiveVideo={setActiveVideo}
                  />

                  <div className="mt-4 text-center">
                    <h4 className="font-medium">{item.name}</h4>

                    <p className="text-sm text-white/50">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <div className="mt-8 grid w-full gap-6 lg:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6"
            >
              <div className="flex gap-0.5 text-orange text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>

              <p className="mt-5 text-white/80 leading-relaxed">
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

                  <p className="text-sm text-white/50">Business Coach</p>
                </div>
              </div>
            </motion.div>

            {/* Featured Testimonial */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="relative rounded-xl border border-orange/25 bg-white/[0.05] backdrop-blur-xl p-6 shadow-[0_0_20px_rgba(234,109,53,0.12)]"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-sm">
                Featured
              </div>

              <div className="flex gap-0.5 text-orange text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>

              <p className="mt-5 text-white/80 leading-relaxed">
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

                  <p className="text-sm text-white/50">Marketing Consultant</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-6"
            >
              <div className="flex gap-1 text-orange text-lg">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>

              <p className="mt-5 text-white/80 leading-relaxed">
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

                  <p className="text-sm text-white/50">Leadership Coach</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-10 grid w-full gap-6 md:grid-cols-3">
            {[
              ["50+", "Happy Clients"],
              ["100M+", "Views Generated"],
              ["98%", "Client Retention"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center"
              >
                <h3 className="text-3xl font-medium text-orange">{value}</h3>

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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
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
            className="text-center text-4xl md:text-5xl font-medium"
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
            className="relative mt-6 w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            {/* Glow */}
            <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-orange/10 blur-[120px]" />

            <div className="relative grid gap-10 p-8 lg:grid-cols-[320px_1fr] lg:p-12">
              {/* Founder Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-[320px] mx-auto lg:max-w-none">
                  <div className="absolute inset-0 rounded-xl bg-orange/20 blur-3xl" />

                  <img
                    src="/Founder.webp"
                    alt="Founder"
                    className="relative w-full aspect-square rounded-xl object-cover border border-white/20"
                  />

                  <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1">
                    <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                    <span className="text-xs text-white">
                      Available for Projects
                    </span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="flex flex-col justify-center">
                <i className="ri-double-quotes-l text-5xl text-orange/50" />

                <p className="mt-4 text-lg leading-relaxed text-white/80">
                  Most content today gets ignored. Not because it's bad—but
                  because it lacks strategy, positioning, and emotional
                  connection.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  That's why we built Content Flow Launch. Our goal isn't just
                  to edit videos. It's to help creators, coaches, and
                  consultants build authority, attract qualified leads, and grow
                  their business through content that works.
                </p>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  Every project we take on is treated like our own. We focus on
                  quality, consistency, and results— because your success
                  directly reflects ours.
                </p>

                {/* Signature */}
                <div className="mt-8">
                  <h4 className="text-xl font-medium">Anmol Anuragi</h4>

                  <p className="text-white/50">Founder, Content Flow Launch</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Book a Call */}
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
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
            className="text-center text-4xl md:text-5xl font-medium"
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
            className="relative mt-6 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_50px_rgba(234,109,53,0.08)]"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[150px]" />

            <div className="relative grid gap-10 p-6 lg:grid-cols-[400px_1fr] lg:p-10">
              <div className="flex flex-col justify-center">
                <div className="w-fit px-4 py-2 rounded-full border border-orange/30 bg-orange/10 text-orange text-sm">
                  Free Consultation
                </div>

                <h3 className="mt-5 text-4xl font-medium leading-tight">
                  Let's Build Your
                  <span className="block bg-gradient-to-r from-orange to-lightOrange bg-clip-text text-transparent">
                    Content Growth System
                  </span>
                </h3>

                <p className="mt-5 text-white/70 leading-relaxed">
                  In just 30 minutes, we'll identify what's holding your content
                  back and create a personalized growth roadmap for your brand.
                </p>

                <div className="mt-8 grid gap-4">
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
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
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

                {/* Trust */}
                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <h4 className="text-2xl font-medium text-orange">50+</h4>
                    <p className="text-sm text-white/50">Creators Served</p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-medium text-orange">100M+</h4>
                    <p className="text-sm text-white/50">Views Generated</p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-orange/20 bg-orange/5 p-5">
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
              <div className="relative flex flex-col justify-center rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="absolute top-0 right-0 h-40 w-40 bg-orange/10 blur-[100px]" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <img
                      src="/Founder.webp"
                      alt=""
                      className="h-16 w-16 rounded-xl object-cover border border-white/10"
                    />

                    <div>
                      <h4 className="font-medium text-lg">Anmol Anuragi</h4>

                      <p className="text-white/50 text-sm">
                        Founder, Content Flow Launch
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-5">
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
                    className="group mt-8 w-full rounded-xl bg-orange p-5 text-lg font-medium text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Schedule a Free Call
                      <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
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
            className="p-2 px-4 rounded-full border-2 border-orange flex items-center gap-2 bg-dark/50 backdrop-blur-sm shadow-[0_0_20px_rgba(234,109,53,0.25)]"
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
            className="text-center text-4xl md:text-5xl font-medium"
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
            className="relative mt-6 w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[180px]" />

            <div className="relative grid gap-6 p-6 md:grid-cols-3 lg:p-8">
              {/* Email */}
              <a
                href="mailto:hello@contentflowlaunch.com"
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-orange/30 hover:-translate-y-1"
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
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-orange/30 hover:-translate-y-1"
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
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-orange/30 hover:-translate-y-1"
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
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange font-medium">
                  CF
                </div>

                <div>
                  <h3 className="text-lg font-medium">Content Flow Launch</h3>

                  <p className="text-sm text-white/50">Content That Converts</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-6 text-white/60">
              <a href="#portfolio">Portfolio</a>
              <a href="#process">Process</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <i className="ri-linkedin-line"></i>
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-center text-white/40 ">
            <p>
              © {new Date().getFullYear()} Content Flow Launch. All rights
              reserved.
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
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />

                  <span className="text-sm text-white/70">
                    Portfolio Showcase
                  </span>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-500 hover:bg-orange hover:border-orange"
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
