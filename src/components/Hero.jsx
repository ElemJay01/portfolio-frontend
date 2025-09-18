import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-1.5rem)] flex flex-col items-center justify-center text-center px-4 
             bg-gradient-to-br from-gray-100 via-white to-gray-200
             dark:from-gray-900 dark:via-gray-950 dark:to-black
             text-black dark:text-white transition-colors duration-500"
    >
      <h1 className="font-(family-name:--font-sacramento)  text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
        Hello, I’m James
      </h1>
      <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
        Graphic Designer
      </h2>
      <p className="mt-6 max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-400">
        I craft visually stunning designs that communicate your brand’s
        personality and connect with your audience. From sleek layouts to bold
        creative concepts, my work blends creativity with strategy to help your
        business stand out.
      </p>
      <div className="mt-12 flex justify-center gap-5 mb-12 text-xl text-gray-600 dark:text-gray-300">
        <a
          href="https://wa.me/254798364620"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaBehance />
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaDribbble />
        </a>
      </div>
    </section>
  );
}
