import myPic from "../assets/portfolio.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-1.5rem)] flex items-center bg-white dark:bg-gray-900 py-16"
    >
      <div className="container max-w-screen-xl  mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Text */}
        <div className="w-full flex-1 lg:w-1/2 text-center lg:text-left">
          <h2 className="font-(family-name:--font-sacramento) text-3xl sm:text-4xl  text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I’m <span className="font-semibold">James</span>, a creative Graphic
            Designer and frontend developer based in Nairobi. I specialize in
            bringing ideas to life through stunning visuals and functional,
            responsive websites.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Over the years, I’ve developed a strong passion for combining design
            and technology to solve real-world problems. Whether it’s designing
            a logo, building a modern website, or creating marketing material,
            my goal is always to deliver value and impact.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            When I’m not designing or coding, I love exploring new tools,
            learning modern technologies, and pushing myself to become one of
            the best designers and engineers in the world.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition"
          >
            Download Resume
          </a>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-1/2 flex-1 flex justify-center">
          <img
            src={myPic}
            alt="James - Graphic Designer"
            className="rounded-2xl shadow-lg w-72 sm:w-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
