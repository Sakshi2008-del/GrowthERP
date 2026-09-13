"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  ArrowRight,
  Brain,
  Megaphone,
  Users,
  TrendingUp,
  Globe2,
  Sparkles,
  MessageCircle,
  Mail,
  Linkedin,
  BarChart3,
  UserCheck,
  Bot,
  Target,
  Zap,
  ShieldCheck,
  Workflow,
  Play,
} from "lucide-react";

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F2E8]/90 backdrop-blur-md shadow-sm border-b border-[#EDE9D8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[#1A5C35] rounded-md rotate-45 flex items-center justify-center shadow-sm">
            <div className="w-2.5 h-2.5 bg-[#F5F2E8] rounded-full -rotate-45" />
          </div>

          <div>
            <div className="font-heading font-black text-xl text-[#1A1A18] tracking-tight">
              GrowthERP
            </div>

            <div className="hidden sm:block font-mono text-[8px] text-[#6B6B62] uppercase tracking-[0.15em]">
              AI Growth Platform
            </div>
          </div>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 font-sans text-[0.85rem] text-[#6B6B62] font-medium">
          <a
            href="#platform"
            className="hover:text-[#1A5C35] transition-colors"
          >
            Platform
          </a>

          <a
            href="#marketing"
            className="hover:text-[#1A5C35] transition-colors"
          >
            Marketing
          </a>

          <a
            href="#sales"
            className="hover:text-[#1A5C35] transition-colors"
          >
            Sales
          </a>

          <a
            href="#workflow"
            className="hover:text-[#1A5C35] transition-colors"
          >
            Workflow
          </a>
        </div>

        {/* CTA */}
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 bg-[#1A1A18] hover:bg-[#1A5C35] text-white font-sans text-[0.8rem] font-medium py-2.5 px-5 rounded-[4px] transition-all duration-300 hover:-translate-y-0.5"
        >
          Open Platform
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.nav>
  );
}

/* =========================================================
   HERO
========================================================= */

const heroLogs = [
  "Product analyzed successfully.",
  "Regional audience detected: Maharashtra.",
  "Campaign strategy generated.",
  "Lead intent score: 87/100.",
  "High-intent lead routed to human.",
];

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#3E9B63] blur-[100px] opacity-20" />

      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[390px] h-[390px] rounded-full border border-[#3E9B63]/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[310px] h-[310px] rounded-full border border-dashed border-[#7BC49A]/30"
      />

      {/* Center */}
      <div className="relative z-20 w-[190px] h-[190px] rounded-[28px] bg-[#1A1A18] shadow-[0_25px_60px_rgba(26,92,53,0.25)] flex flex-col items-center justify-center text-white border-2 border-[#3E9B63]">
        <div className="w-14 h-14 rounded-2xl bg-[#3E9B63] flex items-center justify-center mb-4">
          <Sparkles className="w-7 h-7" />
        </div>

        <div className="font-heading font-black text-2xl">
          GrowthERP
        </div>

        <div className="font-mono text-[9px] text-[#7BC49A] uppercase tracking-[0.15em] mt-2">
          AI Growth Engine
        </div>
      </div>

      {/* Product node */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[5%] left-[22%] z-30 bg-[#F7FDDB] border border-[#DDE8C9] rounded-xl px-4 py-3 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-[#1A5C35]" />
          <span className="font-sans text-xs font-bold text-[#1A1A18]">
            Product
          </span>
        </div>
      </motion.div>

      {/* Marketing node */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[18%] right-[3%] z-30 bg-white border border-[#EDE9D8] rounded-xl px-4 py-3 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-[#1A5C35]" />
          <span className="font-sans text-xs font-bold text-[#1A1A18]">
            Marketing
          </span>
        </div>
      </motion.div>

      {/* Leads node */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[17%] right-[2%] z-30 bg-white border border-[#EDE9D8] rounded-xl px-4 py-3 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#1A5C35]" />
          <span className="font-sans text-xs font-bold text-[#1A1A18]">
            Leads
          </span>
        </div>
      </motion.div>

      {/* Sales node */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] left-[20%] z-30 bg-[#F7FDDB] border border-[#DDE8C9] rounded-xl px-4 py-3 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#1A5C35]" />
          <span className="font-sans text-xs font-bold text-[#1A1A18]">
            Sales
          </span>
        </div>
      </motion.div>

      {/* Small connecting labels */}
      <div className="absolute top-[38%] left-[2%] font-mono text-[9px] text-[#7BC49A] uppercase tracking-widest">
        Analyze
      </div>

      <div className="absolute top-[43%] right-[0%] font-mono text-[9px] text-[#7BC49A] uppercase tracking-widest">
        Activate
      </div>

      <div className="absolute bottom-[37%] right-[4%] font-mono text-[9px] text-[#7BC49A] uppercase tracking-widest">
        Qualify
      </div>

      <div className="absolute bottom-[34%] left-[0%] font-mono text-[9px] text-[#7BC49A] uppercase tracking-widest">
        Convert
      </div>
    </div>
  );
}

function HeroSection() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % heroLogs.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#F5F2E8] pt-[9rem] px-8 lg:px-12 flex flex-col lg:flex-row items-center relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#7BC49A] blur-[150px] opacity-[0.08]" />

        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#3E9B63] blur-[150px] opacity-[0.08]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#1A5C35 1px, transparent 1px), linear-gradient(90deg, #1A5C35 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* LEFT */}
      <div className="max-w-[650px] flex-shrink-0 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#1A5C35] text-[#F5F2E8] font-mono text-[0.67rem] tracking-[0.1em] py-2 px-4 rounded-[4px] mb-8 shadow-lg"
        >
          <span className="w-1.5 h-1.5 bg-[#7BC49A] rounded-full animate-pulse" />
          AI GROWTH PLATFORM · BUILT FOR STARTUPS
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-[clamp(3.4rem,6vw,5.8rem)] leading-[0.98] text-[#1A1A18] mb-7"
        >
          From{" "}
          <span className="italic text-[#1A5C35] font-medium">
            product
          </span>
          <br />
          to market.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-[1.08rem] text-[#6B6B62] leading-[1.75] max-w-[550px] mb-9"
        >
          GrowthERP connects marketing and sales into one intelligent
          growth workflow. Understand your product, reach the right
          regional audience, generate qualified leads, and convert them
          with AI-assisted sales.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-[#1A5C35] text-[#F5F2E8] font-sans text-[0.95rem] font-medium py-3.5 px-7 rounded-[4px] hover:bg-[#2E7D4F] hover:-translate-y-0.5 shadow-md hover:shadow-xl transition-all duration-300"
          >
            Explore GrowthERP
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#workflow"
            className="inline-flex items-center gap-2 bg-transparent border border-[#1A5C35]/25 text-[#3A3A35] font-sans text-[0.9rem] py-3.5 px-7 rounded-[4px] hover:border-[#1A5C35] hover:text-[#1A5C35] transition-all"
          >
            <Play className="w-4 h-4" />
            See How It Works
          </a>
        </motion.div>

        {/* Live trace */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex items-center gap-3 border border-[#1A5C35]/10 bg-[#1A5C35]/[0.035] px-4 py-3 rounded-md font-mono text-[0.68rem] text-[#1A5C35] max-w-[480px]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3E9B63] animate-pulse shrink-0" />

          <div className="relative h-[1.2em] overflow-hidden flex-1">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={logIndex}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 whitespace-nowrap"
              >
                Growth trace: {heroLogs[logIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="w-full mt-12 lg:mt-0 lg:flex-1 flex justify-center relative z-10">
        <HeroVisual />
      </div>
    </section>
  );
}

/* =========================================================
   PLATFORM WORKFLOW
========================================================= */

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Product Intelligence",
    description:
      "Start with your product, reference material, target audience and business goals. GrowthERP creates a structured understanding of what you sell and who needs it.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Reach",
    subtitle: "Regional Marketing",
    description:
      "Create campaigns adapted to different regions, languages and cultural contexts instead of simply translating the same advertisement.",
    icon: Globe2,
  },
  {
    number: "03",
    title: "Generate",
    subtitle: "Lead Generation",
    description:
      "Campaign activity brings potential customers into one lead pipeline where prospects can be tracked, scored and prioritized.",
    icon: Users,
  },
  {
    number: "04",
    title: "Convert",
    subtitle: "AI-Assisted Sales",
    description:
      "The sales engine researches leads, evaluates intent, personalizes outreach and helps identify when a human salesperson should take over.",
    icon: TrendingUp,
  },
];

function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="bg-[#F5F2E8] py-28 px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-[0.68rem] text-[#1A5C35] uppercase tracking-[0.15em] mb-4">
            One Growth Workflow
          </div>

          <h2 className="font-heading font-bold text-[clamp(2.3rem,4vw,3.6rem)] text-[#1A1A18] leading-[1.05]">
            One platform.
            <br />
            <span className="italic text-[#1A5C35]">
              One growth journey.
            </span>
          </h2>

          <p className="font-sans text-[#6B6B62] max-w-[620px] mt-6 leading-[1.7]">
            GrowthERP connects the stages that are usually managed through
            separate marketing, lead-generation and sales tools.
          </p>
        </motion.div>

        {/* Journey */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-[#F7FDDB] border border-[#E2E8D3] rounded-xl p-7 min-h-[290px] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[0.7rem] text-[#3E9B63]">
                    {step.number}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-[#F5F2E8] border border-[#EDE9D8] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#1A5C35]" />
                  </div>
                </div>

                <div className="font-mono text-[0.63rem] text-[#6B6B62] uppercase tracking-widest mb-2">
                  {step.subtitle}
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1A1A18] mb-4">
                  {step.title}
                </h3>

                <p className="font-sans text-[0.82rem] text-[#6B6B62] leading-[1.65]">
                  {step.description}
                </p>

                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1A5C35] text-white rounded-full items-center justify-center z-20 shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARKETING SECTION
========================================================= */

function MarketingSection() {
  return (
    <section
      id="marketing"
      className="bg-[#1A5C35] py-28 px-8 lg:px-12 text-[#F5F2E8]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-[0.68rem] text-[#7BC49A] uppercase tracking-[0.15em] mb-5">
            Marketing Engine
          </div>

          <h2 className="font-heading font-black text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] mb-7">
            Your product.
            <br />
            <span className="italic text-[#7BC49A]">
              Every market.
            </span>
          </h2>

          <p className="font-sans text-[#D5E2D7] leading-[1.75] max-w-[520px] mb-10">
            GrowthERP is designed to help startups take one product idea
            and build market-specific campaigns around it — considering
            audience, language and regional context.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: Target,
                title: "Product understanding",
                text: "Extract the key value proposition, audience and messaging from your product information.",
              },
              {
                icon: Globe2,
                title: "Regional adaptation",
                text: "Adapt messaging and creative direction for different audiences and regions.",
              },
              {
                icon: Megaphone,
                title: "Campaign planning",
                text: "Build structured campaign strategies before launching across channels.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white/[0.06] border border-white/10 rounded-xl p-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#7BC49A]" />
                  </div>

                  <div>
                    <h4 className="font-sans font-bold text-sm mb-1">
                      {item.title}
                    </h4>

                    <p className="font-sans text-xs text-[#C6D6C9] leading-[1.6]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT MOCKUP */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-[#F5F2E8] rounded-2xl p-6 shadow-2xl text-[#1A1A18]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-[9px] text-[#1A5C35] uppercase tracking-widest">
                  Product Studio
                </div>

                <div className="font-heading font-bold text-xl mt-1">
                  Regional Campaign
                </div>
              </div>

              <div className="w-9 h-9 rounded-lg bg-[#E5F3EB] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#1A5C35]" />
              </div>
            </div>

            {/* Product */}
            <div className="border border-[#EDE9D8] bg-white rounded-xl p-4 mb-4">
              <div className="font-mono text-[9px] text-[#6B6B62] uppercase tracking-widest">
                Product
              </div>

              <div className="font-sans font-bold mt-1">
                Organic Honey
              </div>

              <div className="font-sans text-xs text-[#6B6B62] mt-1">
                Natural premium honey for health-conscious families.
              </div>
            </div>

            {/* Regions */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                ["Maharashtra", "Marathi"],
                ["West Bengal", "Bengali"],
                ["Uttar Pradesh", "Hindi"],
                ["Gujarat", "Gujarati"],
              ].map(([region, language]) => (
                <div
                  key={region}
                  className="border border-[#EDE9D8] bg-white rounded-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-3.5 h-3.5 text-[#1A5C35]" />
                    <span className="font-sans text-xs font-bold">
                      {region}
                    </span>
                  </div>

                  <div className="font-mono text-[9px] text-[#6B6B62] mt-2">
                    {language}
                  </div>
                </div>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center justify-between bg-[#E5F3EB] rounded-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3E9B63] animate-pulse" />

                <span className="font-sans text-xs font-bold text-[#1A5C35]">
                  Campaign strategy ready
                </span>
              </div>

              <span className="font-mono text-[9px] text-[#1A5C35]">
                AI
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   SALES SECTION
========================================================= */

const salesFeatures = [
  {
    icon: Users,
    title: "Lead Intelligence",
    text: "Bring leads into a structured sales pipeline and understand who should receive attention first.",
  },
  {
    icon: Brain,
    title: "Intent & Persona",
    text: "Evaluate business signals, intent and persona to make outreach more relevant.",
  },
  {
    icon: MessageCircle,
    title: "AI-Assisted Outreach",
    text: "Generate personalized communication across supported sales channels.",
  },
  {
    icon: UserCheck,
    title: "Human Handoff",
    text: "When a lead becomes valuable, the system can stop the automated sequence and route the conversation to a human.",
  },
];

function SalesSection() {
  return (
    <section
      id="sales"
      className="bg-[#F5F2E8] py-28 px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* SALES DASHBOARD MOCKUP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0E0E0C] rounded-2xl p-5 shadow-2xl border border-black">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <div className="font-mono text-[9px] text-[#7BC49A] uppercase tracking-widest">
                    GrowthERP Sales Engine
                  </div>

                  <div className="font-sans text-white font-bold mt-1">
                    Sales Command Center
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7BC49A] animate-pulse" />
                  <span className="font-mono text-[9px] text-[#7BC49A]">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  ["428", "Leads"],
                  ["126", "High Intent"],
                  ["34", "Human Handoff"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="bg-white/[0.05] border border-white/[0.08] rounded-lg p-4"
                  >
                    <div className="font-heading text-xl font-black text-white">
                      {value}
                    </div>

                    <div className="font-mono text-[8px] text-white/40 uppercase tracking-wider mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Lead rows */}
              <div className="border border-white/[0.08] rounded-lg overflow-hidden">
                {[
                  {
                    name: "Rahul Sharma",
                    company: "Acme Foods",
                    score: "92",
                    status: "Human handoff",
                  },
                  {
                    name: "Priya Mehta",
                    company: "Scale Labs",
                    score: "87",
                    status: "AI outreach",
                  },
                  {
                    name: "Arjun Verma",
                    company: "Velo Mobility",
                    score: "74",
                    status: "Qualified",
                  },
                  {
                    name: "Neha Singh",
                    company: "FinTech Co.",
                    score: "61",
                    status: "Researching",
                  },
                ].map((lead, index) => (
                  <div
                    key={lead.name}
                    className={`flex items-center gap-3 px-4 py-3 ${
                      index !== 3 ? "border-b border-white/[0.06]" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1A5C35] flex items-center justify-center">
                      <Users className="w-3.5 h-3.5 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="font-sans text-xs font-bold text-white">
                        {lead.name}
                      </div>

                      <div className="font-sans text-[9px] text-white/35">
                        {lead.company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono text-[10px] text-[#7BC49A]">
                        {lead.score}
                      </div>

                      <div className="font-mono text-[8px] text-white/30">
                        {lead.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-[0.68rem] text-[#1A5C35] uppercase tracking-[0.15em] mb-5">
              Sales Engine
            </div>

            <h2 className="font-heading font-black text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] text-[#1A1A18] mb-7">
              Marketing brings
              <br />
              <span className="italic text-[#1A5C35]">
                sales takes over.
              </span>
            </h2>

            <p className="font-sans text-[#6B6B62] leading-[1.75] max-w-[520px] mb-9">
              GrowthERP connects generated leads with an autonomous sales
              workflow. The existing NERVE engine powers the sales
              intelligence layer behind this experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {salesFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-[#F7FDDB] border border-[#EDE9D8] rounded-xl p-5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#EDE9D8] flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-[#1A5C35]" />
                    </div>

                    <h4 className="font-sans font-bold text-sm text-[#1A1A18] mb-2">
                      {feature.title}
                    </h4>

                    <p className="font-sans text-[0.73rem] text-[#6B6B62] leading-[1.6]">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AI / HUMAN SECTION
========================================================= */

function HumanLoopSection() {
  return (
    <section className="bg-[#F7FDDB] py-28 px-8 lg:px-12 border-y border-[#E2E8D3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[700px] mx-auto">
          <div className="font-mono text-[0.68rem] text-[#1A5C35] uppercase tracking-[0.15em] mb-5">
            Human + AI
          </div>

          <h2 className="font-heading font-black text-[clamp(2.4rem,4vw,3.8rem)] text-[#1A1A18] leading-[1.05]">
            AI handles the
            <br />
            <span className="italic text-[#1A5C35]">
              repetitive work.
            </span>
          </h2>

          <p className="font-sans text-[#6B6B62] leading-[1.7] mt-6">
            GrowthERP is not designed to remove people from the growth
            process. AI handles research, personalization, qualification
            and repetitive execution — while humans remain in control of
            important customer conversations.
          </p>
        </div>

        {/* Human loop */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-3">
          {[
            {
              icon: Bot,
              title: "AI Research",
              text: "Understand the lead",
            },
            {
              icon: Brain,
              title: "AI Qualification",
              text: "Evaluate intent",
            },
            {
              icon: MessageCircle,
              title: "AI Conversation",
              text: "Start the interaction",
            },
            {
              icon: UserCheck,
              title: "Human",
              text: "Take over when needed",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className={`w-[190px] bg-[#F5F2E8] border rounded-xl p-5 text-center ${
                    index === 3
                      ? "border-[#1A5C35] shadow-[4px_4px_0_0_#1A5C35]"
                      : "border-[#EDE9D8]"
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-[#E5F3EB] mx-auto flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#1A5C35]" />
                  </div>

                  <h4 className="font-sans font-bold text-sm text-[#1A1A18]">
                    {item.title}
                  </h4>

                  <p className="font-sans text-[0.7rem] text-[#6B6B62] mt-1">
                    {item.text}
                  </p>
                </motion.div>

                {index < 3 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-[#7BC49A]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CHANNELS
========================================================= */

function ChannelsSection() {
  const channels = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      label: "Outreach",
    },
    {
      icon: Mail,
      name: "Email",
      label: "Communication",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      label: "Conversation",
    },
    {
      icon: BarChart3,
      name: "Analytics",
      label: "Measurement",
    },
  ];

  return (
    <section
      id="platform"
      className="bg-[#F5F2E8] py-24 px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="font-mono text-[0.68rem] text-[#1A5C35] uppercase tracking-[0.15em] mb-4">
          Growth Infrastructure
        </div>

        <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#1A1A18]">
          Your growth stack,
          <br />
          <span className="italic text-[#1A5C35]">
            connected.
          </span>
        </h2>

        <p className="font-sans text-[#6B6B62] max-w-[600px] mx-auto mt-5 leading-[1.7]">
          GrowthERP is designed as an orchestration layer connecting
          product intelligence, marketing activity, lead management and
          AI-assisted sales.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {channels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[#F7FDDB] border border-[#EDE9D8] rounded-xl p-7 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#EDE9D8] mx-auto flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#1A5C35]" />
                </div>

                <h4 className="font-sans font-bold text-sm text-[#1A1A18] mt-5">
                  {channel.name}
                </h4>

                <div className="font-mono text-[9px] text-[#6B6B62] uppercase tracking-widest mt-2">
                  {channel.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY GROWTHERP
========================================================= */

function WhyGrowthERP() {
  const points = [
    {
      icon: Workflow,
      title: "Marketing + Sales in one flow",
      text: "Instead of treating marketing and sales as separate systems, GrowthERP connects them around the same growth journey.",
    },
    {
      icon: Globe2,
      title: "Regional-first growth",
      text: "Campaigns can be planned around regional audiences, languages and cultural context.",
    },
    {
      icon: Zap,
      title: "AI where it matters",
      text: "Use AI for research, reasoning, personalization and qualification while keeping important business decisions explainable.",
    },
    {
      icon: ShieldCheck,
      title: "Human in the loop",
      text: "High-value conversations can be routed to a human instead of forcing every customer interaction through automation.",
    },
  ];

  return (
    <section
      id="sales"
      className="bg-[#F5F2E8] py-24 px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-[0.68rem] text-[#1A5C35] uppercase tracking-[0.15em] mb-4">
              Why GrowthERP
            </div>

            <h2 className="font-heading font-black text-[clamp(2.3rem,4vw,3.6rem)] text-[#1A1A18] leading-[1.05]">
              Built for startups
              <br />
              <span className="italic text-[#1A5C35]">
                that want to grow.
              </span>
            </h2>

            <p className="font-sans text-[#6B6B62] leading-[1.75] max-w-[500px] mt-6">
              Early-stage businesses often have a product, but struggle
              to connect marketing, lead generation and sales execution.
              GrowthERP is designed around that exact gap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="bg-[#F7FDDB] border border-[#EDE9D8] rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#EDE9D8] flex items-center justify-center mb-5">
                    <Icon className="w-4 h-4 text-[#1A5C35]" />
                  </div>

                  <h4 className="font-sans font-bold text-sm text-[#1A1A18] mb-2">
                    {point.title}
                  </h4>

                  <p className="font-sans text-[0.73rem] text-[#6B6B62] leading-[1.6]">
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function CTASection() {
  return (
    <section
      id="cta"
      className="bg-[#1A5C35] py-28 px-8 lg:px-12 text-center text-[#F5F2E8]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="font-mono text-[0.68rem] text-[#7BC49A] uppercase tracking-[0.15em] mb-5">
          From product to market
        </div>

        <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1]">
          Build your growth
          <br />
          <span className="italic text-[#7BC49A]">
            engine.
          </span>
        </h2>

        <p className="font-sans text-[#D5E2D7] max-w-[550px] mx-auto mt-7 mb-10 leading-[1.7]">
          GrowthERP brings product intelligence, regional marketing,
          lead generation and AI-assisted sales into one connected
          platform.
        </p>

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 bg-[#F5F2E8] text-[#1A5C35] font-sans font-bold text-sm py-4 px-8 rounded-[4px] hover:bg-white hover:-translate-y-0.5 shadow-xl transition-all"
        >
          Explore the Platform
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-[#11110F] text-white/50 py-10 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <div className="font-heading font-black text-lg text-white">
            GrowthERP
          </div>

          <div className="font-mono text-[8px] uppercase tracking-[0.18em] mt-1">
            From Product to Market
          </div>
        </div>

        <div className="font-sans text-[0.72rem] text-center md:text-right">
          AI-powered growth infrastructure for startups.
          <br />
          Marketing · Sales · Intelligence
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   MAIN LANDING PAGE
========================================================= */

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F5F2E8] overflow-x-hidden">
      <Navbar />

      <HeroSection />

      <WorkflowSection />

      <MarketingSection />

      <SalesSection />

      <HumanLoopSection />

      <ChannelsSection />

      <WhyGrowthERP />

      <CTASection />

      <Footer />
    </main>
  );
}