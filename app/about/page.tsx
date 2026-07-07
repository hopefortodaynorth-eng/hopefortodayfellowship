import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import PageIntro from '@/components/PageIntro';

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        eyebrow="OUR STORY"
        title="About Hope For Today Fellowship Sutton"
        description="Called to proclaim the hope found in Jesus Christ."
      />

      <div className="max-w-5xl mx-auto px-6 pb-14">

      <div className="prose prose-lg max-w-3xl mx-auto text-neutral-700">
        <p>
          Hope For Today Fellowship Sutton is in beautiful Sutton, Ontario on the south shore of Lake Simcoe.
          We are a sister church to <strong>Hope For Today Fellowship</strong> in Keswick, Ontario — sharing the same passion to see lives transformed by the gospel of Jesus Christ.
        </p>
        <p>
          We believe that the message of the Cross and the Empty Tomb is the greatest hope anyone can receive. Our desire is to be a welcoming community where people can encounter the living Jesus, grow in their faith, and be equipped to love their neighbours well.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="mt-14">
        <div className="text-center mb-6">
          <div className="page-eyebrow">OUR CALLING</div>
          <h2 className="section-title mt-1">Our Mission</h2>
        </div>
        <div className="max-w-3xl mx-auto text-neutral-700 space-y-5 leading-relaxed">
          <p>
            Hope For Today Fellowship Sutton has been called into being to reach out to the lost of the community of Sutton and surrounding areas. GOD wants us to live our lives in a way that would bring glory to GOD which would include shining as lights in this dark world and shining in such a way that the world would see our good works and glorify our Heavenly Father. GOD wants us to reach out in a tangible way to our community but always including the Gospel of Jesus. We want to care for the community of Sutton and help families according to their needs.
          </p>
          <p>
            In regards to our faith we must be willing to be stretched beyond our natural abilities so that we have to depend upon GOD to see this ministry fulfilled. Without the Holy Spirit this ministry will fail. In having our faith stretched we will see GOD work in us and thru us in ways that only the Holy Spirit can do.
          </p>
          <p>
            At Hope For Today Fellowship Sutton we see growing gospel-centered fellowship as a priority. Making disciples who make disciples is a New Testament formula and one that we wish to follow.
          </p>
        </div>
      </div>

      {/* Pastor Section */}
      <div className="mt-16 mb-10">
        <div className="text-center mb-8">
          <div className="page-eyebrow">PASTOR &amp; LEADER</div>
          <h2 className="section-title mt-2">Pastor Gianluca Amaral</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center bg-white border border-neutral-100 rounded-2xl p-9 md:p-10 shadow-sm">
          <div className="md:col-span-2">
            <div className="aspect-[4/3] w-full bg-neutral-100 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" 
                alt="Pastor Gianluca Amaral" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="md:col-span-3 text-neutral-700">
            <p className="text-lg">
              Gianluca has a deep love for the local church and a heart to see the hope of Jesus reach people right where they live. 
              He is excited to serve in Sutton in partnership with the Hope For Today Fellowship family in Keswick.
            </p>
            <p className="mt-5">
              With a passion for clear, gospel-centered teaching and authentic community, Gianluca&apos;s desire is that every person who walks through our doors would know they are loved and that real hope is available in Christ.
            </p>

            <a 
              href="mailto:gianluca@hopefortodaynorth.ca" 
              className="mt-7 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <FaEnvelope /> gianluca@hopefortodaynorth.ca
            </a>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold tracking-tight">Our Vision</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 text-[15px]">
          <div className="card">
            <div className="font-medium mb-2 text-lg">Reach Sutton with Hope</div>
            <p className="text-neutral-600">To establish a gospel presence in Sutton and the surrounding area that helps people far from God find life, purpose, and belonging in Jesus.</p>
          </div>
          <div className="card">
            <div className="font-medium mb-2 text-lg">Raise Up Disciples</div>
            <p className="text-neutral-600">We are committed to making disciples who love God deeply, love others well, and joyfully share the hope of the gospel with their friends and neighbours.</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/connect" className="btn-primary">Connect with Pastor Gianluca</Link>
      </div>
      </div>
    </div>
  );
}
