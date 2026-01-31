import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = [
    {
      title: "Creator Economy Insights",
      description: "Breaking down social media trends, platform culture, and the business of content creation.",
      href: "/portfolio",
      color: "forest",
    },
    {
      title: "Men's Lifestyle & Growth",
      description: "Practical content on style, confidence, and health — helping men level up without the preaching.",
      href: "/articles",
      color: "deep",
    },
    {
      title: "Brand Collaborations",
      description: "Partnering with leading brands to create authentic content that bridges lifestyle, education, and entertainment.",
      href: "/portfolio",
      color: "warm",
    },
  ];

  const popularVideos = [
    {
      title: "Social Media Trends Explained",
      platform: "TikTok",
      type: "short",
      description: "Breaking down platform culture and the history of forums like HardwareZone.",
      thumbnail: "https://media.licdn.com/dms/image/v2/C5622AQHYxAuYI7SHdg/feedshare-shrink_800/feedshare-shrink_800/0/1678437593600?e=2147483647&v=beta&t=c7TsNHfY8ICBdFIFAPLryRHcyRIIFBr-0xTa2To6NRY",
    },
    {
      title: "The Creator Economy Explained",
      platform: "YouTube",
      type: "long",
      description: "In-depth analysis of how creators build sustainable businesses and monetization strategies.",
      thumbnail: "https://i.ytimg.com/vi/YcXMKyphwVE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDuRhG3tJIG905tyMMe8pL2zN-Hgw",
    },
    {
      title: "Men's Style & Confidence",
      platform: "Instagram",
      type: "short",
      description: "Practical, no-nonsense tips on leveling up in style, confidence, and health.",
      thumbnail: "https://i.ytimg.com/vi/VLCo1-X1MiA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGD0gZShlMA8=&rs=AOn4CLALSm230dU_UzJOWrgATOY2LmFntA",
    },
    {
      title: "Brand Partnership Series",
      platform: "YouTube",
      type: "long",
      description: "Behind-the-scenes of collaborations with UNIQLO, Gillette, and Emporio Armani.",
      thumbnail: "https://media.licdn.com/dms/image/v2/C5622AQHYxAuYI7SHdg/feedshare-shrink_800/feedshare-shrink_800/0/1678437593600?e=2147483647&v=beta&t=c7TsNHfY8ICBdFIFAPLryRHcyRIIFBr-0xTa2To6NRY",
    },
  ];

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold text-yellow-500 leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Content Creator, Storyteller & Founder of Dargoyaki PTE LTD
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
            Building a digital-first creative brand for the next generation of self-improving men and culture-curious minds. 110K+ across YouTube, Instagram, and TikTok.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-navy px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-navy/90"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-navy/5"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="rounded-3xl bg-gradient-to-br from-accent/20 via-forest/10 to-warm/10 px-6 py-12 text-center md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold">Join the Dargoyaki Community</h2>
          <p className="text-lg text-zinc-400">
            Get insights on creator economy trends, men's lifestyle tips, and behind-the-scenes stories from brand collaborations. Join 110K+ culture-curious minds.
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
          <p className="text-xs text-yellow-500">
            Free to join, and always will be. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-400">What I Can Help You With</h2>
          <p className="mt-2 text-lg">
            Explore content organized by topic
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-2xl border-2 border-zinc-200 bg-white p-6 transition hover:border-navy hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-zinc-900">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-900">
                {category.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                Get started
                <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Videos */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-yellow-500">Watch My Most Popular Videos</h2>
            <p className="mt-2 text-lg text-zinc-400">
              A selection of content people have found most helpful
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden text-sm font-semibold text-navy underline-offset-4 hover:underline md:inline-flex"
          >
            View All
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {popularVideos.map((video) => (
            <article
              key={video.title}
              className="group overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white transition hover:border-navy hover:shadow-lg"
            >
              <div className={`relative w-full overflow-hidden bg-zinc-100 ${video.type === 'short' ? 'aspect-[9/16]' : 'aspect-video'}`}>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-500">
                  {video.platform}
                </p>
                <h3 className="mt-2 font-bold leading-snug text-zinc-900">{video.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-700">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            View All Videos
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="rounded-3xl bg-navy px-6 py-12 text-white md:px-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.5fr,1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Hey, I&apos;m Dargo</h2>
            <p className="text-lg leading-relaxed text-zinc-100">
              Founder of Dargoyaki PTE LTD, I create content that educates and entertains across 110K+ followers on YouTube (25K), Instagram (38K), and TikTok (47K).
            </p>
            <p className="leading-relaxed text-zinc-200">
              What started as documenting my life at NUS Computer Science evolved into a full-time career partnering with brands like UNIQLO, Gillette, CNB, Emporio Armani, NTUC, and Mandai Rainforest Wild Asia — bridging lifestyle, education, and entertainment in uniquely Singaporean ways.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/about"
                className="rounded-full bg-accent px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-accent/90"
              >
                Read My Story
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Work Together
              </Link>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-white/20">
            <Image
              src="https://miro.medium.com/v2/resize:fit:2400/1*h4v1fV-LeKSCa_2qZLmlZg.jpeg"
              alt="Portrait of Dargo, content creator from Singapore"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="space-y-6 text-center">
        <h1 className="text-md font-semibold uppercase tracking-wider text-yellow-500">
          Trusted By Leading Brands
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-700">UNIQLO</div>
          <div className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-700">Gillette</div>
          <div className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-700">Emporio Armani</div>
          <div className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-700">NTUC</div>
          <div className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-700">CNB</div>
          <div className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-700">Mandai Wildlife</div>
        </div>
      </section>
    </div>
  );
}
