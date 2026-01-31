"use client";

import Link from "next/link";

export default function ArticlesPage() {
  const articles = [
    {
      title: "Getting started as a creator in Singapore",
      summary:
        "Thoughts on finding your voice, dealing with expectations and starting small in the local creator economy.",
      tag: "Getting Started",
      date: "Jan 2025",
      readTime: "5 min read",
    },
    {
      title: "Balancing a full-time role with content creation",
      summary:
        "A look at schedules, systems and boundaries for creators with day jobs who want to build something on the side.",
      tag: "Careers",
      date: "Jan 2025",
      readTime: "7 min read",
    },
    {
      title: "What I wish I knew earlier about making videos",
      summary:
        "Lessons from experimenting with formats, scripts and production setups over the past few years.",
      tag: "Creative Process",
      date: "Dec 2024",
      readTime: "6 min read",
    },
    {
      title: "Building a sustainable content business",
      summary:
        "How to think about monetization, diversification and building something that lasts beyond platform changes.",
      tag: "Business",
      date: "Dec 2024",
      readTime: "8 min read",
    },
    {
      title: "The tools and apps I use every day",
      summary:
        "My current tech stack for planning, creating, editing and publishing content as a solo creator.",
      tag: "Productivity",
      date: "Nov 2024",
      readTime: "4 min read",
    },
    {
      title: "Lessons from my first brand collaboration",
      summary:
        "What I learned from my first sponsored content deal, including what went well and what I'd do differently.",
      tag: "Collaborations",
      date: "Nov 2024",
      readTime: "6 min read",
    },
  ];

  const categories = ["All", "Getting Started", "Careers", "Creative Process", "Business", "Productivity", "Collaborations"];

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl text-yellow-500">Articles & Guides</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Long-form writing on creativity, careers and building a life you love. New articles published weekly.
        </p>
      </header>

      {/* Category Filter */}
      <nav className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            className="rounded-full border-2 border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-600 transition hover:border-navy hover:bg-navy hover:text-white"
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Articles Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            className="group overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white transition hover:border-navy hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">
                  {article.tag}
                </span>
                <span className="text-xs text-zinc-900">{article.readTime}</span>
              </div>
              <h2 className="mt-4 font-bold leading-snug text-zinc-900">{article.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-900">
                {article.summary}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                <span className="text-zinc-900">{article.date}</span>
                <span className="font-semibold text-navy group-hover:underline">Read more →</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Newsletter CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-accent/20 via-forest/10 to-warm/10 px-6 py-12 text-center md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold">Never Miss an Article</h2>
          <p className="text-lg text-zinc-400">
            Get new articles delivered straight to your inbox. Join over 10,000 readers who get weekly insights on creativity, careers and modern life.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border-2 border-zinc-300 px-5 py-3 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20"
            />
            <button
              type="submit"
              className="rounded-full bg-navy px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-navy/90"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-zinc-700">
            Free forever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CMS Note */}
      <section className="rounded-2xl border-2 border-zinc-200 bg-zinc-50 p-6 text-sm">
        <h3 className="font-bold text-deep">Note: CMS Integration Ready</h3>
        <p className="mt-2 text-zinc-700">
          This page is currently showing placeholder content. When you&apos;re ready, connect it to a headless CMS (Contentful, Sanity, Ghost, Notion, etc.) to fetch real articles. The layout is already structured for dynamic content.
        </p>
      </section>
    </div>
  );
}
