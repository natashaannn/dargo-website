"use client";

import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const shortFormContent = [
    {
      title: "Social Media Trends Explained",
      platform: "TikTok",
      description:
        "Breaking down platform culture, the history of forums like HardwareZone, and how social media evolves.",
      image:
        "https://media.licdn.com/dms/image/v2/C5622AQHYxAuYI7SHdg/feedshare-shrink_800/feedshare-shrink_800/0/1678437593600?e=2147483647&v=beta&t=c7TsNHfY8ICBdFIFAPLryRHcyRIIFBr-0xTa2To6NRY",
    },
    {
      title: "Creator Economy Deep Dives",
      platform: "TikTok",
      description:
        "Why influencers charge what they do, monetization strategies, and the business behind content creation.",
      image:
        "https://i.ytimg.com/vi/YcXMKyphwVE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDuRhG3tJIG905tyMMe8pL2zN-Hgw",
    },
    {
      title: "Men's Style & Confidence",
      platform: "Instagram",
      description:
        "Practical, no-nonsense tips on leveling up in style, confidence, and health. Always actionable, never preachy.",
      image:
        "https://i.ytimg.com/vi/VLCo1-X1MiA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGD0gZShlMA8=&rs=AOn4CLALSm230dU_UzJOWrgATOY2LmFntA",
    },
    {
      title: "Quick Lifestyle Tips",
      platform: "Instagram",
      description:
        "Short-form content on grooming, fashion, fitness, and personal development for modern men.",
      image:
        "https://media.licdn.com/dms/image/v2/C5622AQHYxAuYI7SHdg/feedshare-shrink_800/feedshare-shrink_800/0/1678437593600?e=2147483647&v=beta&t=c7TsNHfY8ICBdFIFAPLryRHcyRIIFBr-0xTa2To6NRY",
    },
  ];

  const longFormContent = [
    {
      title: "The Creator Economy Explained",
      platform: "YouTube",
      description:
        "In-depth analysis of how creators build sustainable businesses, monetization strategies, and industry insights.",
      image:
        "https://i.ytimg.com/vi/YcXMKyphwVE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDuRhG3tJIG905tyMMe8pL2zN-Hgw",
    },
    {
      title: "Brand Partnership Series",
      platform: "YouTube",
      description:
        "Behind-the-scenes of collaborations with UNIQLO, Gillette, Emporio Armani, and other leading brands.",
      image:
        "https://i.ytimg.com/vi/VLCo1-X1MiA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGD0gZShlMA8=&rs=AOn4CLALSm230dU_UzJOWrgATOY2LmFntA",
    },
    {
      title: "Singapore Culture & Lifestyle",
      platform: "YouTube",
      description:
        "Long-form content exploring Singaporean culture, local partnerships with Mandai Wildlife and NTUC, and life in SG.",
      image:
        "https://media.licdn.com/dms/image/v2/C5622AQHYxAuYI7SHdg/feedshare-shrink_800/feedshare-shrink_800/0/1678437593600?e=2147483647&v=beta&t=c7TsNHfY8ICBdFIFAPLryRHcyRIIFBr-0xTa2To6NRY",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl text-yellow-500">My Portfolio</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Content that educates and entertains across 110K+ followers. From creator economy insights to men's lifestyle content and brand partnerships with UNIQLO, Gillette, Emporio Armani, and more.
        </p>
      </header>

      {/* Short-Form Content */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">Short-Form Content</h2>
            <p className="mt-1 text-sm text-zinc-400">Quick, engaging content on TikTok (47K) and Instagram (38K)</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {shortFormContent.map((content) => (
            <article
              key={content.title}
              className="group overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white transition hover:border-navy hover:shadow-lg"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-zinc-100">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-yellow-500">
                  {content.platform}
                </p>
                <h3 className="mt-2 font-bold leading-snug text-zinc-900">{content.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-700">
                  {content.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Long-Form Content */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-yellow-500">Long-Form Content</h2>
            <p className="mt-1 text-sm text-zinc-400">In-depth videos and series on YouTube (25K)</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {longFormContent.map((content) => (
            <article
              key={content.title}
              className="group overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white transition hover:border-navy hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100">
                <Image
                  src={content.image}
                  alt={content.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest">
                  {content.platform}
                </p>
                <h3 className="mt-2 font-bold leading-snug text-zinc-900">{content.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-900">
                  {content.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-gradient-to-br from-navy via-deep to-forest px-6 py-12 text-center text-white md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold">Want to Work Together?</h2>
          <p className="text-lg leading-relaxed text-zinc-100">
            I partner with brands to create authentic content that educates and entertains. With 110K+ followers across YouTube, Instagram, and TikTok, I reach self-improving men and culture-curious minds in Singapore and Southeast Asia.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-accent/90"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid gap-6 text-center md:grid-cols-3">
        <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6">
          <p className="text-3xl font-bold text-navy">110K+</p>
          <p className="mt-2 text-sm font-semibold text-zinc-900">Total Followers</p>
        </div>
        <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6">
          <p className="text-3xl font-bold text-navy">47K</p>
          <p className="mt-2 text-sm font-semibold text-zinc-900">TikTok Followers</p>
        </div>
        <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6">
          <p className="text-3xl font-bold text-navy">38K</p>
          <p className="mt-2 text-sm font-semibold text-zinc-900">Instagram Followers</p>
        </div>
      </section>
    </div>
  );
}
