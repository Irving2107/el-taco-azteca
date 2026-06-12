import { Link } from "react-router-dom";
import { translations } from "../translations";

export default function ThankYou({
  language, setLanguage
}) {
  const t = translations[language];

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
      <div className="absolute top-6 right-6">

        <button
          onClick={() =>
            setLanguage(
              language === "en"
                ? "es"
                : "en"
            )
          }
          className="
            bg-white/80
            px-4 py-2
            rounded-full
          "
        >
          {language === "en"
            ? "ES"
            : "EN"}
        </button>

      </div>
      <div className="relative inset-0">
        <div className="relative z-10 bg-stone-100 rounded-3xl shadow-xl p-12 max-w-2xl text-center">

          <h1 className="text-5xl font-bold font-cormorant mb-6">
            {t.thankyouTitle}
          </h1>

          <p className="text-lg text-neutral-700 mb-8">
            {t.thankyouMessage}
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
            ←{t.returnHome}
          </Link>

        </div>
      </div>
    </div>
  );
}