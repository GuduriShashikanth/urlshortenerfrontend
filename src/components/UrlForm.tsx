import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";

export default function UrlForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const backendUrl = "https://urlshortenerbackend-4ck6.onrender.com";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShortUrl("");
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/shorten`, { originalUrl: url });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert("Error creating short URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-6 md:mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4"
      >
        <input
          type="text"
          placeholder="Enter your URL"
          value={url}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
          className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 text-black"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading || !url.trim()}
          className={`flex items-center justify-center gap-2 bg-rose-400 text-black font-bold px-8 py-3 rounded-lg transition font-semibold ${
            loading
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-rose-500 hover:scale-105 active:scale-95"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                ></path>
              </svg>
              <span>Shortening...</span>
            </>
          ) : (
            "Shorten"
          )}
        </button>
      </form>

      {loading && (
        <div className="mt-6 text-center animate-pulse text-gray-600 font-medium">
          Generating your short link, please wait...
        </div>
      )}

      {shortUrl && !loading && (
        <div className="mt-6 text-center">
          <p className="text-gray-700 mb-1">Your short URL:</p>
          <a
            href={`/${shortUrl}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-semibold hover:underline break-all"
          >
            {`${window.location.origin}/${shortUrl}`}
          </a>
        </div>
      )}
    </div>
  );
}
