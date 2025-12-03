import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="The Law Offices of R. J. Ammons"
              width={400}
              height={200}
              className="mx-auto"
              priority
            />
          </div>

          {/* Firm Name */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            The Law Offices of R. J. Ammons
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            Ammons Law Offices, PLLC
          </p>
          <p className="text-gray-500">
            Waco, Texas
          </p>

        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">
            Welcome
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to The Law Offices of R. J. Ammons. We are dedicated to providing
            professional legal services to clients primarily in Waco, Texas and throughout the State.
          </p>
        </div>
      </section>
    </main>
  );
}
