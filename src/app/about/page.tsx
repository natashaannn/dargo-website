"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const timeline = [
    {
      period: "NUS Days",
      title: "Documenting University Life",
      description: "Started creating content while studying Computer Science at NUS. What began as documenting my university experience laid the foundation for understanding storytelling and audience building.",
    },
    {
      period: "Building the Brand",
      title: "From Side Project to Full-Time",
      description: "Grew across YouTube (25K), Instagram (38K), and TikTok (47K) by creating content on creator economy insights and men's lifestyle. Founded Dargoyaki PTE LTD to formalize the business.",
    },
    {
      period: "Present",
      title: "Brand Partnerships & Scale",
      description: "Now partnering with leading brands like UNIQLO, Gillette, Emporio Armani, CNB, NTUC, and Mandai Wildlife. Building a digital-first creative brand for self-improving men and culture-curious minds.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-yellow-500">
            Hey, I&apos;m Dargo.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            Content creator, storyteller, and founder of Dargoyaki PTE LTD — building a digital-first creative brand for self-improving men and culture-curious minds.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="rounded-3xl border-2 border-zinc-200 bg-white p-8 md:p-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-zinc-800">Quick Facts About Me</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-navy/10">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-bold text-yellow-400">Total Reach</h3>
            <p className="mt-1 text-sm text-zinc-900">110K+ Followers</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-yellow-400">Audience</h3>
            <p className="mt-1 text-sm text-zinc-900">Self-Improving Men</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-warm/10">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="font-bold text-yellow-400">Company</h3>
            <p className="mt-1 text-sm text-zinc-900">Dargoyaki PTE LTD</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="font-bold text-yellow-400">Background</h3>
            <p className="mt-1 text-sm text-zinc-900">NUS Computer Science</p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="grid gap-12 md:grid-cols-[1fr,1.2fr] md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="https://miro.medium.com/v2/resize:fit:2400/1*h4v1fV-LeKSCa_2qZLmlZg.jpeg"
            alt="Dargo, content creator from Singapore"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">My Journey</h2>
          <div className="space-y-4 text-zinc-400">
            <p className="leading-relaxed">
              I&apos;m a content creator, storyteller, and founder of Dargoyaki PTE LTD. What started as documenting my life during NUS Computer Science has evolved into a full-time career creating content that educates and entertains.
            </p>
            <p className="leading-relaxed">
              Across YouTube (25K), Instagram (38K), and TikTok (47K), I craft content for the next generation of self-improving men and culture-curious minds. On TikTok, I break down social media trends and creator economy insights. On Instagram, I create practical content on men's style, confidence, and health.
            </p>
            <p className="leading-relaxed">
              I&apos;ve partnered with leading brands like UNIQLO, Gillette, CNB, Emporio Armani, NTUC, and Mandai Rainforest Wild Asia — helping bridge lifestyle, education, and entertainment in uniquely Singaporean ways.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">My Journey from Side Project to Full-Time Creator</h2>
          <p className="mt-2 text-lg text-zinc-300">
            How I went from working full-time to building a creator business
          </p>
        </div>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div
              key={item.period}
              className="group rounded-2xl border-2 border-zinc-200 bg-white p-6 transition hover:border-navy hover:shadow-lg md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                <div className="flex-shrink-0">
                  <span className="inline-flex rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">
                    {item.period}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-yellow-400">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-zinc-700">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I'm Working On */}
      <section className="rounded-3xl bg-gradient-to-br from-navy via-deep to-forest px-6 py-12 text-white md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">What I&apos;m Working On Now</h2>
          <p className="text-lg leading-relaxed text-zinc-100">
            Building Dargoyaki PTE LTD into a leading digital-first creative brand. Creating content that breaks down social media trends on TikTok, helps men level up on Instagram, and partnering with brands to create authentic, educational entertainment.
          </p>
          <p className="leading-relaxed text-zinc-200">
            If you&apos;re building something meaningful at the intersection of media, culture, or education — I&apos;d love to connect. Let&apos;s create content that educates, entertains, and bridges lifestyle with purpose.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-accent/90"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
