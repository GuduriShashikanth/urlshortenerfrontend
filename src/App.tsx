import { useState, type ChangeEvent, type FormEvent } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = "https://urlshortenerbackend-4ck6.onrender.com";

function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) return alert("Please enter a URL");

    try {
      const res = await axios.post(`${BACKEND_URL}/shorten`, { originalUrl: url });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert("Error creating short URL");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your URL"
          value={url}
          onChange={handleChange}
          style={{ width: "300px", padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}>
          Shorten
        </button>
      </form>

      {shortUrl && (
        <div style={{ marginTop: "1rem" }}>
          Short URL:{" "}
          <a href={`/${shortUrl}`} target="_blank" rel="noreferrer">
            {`${window.location.origin}/${shortUrl}`}
          </a>
        </div>
      )}
    </div>
  );
}

function Redirect() {
  const { shortUrl } = useParams<{ shortUrl: string }>();

  if (shortUrl) {
    // Redirect user to the backend endpoint
    window.location.href = `${BACKEND_URL}/${shortUrl}`;
  }

  return <p>Redirecting...</p>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortUrl" element={<Redirect />} />
      </Routes>
    </Router>
  );
}
