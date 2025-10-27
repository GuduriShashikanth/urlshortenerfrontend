import UrlForm from "../components/UrlForm";

export default function Home() {
  return (
    <section className="text-center w-full bg-white py-10">
      <h1 className="text-4xl md:text-5xl  font-extrabold mb-4 text-gray-900">
        Simplify Your Links
      </h1>
      <p className="text-gray-600 mb-8 text-base md:text-lg max-w-2xl mx-auto">
        Paste your long URL below and get a short, shareable link instantly.
      </p>
      <UrlForm />
    </section>
  );
}
