import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gra-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Our Restaurant
          </h2>
          <p className="text-gray-600 mb-8">
            Browse our menu and place your order online
          </p>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </main>
  );
}
