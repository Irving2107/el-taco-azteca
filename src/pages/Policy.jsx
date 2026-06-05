import { Link } from "react-router-dom";

export default function Policy() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div
        className="
        relative
        h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/menu-banner.webp')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative text-5xl text-white font-cormorant font-bold">
          Privacy Policy
        </h1>
      </div>
      <div className="
        max-w-4xl mx-auto
        bg-white rounded-3xl
        shadow-2xl p-8 md:p-12
        -mt-20 relative z-10
      ">

        <h1 className="text-5xl font-cormorant font-bold mb-8">
          Privacy Policy
        </h1>

        <p className="text-neutral-500 mb-8">
          Effective Date: June 2026
        </p>

        <div className="space-y-6 text-neutral-700 leading-relaxed">

          <p>
            El Taco Azteca values your privacy. This policy explains how we collect, use, and protect your information when you use our website and services.
            By using our website, you consent to the practices described in this policy.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Information We Collect
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Information voluntarily included in messages</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black">
            How We Use Information
          </h2>

          <p>
            Information is used solely to respond to inquiries,
            catering requests, event bookings, and customer support.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Cookies & Analytics
          </h2>

          <p>
            This website may use standard browser technologies
            such as cookies and analytics tools to improve
            website performance and user experience.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Data Security
          </h2>

          <p>
            We take reasonable measures to protect information
            submitted through this website. However, no method
            of electronic transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Third-Party Services
          </h2>

          <p>
            This website uses Formspree to process contact form
            submissions. Information submitted through the form
            may be processed by Formspree according to their policies.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Changes to This Policy
          </h2>

          <p>
            We may update this Privacy Policy periodically.
            Any changes will be posted on this page along
            with the updated effective date.
          </p>

          <h2 className="text-2xl font-semibold text-black">
            Contact
          </h2>

          <p>
            If you have questions regarding this policy,
            please contact El Taco Azteca through the website contact form.
          </p>

        </div>

      </div>
      <div className="mt-10 text-center">
        <Link
          to="/"
          title="Go Home"
          className="
            inline-flex items-center gap-2
            bg-black text-white
            px-8 py-4
            rounded-full
            hover:bg-neutral-800
            transition duration-300
            shadow-lg hover:shadow-xl
            hover:text-green-500
          "
        >
          ←Return Home
        </Link>
      </div>
    </div>
  );
}