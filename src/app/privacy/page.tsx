import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ammons Law Offices",
  description: "Privacy Policy for Ammons Law Offices, PLLC in Waco, Texas.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="bg-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: October 29, 2025
            </p>

            {/* Who We Are */}
            <h2 className="text-2xl font-bold text-navy mb-4">Who We Are</h2>
            <p className="leading-relaxed mb-4">
              This Privacy Policy describes how Ammons Law Offices, PLLC, doing business as
              The Law Offices of R. J. Ammons (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses,
              and protects your personal information.
            </p>
            <ul className="list-none space-y-2 mb-8">
              <li>Our website address is: <a href="https://rjammons.com" className="text-navy hover:underline">https://rjammons.com</a></li>
              <li>You can access this Privacy Policy at: <a href="https://rjammons.com/privacy" className="text-navy hover:underline">https://rjammons.com/privacy</a></li>
            </ul>

            {/* Comments */}
            <h2 className="text-2xl font-bold text-navy mb-4">Comments</h2>
            <p className="leading-relaxed mb-4">
              When visitors leave comments on the site, we collect the data shown in the comments
              form, along with the visitor&apos;s IP address and browser user agent string to help detect spam.
            </p>
            <p className="leading-relaxed mb-8">
              An anonymized string created from your email address (also called a hash) may be
              provided to the Gravatar service to determine if you are using it. After your comment
              is approved, your profile picture (if any) is visible to the public in the context of your comment.
            </p>

            {/* Media */}
            <h2 className="text-2xl font-bold text-navy mb-4">Media</h2>
            <p className="leading-relaxed mb-8">
              If you upload images to the website, avoid uploading images with embedded location data
              (EXIF GPS). Visitors to the website can download and extract location data from images on the site.
            </p>

            {/* Cookies */}
            <h2 className="text-2xl font-bold text-navy mb-4">Cookies</h2>
            <p className="leading-relaxed mb-4">
              If you leave a comment on our site, you may opt in to saving your name, email address, and
              website in cookies for convenience so that you do not have to fill in your details again for
              future comments. These cookies will last for one year.
            </p>
            <p className="leading-relaxed mb-4">
              If you visit our login page, a temporary cookie will be set to determine if your browser
              accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
            </p>
            <p className="leading-relaxed mb-4">
              When you log in, we will also set up several cookies to save your login information and
              screen display preferences. Login cookies last for two days, and screen option cookies last
              for one year. Selecting &quot;Remember Me&quot; will keep your login active for two weeks. Logging out
              removes login cookies.
            </p>
            <p className="leading-relaxed mb-8">
              If you edit or publish an article, an additional cookie will be saved in your browser.
              This cookie includes no personal data and simply indicates the post ID of the article you
              edited. It expires after one day.
            </p>

            {/* Embedded Content */}
            <h2 className="text-2xl font-bold text-navy mb-4">Embedded Content from Other Websites</h2>
            <p className="leading-relaxed mb-4">
              Articles on this site may include embedded content (e.g., videos, images, articles, etc.).
              Embedded content from other websites behaves in the same way as if you had visited those websites directly.
            </p>
            <p className="leading-relaxed mb-8">
              These websites may collect data about you, use cookies, embed additional third-party tracking,
              and monitor your interaction with that embedded content, including tracking your interaction
              if you have an account and are logged in to that website.
            </p>

            {/* Who We Share Data With */}
            <h2 className="text-2xl font-bold text-navy mb-4">Who We Share Your Data With</h2>
            <p className="leading-relaxed mb-4">
              If you request a password reset, your IP address will be included in the reset email.
            </p>
            <p className="leading-relaxed mb-8">
              We do not sell, rent, or trade your personal information to third parties. We may share
              limited information with trusted service providers who help operate our website or deliver
              communications, under confidentiality agreements.
            </p>

            {/* Data Retention */}
            <h2 className="text-2xl font-bold text-navy mb-4">How Long We Retain Your Data</h2>
            <p className="leading-relaxed mb-4">
              If you leave a comment, the comment and its metadata are retained indefinitely to allow
              automatic approval of follow-up comments instead of holding them in a moderation queue.
            </p>
            <p className="leading-relaxed mb-8">
              For users who register on our website (if applicable), we also store the personal information
              they provide in their user profile. All users can see, edit, or delete their personal
              information at any time (except their username). Website administrators can also view and edit that information.
            </p>

            {/* Your Rights */}
            <h2 className="text-2xl font-bold text-navy mb-4">What Rights You Have Over Your Data</h2>
            <p className="leading-relaxed mb-8">
              If you have an account on this site or have left comments, you may request to receive an
              exported file of the personal data we hold about you, including any data you&apos;ve provided to us.
              You may also request that we erase any personal data we hold about you, except for data we are
              obliged to keep for administrative, legal, or security purposes.
            </p>

            {/* Where Data Is Sent */}
            <h2 className="text-2xl font-bold text-navy mb-4">Where Your Data Is Sent</h2>
            <p className="leading-relaxed mb-8">
              Visitor comments may be checked through an automated spam detection service.
            </p>

            {/* SMS/MMS */}
            <h2 className="text-2xl font-bold text-navy mb-4">SMS/MMS Consent and Communication</h2>
            <p className="leading-relaxed mb-4">
              If you submit your phone number through our contact form or webform to receive SMS or MMS
              messages, you consent to receiving communications from The Law Offices of R. J. Ammons.
              Message and data rates may apply. You can opt out of SMS/MMS communications at any time by
              replying &quot;STOP.&quot;
            </p>
            <p className="leading-relaxed mb-4">
              The webform for consent is located at: <a href="https://rjammons.com/contact" className="text-navy hover:underline">https://rjammons.com/contact</a> and
              clearly links to this Privacy Policy.
            </p>
            <p className="leading-relaxed mb-8">
              Mobile phone contact information will not be shared or sold to third parties for marketing purposes.
            </p>

            {/* Data Protection */}
            <h2 className="text-2xl font-bold text-navy mb-4">How We Protect Your Data</h2>
            <p className="leading-relaxed mb-8">
              We implement reasonable administrative, technical, and physical safeguards to protect your
              personal information from unauthorized access, disclosure, alteration, or destruction.
              However, no internet transmission is ever fully secure, and we cannot guarantee absolute security.
            </p>

            {/* CCPA Notice */}
            <h2 className="text-2xl font-bold text-navy mb-4">California Consumer Privacy Act (CCPA/CPRA) Notice</h2>
            <p className="leading-relaxed mb-4">
              This section applies solely to visitors, users, and others who reside in the State of California.
              We adopt this notice to comply with the California Consumer Privacy Act (CCPA) as amended by the
              California Privacy Rights Act (CPRA).
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Information We Collect</h3>
            <p className="leading-relaxed mb-4">
              In the past 12 months, we may have collected the following categories of personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Identifiers such as your name, email address, phone number, and IP address</li>
              <li>Internet or other electronic network activity information, including browser type, pages visited, and interactions with our website</li>
              <li>Professional or employment-related information if you contact us in a professional capacity</li>
            </ul>
            <p className="leading-relaxed mb-6">
              We do not sell personal information.
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Your California Privacy Rights</h3>
            <p className="leading-relaxed mb-4">California residents have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Request disclosure of what personal information we collect, use, and share.</li>
              <li>Request deletion of your personal information, subject to legal exceptions.</li>
              <li>Opt out of the sale or sharing of your personal data (we do not sell personal information).</li>
              <li>Correct inaccurate personal data.</li>
              <li>Limit the use of sensitive personal information (if applicable).</li>
            </ul>

            <p className="leading-relaxed mb-4">To exercise these rights, please contact us at:</p>
            <ul className="list-none space-y-2 mb-6">
              <li>
                <a href="mailto:privacy@rjammons.com" className="text-navy hover:underline">
                  privacy@rjammons.com
                </a>
              </li>
              <li>
                <a href="tel:254-249-1438" className="text-navy hover:underline">
                  254-249-1438
                </a>
              </li>
              <li>Or submit a request through our contact form at: <a href="https://rjammons.com/contact" className="text-navy hover:underline">https://rjammons.com/contact</a></li>
            </ul>
            <p className="leading-relaxed mb-8">
              We will verify your identity before processing any request and will respond within the
              timeframe required by California law.
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Non-Discrimination</h3>
            <p className="leading-relaxed mb-8">
              We will not discriminate against you for exercising any of your CCPA/CPRA rights.
            </p>

            {/* Changes to Policy */}
            <h2 className="text-2xl font-bold text-navy mb-4">Changes to This Privacy Policy</h2>
            <p className="leading-relaxed mb-8">
              We may update this Privacy Policy from time to time to reflect changes in our practices
              or for other operational, legal, or regulatory reasons. The updated version will always
              be posted at <a href="https://rjammons.com/privacy" className="text-navy hover:underline">https://rjammons.com/privacy</a> with
              a revised &quot;Last Updated&quot; date.
            </p>

            {/* Contact Information */}
            <h2 className="text-2xl font-bold text-navy mb-4">Contact Information</h2>
            <p className="leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="font-semibold text-navy mb-3">The Law Offices of R. J. Ammons</p>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:privacy@rjammons.com" className="text-navy hover:underline">
                    privacy@rjammons.com
                  </a>
                </li>
                <li>
                  <a href="tel:254-249-1438" className="text-navy hover:underline">
                    254-249-1438
                  </a>
                </li>
                <li>
                  <a href="https://rjammons.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:underline">
                    https://rjammons.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
