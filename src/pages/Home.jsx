import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [activeItem, setActiveItem] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Tacos",
      image: "/tacos.webp",
      description: "Your choice of meat, onions, and cilantro. Served with a side of cucumber and radish slices, lime, and salsa."
    },
    {
      title: "Hardshell Tacos",
      image: "/hardshell-tacos.webp",
      description: "Your choice of meat, lettuce, cheese, tomatoes, and sour cream. Served with a side of cucumber slices, lime, and salsa."
    },
    {
      title: "Burritos",
      image: "/burritos.webp",
      description: "Your choice of meat, lettuce, mozarella cheese, tomatoes, rice, beans, and sour cream. Served with a side of salsa."
    },
    {
      title: "Empanadas",
      image: "/empanadas.webp",
      description: "Crispy fried and chicken-filled, lettuce, tomatoes, Mexican cheese, and sour cream. Served with a side of salsa."
    },
    {
      title: "Nachos",
      image: "/nachos.webp",
      description: "Your choice of meat, nacho cheese, lettuce, tomatoes, and sour cream."
    },
    {
      title: "Quesadillas",
      image: "/quesadillas.webp",
      description: "Your choice of meat and mozarella. Served with a side of salad."
    },
    {
      title: "Walking Tacos",
      image: "/walking-taco.webp",
      description: "Your choice of meat, lettuce, cheese, tomatoes, and sour cream."
    },
    {
      title: "Prepared Corn",
      image: "/corn.webp",
      description: "Corn on the cob slathered in mayo, sprinkled with Mexican cheese and tajin powder."
    },
    {
      title: "Crazy Corn",
      image: "/crazy-corn.webp",
      description: "Corn topped with mayo, sprinkled with Mexican cheese and tajin powder."
    },
    {
      title: "Fruit Cocktails",
      image: "/fruit-cocktail.webp",
      description: "Fresh fruit topped with chamoy sauce, tajin powder, and a lime wedge."
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
          <a href="#home" title="Home">
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </a>

          {/* RIGHT SIDE - NAV LINKS */}
          <div className="flex gap-8 text-lg font-medium text-white">

            <a
              href="#menu"
              className="hover:text-green-500 transition"
              title="View Our Menu"
            >
              Menu
            </a>

            <a
              href="#contact"
              className="hover:text-green-500 transition"
              title="Contact Us"
            >
              Contact
            </a>

            <a
              href="#about"
              className="hover:text-green-500 transition"
              title="Learn More"
            >
              About Us
            </a>

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
            El Taco Azteca
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-xl opacity-0 animate-fadeInDelay">
            Authentic Mexican Street Food
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
            Our Menu
          </h2>
        </div>

        {/* MENU GRID */}
        <div className="py-20 px-8 bg-white">
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
                  {item.title === "Fruit Cocktails" && (
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
                      NEW!
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
              Contact Us
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl">
              Have questions, catering inquiries, or feedback?
              We'd love to hear from you.
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
                    Full Name
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
                    Email
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
                  Message
                </label>

                <textarea
                  rows="6"
                  required
                  placeholder="Write your message here..."
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
                  {isSending ? "Sending..." : "SUBMIT"}
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
              Our Story
            </h2>

            <p className="text-lg leading-relaxed mb-6 text-neutral-700">
              El Taco Azteca was inspired by the bold flavors
              and street food traditions of Veracruz, Mexico.
              Our mission is to bring authentic Mexican street food
              to our community while honoring the culture and recipes
              that shaped our roots.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700">
              Every dish is prepared with passion, fresh ingredients,
              and the goal of creating an experience that feels
              authentic, welcoming, and unforgettable.
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
              alt="Veracruz"
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
              alt="Veracruz"
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
              alt="Veracruz"
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
            Where To Find Us
          </h3>

          <p className="text-lg text-neutral-700 mb-10">
            Currently located in Edinburgh, Indiana. Check us out at local events and festivals, or book us for your next party or catering event!
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
              Authentic Veracruz-style Mexican street food
              made with passion, culture, and fresh ingredients.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h4 className="text-xl font-semibold mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-white/70">

              <a href="#home" title="Home" className="hover:text-white transition">
                Home
              </a>

              <a href="#menu" title="View Our Menu" className="hover:text-white transition">
                Menu
              </a>

              <a href="#contact" title="Contact Us" className="hover:text-white transition">
                Contact
              </a>

              <a href="#about" title="Learn More" className="hover:text-white transition">
                About Us
              </a>

            </div>

          </div>

          {/* CONTACT / SOCIAL */}
          <div>

            <h4 className="text-xl font-semibold mb-4">
              Find Us
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
            © {new Date().getFullYear()} El Taco Azteca. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </footer>
    </div >
  )
}