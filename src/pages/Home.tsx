export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        alt="Saad"
        className="w-48 h-48 rounded-full object-cover border-4 border-brand shadow-lg mb-6"
      />
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Saad</h1>
      <p className="text-xl text-gray-600 max-w-md">
        Full-stack developer passionate about building beautiful and functional web experiences.
      </p>
    </section>
  );
}
