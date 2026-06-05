export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-600 max-w-lg mb-8">
        Have a project in mind? Let's talk about it. Send me a message and I'll get back to you.
      </p>
      <form className="w-full max-w-lg space-y-4" onSubmit={(e: any) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
        />
        <button
          type="submit"
          className="w-full bg-brand text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
