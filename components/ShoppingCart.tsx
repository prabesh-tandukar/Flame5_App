// components/ShoppingCart.tsx
import { CartItem } from "../libs/types";

interface ShoppingCartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, newQuantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function ShoppingCart({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: ShoppingCartProps) {
  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        🛒 Your Cart ({cartItems.length} items)
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
          <p className="text-sm text-gray-400 mt-2">
            Add some delicious items!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-3 border-b"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{item.image}</span>
                <div>
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <p className="text-gray-600 text-xs">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Decrease quantity */}
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                {/* Quantity display */}
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>

                {/* Increase quantity */}
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
                >
                  +
                </button>

                {/* Remove item */}
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="w-8 h-8 rounded-full bg-red-200 hover:bg-red-300 flex items-center justify-center text-sm text-red-600"
                  title="Remove item"
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-green-600">${total.toFixed(2)}</span>
            </div>

            <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
