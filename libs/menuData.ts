// lib/menuData.ts
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Flame Burger Deluxe",
    description:
      "Our signature burger with flame-grilled beef, special sauce, and crispy onions",
    price: 14.99,
    image: "🍔",
    category: "Burgers",
    available: true,
  },
  {
    id: 2,
    name: "Spicy Fire Wings",
    description:
      "Buffalo wings with our secret flame spice blend, served with blue cheese",
    price: 12.99,
    image: "🔥",
    category: "Appetizers",
    available: true,
  },
  {
    id: 3,
    name: "Blazing Pizza",
    description:
      "Wood-fired pizza with pepperoni, jalapeños, and hot honey drizzle",
    price: 16.99,
    image: "🍕",
    category: "Pizza",
    available: true,
  },
  {
    id: 4,
    name: "Flame Caesar Salad",
    description:
      "Fresh romaine with grilled chicken, parmesan, and smoky caesar dressing",
    price: 11.99,
    image: "🥗",
    category: "Salads",
    available: true,
  },
  {
    id: 5,
    name: "Molten Chocolate Cake",
    description:
      "Warm chocolate cake with liquid center, served with vanilla ice cream",
    price: 8.99,
    image: "🍰",
    category: "Desserts",
    available: false,
  },
];
