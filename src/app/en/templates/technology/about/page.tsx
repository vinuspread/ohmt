"use client"

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Header from '../_components/Header'
import Footer from '../_components/Footer'

const timeline = [
  { year: '2024', event: 'Company founded with a vision to democratize advanced robotics and autonomous hardware systems.' },
  { year: '2025', event: 'OmniBot Gen 1 prototype revealed at TechWorld Expo. Raised $12M Series A for R&D expansion.' },
  { year: '2026', event: 'OmniBot Gen 2 launch with on-device AI, modular design, and voice/gesture recognition. Seoul R&D center opens.' },
]

const team = [
  {
    name: 'Dr. Aris Chen',
    role: 'R&D Lead',
    bio: 'Former JPL robotics architect specializing in autonomous navigation and sensor fusion.',
    image: '/templates/technology/team-aris.png',
  },
  {
    name: 'Maya Torres',
    role: 'Robotics Engineering Lead',
    bio: 'Led actuator design at Boston Dynamics. Expert in high-torque motion systems.',
    image: '/templates/technology/team-maya.png',
  },
  {
    name: 'James Park',
    role: 'AI & Machine Learning Lead',
    bio: 'Deep learning researcher with 20+ publications in computer vision and edge AI.',
    image: '/templates/technology/team-james.png',
  },
  {
    name: 'Sophia Kim',
    role: 'Head of Product',
    bio: 'Brought three hardware products from concept to mass production in her previous roles.',
    image: '/templates/technology/team-sophia.png',
  },
]


export default function TechnologyAboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Header />
      <main>

        {/* Hero - text over full-bleed image */}
        <section className="relative w-full h-[600px] overflow-hidden border-b border-[var(--color-border)]">
          <img
            src="/templates/technology/full_bg_img.jpeg"
            alt="Robotflow Vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="mb-4 text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.03em] leading-[1.15] text-white font-heading">
              Architecting the Physical Future
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-white/70 leading-[1.2]">
              We build intelligent hardware systems that bridge the gap between artificial intelligence and the physical world, enabling autonomous capabilities at scale.
            </p>
          </div>
        </section>


        {/* Company Introduction */}
        <section className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                  Who We Are
                </span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading">
                  Built on the belief that machines should work for people
                </h2>
              </div>
              <div className="flex flex-col gap-6 pt-2">
                <p className="text-base text-[var(--color-text-muted)] leading-[1.8]">
                  Robotflow was founded by a team of engineers and researchers who believed that the next leap in productivity would come not from software alone, but from machines that could understand and navigate the physical world with human-level intelligence.
                </p>
                <p className="text-base text-[var(--color-text-muted)] leading-[1.8]">
                  Our systems are built from the ground up with autonomy in mind - combining on-device AI, advanced sensor fusion, and modular hardware to create robots that adapt to real environments, not just controlled demos.
                </p>
                <p className="text-base text-[var(--color-text-muted)] leading-[1.8]">
                  Today, Robotflow operates across logistics, manufacturing, and research sectors, with offices in San Francisco and Seoul. We remain committed to one principle: that intelligent automation should be accessible, reliable, and built to last.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: heading */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                  Milestones
                </span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading mb-6">
                  Our Journey
                </h2>
              </div>
              {/* Right: timeline items */}
              <div className="space-y-0 pt-2">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative flex gap-8 pb-16 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-mono text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="mt-2 w-px flex-1 bg-[var(--color-border)]" />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)] block mb-2">
                        {item.year}
                      </span>
                      <p className="text-sm text-[var(--color-text-muted)] leading-[1.6]">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-[var(--color-bg-secondary)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                Leadership
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading">
                Meet Our Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group flex flex-col">
                  {/* Profile image */}
                  <div className="w-full aspect-square overflow-hidden rounded-[48px] bg-[var(--color-bg-secondary)] mb-5 border border-transparent group-hover:border-[var(--color-accent)]/20 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-1 font-heading transition-colors group-hover:text-[var(--color-accent)]">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)] mb-3 block">
                    {member.role}
                  </span>
                  <p className="text-sm text-[var(--color-text-muted)] leading-[1.2]">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </TemplateWrapper>
  )
}
