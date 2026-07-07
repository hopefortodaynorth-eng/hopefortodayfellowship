import { Suspense } from 'react';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import PageIntro from '@/components/PageIntro';
import ContactForm from '@/components/ContactForm';
import ConnectForm from '@/components/ConnectForm';
import ConnectJoinScroll from '@/components/ConnectJoinScroll';

export default function ConnectPage() {
  return (
    <div>
      <Suspense fallback={null}>
        <ConnectJoinScroll />
      </Suspense>
      <PageIntro
        eyebrow="STAY IN TOUCH"
        title="Reach Out & Connect"
        description="Plan your visit, send us a message, or join E-Connect to stay close to what God is doing in our church family."
      />

      <div className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        <section>
          <div className="text-center mb-10">
            <div className="page-eyebrow">VISIT US</div>
            <h2 className="section-title mt-2">Find Us in Sutton</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-xl border border-neutral-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-3">
                <FaMapMarkerAlt className="text-primary-500 shrink-0" />
                Location
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                34 Market Street<br />
                Sutton, ON L0E 1R0<br />
                Canada
              </p>
            </div>

            <div className="bg-white rounded-xl border border-neutral-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-3">
                <FaPhone className="text-primary-500 shrink-0" />
                Phone
              </div>
              <a href="tel:9055550123" className="text-sm text-primary-600 hover:underline">
                (905) 555-0123
              </a>
            </div>

            <div className="bg-white rounded-xl border border-neutral-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-3">
                <FaEnvelope className="text-primary-500 shrink-0" />
                Email
              </div>
              <a href="mailto:info@hopefortodaynorth.ca" className="text-sm text-primary-600 hover:underline break-all">
                info@hopefortodaynorth.ca
              </a>
            </div>

            <div className="bg-white rounded-xl border border-neutral-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-3">
                <FaClock className="text-primary-500 shrink-0" />
                Office Hours
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Sundays<br />
                3:00 PM – 7:00 PM
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <div className="font-medium text-neutral-900">Pastor Gianluca Amaral</div>
              <a
                href="mailto:gianluca@hopefortodaynorth.ca"
                className="text-primary-600 hover:underline block text-sm mt-1"
              >
                gianluca@hopefortodaynorth.ca
              </a>
              <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                Available for pastoral care, questions, or a coffee chat.
              </p>
            </div>

            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-neutral-100 h-[280px] relative bg-neutral-200 shadow-sm">
              <iframe
                title="Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4!2d-79.4!3d44.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDE4JzAwLjAiTiA3OcKwMjQnMDAuMCJX!5e0!3m2!1sen!2sca!4v1690000000000"
                allowFullScreen
              />
              <div className="absolute bottom-3 left-3 bg-white/95 text-xs px-3 py-1 rounded shadow-sm">
                34 Market St, Sutton, ON
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200/70 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-14">
            <div>
              <div className="page-eyebrow mb-2">SEND A MESSAGE</div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-3">
                Questions &amp; Prayer Requests
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-md">
                Whether you&apos;re planning your first visit or need someone to pray with you, we&apos;d love to hear from you.
              </p>
              <ContactForm />
            </div>

            <div id="join-our-church-family" className="scroll-mt-28">
              <div className="page-eyebrow mb-2">E-CONNECT</div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-3">
                Join Our Church Family
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-md">
                Sign up for weekly updates on sermons, events, prayer needs, and ways to get involved.
              </p>
              <ConnectForm />
              <p className="mt-4 text-center text-xs text-neutral-500">
                Already signed up? Reply to any email from us to update your preferences.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}