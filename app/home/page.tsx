"use client";
import Nav from '../components/nav';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <section className="hero-section text-center py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Habit Tracker</h1>
          <p className="text-lg text-gray-600 mt-4">
            Join us on a transformative journey towards better health and well-being. Discover the tools and
            inspiration you need to succeed.
          </p>
          <div className="mt-6 flex flex-col items-center space-y-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Enter
            </button>
            <a href="/about" className="text-blue-600 hover:underline">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}