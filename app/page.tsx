import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      {/* HERO - Strong & Impactful */}
      <section className="relative min-h-[calc(100dvh-5rem)] flex flex-col">
        <div className="relative z-20 flex items-center gap-5 md:gap-10 px-6 md:px-10 pt-6 md:pt-8">
          <div className="shrink-0 w-24 md:w-32 lg:w-36" aria-hidden="true" />
          <div className="min-w-0 text-left max-w-4xl">
            <h1 className="page-title--hero leading-[1.05]">
              <span className="block">Hope For Today Fellowship</span>
              <span className="block mt-1 md:mt-2 text-[0.5em] font-normal tracking-wide text-neutral-800">
                Sutton
              </span>
            </h1>
            <p className="page-eyebrow mt-2 md:mt-3 text-xs sm:text-sm md:text-base tracking-[0.18em]">
              The Cross The Empty Tomb Our Hope
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 page-eyebrow flex flex-col items-center">
          SCROLL TO BEGIN <span className="text-lg mt-px">↓</span>
        </div>
      </section>

      <div className="sunday-invite-banner">
        <p>JOIN US SUNDAYS AT 5:00 PM — CAN&apos;T WAIT TO MEET YOU!</p>
        <Link href="/connect" className="sunday-invite-banner__address group">
          34 Market St, Sutton, Ontario
          <FaArrowRight className="transition group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* THREE PILLARS - Adapted from reference inspiration */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="page-eyebrow mb-2">OUR HEART</div>
          <h2 className="section-title">The Cross • The Empty Tomb • Our Hope</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Love God Deeply",
              desc: "We gather to worship the living God who gave His Son for us. The Cross shows the depth of His love.",
              icon: "✝",
            },
            {
              title: "Love Others Authentically",
              desc: "The Empty Tomb changes everything. We live with real hope and extend genuine care to our neighbours.",
              icon: "🤝",
            },
            {
              title: "Share Christ Joyfully",
              desc: "Hope is not wishful thinking—it is the sure knowledge that Christ died, rose, and reigns. We joyfully proclaim Jesus to Sutton and beyond.",
              icon: "☀",
            },
          ].map((pillar, i) => (
            <div key={i} className="card text-center">
              <div className="text-4xl mb-5 text-primary-500">{pillar.icon}</div>
              <h3 className="font-semibold text-2xl tracking-tight mb-3 text-neutral-800">{pillar.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE TIMES & LOCATION */}
      <section className="bg-white/80 backdrop-blur-sm py-16 border-y border-neutral-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 items-center">
            <div>
              <div className="page-eyebrow mb-3">JOIN US THIS SUNDAY</div>
              <h2 className="section-title mb-6">Sundays at 5:00 PM</h2>
              
              <div className="space-y-4 text-lg">
                <div className="flex gap-4 items-start">
                  <FaClock className="mt-1.5 text-primary-500" size={21} />
                  <div>
                    <div className="font-medium">Sunday Gathering</div>
                    <div className="text-neutral-600">5:00 PM — Worship, Teaching &amp; Prayer</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FaMapMarkerAlt className="mt-1.5 text-primary-500" size={21} />
                  <div>
                    <div className="font-medium">34 Market Street</div>
                    <div className="text-neutral-600">Sutton, Ontario L0E 1R0</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FaUsers className="mt-1.5 text-primary-500" size={21} />
                  <div>
                    <div className="font-medium">Everyone Is Welcome</div>
                    <div className="text-neutral-600">Come as you are — can&apos;t wait to meet you.</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/connect" className="btn-primary">Get Directions</Link>
                <Link href="/sermons" className="btn-outline">Watch Livestream</Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-9 shadow-sm border border-neutral-100">
              <div className="font-medium text-xl mb-2 text-neutral-900">A Sister Church</div>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Hope For Today Fellowship Sutton partners with Hope For Today Fellowship in Keswick.
                We share the same heart for the gospel and a passion to see lives transformed by the hope of Jesus Christ.
              </p>
              <Link href="/about" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 group">
                Learn more about our story <FaArrowRight className="ml-2 group-hover:translate-x-0.5 transition" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* E-CONNECT */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="mx-auto max-w-xl">
          <div className="page-eyebrow mb-2">STAY CONNECTED</div>
          <h2 className="section-title mb-4">Stay connected with the Hope For Today Fellowship Sutton family</h2>
          <p className="text-neutral-600 mb-8">Receive weekly encouragement, prayer requests, and updates about what God is doing in our community.</p>
        </div>

        <Link href="/connect" className="btn-accent inline-flex text-base px-14 py-4">
          SIGN UP FOR E-CONNECT
        </Link>
        <p className="text-xs text-neutral-500 mt-4">We respect your inbox. Unsubscribe anytime.</p>
      </section>

      {/* MINISTRIES PREVIEW */}
      <section className="bg-white/80 backdrop-blur-sm py-16 border-t border-neutral-200/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-9">
            <div>
              <div className="page-eyebrow">GET INVOLVED</div>
              <h2 className="section-title">Ministries &amp; Community</h2>
            </div>
            <Link href="/ministries" className="mt-4 md:mt-0 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
              Explore all ministries <FaArrowRight className="ml-1.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sunday Worship", desc: "Our weekly gathering — Christ-centered worship, teaching from Scripture, prayer, and warm community. Sundays at 5:00 PM." },
              { title: "Children's Ministry", desc: "A safe, fun, gospel-centered environment for children during the Sunday service." },
              { title: "Women's Ministry", desc: "Women supporting one another through Bible study, prayer, and life together." },
              { title: "Men's Ministry", desc: "Men gathering to grow in faith, accountability, and friendship through Bible study and life together." },
              { title: "Community Groups", desc: "Small groups meeting throughout the week for study and friendship." },
              { title: "Outreach", desc: "Serving our community through practical acts of love, local partnerships, and coming alongside people in need." },
            ].map((m, idx) => (
              <div key={idx} className="ministry-card p-8">
                <h4 className="font-semibold text-xl mb-3">{m.title}</h4>
                <p className="text-neutral-600 mb-5">{m.desc}</p>
                <Link href="/ministries" className="text-sm font-medium text-primary-600">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-site-nav text-white text-center">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Come and see what God is doing.</h2>
          <p className="mb-8 text-neutral-300">Can&apos;t wait to meet you this Sunday at 5 PM.</p>
          <Link href="/connect" className="nav-btn text-base px-9 py-3">Plan Your Visit</Link>
        </div>
      </section>
    </div>
  );
}
