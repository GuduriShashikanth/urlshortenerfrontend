export default function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full bg-white py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        About Shorttt
      </h1>
      <p className="text-gray-700 max-w-2xl mb-6">
        <strong>Shorttt</strong> is a free and simple URL shortener that helps you
        turn long, messy links into short, clean ones. Whether you’re sharing on
        social media, in an email, or with friends — Shorttt makes it quick and easy.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">How to Use:</h2>
      <ul className="text-gray-700 text-left list-disc max-w-md mx-auto">
        <li>Paste your long URL in the input field on the Home page.</li>
        <li>Click <strong>"Shorten"</strong> to generate your short link.</li>
        <li>Copy and share it — anyone visiting the short link will be redirected to your original URL.</li>
      </ul>
    </section>
  );
}
