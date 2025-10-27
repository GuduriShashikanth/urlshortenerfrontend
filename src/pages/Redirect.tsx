import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Redirect() {
  const { shortUrl } = useParams<{ shortUrl: string }>();
  const backendUrl = "https://urlshortenerbackend-4ck6.onrender.com";

  useEffect(() => {
    if (shortUrl) {
      window.location.href = `${backendUrl}/${shortUrl}`;
    }
  }, [shortUrl]);

  return (
    <div className="flex items-center justify-center min-h-screen text-lg text-gray-700">
      Redirecting...
    </div>
  );
}
