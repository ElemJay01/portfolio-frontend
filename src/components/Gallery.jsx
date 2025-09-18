import { useState, useEffect, useCallback } from "react";
import Spinner from "./Spinner";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fullLoading, setFullLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/images`);
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [API_URL]);

  const visibleImages = showAll ? images : images.slice(0, 9);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setFullLoading(true);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    // setFullLoading(false);
  };

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
    setFullLoading(true);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    setFullLoading(true);
  }, [images.length]);

  // handle keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-10 px-6">
      <div className="container max-w-7xl mx-auto min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] px-6 lg:px-20 flex flex-col items-center ">
        <h2 className="text-3xl font-(family-name:--font-sacramento) text-start self-start mb-10">
          Gallery
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-left self-start mb-10 max-w-2xl">
          Here is a showcase of selected projects I’ve worked on. Each piece
          reflects my creativity, attention to detail, and passion for building
          designs that not only look great but also work seamlessly.
        </p>
        {/* Grid of images */}
        {loading || images.length < 1 ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {visibleImages.map((image, index) => (
                <img
                  key={index}
                  src={image.thumbnailUrl}
                  alt={`Gallery ${index}`}
                  className="w-full h-90 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>

            {/* Toggle button */}
            {images.length > 9 && (
              <div className="text-center mt-6">
                <button
                  onClick={() => {
                    setShowAll(!showAll);
                    if (showAll) {
                      // scroll smoothly back to gallery top after collapsing
                      document
                        .getElementById("gallery")
                        .scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {showAll ? "Show Less" : "Load More"}
                </button>
              </div>
            )}
          </>
        )}
        {/* Lightbox */}

        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 
             z-50 bg-black/50 hover:bg-black/70 
             text-white p-2 rounded-full"
            >
              &#10094;
            </button>

            <div className="relative flex items-center justify-center max-w-5xl max-h-[80vh] w-full h-full">
              {fullLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Spinner />
                </div>
              )}
              <img
                src={images[lightboxIndex].fullUrl}
                alt="Enlarged"
                onLoad={() => setFullLoading(false)}
                className={`max-w-full max-h-full rounded-lg shadow-lg transition-opacity duration-500 ${
                  fullLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 
             z-50 bg-black/50 hover:bg-black/70 
             text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
