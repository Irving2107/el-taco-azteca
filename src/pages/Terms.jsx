import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* BANNER */}
      <div
        className="
          h-64
          flex items-center justify-center
          bg-cover bg-center
          relative
        "
        style={{
          backgroundImage: "url('/menu-banner.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative text-6xl font-bold font-cormorant text-white">
          Terms & Conditions
        </h1>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-20">

        <div className="
          max-w-4xl mx-auto
          bg-white rounded-3xl
          shadow-2xl p-8 md:p-12
          -mt-20 relative z-10
        ">

          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <h1 className="text-5xl font-cormorant font-bold mb-2 text-black">
              Terms & Conditions
            </h1>

            <p className="text-neutral-500 mb-8">
              Effective Date: June 2026
            </p>

            <p>
              Welcome to El Taco Azteca. These Terms & Conditions govern your
              use of this website. By accessing or using this website, you
              agree to comply with these terms. If you do not agree with any
              part of these terms, please discontinue use of the website.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              Website Information
            </h2>

            <p>
              The information provided on this website is intended for general
              informational purposes only. While we strive to keep all content
              accurate and up to date, we make no guarantees regarding the
              completeness or accuracy of the information presented.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              Contact Form Usage
            </h2>

            <p>
              Information submitted through our contact form should be accurate
              and lawful. Submission of the form does not guarantee a response,
              booking, catering service, or event availability.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              Availability of Services
            </h2>

            <p>
              Catering services, event bookings, menu offerings, and operating
              locations are subject to availability and may change without
              notice.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              Intellectual Property
            </h2>

            <p>
              All website content, including logos, photographs, graphics,
              text, branding, and other materials, is owned by El Taco Azteca
              unless otherwise noted. Unauthorized use, reproduction, or
              distribution of website content is prohibited.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              External Links
            </h2>

            <p>
              This website may contain links to third-party websites or social
              media platforms. El Taco Azteca is not responsible for the
              content, policies, or practices of those external sites.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              Limitation of Liability
            </h2>

            <p>
              El Taco Azteca is not liable for any direct, indirect,
              incidental, or consequential damages resulting from the use
              of this website or reliance on information provided through it.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              Changes to These Terms
            </h2>

            <p>
              We reserve the right to modify these terms at any time without
              prior notice. Continued use of this website constitutes
              acceptance of any updates or changes.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              Contact Information
            </h2>

            <p>
              Questions regarding these Terms & Conditions may be submitted
              through the contact form available on this website.
            </p>

          </div>

          <div className="border-t border-neutral-200 pt-8 mt-10">
            <p className="text-sm text-neutral-500 text-center">
              Last updated: June 2026
            </p>
          </div>

          {/* RETURN HOME BUTTON */}
          <div className="mt-12 text-center">

            <Link
              to="/"
              title="Go Home"
              className="
                inline-flex items-center gap-2
                bg-black text-white
                px-8 py-4
                rounded-full
                hover:bg-neutral-800
                hover:text-green-500
                transition duration-300
                shadow-lg
              "
            >
              ←Return Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}