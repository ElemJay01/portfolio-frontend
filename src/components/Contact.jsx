import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4kmkrhg", // EmailJS Service ID
        "template_06idn0f", // EmailJS Template ID
        e.target,
        "gCQUh05OHj0YRB0fi" // EmailJS Public Key
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          e.target.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (err) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contact" className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-(family-name:--font-sacramento) mb-4">
          Let’s Work Together
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Have a project in mind? Let’s connect. I’d love to hear from you.
          Whether it’s design, collaboration, or just to say hi, feel free to
          reach out.
        </p>

        {/* Email */}
        <div className="mb-8 flex flex-col sm:flex-row sm:justify-center sm:gap-6 space-y-2 sm:space-y-0">
          <a
            href="mailto:youremail@example.com"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            lm89james@gmail.com
          </a>
          <a
            href="tel:+254798364620"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            +254 798 364 620
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-5 mb-12 text-xl text-gray-600 dark:text-gray-300">
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

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto text-left space-y-4"
        >
          {/* Name, Email, Message fields here */}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 dark:text-gray-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 dark:text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 "
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Success / Error messages */}
        {success && (
          <div className="mt-6 text-green-600 dark:text-green-400 font-medium">
            ✅ Message sent successfully!
          </div>
        )}
        {error && (
          <div className="mt-6 text-red-600 dark:text-red-400 font-medium">
            ❌ Something went wrong, please try again.
          </div>
        )}
      </div>
    </section>
  );
}
