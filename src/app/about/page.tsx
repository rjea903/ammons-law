import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About R.J. Ammons | Ammons Law Offices",
  description: "Learn more about R.J. Ammons, Trial Lawyer at Ammons Law Offices, PLLC in Waco, Texas.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">About RJ Ammons</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            {/* Introduction */}
            <p className="text-xl leading-relaxed mb-8">
              RJ Ammons graduated from Baylor Law School in Waco, Texas in 2021. He returned
              in August 2024 to begin practicing law as a trial lawyer.
            </p>

            {/* Early Years */}
            <h2 className="text-2xl font-bold text-navy mb-4 mt-10">Early Years</h2>
            <p className="leading-relaxed mb-6">
              Originally from Houston, he distinguished himself in both athletics and academics
              during his formative years. In high school, RJ was elected captain of the track
              team when his 9:03 two-mile time made him the fastest high school runner in Texas
              and then graduated Magna Cum Laude from Strake Jesuit College Preparatory.
            </p>

            {/* Education */}
            <h2 className="text-2xl font-bold text-navy mb-4 mt-10">Education</h2>
            <p className="leading-relaxed mb-6">
              RJ Ammons went on to Harvard College, where he studied Economics and Government.
              He then came to Waco and graduated Cum Laude from Baylor Law School. During his
              tenure at Baylor Law, he was an active member of the Baylor Barrister Society,
              competed on multiple advocacy teams, and won Best Negotiation for Seller&apos;s
              Counsel at the 2021 UCLA Transactional Law Competition.
            </p>

            {/* Professional Experience */}
            <h2 className="text-2xl font-bold text-navy mb-4 mt-10">Professional Experience</h2>
            <p className="leading-relaxed mb-6">
              While in school RJ gained a passion for entrepreneurship after joining the founding
              team of a mobile app, Seated. The passion drove him to launch an investment company
              and a consulting company that successfully advised early stage founders on raising
              more than $2.4 million across three ventures in the technology and healthcare industries.
            </p>
            <p className="leading-relaxed mb-6">
              Following his academic pursuits, RJ joined the Global Banking &amp; Markets Division
              of Goldman Sachs. While working as a lawyer and negotiator for Goldman, RJ
              collaborated with investment bankers, traders, and risk managers to provide the
              bank&apos;s clients with billions of dollars in financing for fixed-income and equity
              securities portfolios, including government bonds, structured products, and derivatives.
            </p>
            <p className="leading-relaxed mb-6">
              When RJ decided to start working as a trial lawyer for people, RJ moved back to
              Waco and practiced at Dunnam &amp; Dunnam for a year, where he gained exposure to
              all areas of the firm&apos;s general practice.
            </p>

            {/* Personal */}
            <h2 className="text-2xl font-bold text-navy mb-4 mt-10">Personal</h2>
            <p className="leading-relaxed mb-8">
              RJ spends his free time with family and friends, playing golf, and volunteering
              as Director of the McLennan County Young Lawyers Association.
            </p>

            {/* Contact CTA */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
              <h3 className="text-xl font-bold text-navy mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                For inquiries or to schedule a consultation, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:website@rjammons.com"
                  className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy-dark transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
