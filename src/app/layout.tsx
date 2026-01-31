"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Anton, Playfair_Display } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Dargo | Content Creator Portfolio</title>
        <meta name="description" content="Personal portfolio of Dargo, a Singapore-based content creator. Explore portfolio, articles, and ways to work together." />
      </head>
      <body
        className={`${playfair.className} ${anton.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-navy">Dargo</span>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-zinc-700 transition hover:text-navy"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center gap-4">
                <button className="hidden rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition hover:bg-navy/90 md:inline-flex">
                  Subscribe
                </button>
                
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-zinc-700 hover:text-navy"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-zinc-200 bg-white">
                <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold text-zinc-700 transition hover:text-navy py-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90 w-full">
                    Subscribe
                  </button>
                </nav>
              </div>
            )}
          </header>
          <main className="flex-1 bg-background">
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
              {children}
            </div>
          </main>
          <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <div className="grid gap-8 md:grid-cols-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-navy">Dargoyaki PTE LTD</h3>
                  <p className="text-sm text-zinc-900">
                    A digital-first creative brand for self-improving men and culture-curious minds. 110K+ across YouTube, Instagram, and TikTok.
                  </p>
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-bold text-zinc-900">Free Content</h4>
                  <ul className="space-y-2 text-sm text-zinc-900">
                    <li>
                      <Link href="/articles" className="hover:text-navy">
                        Articles & Guides
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio" className="hover:text-navy">
                        Videos
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-bold text-zinc-900">About</h4>
                  <ul className="space-y-2 text-sm text-zinc-900">
                    <li>
                      <Link href="/about" className="hover:text-navy">
                        My Story
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-navy">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 text-sm font-bold text-zinc-900">Connect</h4>
                  <ul className="space-y-2 text-sm text-zinc-900">
                    <li>
                      <a href="https://www.youtube.com/c/Dargoyaki" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
                        YouTube
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/dargoyaki/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/dargohzy/?originalSubdomain=sg" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@dargoyaki" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
                        TikTok
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500">
                <p className="text-zinc-900">© {new Date().getFullYear()} Dargo. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
