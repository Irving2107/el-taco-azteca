import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { translations } from "../translations";

export default function Home({
  language, setLanguage
}) {
  const [activeItem, setActiveItem] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const t = translations[language];

  const menuItems = [
    {
      title: "Tacos",
      image: "/tacos.webp",
      description: t.tacoDescription
    },
    {
      title: t.hardshellTacos,
      image: "/hardshell-tacos.webp",
      description: t.hardshellTacoDescription
    },
    {
      title: t.burritos,
      image: "/burritos.webp",
      description: t.burritoDescription
    },
    {
      title: t.empanadas,
      image: "/empanadas.webp",
      description: t.empanadaDescription
    },
    {
      title: t.nachos,
      image: "/nachos.webp",
      description: t.nachosDescription
    },
    {
      title: t.quesadilla,
      image: "/quesadillas.webp",
      description: t.quesadillaDescription
    },
    {
      title: t.walkingTacos,
      image: "/walking-taco.webp",
      description: t.walkingTacoDescription
    },
    {
      title: t.preparedCorn,
      image: "/corn.webp",
      description: t.preparedCornDescription
    },
    {
      title: t.crazyCorn,
      image: "/crazy-corn.webp",
      description: t.crazyCornDescription
    },
    {
      title: t.fruitCocktail,
      image: "/fruit-cocktail.webp",
      description: t.fruitCocktailDescription
    }
  ]

  const desktopSlides = [
    "/food-truck.webp",
    "/food-truck-2.webp",
    "/food-truck-3.webp"
  ];

  const mobileSlides = [
    "/mobile-1.webp",
    "/mobile-2.webp",
    "/mobile-3.webp"
  ];

  const heroImages = [
    "/food-truck.webp",
    "/food-truck-2.webp",
    "/food-truck-3.webp"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    const formData = new FormData(e.target);

    const response = await fetch(
      "https://formspree.io/f/xgoqbvgy",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      navigate("/thank-you");
    } else {
      alert("Something went wrong. Please try again.");
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="
      fixed top-0 left-0 w-full z-50
      flex items-center justify-between
      px-8 py-4
      bg-black/70 backdrop-blur-md
      border-b border-white/10
      "
      >
        <div
          className="
          absolute inset-0 opacity-13
          bg-cover bg-center
          "
          style={{
            backgroundImage: "url('/menu-banner.webp')"
          }}
        ></div>
        <div className="relative flex items-center justify-between w-full">
          {/* LEFT SIDE - LOGO */}
          <a href="#home" title={t.home}>
            <img
              src="/Logo.png"
              alt="El Taco AztecaLogo"
              className="h-12 w-auto cursor-pointer"
            />
          </a>

          {/* RIGHT SIDE - NAV LINKS */}
          <div className="flex gap-8 text-lg font-medium text-white">

            <a
              href="#menu"
              className="hover:text-green-500 transition"
              title={t.viewOurMenu}
            >
              {t.menu}
            </a>

            <a
              href="#contact"
              className="hover:text-green-500 transition"
              title={t.contactUs}
            >
              {t.contact}
            </a>

            <a
              href="#about"
              className="hover:text-green-500 transition"
              title={t.learnMore}
            >
              {t.about}
            </a>

            <button
              onClick={() =>
                setLanguage(
                  language === "en"
                    ? "es"
                    : "en"
                )
              }
              className="
                border border-white/30
                px-3 py-1 rounded-full
                hover:bg-white/20 hover:text-black
                transition
              "
            >
              {language === "en"
                ? "ES"
                : "EN"}
            </button>
          </div>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section
        id="home"
        className="
          h-screen relative overflow-hidden
          flex items-center justify-center
        "
      >
        {/* DESKTOP SLIDES */}
        <div className="hidden md:block absolute inset-0">
          {desktopSlides.map((slide, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 bg-cover bg-center
                transition-opacity duration-[2000ms]
                ${currentImage === index
                  ? "opacity-100"
                  : "opacity-0"
                }
              `}
              style={{
                backgroundImage: `url('${slide}')`
              }}
            />
          ))}
        </div>
        {/* MOBILE SLIDES */}
        <div className="block md:hidden absolute inset-0">
          {mobileSlides.map((slide, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 bg-cover
                transition-opacity duration-[2000ms]
                ${currentImage === index
                  ? "opacity-100"
                  : "opacity-0"
                }
              `}
              style={{
                backgroundImage: `url('${slide}')`,
                backgroundPosition: "center center",
              }}
            />
          ))}
        </div>
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* text container */}
        <div className="relative text-center text-white font-cormorant">

          {/* TITLE */}
          <h1 className="text-6xl font-bold animate-fadeIn">
            {t.heroTitle}
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-xl opacity-0 animate-fadeInDelay">
            {t.heroSubtitle}
          </p>

        </div>
      </section>

      {/* MENU SECTION FIX: TACOS PNG BY ADDING SIDES, QUESADILLAS PNG BY ADDING SALAD, FRUIT COCKTAILS PNG BY ADDING LIME WEDGE*/}
      <section
        id="menu"
        className="bg-white">

        {/* AZTEC BANNER */}
        <div
          className="
          h-64 flex items-center justify-center
          bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/aztec-banner-2.webp')"
          }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Title */}
          <h2 className="relative text-6xl font-bold font-cormorant text-white">
            {t.ourMenu}
          </h2>
        </div>

        {/* MENU GRID */}
        <div className="py-20 px-8 bg-white">

          {/* Mobile Instruction */}
          <div className="md:hidden text-center mb-8">
            <div className="inline-block bg-stone-100 px-4 py-2 rounded-full shadow-sm">
              <p className="text-sm text-neutral-700">
                👆{t.tapOnMenuItem}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10 max-w-7xl mx-auto">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveItem(activeItem === index ? null : index)
                }
                className={`
                  relative overflow-hidden
                  cursor-pointer group
                  h-80
                  flex flex-col items-center justify-center
                  ${index === 9 ? "md:col-start-2" : ""}
                `}
              >

                {/* IMAGE */}
                <div className="relative h-52 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={`
                      max-h-44 object-contain
                      transition duration-500 ease-out
                      drop-shadow-2xl

                      ${activeItem === index
                        ? "scale-110 opacity-30"
                        : "scale-100 opacity-100"
                      }

                      md:group-hover:scale-110
                      md:group-hover:opacity-30
                    `}
                  />

                  {/* NEW STICKER */}
                  {item.title === t.fruitCocktail && (
                    <div
                      className={`
                      absolute top-2 right-1
                      translate-x-1/2 -translate-y-1/2
                      bg-red-500 text-white text-sm font-bold
                      px-3 py-1 rounded-full shadow-lg rotate-24
                      transition duration-300

                      ${activeItem === index
                          ? "opacity-0"
                          : "opacity-100"
                        }

                      md:group-hover:opacity-0
                    `}
                    >
                      {t.new}
                    </div>
                  )}
                </div>

                {/* TITLE */}
                <h3
                  className={`
                    mt-4 text-2xl font-bold text-center
                    transition duration-300

                    ${activeItem === index
                      ? "opacity-0"
                      : "opacity-100"
                    }

                    md:group-hover:opacity-0
                  `}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION OVERLAY */}
                <div
                  className={`
                    absolute inset-0
                    bg-black/75 text-white
                    flex items-center justify-center
                    text-center p-6
                    backdrop-blur-sm
                    transition-all duration-500

                    ${activeItem === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                    }

                    md:translate-y-full md:opacity-0
                    md:group-hover:translate-y-0
                    md:group-hover:opacity-100
                  `}
                >
                  <p className="text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>


              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-white">
        {/* CONTACT BANNER */}
        <div
          className="
          h-56 flex flex-col items-center justify-center
          bg-cover bg-center relative text-center px-6
          "
          style={{
            backgroundImage: "url('/contact-banner-2.webp')"
          }}
        >

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/*content */}
          <div className="relative text-white">
            <h2 className="text-5xl font-bold mb-4 font-cormorant">
              {t.contactTitle}
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl">
              {t.contactSubtitle}
            </p>
          </div>
        </div>

        {/* FORM
        FIX: add functions to form, add success message, add validation, make mobile responsive
        */}
        <div className=" relative overflow-hidden bg-cover bg-center flex items-center justify-center px-6 py-20">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/contact-background.webp')",
            }}
          ></div>

          <div className="relative z-10">
            <form
              onSubmit={handleSubmit}
              className="
              w-full max-w-4xl space-y-6
              bg-white rounded-3xl
              shadow-xl p-10
              "
            >

              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* NAME */}
                <div>
                  <label className="block mb-2 font-medium">
                    {t.fullName}
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="ex: John Smith"
                    className="
                    w-full
                    rounded-full
                    border border-black/20
                    px-6 py-4
                    outline-none
                    focus:border-black
                    transition
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block mb-2 font-medium">
                    {t.email}
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="
                    w-full
                    rounded-full
                    border border-black/20
                    px-6 py-4
                    outline-none
                    focus:border-black
                    transition
                    "
                  />
                </div>

              </div>

              {/* ROW 2 */}
              <div>
                <label className="block mb-2 font-medium">
                  {t.message}
                </label>

                <textarea
                  rows="6"
                  required
                  placeholder={t.writeYourMessage}
                  className="
                  w-full
                  rounded-3xl
                  border border-black/20
                  px-6 py-4
                  outline-none
                  resize-none
                  focus:border-black
                  transition
                  "
                  name="message"
                ></textarea>

              </div>

              {/* ROW 3 */}
              <div className="flex justify-center">

                <button
                  type="submit"
                  disabled={isSending}
                  className={`
                    bg-black text-white
                    px-10 py-4
                    rounded-full
                    text-lg font-medium
                    hover:bg-neutral-700 hover:shadow-lg hover:text-green-500 hover:duration-300
                    transition

                    ${isSending
                      ? "cursor-not-allowed opacity-60"
                      : "hover:bg-neutral-700 hover:shadow-lg hover:text-green-500"}
                  `}

                >
                  {isSending ? t.submitProcessing : t.submit}
                </button>

              </div>

            </form>
          </div>


        </div>

      </section >

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-stone-100 px-6 pt-4 pb-24"
      >

        {/* TOP ABOUT AREA */}
        <div
          className="
            max-w-7xl mx-auto
            grid grid-cols-1 md:grid-cols-2
            gap-16 items-center
          "
        >

          {/* LEFT SIDE - TEXT */}
          <div>

            <h2 className="text-5xl font-bold font-cormorant mb-8">
              {t.aboutTitle}
            </h2>

            <p className="text-lg leading-relaxed mb-6 text-neutral-700">
              {t.aboutParagraph1}
            </p>

            <p className="text-lg leading-relaxed text-neutral-700">
              {t.aboutParagraph2}
            </p>

          </div>

          {/* RIGHT SIDE - VERACRUZ IMAGE COLLAGE FIX: Images overlapping more for desktop */}
          <div
            className="
              relative
              flex flex-col items-center gap-8
              md:h-[500px]
              md:block
            "
          >

            {/* IMAGE 1 */}
            <img
              src="/veracruz-5.webp"
              alt="Veracruz mountainous view"
              className="
                w-full max-w-sm
                md:w-64 md:max-w-none
                rounded-3xl
                shadow-2xl
                object-cover
                transition duration-500
                hover:scale-105

                md:absolute
                md:rotate-[-8deg]
                md:left-4
                md:top-10
              "
            />

            {/* IMAGE 2 */}
            <img
              src="/veracruz-2.webp"
              alt="Veracruz coastline view"
              className="
                w-full max-w-sm
                md:w-64 md:max-w-none
                rounded-3xl
                shadow-2xl
                object-cover
                transition duration-500
                hover:scale-105

                md:absolute
                md:rotate-[6deg]
                md:right-4
                md:top-28
                md:z-10
              "
            />

            {/* IMAGE 3 */}
            <img
              src="/veracruz-4.webp"
              alt="Traditional Veracruz cultural view"
              className="
                w-full max-w-sm
                md:w-64 md:max-w-none
                rounded-3xl
                shadow-2xl
                object-cover
                transition duration-500
                hover:scale-105

                md:absolute
                md:rotate-[-4deg]
                md:bottom-0
                md:left-10
              "
            />
          </div>
        </div>

        {/* LOCATION AREA */}
        <div className="max-w-5xl mx-auto mt-28 text-center">

          <h3 className="text-4xl font-bold font-cormorant mb-6">
            {t.whereToFindUs}
          </h3>

          <p className="text-lg text-neutral-700 mb-10">
            {t.whereToFindUsSubtitle}
          </p>

          {/* GOOGLE MAP */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">

            <iframe
              title="El Taco Azteca Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22432.387410791667!2d-85.98489710499038!3d39.35042263433871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b72d99b65bef5%3A0x58631d41aa31a8d4!2sEdinburgh%2C%20IN%2046124!5e1!3m2!1sen!2sus!4v1779631073227!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </section>
      <footer className="bg-black text-white px-6 pt-8 pb-1">

        <div
          className="
            max-w-7xl mx-auto
            grid grid-cols-1 md:grid-cols-3
            gap-12
          "
        >

          {/* COMPANY INFO */}
          <div>

            <h3 className="text-3xl font-bold font-cormorant mb-4">
              El Taco Azteca
            </h3>

            <p className="text-white/70 leading-relaxed">
              {t.footerMessage}
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="text-xl font-semibold mb-4">
              {t.quickLinks}
            </h4>

            <div className="flex flex-col gap-3 text-white/70">

              <a href="#home" title={t.home} className="hover:text-white transition">
                {t.returnHome}
              </a>

              <a href="#menu" title={t.viewOurMenu} className="hover:text-white transition">
                {t.menu}
              </a>

              <a href="#contact" title={t.contactUs} className="hover:text-white transition">
                {t.contact}
              </a>

              <a href="#about" title={t.learnMore} className="hover:text-white transition">
                {t.about}
              </a>

            </div>

          </div>

          {/* CONTACT / SOCIAL */}
          <div>

            <h4 className="text-xl font-semibold mb-4">
              {t.findUs}
            </h4>

            <div className="text-white/70 space-y-3">

              <div className="flex gap-4 pt-2">

                <a
                  href="https://www.facebook.com/profile.php?id=100083234295445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 hover: transition"
                  title="Facebook"
                >
                  <img src="/facebook.png" alt="Facebook" className="h-18 w-12" />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            border-t border-white/10
            mt-12 pt-6
            text-center text-white/50 text-sm
            flex flex-col md:flex-row
            justify-between items-center
            gap-4
          "
        >

          <p>
            © {new Date().getFullYear()} El Taco Azteca. {t.footerCopyright}
          </p>

          <div className="flex gap-6">

            <Link
              to="/policy"
              className="hover:text-white transition"
            >
              {t.privacyPolicy}
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              {t.termsConditions}
            </Link>

          </div>

        </div>

      </footer>
    </div >
  )
}