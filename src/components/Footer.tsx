import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              The Law Offices of R. J. Ammons
            </h3>
            <p className="text-gray-300 text-sm">
              Ammons Law Offices, PLLC
            </p>
            <p className="text-gray-300 text-sm">
              Waco, Texas
            </p>
            <p className="text-gray-300 text-sm">
              Houston, Texas
            </p>
            <p className="text-gray-300 text-sm">
              Dallas, Texas
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:website@rjammons.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Email: website@rjammons.com
                </a>
              </li>
              <li>
                <a
                  href="https://rjammons.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Website: rjammons.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-light mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ammons Law Offices, PLLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
