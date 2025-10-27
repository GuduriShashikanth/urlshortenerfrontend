interface ShortUrlDisplayProps {
  shortUrl: string;
}

export default function ShortUrlDisplay({ shortUrl }: ShortUrlDisplayProps) {
  const fullUrl = `${window.location.origin}/${shortUrl}`;
  return (
    <div className="mt-6 bg-gray-100 px-6 py-4 rounded-lg shadow-md text-center">
      <p className="text-lg font-medium">
        Short URL:{" "}
        <a
          href={`/${shortUrl}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline break-all"
        >
          {fullUrl}
        </a>
      </p>
    </div>
  );
}
