export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export const starters: MenuItem[] = [
  {
    name: "Panini Poulet",
    description: "Grilled chicken panini served with fries",
    price: "45 DH"
  },
  {
    name: "Panini Viande Hachée",
    description: "Ground meat panini served with fries",
    price: "45 DH"
  },
  {
    name: "Panini Fruits de Mer",
    description: "Seafood panini served with fries",
    price: "65 DH"
  },
  {
    name: "Chawarma Poulet",
    description: "Chicken shawarma served with fries",
    price: "50 DH"
  },
  {
    name: "Tacos Poulet",
    description: "Chicken tacos served with fries",
    price: "40 DH"
  },
  {
    name: "Tacos Viande Hachée",
    description: "Ground meat tacos served with fries",
    price: "45 DH"
  },
  {
    name: "Tacos Mixt",
    description: "Mixed tacos served with fries",
    price: "50 DH"
  },
  {
    name: "Tacos Fruits de Mer",
    description: "Seafood tacos served with fries",
    price: "65 DH"
  }
];

export const mains: MenuItem[] = [
  // Pâtes
  {
    name: "Lasagne Bolognaise",
    description: "Classic Italian lasagna with Bolognese sauce",
    price: "55 DH"
  },
  {
    name: "Spaghetti Fruits de Mer",
    description: "Spaghetti with mixed seafood",
    price: "90 DH"
  },
  {
    name: "Spaghetti Bolognaise",
    description: "Traditional spaghetti with Bolognese sauce",
    price: "60 DH"
  },
  {
    name: "Tagliatelle Fruits de Mer",
    description: "Tagliatelle pasta with mixed seafood",
    price: "90 DH"
  },
  // Pizzas
  {
    name: "Pizza Margarita",
    description: "Sauce tomate, Mozzarella, Origan, Olive noire",
    price: "M: 40dh / G: 55dh"
  },
  {
    name: "Pizza Napolitaine",
    description: "Sauce tomate, Mozzarella, Anchois, Origan, Olive noire",
    price: "M: 50dh / G: 65dh"
  },
  {
    name: "Pizza Bolognaise",
    description: "Sauce tomate, Mozzarella, Viande hachée, Champignon, Origan, Olive noire",
    price: "M: 50dh / G: 70dh"
  },
  {
    name: "Pizza Marinera",
    description: "Sauce tomate, Mozzarella, Calamar, Crevette, Champignon, Origan, Olive noire",
    price: "M: 65dh / G: 85dh"
  },
  {
    name: "Pizza Royal",
    description: "Sauce tomate, Mozzarella, Crevette, Calamar, Champignon, Thon, Poivron, Origan, Olive noire",
    price: "M: 70dh / G: 90dh"
  },
  // Volailles
  {
    name: "Filet Poulet Grillé",
    description: "Grilled chicken fillet",
    price: "65 DH"
  },
  {
    name: "Filet Poulet à la crème",
    description: "Chicken fillet with cream sauce",
    price: "75 DH"
  },
  {
    name: "Brochettes de Poulet",
    description: "Chicken skewers",
    price: "55 DH"
  },
  // Viandes
  {
    name: "Entrecôte Grillé",
    description: "Grilled ribeye steak",
    price: "90 DH"
  },
  {
    name: "Entrecôte au Poivre",
    description: "Ribeye steak with pepper sauce",
    price: "110 DH"
  },
  {
    name: "Filet de Boeuf Grillé",
    description: "Grilled beef fillet",
    price: "130 DH"
  },
  {
    name: "Filet de Boeuf aux champignons",
    description: "Beef fillet with mushroom sauce",
    price: "150 DH"
  },
  {
    name: "Tajine viande de Boeuf",
    description: "Traditional Moroccan beef tagine",
    price: "80 DH"
  },
  {
    name: "Couscous aux sept légumes",
    description: "Traditional couscous with seven vegetables (Every Friday)",
    price: "60 DH"
  },
  // Hamburgers
  {
    name: "Hamburger",
    description: "Classic hamburger served with fries",
    price: "45 DH"
  },
  {
    name: "Double Burger",
    description: "Double patty burger served with fries",
    price: "55 DH"
  },
  {
    name: "Chicken Burger",
    description: "Grilled chicken burger served with fries",
    price: "45 DH"
  },
  {
    name: "Cheese Burger",
    description: "Hamburger with cheese served with fries",
    price: "45 DH"
  }
];

export const desserts: MenuItem[] = [
  {
    name: "Flan Turon",
    description: "Traditional turron flan",
    price: "30 DH"
  },
  {
    name: "Flan Blanc",
    description: "Classic white flan",
    price: "30 DH"
  },
  {
    name: "Crème Caramel",
    description: "Traditional crème caramel dessert",
    price: "25 DH"
  },
  {
    name: "Tarte Citron",
    description: "Fresh lemon tart",
    price: "30 DH"
  },
  {
    name: "Tarte Oreo",
    description: "Oreo cookie tart",
    price: "30 DH"
  },
  {
    name: "Salade de Fruits",
    description: "Fresh fruit salad",
    price: "30 DH"
  },
  {
    name: "Fruits de Saison",
    description: "Seasonal fresh fruits",
    price: "40 DH"
  },
  {
    name: "Nougat Glacé au miel",
    description: "Honey nougat ice cream",
    price: "35 DH"
  },
  {
    name: "Natillas",
    description: "Traditional Spanish custard",
    price: "25 DH"
  },
  {
    name: "Häagen-Dazs",
    description: "Premium ice cream selection",
    price: "35 DH"
  }
];

export const beverages: MenuItem[] = [
  {
    name: "Jus D'orange",
    description: "Fresh Orange Juice",
    price: "23 DH"
  },
  {
    name: "Jus de Citron",
    description: "Fresh Lemon Juice",
    price: "20 DH"
  },
  {
    name: "Jus de Fraise et Jus d'Avocat",
    description: "Fresh Strawberry and Avocado Juices",
    price: "25 DH"
  },
  {
    name: "Jus d'Ananas et Jus de Mangue",
    description: "Fresh Pineapple and Mango Juices",
    price: "28 DH"
  },
  {
    name: "Jus Panaché",
    description: "Fresh Panaché Juice",
    price: "30 DH"
  },
  {
    name: "Jus Dragon et Jus Framboise",
    description: "Fresh Dragon and Rasbperry Juices",
    price: "35 DH"
  },
  {
    name: "Mojito",
    description: "Fresh Mojito",
    price: "25 DH"
  }
];
