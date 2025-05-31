//components/MenuItem.tsx
interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function MenuItem({
  name,
  description,
  price,
  image,
  category,
}: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-4xl">{image}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <span className="text-lg font-bold text-green-600">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {category}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 tranisition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
