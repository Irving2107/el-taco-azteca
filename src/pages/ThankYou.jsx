import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div
      className="
      relative min-h-screen flex items-center
      justify-center px-6
    "
    >
      {/* background image with dark overlay */}
      <div
        className="
          absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/contact-background.webp')",
        }}
      ></div>
      <div className="relative inset-0">
        <div className="relative z-10 bg-stone-100 rounded-3xl shadow-xl p-12 max-w-2xl text-center">

          <h1 className="text-5xl font-bold font-cormorant mb-6">
            Thank You!
          </h1>

          <p className="text-lg text-neutral-700 mb-8">
            We appreciate you reaching out to El Taco Azteca.
            Your message has been received. Whether you're reaching out about catering,
            a private event, or simply have a question about our menu, we'll get back
            to you as soon as possible.
          </p>

          <Link
            to="/"
            className="
            inline-block
            bg-black text-white
            px-8 py-4
            rounded-full
            hover:bg-neutral-800
            transition
          "
          >
            Return Home
          </Link>

        </div>
      </div>
    </div>
  );
}