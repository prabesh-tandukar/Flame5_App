import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import { menuItems } from "../libs/menuData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gra-50">
      {/* Header */}
      <Header />

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 mb-8">
            Flame-grilled perfection in every bite
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems
            .filter((item) => item.available)
            .map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
