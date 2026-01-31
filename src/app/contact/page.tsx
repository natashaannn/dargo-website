"use client";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Let&apos;s Build Something Meaningful</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          If you&apos;re building something at the intersection of media, culture, or education — I&apos;d love to connect. Let&apos;s create content that educates, entertains, and makes an impact.
        </p>
      </header>

      {/* Contact Form & Info */}
      <section className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.5fr,1fr]">
        {/* Form */}
        <form className="space-y-6 rounded-3xl border-2 border-zinc-200 bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                placeholder="Your name"
                className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20 text-zinc-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20 text-zinc-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700" htmlFor="topic">
              What are you getting in touch about?
            </label>
            <select
              id="topic"
              className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20 text-zinc-500"
              defaultValue="collaboration"
            >
              <option value="collaboration">Brand / Content Collaboration</option>
              <option value="speaking">Speaking / Panel / Event</option>
              <option value="consulting">Consulting / Advisory</option>
              <option value="general">General Question</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell me a bit about what you have in mind..."
              className="w-full rounded-xl border-2 border-zinc-200 px-4 py-3 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/20 text-zinc-500"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-navy px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-navy/90"
          >
            Send Message
          </button>

          <p className="text-center text-xs text-zinc-900">
            Note: This form is not yet connected to a backend. Connect it to Formspree, Getform, or a custom API when ready.
          </p>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6">
            <h2 className="font-bold text-yellow-500">Other Ways to Reach Me</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-900">
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-zinc-900">Contact via social media</p>
              </div>
              <div>
                <p className="font-semibold">Response Time</p>
                <p className="text-zinc-900">Usually within 2-3 business days</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-zinc-200 bg-white p-6">
            <h2 className="font-bold text-yellow-500">Social Media</h2>
            <div className="mt-4 space-y-2">
              <a href="https://www.youtube.com/c/Dargoyaki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-2 text-sm transition hover:bg-zinc-50">
                <span className="text-lg">📺</span>
                <span className="font-medium text-zinc-900">YouTube - @Dargoyaki</span>
              </a>
              <a href="https://www.instagram.com/dargoyaki/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-2 text-sm transition hover:bg-zinc-50">
                <span className="text-lg">📸</span>
                <span className="font-medium text-zinc-900">Instagram - @dargoyaki</span>
              </a>
              <a href="https://www.linkedin.com/in/dargohzy/?originalSubdomain=sg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-2 text-sm transition hover:bg-zinc-50">
                <span className="text-lg">💼</span>
                <span className="font-medium text-zinc-900">LinkedIn</span>
              </a>
              <a href="https://www.tiktok.com/@dargoyaki" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg p-2 text-sm transition hover:bg-zinc-50">
                <span className="text-lg">🎵</span>
                <span className="font-medium text-zinc-900">TikTok - @dargoyaki</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-forest/10 p-6">
            <h3 className="font-bold text-yellow-500">Brand Partnerships</h3>
            <p className="mt-2 text-sm text-zinc-300">
              I partner with brands like UNIQLO, Gillette, Emporio Armani, CNB, NTUC, and Mandai Wildlife to create authentic content. Reaching 110K+ self-improving men and culture-curious minds across Singapore and Southeast Asia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
